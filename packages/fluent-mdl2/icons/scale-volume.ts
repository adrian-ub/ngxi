import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ScaleVolumeIcon],svg[fluent-mdl2-scale-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128H219l338 339l-90 90l-339-338v293H0V0h512zM1536 0h512v512h-128V219l-339 338l-90-90l338-339h-293zM467 1491l90 90l-338 339h293v128H0v-512h128v293zm1453 338v-293h128v512h-512v-128h293l-338-339l90-90zM640 1408V640h768v768zm128-640v512h512V768z"></svg:path>`,
})
export class FluentMdl2ScaleVolumeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
