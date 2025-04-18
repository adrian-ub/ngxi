import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidXiaoduIcon],svg[icon-park-solid-xiaodu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSXiaodu0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4.143 21.08c.355-3.786.533-5.68 2.513-7.705s4.16-2.28 8.517-2.788C18.003 10.257 21.131 10 24 10c2.87 0 5.996.257 8.827.587c4.358.508 6.537.763 8.517 2.788s2.158 3.919 2.513 7.706c.09.955.143 1.937.143 2.919s-.054 1.964-.143 2.92c-.355 3.786-.533 5.68-2.513 7.705s-4.16 2.28-8.517 2.788c-2.83.33-5.957.587-8.827.587s-5.996-.257-8.827-.587c-4.358-.508-6.537-.763-8.517-2.788s-2.158-3.919-2.513-7.706A31 31 0 0 1 4 24c0-.982.054-1.964.143-2.92"></svg:path><svg:path stroke="#000" d="M16 19v10m17-10l-5 5l5 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSXiaodu0)"></svg:path>`,
})
export class IconParkSolidXiaoduIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
