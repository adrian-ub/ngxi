import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhonelinkRingOffIcon],svg[material-symbols-light-phonelink-ring-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.846 22.762L1.008 2.923l.708-.708l19.838 19.839zM6 7.214l1 1V18.5h9.927L18 19.573v.812q0 .67-.472 1.143q-.472.472-1.143.472h-8.77q-.67 0-1.143-.472Q6 21.056 6 20.385zM7.806 5.5L6.035 3.704v-.25q.057-.613.506-1.034Q6.991 2 7.616 2h8.769q.69 0 1.152.463T18 3.616v3.307h-1V5.5zm9.89 8.966l-.719-.72q.396-.333.645-.782q.25-.449.25-.964t-.25-.964t-.645-.782l.72-.72q.536.48.855 1.111t.32 1.355t-.32 1.355t-.856 1.11m2.142 2.143l-.707-.708q.775-.775 1.19-1.784q.416-1.01.416-2.116t-.416-2.116t-1.19-1.784l.708-.708q.92.916 1.409 2.108t.489 2.5t-.489 2.5t-1.41 2.108"></svg:path>`,
})
export class MaterialSymbolsLightPhonelinkRingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
