import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVictoryFinger03Icon],svg[hugeicons-victory-finger-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.978 13.52l-.595-3.45m0 0l-1.06-6.145c-.152-.983.379-1.687 1.189-1.886c.82-.2 1.67.444 1.783 1.15l1.695 6.88l1.647-6.705c.164-.992 1.108-1.434 1.928-1.233c.81.198 1.244.81 1.092 1.794l-1.177 6.632m-7.097-.487c-.685.683-1.788 1.91-2.134 2.686a3.4 3.4 0 0 0-.201.595c-.23.973.329 2.077 1.904 4.151c.63.74 1.74 2.099 1.806 2.32c.007.023.312.394.233 2.176M13.873 8.34c.645-.467 2.374-.635 3.049 1.132c.024.129.062.23.075.358m0 0c.059.577 0 1.13 0 1.199m0-1.2c.384-.75 2.627.17 2.918 2.894c.252 1.373-.106 3.242-.322 3.902c-.322.98-1.212 2.502-1.412 2.73c-.832 1.127-.746 2.093-.746 2.627" color="currentColor"></svg:path>`,
})
export class HugeiconsVictoryFinger03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
