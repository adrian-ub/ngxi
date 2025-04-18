import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPodlistenIcon],svg[arcticons-podlisten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.978 23.317a6.775 6.775 0 1 1 12.75 4.267c-.987 3.112-5.153 5.32-5.873 9.154s-7.818 4.031-7.395-1.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.17 24.529s.512-3.61-2.815-3.61s-2.772 5.878-5.879 5.878"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.845 30.604s-1.155.186-1.155 2.001s3.906 1.65 3.906-1.156s-3.166-4.237-1.494-7.082m2.863-11.37a11 11 0 0 1 11.002 11.002"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.965 7.602a16.397 16.397 0 0 1 16.397 16.397"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPodlistenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
