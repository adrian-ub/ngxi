import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenWithMirroredIcon],svg[fluent-mdl2-open-with-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1219l317-317l317 317l-90 90l-162-163v583H253v-583L90 1309zm253-834h1153V256H253zm256 1280h897v-129H509zM1661 512h384V128h-384zm256-128h-128V256h128zm-256 768h384V768h-384zm256-128h-128V896h128zm-256 768h384v-384h-384zm256-128h-128v-128h128zM637 1024h768V896H509z"></svg:path>`,
})
export class FluentMdl2OpenWithMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
