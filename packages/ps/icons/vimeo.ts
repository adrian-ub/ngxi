import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psVimeoIcon],svg[ps-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395 0q-96-3-130 108q17-7 34-7q35 0 31 39q-1 22-31 70q-29 46-43 46q-19 0-34-71q-5-18-19-106q-12-79-66-73q-22 1-68 41q-11 10-33.5 30T2 107l21 28q33-22 36-22q24 0 45 75q6 23 18.5 68.5T141 325q29 75 68 75q66 0 159-123q91-116 94-184q5-90-67-93"></svg:path>`,
})
export class PsVimeoIcon {
  readonly viewBox = input("0 0 464 456")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
