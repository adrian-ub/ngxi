import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEditImagePhotoSolidIcon],svg[streamline-edit-image-photo-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.8 0A1.8 1.8 0 0 0 0 1.8v10.4A1.8 1.8 0 0 0 1.8 14h3.714a1.25 1.25 0 0 1-.092-.674l.112-.795H1.975a.506.506 0 0 1-.506-.506V7.004a11.36 11.36 0 0 1 5.502 1.25c.194.141.462.343.758.575l3.046-3.052a1.25 1.25 0 0 1 1.769 0L14 7.231V1.8A1.8 1.8 0 0 0 12.2 0zm8.669 3.59a1.5 1.5 0 1 1-1.5-1.5h.045c.803 0 1.455.651 1.455 1.455zm-3.672 8.94l-.137.969l2.13-.29L13.5 8.5l-1.84-1.84l-4.7 4.71l-.163 1.161Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEditImagePhotoSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
