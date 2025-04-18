import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainPackerIcon],svg[devicon-plain-packer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.8 0v18.045L72.46 35.75v54.12l14.434 8.267c8.933 5.158 16.236 2.067 16.236-6.862V51.592c0-8.934-7.304-20.459-16.236-25.617zM24.872 15.646v88.391L66.354 128V39.617L24.87 15.647z"></svg:path>`,
})
export class DeviconPlainPackerIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
