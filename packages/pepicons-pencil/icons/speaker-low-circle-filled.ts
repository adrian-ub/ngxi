import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSpeakerLowCircleFilledIcon],svg[pepicons-pencil-speaker-low-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSpeakerLowCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M12.672 5.123L8.399 8.84H5a.5.5 0 0 0-.5.5v5.2a.5.5 0 0 0 .5.5h3.295l4.375 3.835a.5.5 0 0 0 .83-.376v-13a.5.5 0 0 0-.828-.377M8.884 9.745L12.5 6.598v10.799L9.014 14.34a.5.5 0 0 0-.458-.3H5.5v-4.2h2.894a.49.49 0 0 0 .49-.096" clip-rule="evenodd"></svg:path><svg:path d="M16.326 14.88a.5.5 0 0 1-.652-.76q.06-.05.117-.11c.157-.162.295-.366.407-.602c.195-.409.302-.896.302-1.408c0-.817-.273-1.558-.709-2.01a2 2 0 0 0-.117-.11a.5.5 0 0 1 .652-.76q.095.084.185.176c.624.647.989 1.639.989 2.704c0 .66-.14 1.293-.398 1.838a3.3 3.3 0 0 1-.591.866q-.09.093-.185.175"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSpeakerLowCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSpeakerLowCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
