import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFormImageAttachOutlineIcon],svg[bubbles-form-image-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.828 19.785v-5.4a1.422 1.422 0 0 1 2.844 0v6.279a2.845 2.845 0 0 1-5.689 0V13.77a4.267 4.267 0 0 1 8.534 0v6.015M6.483 11.497a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6.07 1.712l-.646-1.034a.5.5 0 0 0-.848 0L8.42 16.4l-1.076-1.725a.5.5 0 0 0-.848 0L3.483 19.5h8.929"></svg:path><svg:path d="M12.553 23.5H1.483a1 1 0 0 1-1-1v-21a1 1 0 0 1 1-1h13.293a1 1 0 0 1 .707.292L19.19 4.5a1 1 0 0 1 .293.707v1.29"></svg:path></svg:g>`,
})
export class BubblesFormImageAttachOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
