import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeffiyehIcon],svg[hugeicons-keffiyeh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 5h12m-.38 2.834C16.867 4.404 14.993 2 12 2S7.133 4.404 6.38 7.834c-.514 2.34-1.64 4.522-2.829 6.596c-.33.578-.551 1.165-.551 1.702c0 1.04.798 2.082 1.571 3.262c1.088 1.661 1.633 2.492 1.998 2.591s1.177-.306 2.8-1.119c.832-.416 1.716-.697 2.631-.697s1.799.28 2.632.697c1.622.813 2.434 1.219 2.8 1.12c.364-.1.909-.93 1.997-2.592c.773-1.18 1.571-2.221 1.571-3.262c0-.537-.22-1.124-.551-1.702c-1.19-2.074-2.315-4.257-2.829-6.596"></svg:path><svg:path d="M6.5 22c.516-1.404 1.077-4.636.47-6.174c-.433-1.097.104-2.195.814-3.045a4.9 4.9 0 0 0 .984-1.859C9.299 8.97 10.392 8 12 8s2.7.969 3.232 2.922a4.9 4.9 0 0 0 .985 1.86c.709.849 1.246 1.947.813 3.044c-.607 1.538-.046 4.77.47 6.174"></svg:path></svg:g>`,
})
export class HugeiconsKeffiyehIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
