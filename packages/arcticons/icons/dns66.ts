import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDns66Icon],svg[arcticons-dns66-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.908 22.15V11.5h1.73a5.325 5.325 0 0 1 5.325 5.325h0a5.325 5.325 0 0 1-5.325 5.325zm9.564-10.65v10.65m7.056 0V11.5m-7.056 0l7.056 10.65"></svg:path><svg:circle cx="14.435" cy="32.972" r="3.528" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.652 27.149c-.588-.77-1.484-1.3-2.969-1.3h-.248a3.53 3.53 0 0 0-3.528 3.529v3.594"></svg:path><svg:circle cx="24" cy="32.972" r="3.528" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.216 27.149c-.588-.77-1.484-1.3-2.968-1.3H24a3.53 3.53 0 0 0-3.528 3.529v3.594m9.776-11.989c.653.85 1.472 1.167 2.61 1.167h1.578a2.66 2.66 0 0 0 2.656-2.662h0a2.66 2.66 0 0 0-2.656-2.663h-1.742a2.66 2.66 0 0 1-2.657-2.662h0a2.66 2.66 0 0 1 2.657-2.663h1.576c1.14 0 1.958.317 2.611 1.167"></svg:path>`,
})
export class ArcticonsDns66Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
