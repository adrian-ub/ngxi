import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShieldOffIcon],svg[majesticons-shield-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.013 4.841A1 1 0 0 0 4 5v9c0 1.3.568 2.449 1.304 3.395c.738.948 1.697 1.763 2.615 2.419a22 22 0 0 0 3.66 2.093l.018.008l.006.003h.003a1 1 0 0 0 .788.001L12 21c.394.92.395.919.395.919l.002-.001l.005-.003l.02-.008l.065-.029a22 22 0 0 0 1.07-.523a22 22 0 0 0 2.524-1.541c.536-.383 1.086-.82 1.598-1.306L4.013 4.84zm15.864 10.207A4.6 4.6 0 0 0 20 14V5a1 1 0 0 0-1.11-.994c-.653.073-1.798.075-3-.173c-1.21-.25-2.373-.73-3.183-1.54a1 1 0 0 0-1.414 0c-.71.709-1.69 1.166-2.735 1.436zm-8.271 6.87L12 21l-.394.919z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsShieldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
