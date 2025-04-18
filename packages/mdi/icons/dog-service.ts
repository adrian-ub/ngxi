import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDogServiceIcon],svg[mdi-dog-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 8l3 3v10h-2v-6H8l-2 3v3H4v-6l1-1v-3L2 8l1-1l2 2h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9zm5-3V3l-4 4l3 3l1-1l1 1l2-2zm-7.5 4.5l-7-7c-.27-.28-.71-.28-1 0c-.28.27-.28.71 0 1l7 7c.27.28.71.28 1 0c.28-.27.28-.71 0-1"></svg:path>`,
})
export class MdiDogServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
