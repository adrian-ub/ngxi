import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFitnessTrackerOutlineIcon],svg[material-symbols-light-fitness-tracker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.846 21l-.988-3.34q-.394-.227-.626-.627T8 16.134V7.866q0-.504.241-.904q.242-.4.636-.627L9.847 3h4.307l.938 3.31q.42.232.664.632t.244.923v8.27q0 .523-.241.923q-.242.4-.661.632L14.154 21zm.725-1h2.833l.55-2.02h-3.952zm-.763-3.02h4.384q.349 0 .578-.229t.23-.578V7.827q0-.348-.23-.578t-.578-.23H9.808q-.348 0-.578.23T9 7.827v8.346q0 .348.23.578t.578.23m.213-10.962h3.913L13.404 4H10.57zm1.954 0"></svg:path>`,
})
export class MaterialSymbolsLightFitnessTrackerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
