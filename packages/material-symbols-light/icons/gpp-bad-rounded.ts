import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGppBadRoundedIcon],svg[material-symbols-light-gpp-bad-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.63l1.746 1.747q.14.14.344.15t.364-.15t.16-.354t-.16-.354l-1.746-1.746l1.746-1.746q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16L12 11.216l-1.746-1.747q-.14-.14-.344-.15t-.364.15t-.16.354t.16.354l1.746 1.746l-1.746 1.746q-.14.14-.15.344t.15.364t.354.16t.354-.16zm0 8.212q-.136 0-.287-.025t-.28-.075Q8.48 19.617 6.74 16.926T5 11.1V6.817q0-.51.295-.923t.755-.6l5.385-2q.292-.106.565-.106t.566.106l5.384 2q.46.187.755.6t.295.923V11.1q0 3.135-1.74 5.826t-4.693 3.816q-.13.05-.28.075t-.287.025"></svg:path>`,
})
export class MaterialSymbolsLightGppBadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
