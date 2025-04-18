import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPianoIcon],svg[ps-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0H43Q25 0 12.5 12.5T0 43v277q0 17 12.5 30T43 363h426q18 0 30.5-13t12.5-30V43q0-18-12.5-30.5T469 0M43 43h426v85H43zm0 277V171h42v149zm64 0v-43h21V171h21v149zm64 0v-43h21V171h21v149zm64 0V171h42v149zm64 0v-43h21V171h21v149zm64 0v-43h21V171h21v149zm64 0v-43h21V171h21v149zm21-235q0 9-6.5 15.5T427 107q-9 0-15.5-6.5T405 85q0-8 6.5-14.5T427 64q8 0 14.5 6.5T448 85m-64 0q0 9-6.5 15.5T363 107q-9 0-15.5-6.5T341 85q0-8 6.5-14.5T363 64q8 0 14.5 6.5T384 85M64 64h43v43H64zm64 0h128v21H128z"></svg:path>`,
})
export class PsPianoIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
