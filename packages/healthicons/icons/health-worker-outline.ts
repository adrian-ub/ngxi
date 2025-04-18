import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthWorkerOutlineIcon],svg[healthicons-health-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19 30s-1.497-2.102-2-1.987c-5.404 1.23-11 4.782-11 8.557V42h36v-5.43c0-3.775-5.596-7.327-11-8.557c-.503-.115-2 1.987-2 1.987zm6.685 2H17.97l-.598-.84l-.01-.013l-.04-.055a16 16 0 0 0-.727-.915c-2.185.603-4.324 1.595-5.942 2.776C8.73 34.355 8 35.667 8 36.57V40h32v-3.43c0-.903-.73-2.215-2.652-3.617c-1.618-1.18-3.757-2.173-5.942-2.776l-.075.086a14 14 0 0 0-.652.828l-.04.056l-.01.012v.001l-.598.84z"></svg:path><svg:path d="M32 38v-6h2v6z"></svg:path><svg:path d="M36 36h-6v-2h6zM24 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10"></svg:path></svg:g>`,
})
export class HealthiconsHealthWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
