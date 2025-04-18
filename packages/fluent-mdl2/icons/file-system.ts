import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileSystemIcon],svg[fluent-mdl2-file-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1378 384l64 128H606l64-128zm256 512l64 128H350l64-128zm-128-256l64 128H478l64-128zm30-512l512 1024v640H0v-640L512 128zM591 256l-448 896h1762l-448-896zm1329 1408v-384H128v384zM512 1408v128H256v-128z"></svg:path>`,
})
export class FluentMdl2FileSystemIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
