import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingAttentionIcon],svg[covid-social-distancing-attention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M.75 17v6m3.5-1l-2-2l2-2m19-1v6m-3.5-1l2-2l-2-2m2 2H2.25M12 9.275V5.887m6.269 9.613a.98.98 0 0 0 .881-1.413L13.045 1.65a1.164 1.164 0 0 0-2.09 0L4.85 14.087a.98.98 0 0 0 .881 1.413z"></svg:path><svg:path d="M12 12.625a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidSocialDistancingAttentionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
