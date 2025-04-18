import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrophone1Icon],svg[lineicons-microphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a4.75 4.75 0 0 0-4.75 4.75v4.5a4.75 4.75 0 1 0 9.5 0v-4.5A4.75 4.75 0 0 0 12 2M8.75 6.75a3.25 3.25 0 1 1 6.5 0v4.5a3.25 3.25 0 0 1-6.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.75 11.25a.75.75 0 0 0-1.5 0a7.75 7.75 0 0 0 7 7.714V20.5H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1.536a7.75 7.75 0 0 0 7-7.714a.75.75 0 0 0-1.5 0a6.25 6.25 0 1 1-12.5 0"></svg:path>`,
})
export class LineiconsMicrophone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
