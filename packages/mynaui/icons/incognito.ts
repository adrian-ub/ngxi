import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiIncognitoIcon],svg[mynaui-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M3 10.412h18m-16-.189l.614-2.6c.545-2.31.818-3.466 1.632-4.139c.545-.45.81.073 1.601.468c1.004.502 2.177.103 3.186-.39c1.008-.494 2.973-.755 4.036-.393c.976.334.983.762 1.391 1.71c.733 1.703 1.114 3.54 1.54 5.344M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m0-1.206l.658-.349a2.85 2.85 0 0 1 2.684 0l.658.349"></svg:path>`,
})
export class MynauiIncognitoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
