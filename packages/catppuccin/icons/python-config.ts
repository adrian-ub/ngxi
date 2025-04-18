import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPythonConfigIcon],svg[catppuccin-python-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="M6.961 4.192h-2.77m5.54 0V1.884C9.73 1.146 9.083.5 8.345.5h-2.77c-.738 0-1.384.646-1.384 1.384v2.308H1.884C1.146 4.192.5 4.838.5 5.577v1.846c0 .738.646 1.384 1.366 1.384"></svg:path><svg:path stroke="#eed49f" d="M8.115 8.807H6.038m-2.77 0v2.308c0 .739.647 1.385 1.385 1.385h1.385m6.35-4.55c.071-.164.112-.343.112-.527V5.577c0-.739-.646-1.385-1.366-1.385H9.73c0 1.385 0 1.846-.923 1.846H6.961"></svg:path><svg:path stroke="#8aadf4" d="M1.866 8.807h1.403c0-1.384 0-1.846.923-1.846h1.846m0-4.615"></svg:path></svg:g>`,
})
export class CatppuccinPythonConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
