import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofLightIcon],svg[ph-solar-roof-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.37 125.32l-40-80A6 6 0 0 0 200 42H56a6 6 0 0 0-5.37 3.32l-40 80A6.1 6.1 0 0 0 10 128v56a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14v-56a6.1 6.1 0 0 0-.63-2.68M99.71 122l-14-28h34.58l14 28Zm.58-68l14 28H79.71l-14-28Zm48 0l14 28h-34.58l-14-28Zm-.58 68l-14-28h34.58l14 28Zm48 0l-14-28h34.58l14 28Zm14.58-40h-34.58l-14-28h34.58ZM22 184v-54.58l34-68l34 68V186H24a2 2 0 0 1-2-2m210 2H102v-52h132v50a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSolarRoofLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
