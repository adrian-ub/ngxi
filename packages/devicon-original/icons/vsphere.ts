import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalVsphereIcon],svg[devicon-original-vsphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00C1D5" d="M60.3 2.3H20.2s-15.8.8-18 18v86.3s1.1 17.3 19.1 19.1h35.1l5.3-5.3H21.9s-12.6-1.6-14.2-14.2V21.4s-.5-12.8 14-14h33.9l4.7-5.1z"></svg:path><svg:path fill="#78BD20" d="M67.7 125.7h40.1s15.8-.8 18-18V21.4s-1.1-17.3-19.1-19.1h-35l-5.3 5.3h39.7s12.6 1.6 14.2 14.2v84.8s.5 12.8-14 14H72.5l-4.8 5.1z"></svg:path><svg:g fill="#0091DA"><svg:path d="M100.1 109.9s-.1 0 0 0H47.6c-6.5 0-8.8-5.8-9.1-8.9V46.8c0-7.3 6.3-9.5 9.6-9.6h.1l52.7.2c6.6 0 9 6 9.3 9.1v53.2c0 3-.9 5.5-2.8 7.3c-2.8 2.8-6.7 2.9-7.3 2.9zm-57.6-9.3c.1.8.9 5.3 5.1 5.3h52.5c.1 0 2.8 0 4.6-1.7c1-1 1.5-2.5 1.5-4.4V46.9c-.1-.9-1-5.5-5.4-5.5l-52.6-.2c-.7 0-5.7.5-5.7 5.6v53.8z"></svg:path><svg:path d="M33.2 85.4h-7c-3.9 0-4.6-4.1-4.8-4.9V26.7c0-4.8 4.5-5.2 5.3-5.3l52.7.2c4 0 4.8 4.3 5 5.1v5.5h4.8v-5.9c-.4-3.3-2.9-9.5-9.7-9.5l-52.8-.2c-3.4.1-9.9 2.4-9.9 10v54.2c.3 3.2 2.8 9.3 9.5 9.3h7v-4.7z"></svg:path></svg:g>`,
})
export class DeviconOriginalVsphereIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
