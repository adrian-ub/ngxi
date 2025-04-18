import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSkipNextRoundedIcon],svg[material-symbols-light-skip-next-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.27 16.116V7.885q0-.213.143-.357q.144-.144.357-.144t.356.144t.143.356v8.231q0 .213-.144.357t-.356.143t-.356-.143t-.144-.357m-9.538-1.01v-6.21q0-.364.242-.586q.243-.222.566-.222q.125 0 .236.024t.217.106l4.662 3.112q.187.13.27.295t.084.376t-.084.376q-.083.164-.27.295l-4.662 3.112q-.105.08-.217.106t-.237.025q-.323 0-.565-.223q-.242-.222-.242-.585"></svg:path>`,
})
export class MaterialSymbolsLightSkipNextRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
