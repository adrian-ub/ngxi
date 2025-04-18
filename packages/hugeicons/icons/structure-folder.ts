import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructureFolderIcon],svg[hugeicons-structure-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 19.5c0-1.178 0-1.768.44-2.134C2.878 17 3.585 17 5 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C7.122 22 6.415 22 5 22s-2.121 0-2.56-.366S2 20.678 2 19.5m14 0c0-1.178 0-1.768.44-2.134C16.878 17 17.585 17 19 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C21.122 22 20.415 22 19 22s-2.121 0-2.56-.366S16 20.678 16 19.5m3-2.5c0-3.31-.744-4-4.308-4H9.308C5.744 13 5 13.69 5 17m7-7h.563c1.58 0 2.37 0 2.937-.375c.246-.162.457-.37.62-.613c.38-.56.38-1.34.38-2.9c0-.937 0-1.405-.227-1.742a1.3 1.3 0 0 0-.373-.368c-.34-.224-.815-.224-1.763-.224h-1.495c-.13 0-.194 0-.254-.009a.82.82 0 0 1-.552-.335a2 2 0 0 1-.121-.22c-.236-.466-.452-.935-.975-1.13C10.51 2 10.249 2 9.725 2c-.817 0-1.226 0-1.533.169c-.218.12-.399.299-.52.515c-.172.302-.172.706-.172 1.513v1.359c0 2.095 0 3.142.659 3.793S9.879 10 12 10" color="currentColor"></svg:path>`,
})
export class HugeiconsStructureFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
