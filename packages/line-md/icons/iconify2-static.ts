import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdIconify2StaticIcon],svg[line-md-iconify2-static-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdIconify2Static0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-width="1.5" d="M3.25 22.25h17.5"></svg:path><svg:path d="M7 3v3M5 8v11h14v-11"></svg:path><svg:path stroke="#000" stroke-width="4" d="M12 16v4.5M12 3l8.5 5.5"></svg:path><svg:path d="M12 3l8.5 5.5"></svg:path><svg:path stroke="#000" stroke-width="4" d="M12 3l-8.5 5.5"></svg:path><svg:path d="M12 3l-8.5 5.5M12 11.5v9"></svg:path></svg:g><svg:circle cx="12" cy="11.5" r="3.5"></svg:circle><svg:circle cx="12" cy="11.5" r="1.5" fill="#fff"></svg:circle></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdIconify2Static0)"></svg:rect>`,
})
export class LineMdIconify2StaticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
