import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGhost2FilledIcon],svg[tabler-ghost-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.999l.041.002l.208.003a8 8 0 0 1 7.747 7.747l.003.248l.177.006a3 3 0 0 1 2.819 2.819L23 13a3 3 0 0 1-3 3l-.001 1.696l1.833 2.75a1 1 0 0 1-.72 1.548L21 22H11c-3.445.002-6.327-2.49-6.901-5.824l-.028-.178l-.071.001a3 3 0 0 1-2.995-2.824L1 13a3 3 0 0 1 3-3l.004-.25A8 8 0 0 1 12 2zM12 12a2 2 0 0 0-2 2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1a2 2 0 0 0-2-2m-1.99-4l-.127.007A1 1 0 0 0 10 10l.127-.007A1 1 0 0 0 10.01 8m4 0l-.127.007A1 1 0 0 0 14 10l.127-.007A1 1 0 0 0 14.01 8"></svg:path>`,
})
export class TablerGhost2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
