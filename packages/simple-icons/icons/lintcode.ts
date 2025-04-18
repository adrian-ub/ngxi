import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLintcodeIcon],svg[simple-icons-lintcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.11 0L5.064 10.467l4.797 6.142l1.322-2.289l-3.149-4.032l4.722-8.184zm3.029 7.391L12.817 9.68l3.148 4.032l-4.721 8.184q.82 1.054 1.646 2.104l6.045-10.469z"></svg:path>`,
})
export class SimpleIconsLintcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
