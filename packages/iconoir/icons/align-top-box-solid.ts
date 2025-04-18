import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignTopBoxSolidIcon],svg[iconoir-align-top-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 16l.01-.01M4 20l.01-.01M8 20l.01-.01M12 20l.01-.01M16 20l.01-.01M20 20l.01-.01M20 16l.01-.01"></svg:path><svg:path fill="currentColor" d="M4 12V4h16v8z"></svg:path></svg:g>`,
})
export class IconoirAlignTopBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
