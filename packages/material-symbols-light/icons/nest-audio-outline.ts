import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestAudioOutlineIcon],svg[material-symbols-light-nest-audio-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.346 19.577q-1.3 0-2.227-.927t-.927-2.227V8.462q0-1.69 1.182-2.865q1.18-1.174 2.857-1.174h3.538q1.69 0 2.865 1.174q1.174 1.174 1.174 2.864v7.962q0 1.301-.927 2.228t-2.227.926zm0-1h5.308q.888 0 1.521-.633t.633-1.521V8.462q0-1.267-.886-2.153t-2.153-.886h-3.538q-1.266 0-2.152.886t-.887 2.152v7.962q0 .889.633 1.521t1.521.633m0-5.808q.31 0 .54-.23t.23-.539t-.23-.54t-.54-.23q-.31 0-.54.23q-.229.23-.229.54t.23.54t.54.23m2.653 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m2.654 0q.31 0 .54-.23q.229-.23.229-.54t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23M12 12"></svg:path>`,
})
export class MaterialSymbolsLightNestAudioOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
