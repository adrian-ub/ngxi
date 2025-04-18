import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconIonicIcon],svg[devicon-ionic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#4e8ef7"><svg:circle cx="64" cy="64" r="24.08"></svg:circle><svg:path d="M113.14 23.14a8.27 8.27 0 0 0-13.7-6.25a59 59 0 1 0 11.67 11.67a8.24 8.24 0 0 0 2.03-5.42M64 121A57 57 0 1 1 98.1 18.36a8.27 8.27 0 0 0 11.53 11.53A57 57 0 0 1 64 121"></svg:path></svg:g>`,
})
export class DeviconIonicIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
