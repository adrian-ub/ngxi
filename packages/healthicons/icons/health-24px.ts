import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealth24pxIcon],svg[healthicons-health-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M12.003 2.5h0m0 0l-.005-.214v-.175l.002.08m.003.309h0v0m0 0v-.007m0 .007h-.001m.001-.007V2.5v-.015zm0 0v-.105m0 0V2.35L12 2.303v-.198v.014m.001.27v-.074m0 .073V2.5m0-.38v-.1L12 2.094m0 .025v.02v-.045m0 .025v.152v-.114m0-.063v-.078v.142m0-.064v.077h0v-.013m0 0v-.016v.015m0 .001v.005v-.006m0 0v-.035v.069m0 0v.033zm.002.309zm8.953 3H21V12c0 1.375-.562 2.656-1.406 3.805c-.844 1.148-1.969 2.164-3.094 3.008a26 26 0 0 1-4.399 2.64l.422.908l-.422-.907l-.075.034l-.019.009l-.003.001h0L12 21.5h0l-.007-.003h0l-.019-.009q0 0 0 0l-.075-.034l-.422.907l.422-.907l-.286-.137A26 26 0 0 1 7.5 18.812c-1.125-.843-2.25-1.859-3.094-3.007S3 13.375 3 12V5.5h.01v0h.033v0h.002l.13-.003a18 18 0 0 0 2.074-.185C6.5 5.126 8 4.75 9.001 4s1.75-1.125 2.25-1.312c.25-.094.438-.141.563-.165q.093-.016.14-.02l-.093-.996l.093.996l.035-.003l-.046-.999l.046 1h.008L12 2.5h.012l.046-.999l-.046 1l.035.002l.093-.995l-.093.995q.047.004.14.02c.126.024.313.07.563.164C13.25 2.876 14 3.25 15 4s2.5 1.125 3.75 1.313a18 18 0 0 0 2.205.187Z"></svg:path>`,
})
export class HealthiconsHealth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
