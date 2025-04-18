import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7TextJustifyrightIcon],svg[f7-text-justifyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.168 11.36h43.64c1.008 0 1.805-.774 1.805-1.782c0-.984-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.774-1.781 1.758a1.75 1.75 0 0 0 1.78 1.781m0 12.28h43.64c1.008 0 1.805-.773 1.805-1.78c0-.985-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.773-1.781 1.757c0 1.008.773 1.782 1.78 1.782m0 12.282h43.64a1.786 1.786 0 0 0 1.805-1.781c0-.985-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.773-1.781 1.758c0 .984.773 1.78 1.78 1.78M24.754 48.18h25.055c1.008 0 1.804-.774 1.804-1.758s-.797-1.781-1.804-1.781H24.754a1.76 1.76 0 0 0-1.758 1.78a1.74 1.74 0 0 0 1.758 1.759"></svg:path>`,
})
export class F7TextJustifyrightIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
