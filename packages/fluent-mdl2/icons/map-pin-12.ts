import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MapPin12Icon],svg[fluent-mdl2-map-pin-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1536 1024l341 1024H0l341-1024h512V650q-57-14-104-45t-80-76t-53-97t-19-112q0-71 27-133t73-108T806 6t133-27t132 27t109 73t73 108t27 133q0 58-19 111t-52 98t-81 75t-104 46v374zM768 320q0 35 13 66t37 55t54 36t67 14q35 0 66-13t54-37t36-54t14-67q0-35-13-66t-37-54t-54-37t-66-14q-35 0-66 13t-55 37t-36 55t-14 66m-304 875l-227 682h1403l-227-682h-389v256q0 35-25 60t-60 25q-18 0-33-6t-27-18t-19-27t-7-34v-256z"></svg:path>`,
})
export class FluentMdl2MapPin12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
