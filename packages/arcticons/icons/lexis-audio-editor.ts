import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLexisAudioEditorIcon],svg[arcticons-lexis-audio-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="35.608" cy="24" r="7.892"></svg:circle><svg:circle cx="35.608" cy="24" r="2.03"></svg:circle><svg:path d="m34.913 22.093l-2.005-5.509m3.394 5.509l2.005-5.509m-4.004 8.97l-3.768 4.492m3.043-5.688l-5.743 1.012m9.771-1.018l5.774 1.018m-6.468.185l3.769 4.491"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12.392" cy="24" r="7.892"></svg:circle><svg:circle cx="12.392" cy="24" r="2.03"></svg:circle><svg:path d="m10.838 22.695l-4.49-3.77m5.693 3.076l-1.016-5.774m1.014 9.771l-1.02 5.774m-.206-6.448l-4.468 3.747m7.955-5.764l5.51-2.004m-5.511 3.392l5.509 2.007"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.392 31.892h23.216"></svg:path>`,
})
export class ArcticonsLexisAudioEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
