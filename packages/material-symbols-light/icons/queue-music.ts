import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightQueueMusicIcon],svg[material-symbols-light-queue-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.784 19q-.995 0-1.688-.69q-.692-.69-.692-1.675q0-1.002.695-1.703q.696-.701 1.69-.701q.384 0 .733.143t.651.384V7H21v1.462h-2.827v8.172q0 .986-.697 1.676t-1.692.69M4 14.77v-1h7.039v1zm0-3.385v-1h10.789v1zM4 8V7h10.789v1z"></svg:path>`,
})
export class MaterialSymbolsLightQueueMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
