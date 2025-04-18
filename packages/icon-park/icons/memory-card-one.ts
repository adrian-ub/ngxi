import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryCardOneIcon],svg[icon-park-memory-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9C6 7.34315 7.34315 6 9 6H30.3363C31.132 6 31.895 6.31607 32.4576 6.87868L36.3158 10.7368L41.1213 15.5424C41.6839 16.105 42 16.868 42 17.6637V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"></svg:path><svg:path fill="#2F88FF" d="M31 26H17C15.3431 26 14 27.3431 14 29V42H34V29C34 27.3431 32.6569 26 31 26Z"></svg:path><svg:path stroke-linecap="round" d="M29 16H17C15.3431 16 14 14.6569 14 13V6"></svg:path></svg:g>`,
})
export class IconParkMemoryCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
