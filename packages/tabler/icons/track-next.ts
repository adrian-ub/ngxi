import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrackNextIcon],svg[tabler-track-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.69 4.198l6.56 6.25c1 .798 1 2.306 0 3.105l-6.564 6.252c-.67.48-1.686 0-1.686-.805v-4l-5.394 4.808C5.937 20.286 5 19.808 5 19V5c0-.812.936-1.285 1.602-.809L12 9V5c0-.816 1.02-1.28 1.69-.802z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg:path>`,
})
export class TablerTrackNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
