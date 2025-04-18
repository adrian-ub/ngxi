import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBacteriaIcon],svg[hugeicons-bacteria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="15" cy="8" r="2"></svg:circle><svg:path d="m6 12.5l.21.235c.388.436 1.044.317 1.29-.235s.902-.671 1.29-.235L9 12.5m6.841 5.5l.111-.345c.206-.641-.278-1.228-.952-1.155s-1.158-.514-.952-1.155l.11-.345m4.851-2H19m-9.991 4H9m-.991-9H8"></svg:path></svg:g>`,
})
export class HugeiconsBacteriaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
