import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteExchangeDollarFillIcon],svg[mingcute-exchange-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="m3.99 10.746l2.678 1.804c1.464.986.487 3.268-1.237 2.89l-.108-.024a7.504 7.504 0 0 0 13.175.335a1.5 1.5 0 0 1 2.599 1.498c-2.317 4.019-7.119 6.152-11.815 4.893a10.5 10.5 0 0 1-7.784-10.06c-.01-1.314 1.45-2.04 2.492-1.337M12 6a1 1 0 0 1 .993.883L13 7v1h2a1 1 0 0 1 .117 1.993L15 10h-5a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 0 1 .164 4.995L14 16h-1v1a1 1 0 0 1-1.993.117L11 17v-1H9a1 1 0 0 1-.117-1.993L9 14h5a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 0 1-.164-4.995L10 8h1V7a1 1 0 0 1 1-1m2.718-4.142a10.5 10.5 0 0 1 7.784 10.06c.01 1.314-1.449 2.04-2.492 1.337l-2.678-1.805c-1.463-.986-.487-3.268 1.237-2.89l.109.024A7.504 7.504 0 0 0 5.504 8.25a1.5 1.5 0 1 1-2.6-1.498C5.22 2.732 10.022.6 14.718 1.858"></svg:path></svg:g>`,
})
export class MingcuteExchangeDollarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
