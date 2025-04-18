import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifIsIcon],svg[cif-is-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#003897" d="M.5.5h300v216H.5"></svg:path><svg:path fill="#FFF" d="M84.5.5h48v216h-48m-84-132h300v48H.5"></svg:path><svg:path fill="#D72828" d="M96.5.5h24v216h-24m-96-120h300v24H.5"></svg:path></svg:g>`,
})
export class CifIsIcon {
  readonly viewBox = input("0 0 301 217")
  readonly width = input("1.39em")
  readonly height = input("1em")
}
