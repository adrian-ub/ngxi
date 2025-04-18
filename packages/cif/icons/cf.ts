import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCfIcon],svg[cif-cf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#003082" d="M.5.5h300v50H.5z"></svg:path><svg:path fill="#FFF" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#289728" d="M.5 100.5h300v50H.5z"></svg:path><svg:path fill="#FFCE00" d="M.5 150.5h300v50H.5z"></svg:path><svg:path fill="#D21034" d="M125.5.5h50v200h-50z"></svg:path><svg:path fill="#FFCE00" d="m50.5 5.148l5.052 15.548h16.347l-13.226 9.608l5.053 15.548L50.5 36.243l-13.225 9.609l5.051-15.548l-13.225-9.608h16.348z"></svg:path></svg:g>`,
})
export class CifCfIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
