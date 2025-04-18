import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiEraserIcon],svg[hugeicons-ai-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.738 10.78l-3.891 3.977c-1.17 1.196-1.755 1.794-1.834 2.523q-.026.232 0 .464c.08.73.664 1.327 1.834 2.523l.149.152c.624.639.937.958 1.31 1.172q.328.188.689.291c.413.118.856.118 1.743.118c.886 0 1.33 0 1.743-.118q.361-.104.688-.29c.374-.215.686-.534 1.31-1.173l2.845-2.907M9.738 10.78l3.582-3.657C14.706 5.708 15.4 5 16.263 5s1.555.708 2.941 2.125l.743.76C21.316 9.283 22 9.983 22 10.85s-.685 1.566-2.054 2.964l-3.622 3.698M9.738 10.78l6.586 6.732M5.5 2l.258.697c.338.914.507 1.371.84 1.704c.334.334.791.503 1.705.841L9 5.5l-.697.258c-.914.338-1.371.507-1.704.84c-.334.334-.503.791-.841 1.705L5.5 9l-.258-.697c-.338-.914-.507-1.371-.84-1.704c-.334-.334-.791-.503-1.705-.841L2 5.5l.697-.258c.914-.338 1.371-.507 1.704-.84c.334-.334.503-.791.841-1.705z" color="currentColor"></svg:path>`,
})
export class HugeiconsAiEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
