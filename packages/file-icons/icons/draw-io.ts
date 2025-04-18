import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsDrawIoIcon],svg[file-icons-draw-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.87 503.111h-512v-512h512zM296.79 323.227v73.978c0 15.36 12.453 27.813 27.814 27.813h95.925c15.361 0 27.814-12.452 27.814-27.813v-73.978c0-15.361-12.453-27.814-27.814-27.814h-53.161L310.79 199.05c12.251-2.909 21.367-13.913 21.367-27.054V97.018c0-15.361-12.452-27.814-27.813-27.814h-95.926c-15.36 0-27.813 12.453-27.813 27.814v74.978c0 12.82 8.677 23.608 20.476 26.828l-56.71 96.59H91.209c-15.36 0-27.813 12.452-27.813 27.813v73.978c0 15.36 12.452 27.813 27.813 27.813h95.926c15.36 0 27.813-12.452 27.813-27.813v-73.978c0-16.797-8.624-27.814-35.789-27.814l56.133-95.603h43.155l56.132 95.603c-27.361-1.882-38.508 16.088-37.789 27.814"></svg:path>`,
})
export class FileIconsDrawIoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
