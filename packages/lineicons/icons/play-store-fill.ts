import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlayStoreFillIcon],svg[lineicons-play-store-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.273 1l27.32 27.316l7.05-7.05C35.01 15.42 22.109 7.58 16.306 4.054L12.418 1.7a4.8 4.8 0 0 0-2.145-.7m-4.17 3.27c-.055.3-.103.602-.103.926V59.18c0 .227.046.438.077.653L33.871 32.04zm43.174 19.808l-7.96 7.96l7.821 7.822c4.144-2.512 7.015-4.256 7.333-4.448c1.409-.861 2.204-2.16 2.18-3.58c-.02-1.392-.816-2.637-2.17-3.403c-.302-.174-3.134-1.884-7.204-4.35M37.594 35.762L10.355 63c.53-.092 1.058-.25 1.564-.555l32.586-19.772z"></svg:path>`,
})
export class LineiconsPlayStoreFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
