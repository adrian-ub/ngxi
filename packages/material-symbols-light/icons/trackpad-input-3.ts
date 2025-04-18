import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrackpadInput3Icon],svg[material-symbols-light-trackpad-input-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.671 21q-.504 0-.948-.186t-.812-.554l-4.35-4.337l.575-.6q.235-.234.543-.292q.307-.058.634.029l2.033.461V8.52q0-.213.144-.357t.356-.143t.357.143q.143.144.143.357v5.808h1.77V7.25q0-.213.143-.357t.357-.143t.356.143q.144.144.144.357v7.077h1.769V9.019q0-.213.143-.357q.143-.143.357-.143q.213 0 .356.143t.144.357v5.308h1.769q0-.213.143-.357q.143-.143.357-.143q.213 0 .356.143t.144.357V17.5q0 1.458-1.021 2.479T18.153 21zM4.616 18q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h13.77q.517 0 .902.28t.54.72H4.616q-.231 0-.424.192T4 5.616v10.769q0 .23.192.423t.423.192h1.8l.994 1z"></svg:path>`,
})
export class MaterialSymbolsLightTrackpadInput3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
