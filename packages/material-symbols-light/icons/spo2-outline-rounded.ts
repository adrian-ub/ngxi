import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpo2OutlineRoundedIcon],svg[material-symbols-light-spo2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.577 19q-.31 0-.54-.23t-.23-.54v-3.845q0-.31.23-.54t.54-.23h2.346q.31 0 .54.23t.23.54v3.846q0 .31-.23.54t-.54.229zm.115-.885h2.116V14.5h-2.116zm7.981 3.577h-2.711q-.327 0-.548-.22q-.222-.222-.222-.549v-1.596q0-.327.221-.548t.548-.221h2.27v-1.366h-2.597q-.191 0-.316-.125q-.126-.125-.126-.316t.126-.317t.316-.126h2.712q.327 0 .548.22q.222.222.222.549v1.596q0 .327-.222.548q-.221.221-.548.221h-2.269v1.366h2.596q.192 0 .317.125q.126.125.126.316q0 .192-.126.317q-.125.126-.317.126M10 3.6q.142 0 .285.053t.275.159q.765.704 1.542 1.466t1.492 1.599t1.347 1.716t1.118 1.813q.099.183.022.377q-.076.195-.264.26t-.368-.004t-.284-.253q-.444-.842-1.047-1.666t-1.286-1.61t-1.415-1.508Q10.687 5.281 10 4.65Q7.025 7.375 5.513 9.675T4 13.8q0 2.294 1.325 4.021t3.646 2.077q.214.048.348.218q.135.17.062.359q-.085.235-.299.332t-.457.043q-2.563-.454-4.094-2.464Q3 16.375 3 13.8q0-1.413.658-2.818T5.29 8.274t2.098-2.443T9.46 3.818q.13-.112.263-.165Q9.858 3.6 10 3.6m-.304 10.2"></svg:path>`,
})
export class MaterialSymbolsLightSpo2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
