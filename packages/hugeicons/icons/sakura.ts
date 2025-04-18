import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSakuraIcon],svg[hugeicons-sakura-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M12 18.088q-.172.28-.377.562C10.309 20.447 8.496 21.504 7 21.5l-.302-2.075l-2.078.356c-.466-1.413.029-3.514 1.342-5.312C3.935 13.766 2.442 12.397 2 11l1.86-.931l-.966-1.866c1.187-.883 3.526-.99 5.615-.299c0-2.404.827-4.534 2.03-5.404L12 4l1.46-1.5c1.204.87 2.042 3 2.03 5.404c2.09-.69 4.429-.584 5.616.299l-.965 1.866L22 11c-.442 1.396-1.935 2.765-3.962 3.47c1.313 1.797 1.808 3.898 1.342 5.311l-2.078-.356L17 21.5c-1.496.004-3.309-1.053-4.623-2.85a8 8 0 0 1-.377-.562"></svg:path></svg:g>`,
})
export class HugeiconsSakuraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
