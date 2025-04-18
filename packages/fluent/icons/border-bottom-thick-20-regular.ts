import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderBottomThick20RegularIcon],svg[fluent-border-bottom-thick-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75m.711 11.751l.039-.001h2.5l.039.001H14a1.5 1.5 0 0 0 1.426-1.032l.003-.01a.75.75 0 0 1 1.382.585h.003A3 3 0 0 1 14 17.001H6c-1.29 0-2.39-.814-2.814-1.957h.005a.75.75 0 1 1 1.413-.492A1.5 1.5 0 0 0 6 15.5zM4.604 5.449a1.5 1.5 0 0 1 .939-.878a.75.75 0 0 0-.586-1.38v-.005a3 3 0 0 0-1.77 1.77h.004a.75.75 0 1 0 1.413.493m9.944-.846c.387.151.696.46.85.846q.012.048.032.094a.75.75 0 0 0 1.38-.586h.005a3 3 0 0 0-1.77-1.77v.004a.75.75 0 1 0-.497 1.412M3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class FluentBorderBottomThick20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
