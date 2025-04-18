import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEarthIcon],svg[tdesign-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.045 11.003l-.076.777l.033.012L1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1C8.007 1 4.51 3.128 2.584 6.311l-.038-.014l-.381.772a10.9 10.9 0 0 0-1.12 3.934m2.1-.596c.1-.546.245-1.076.434-1.582L7.22 10.2l2.02-2.052l1.735.586v4.067l3.294 1.114l1.987 4.033l4.386-5.084l.333-.193A9 9 0 0 1 6.18 18.866l3.195-6.342zm17.718.016l-1.515.88l-2.632 3.051l-1.02-2.068l-2.72-.92V7.3l-4.28-1.447l-1.988 2.016l-2.214-.835A8.99 8.99 0 0 1 12 3a9 9 0 0 1 8.863 7.423m-16.135 6.88a8.95 8.95 0 0 1-1.715-4.828l3.542 1.203z"></svg:path>`,
})
export class TdesignEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
