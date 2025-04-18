import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoEditorIcon],svg[arcticons-photo-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24V12.5a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4H24"></svg:path><svg:circle cx="14.158" cy="17.169" r="2.772" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.875 29.375L14.25 26l5.375 5.375l13.812-13.812l3.688 3.688m2.183 6.189c.959-.804 2.45-.648 3.254.31s.69 2.411-.269 3.215l-1.529-1.79zm-9.57 7.57l9.57-7.57l1.456 1.735l1.53 1.79l-9.545 7.635m-3.012-3.59l-1.54 4.233l4.552-.642"></svg:path>`,
})
export class ArcticonsPhotoEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
