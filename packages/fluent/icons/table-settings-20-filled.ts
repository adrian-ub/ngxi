import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSettings20FilledIcon],svg[fluent-table-settings-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9.6a5.5 5.5 0 0 0-2.5-.6a5.5 5.5 0 0 0-1.5.207V8h4zM9.207 13A5.5 5.5 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H8v-4zM12 9.6A5.52 5.52 0 0 0 9.6 12H8V8h4zM7 8v4H3V8zm0 5H3v1.5A2.5 2.5 0 0 0 5.5 17H7zm10-6h-4V3h1.5A2.5 2.5 0 0 1 17 5.5zm-5 0V3H8v4zM7 7V3H5.5A2.5 2.5 0 0 0 3 5.5V7zm5.065 4.442a2 2 0 0 1-1.43 2.478l-.462.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423q.388.306.835.517l.325-.344a2 2 0 0 1 2.91.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.46-.118a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zm2.434 4.058a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentTableSettings20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
