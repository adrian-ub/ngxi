import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCamera1Icon],svg[lineicons-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 7.002a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="M9.994 2.75a2.25 2.25 0 0 0-1.803.904l-.594.795a.75.75 0 0 1-.6.301H4.25A2.25 2.25 0 0 0 2 7v10.25a2.25 2.25 0 0 0 2.25 2.25h15.5A2.25 2.25 0 0 0 22 17.25V7a2.25 2.25 0 0 0-2.25-2.25h-2.747a.75.75 0 0 1-.6-.301l-.594-.795a2.25 2.25 0 0 0-1.803-.904zm-.601 1.801a.75.75 0 0 1 .6-.301h4.013a.75.75 0 0 1 .601.301l.594.795a2.25 2.25 0 0 0 1.802.904h2.747a.75.75 0 0 1 .75.75v10.25a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75h2.746A2.25 2.25 0 0 0 8.8 5.346z"></svg:path></svg:g>`,
})
export class LineiconsCamera1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
