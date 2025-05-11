import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphAdjustmentVerticalIcon],svg[si-glyph-adjustment-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 0v5.007h1.95V0zm0 11v4.958h2.01V11zm6 3v1.976h1.966V14zM8 0v8h2V0zm6 9v6.942h1.977V9zm0-9v2.933h2.009V0zm.917 8.049c1.059 0 2.094-.994 2.094-2.081S15.976 4 14.917 4S13 4.881 13 5.968s.858 2.081 1.917 2.081m-6 4.961c1.059 0 2.04-1.051 2.04-2.104C10.958 9.853 9.977 9 8.918 9A1.91 1.91 0 0 0 7 10.906c0 1.053.858 2.103 1.917 2.103zm-6-3.021c1.059 0 2.057-1.013 2.057-2.072S3.976 6 2.917 6A1.917 1.917 0 0 0 1 7.917c0 1.059.858 2.072 1.917 2.072"></svg:path>`,
})
export class SiGlyphAdjustmentVerticalIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAirplaneIcon],svg[si-glyph-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m9.264 10.32l3.52 5.48a.8.8 0 0 0 .51.199a.74.74 0 0 0 .531-.207c.389-.581-.561-4.316-1.861-8.172z"></svg:path><svg:path d="M15.613.42c-.584-.586-1.328-.525-1.828-.027l-4.08 4.064c-2.437-.776-6.846-2.275-8.51-2.275c-.232 0-.334.026-.369.037a.76.76 0 0 0-.014 1.012l6.107 4l-3.032 3.02s-2.339-.482-2.681-.527c-.477-.062-1.027.356-.002.879c1.197.609 2.599 1.317 2.599 1.317s.863 1.679 1.39 2.604c.671 1.119 1.065.576.985 0l-.348-2.515l2.884-2.992l2.829-2.819l4.026-4.011c.501-.498.626-1.183.044-1.767"></svg:path></svg:g>`,
})
export class SiGlyphAirplaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlienIcon],svg[si-glyph-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.014.143c-3.855 0-6.983 2.979-6.983 6.651C2.031 10.469 7.209 16 9.014 16C10.822 16 16 10.469 16 6.794C16 3.122 12.873.143 9.014.143M7.895 10.895c-.316.318-1.414-.271-2.448-1.321C4.411 8.528 3.829 7.42 4.145 7.1c.315-.321 1.412.269 2.447 1.317c1.033 1.048 1.619 2.155 1.303 2.478m2.219-.008c-.32-.32.27-1.426 1.321-2.473c1.049-1.047 2.158-1.636 2.48-1.314c.32.318-.271 1.424-1.32 2.47c-1.05 1.047-2.161 1.634-2.481 1.317"></svg:path>`,
})
export class SiGlyphAlienIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAirplane2Icon],svg[si-glyph-airplane-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 1)"><svg:ellipse cx="7.98" cy="7.904" rx="1.98" ry="1.904"></svg:ellipse><svg:path d="M3.754 2.492c.797.888 1.325 1.735 1.182 1.895c-.143.158-.904-.431-1.701-1.317c-.795-.887-1.325-1.735-1.182-1.895c.142-.159.904.43 1.701 1.317m9.023.577c-.797.887-1.559 1.477-1.701 1.317s.386-1.007 1.183-1.895c.797-.887 1.558-1.477 1.7-1.317s-.387 1.009-1.182 1.895m-6.78 11.372c0 .267-.22.481-.49.481a.485.485 0 0 1-.491-.481v-.924c0-.266.219-.479.491-.479c.271 0 .49.214.49.479zm4.98.055a.477.477 0 0 1-.465.489a.477.477 0 0 1-.465-.489v-.938c0-.271.209-.488.465-.488c.257 0 .465.218.465.488z"></svg:path><svg:path d="M15.957.496c0 .818-.57 1.482-1.275 1.482H1.304C.6 1.978.03 1.314.03.496c0 0-.195-.419 1.274-.419h13.378c1.373 0 1.275.419 1.275.419M8.035 5.072c1.611 0 2.326.843 2.326.843h2.59c-.6-1.661-2.597-2.882-4.973-2.882S3.605 4.254 3.005 5.915h2.699c.001 0 .714-.843 2.331-.843m.01 5.893c-1.836 0-2.338-.934-2.338-.934H3c.607 1.71 2.609 2.968 4.989 2.968s4.384-1.258 4.99-2.968h-2.597c.001 0-.503.934-2.337.934M6 8.935s-4.955.331-4.955-.809C1.045 6.981 6 7.049 6 7.049zm4.121-1.901s4.816-.203 4.816.947c0 1.151-4.816.947-4.816.947z"></svg:path></svg:g>`,
})
export class SiGlyphAirplane2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlignCenterIcon],svg[si-glyph-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 1.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 1h14.082c.518 0 .938.42.938.938m0 12c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 7h14.082c.518 0 .938.42.938.938m-3 3c0 .518-.42.938-.938.938H4.98a.938.938 0 0 1 0-1.876h8.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H4.98A.938.938 0 0 1 4.98 4h8.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphAlignCenterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlarmClockIcon],svg[si-glyph-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.654.659c-1.312-.951-3.05-.764-3.99.383a10.16 10.16 0 0 1 4.922 3.58c.764-1.275.379-3.008-.932-3.963M3.644 2.427a10.1 10.1 0 0 1 2.73-1.395C5.433-.104 3.694-.288 2.383.654C1.072 1.6.686 3.316 1.451 4.579a10.2 10.2 0 0 1 2.193-2.152m11.28 6.206c0-.198-.012-.393-.028-.586c-.272-3.14-2.698-5.646-5.765-5.966c-.136-.016-.273-.017-.412-.022c-.082-.004-.164-.014-.248-.014h-.004c-3.568 0-6.459 2.949-6.459 6.588l.005.088a6.6 6.6 0 0 0 2.028 4.694a1.29 1.29 0 0 0-.693 1.143c0 .709.564 1.284 1.26 1.284c.666 0 1.204-.527 1.25-1.194c.689.311 1.44.507 2.231.554c.126.008.251.02.378.02c.145 0 .285-.013.43-.022a6.3 6.3 0 0 0 2.256-.586c.029.684.576 1.229 1.253 1.229c.696 0 1.259-.575 1.259-1.284c0-.523-.305-.97-.743-1.171a6.62 6.62 0 0 0 2.002-4.755m-6.397 4.681c-2.563 0-4.647-2.116-4.647-4.716s2.084-4.714 4.647-4.714c2.562 0 4.647 2.114 4.647 4.714s-2.085 4.716-4.647 4.716"></svg:path><svg:path d="M8 5h1v4H8z"></svg:path><svg:path d="M8 8h3v1H8z"></svg:path></svg:g>`,
})
export class SiGlyphAlarmClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAnchorIcon],svg[si-glyph-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.469 6.09l-2.426 1.447l1.331.348c-.009 2.278-1.944 4.213-4.416 4.625V5.917h1.984v-.834H9.958V3.637c.568-.352.96-.967.96-1.693c0-1.109-.883-1.92-1.971-1.92S7.01.871 7.01 1.981c0 .751.396 1.355.989 1.69v1.412H6.015v.834H8v6.595c-2.472-.409-4.306-2.352-4.31-4.639l1.3-.334L2.611 6.08L1.054 8.55l1.337-.344c.171 2.76 2.388 5.024 5.304 5.563c.857.248.934.845.934.845l.402 1.327l.413-1.318s.171-.648.933-.854c2.906-.539 5.118-2.797 5.296-5.548l1.299.338zM8.953 1.001a.96.96 0 0 1 .957.964a.96.96 0 0 1-.957.963a.96.96 0 0 1-.958-.963a.96.96 0 0 1 .958-.964"></svg:path>`,
})
export class SiGlyphAnchorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlighLeftIcon],svg[si-glyph-aligh-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.043 1.938c0 .518.42.938.938.938h14.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0 12c0 .518.42.938.938.938h14.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0-6c0 .518.42.938.938.938h10.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0 3c0 .518.42.938.938.938h8.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0-6c0 .518.42.938.938.938h6.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938"></svg:path>`,
})
export class SiGlyphAlighLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAirBalloonIcon],svg[si-glyph-air-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.959 15.312a.68.68 0 0 1-.678.678h-2.6a.68.68 0 0 1-.676-.678v-2.234h3.953v2.234zm3.026-10.561c0-1.769-.89-3.707-3.009-4.446c1.238 1.027 3.428 3.403-1.43 10.664L9.974.155s-.463-.123-.99-.123c-.512 0-.941.113-.941.113l.5 10.813C3.668 3.582 5.84 1.295 7.092.294c-2.138.733-3.076 2.683-3.076 4.457C4.016 7.466 8.561 12 7.786 12h2.506c-.71 0 3.693-4.48 3.693-7.249"></svg:path>`,
})
export class SiGlyphAirBalloonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlignRightIcon],svg[si-glyph-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 1.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 1h14.082c.518 0 .938.42.938.938m0 12c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H5.98A.938.938 0 0 1 5.98 7h10.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H7.98a.938.938 0 0 1 0-1.876h8.082c.518 0 .938.42.938.938m0-6c0 .518-.42.938-.938.938H9.98A.938.938 0 0 1 9.98 4h6.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphAlignRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAlignLeftIcon],svg[si-glyph-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.043 1.938c0 .518.42.938.938.938h14.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0 12c0 .518.42.938.938.938h14.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0-6c0 .518.42.938.938.938h10.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0 3c0 .518.42.938.938.938h8.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938m0-6c0 .518.42.938.938.938h6.082a.938.938 0 0 0 0-1.876H1.981a.94.94 0 0 0-.938.938"></svg:path>`,
})
export class SiGlyphAlignLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAndroidIcon],svg[si-glyph-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.018 6.062s-.008 4.412-.008 5.562c0 1.034.117 1.256 1.021 1.35v2.333c0 .356.437.646.974.646c.538 0 .976-.29.976-.646v-2.312l2.051.004v2.308c0 .356.438.646.975.646s.975-.29.975-.646V12.98c.926-.1.978-.371.978-1.335l.001-5.582zm9.977-1.032c-.537 0-.975.29-.975.647l.005 3.634c0 .356.438.646.975.646s.976-.29.976-.646l-.005-3.634c0-.357-.44-.647-.976-.647m-12.01 0c-.54 0-.98.295-.98.661v3.642c0 .365.44.661.98.661c.543 0 .983-.296.983-.661V5.691c.001-.366-.44-.661-.983-.661m7.989-2.843c.011-.012.026-.018.035-.032l.929-1.634c.102-.159.041-.365-.134-.457a.384.384 0 0 0-.499.123L9.377 1.82c-.018.028-.025.059-.033.089a4.2 4.2 0 0 0-1.357-.231a4.2 4.2 0 0 0-1.372.234c-.009-.031-.015-.062-.034-.092L5.709.168a.383.383 0 0 0-.498-.123c-.176.092-.236.298-.135.457l.872 1.653c.01.016.028.023.042.037c-1.057.579-1.759 1.598-1.947 2.803h7.948c-.19-1.209-.958-2.229-2.017-2.808M7.042 4.042H5.938V2.98h1.104zm3-.021H8.98V2.938h1.062z"></svg:path>`,
})
export class SiGlyphAndroidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAbacusIcon],svg[si-glyph-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 1)"><svg:path d="M14.194 13.958H1.765c-1.449 0-1.729-1.15-1.729-2.564V2.607C.036 1.193.315.043 1.765.043h12.429c1.448 0 1.728 1.15 1.728 2.564v8.787c0 1.414-.279 2.564-1.728 2.564M1.923 1A.937.937 0 0 0 1 1.948v10.104c0 .522.414.948.923.948h12.154a.937.937 0 0 0 .923-.948V1.948A.937.937 0 0 0 14.077 1z"></svg:path><svg:path d="M3 0h.948v13.068H3zm5 0h.948v13.068H8zm4 0h.948v13.068H12z"></svg:path><svg:ellipse cx="3.438" cy="4.976" rx="1.438" ry=".976"></svg:ellipse><svg:ellipse cx="3.438" cy="7.976" rx="1.438" ry=".976"></svg:ellipse><svg:ellipse cx="3.438" cy="10.976" rx="1.438" ry=".976"></svg:ellipse><svg:ellipse cx="8.477" cy="2.976" rx="1.477" ry=".976"></svg:ellipse><svg:ellipse cx="8.477" cy="5.976" rx="1.477" ry=".976"></svg:ellipse><svg:ellipse cx="8.477" cy="10.976" rx="1.477" ry=".976"></svg:ellipse><svg:ellipse cx="12.435" cy="7.977" rx="1.435" ry=".977"></svg:ellipse><svg:ellipse cx="12.435" cy="10.977" rx="1.435" ry=".977"></svg:ellipse></svg:g>`,
})
export class SiGlyphAbacusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAntenna1Icon],svg[si-glyph-antenna-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.987 0H3.112c-2.127 0-.266 1.982-.266 1.982l5.234 6.08v7.854h1.875V8.077l5.232-6.064c.001 0 1.955-2.013-.2-2.013M7.64 5.582L4.204 1.52S3.526.97 4.35.97s3.668.014 3.668.014v4.531c0 .673-.378.067-.378.067m2.302-.066V.985s2.909-.014 3.752-.014c.844 0 .15.55.15.55L10.33 5.583c.001-.001-.388.605-.388-.067"></svg:path>`,
})
export class SiGlyphAntenna1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAdjustmentHorizonIcon],svg[si-glyph-adjustment-horizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1v1.956h7.928V1zM0 1h1.975v1.975H0zm0 6v1.988h5.011V7zm11 0v1.979h4.987V7zM0 13h8.019v1.962H0zm14 0h2v1.961h-2zm-3.032 3.04c1.087 0 2.008-.822 2.008-1.88c0-1.06-.921-2.16-2.008-2.16s-1.924.961-1.924 2.02s.837 2.02 1.924 2.02M7.906 9.993c1.053 0 2.103-1.017 2.103-2.076S8.959 6 7.906 6A1.91 1.91 0 0 0 6 7.917c0 1.059.853 2.076 1.906 2.076m-2.85-6.012c1.059 0 1.966-1.005 1.966-2.064S5.976 0 4.917 0A1.917 1.917 0 0 0 3 1.917c0 1.059.997 2.064 2.056 2.064"></svg:path>`,
})
export class SiGlyphAdjustmentHorizonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowBackwardIcon],svg[si-glyph-arrow-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.307 5.988l5.309-4.645c.411-.41.891-.479 1.302-.068v3.132l.229-.001c5.016 0 8.738 3.563 8.738 8.41c0 1.688-.774 1.073-1.097.484c-1.522-2.78-4.197-4.677-7.681-4.677l-.19.001v3.065c-.411.41-.941.361-1.302.068L1.306 7.474a1.05 1.05 0 0 1 .001-1.486"></svg:path>`,
})
export class SiGlyphArrowBackwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowChangeIcon],svg[si-glyph-arrow-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.539 8.001c.828 0 1.379-.551 1.379-1.379l-.004-.435s-.205-1.233 1.44-1.233L12.015 5v1.759a.83.83 0 0 0 1.17 0l2.573-2.572a.83.83 0 0 0 0-1.17L13.185.292a.83.83 0 0 0-1.17 0v1.845c-.161-.047-6.453-.074-6.453-.074c-3.711 0-4.523 2.429-4.523 3.407v1.031a1.5 1.5 0 0 0 1.5 1.5m11.961.041c-.828 0-1.5.584-1.5 1.412l.002.957c-.045.357-.645.59-1.525.59H4.938l-.002-1.559a.83.83 0 0 0-1.17 0l-2.572 2.572a.83.83 0 0 0 0 1.17l2.572 2.572a.826.826 0 0 0 1.17 0l.002-1.851h6.539c3.711 0 4.523-2.442 4.523-3.421V9.453c0-.827-.672-1.411-1.5-1.411"></svg:path>`,
})
export class SiGlyphArrowChangeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowCircleRycycleIcon],svg[si-glyph-arrow-circle-rycycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.945 9.738l-1.439-.426c.007-.133.017-.264.017-.396c0-3.53-2.419-6.593-5.752-7.281L9.51 2.996c2.709.561 4.675 3.049 4.675 5.92v.006l-1.302-.385a.586.586 0 0 0-.213.781l1.182 2.207c.15.276.486.375.754.223l2.127-1.229a.586.586 0 0 0 .212-.781M2.438 8.626c0-2.353 1.326-4.454 3.3-5.44l.612 1.658a.59.59 0 0 0 .788-.314l1.071-2.49a.63.63 0 0 0-.304-.818l-2.4-1.11a.587.587 0 0 0-.788.313l.541 1.465C2.778 3.083 1.1 5.695 1.1 8.627c0 .824.135 1.646.404 2.443l1.262-.457a6.3 6.3 0 0 1-.328-1.987m6.275 5.981c-1.046 0-2.065-.263-2.955-.811l1.127-1.188a.59.59 0 0 0-.603-.595H3.656a.607.607 0 0 0-.593.625l.018 2.728a.606.606 0 0 0 .604.614l1.116-1.176a6.9 6.9 0 0 0 3.912 1.19c2.013 0 3.946-.895 5.305-2.454l-.992-.931c-1.106 1.27-2.678 1.998-4.313 1.998"></svg:path>`,
})
export class SiGlyphArrowCircleRycycleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowDownIcon],svg[si-glyph-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.16 6.246c.225 0 .45.062.65.196l6.229 4.156l6.037-4.197a1.175 1.175 0 0 1 1.304 1.958l-6.688 4.63a1.17 1.17 0 0 1-1.304.002l-6.88-4.589a1.178 1.178 0 0 1 .652-2.156"></svg:path>`,
})
export class SiGlyphArrowDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowForwardIcon],svg[si-glyph-arrow-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.584 5.988l-5.24-4.645c-.404-.41-.879-.479-1.283-.068v3.132l-.227-.001c-4.95 0-8.75 3.563-8.75 8.41c0 1.688.766 1.073 1.083.484c1.501-2.78 4.267-4.677 7.705-4.677l.188.001v3.065c.404.41.929.361 1.283.068l5.24-4.283c.405-.41.405-1.075.001-1.486"></svg:path>`,
})
export class SiGlyphArrowForwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowFourWayIcon],svg[si-glyph-arrow-four-way-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.844 7.747l-2.062-2.591a.55.55 0 0 0-.779 0v1.875H9.989V2.969h1.855a.56.56 0 0 0 0-.78L9.391.188a.54.54 0 0 0-.771 0L6.188 2.189a.554.554 0 0 0 0 .78H8.01v4.062H3.985V5.172a.55.55 0 0 0-.779 0S1.012 7.576 1.012 8.07c0 .428 2.194 2.68 2.194 2.68a.55.55 0 0 0 .779 0V8.984H8.01v4.047H6.172a.54.54 0 0 0 0 .76s2.332 2.192 2.826 2.192c.43 0 2.846-2.192 2.846-2.192a.54.54 0 0 0 0-.76H9.989V8.984h4.014v1.812a.55.55 0 0 0 .779 0l2.062-2.27a.55.55 0 0 0 0-.779"></svg:path>`,
})
export class SiGlyphArrowFourWayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowFullscreenIcon],svg[si-glyph-arrow-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.196.083h-3.867a.69.69 0 0 0-.688.69l1.588 1.594l-1.917 1.917a.98.98 0 0 0 0 1.39a.984.984 0 0 0 1.391 0l1.914-1.915l1.579 1.585c.38 0 .687-.31.687-.69V.773c0-.38-.307-.69-.687-.69m-.004 10.562l-1.619 1.612l-1.952-1.952a.983.983 0 1 0-1.392 1.39l1.951 1.95l-1.56 1.554c0 .38.309.687.69.687h3.881c.381 0 .69-.307.69-.687v-3.866a.686.686 0 0 0-.689-.688M4.758 2.359L6.342.78a.69.69 0 0 0-.691-.687h-3.88a.69.69 0 0 0-.69.687v3.866c0 .381.31.688.69.688l1.595-1.587l1.969 1.968a.98.98 0 0 0 1.39 0a.983.983 0 0 0 0-1.389zm1.193 7.286l-2.59 2.59l-1.594-1.601a.69.69 0 0 0-.688.69v3.881c0 .381.309.69.688.69h3.867a.69.69 0 0 0 .687-.69L4.75 13.627l2.592-2.592a.982.982 0 1 0-1.391-1.39"></svg:path>`,
})
export class SiGlyphArrowFullscreenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowFullscreen2Icon],svg[si-glyph-arrow-fullscreen-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.988 6.979A1.01 1.01 0 0 0 16 5.97V1.008a1.01 1.01 0 0 0-1.012-1.009h-4.977a1.01 1.01 0 0 0-1.012 1.009l1.58 1.575l-2.57 2.57l-2.57-2.57l1.58-1.575A1.01 1.01 0 0 0 6.007-.001H1.03A1.01 1.01 0 0 0 .018 1.008V5.97A1.01 1.01 0 0 0 1.03 6.979l1.59-1.585l2.574 2.574l-2.596 2.597L1.028 9C.471 9 .019 9.45.019 10.006v4.946c0 .555.452 1.006 1.009 1.006H5.99c.558 0 1.009-.451 1.009-1.006l-1.582-1.577l2.592-2.592l2.592 2.592l-1.582 1.577c0 .555.451 1.006 1.009 1.006h4.962c.557 0 1.009-.451 1.009-1.006v-4.946C15.999 9.45 15.547 9 14.99 9l-1.57 1.565l-2.596-2.597l2.574-2.574z"></svg:path>`,
})
export class SiGlyphArrowFullscreen2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowLeftIcon],svg[si-glyph-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.978 1.162c0 .225-.062.45-.196.65L6.626 8.041l4.197 6.037c.359.541.213 1.27-.328 1.629a1.174 1.174 0 0 1-1.63-.325l-4.63-6.688a1.17 1.17 0 0 1-.002-1.304L8.822.51a1.178 1.178 0 0 1 2.156.652"></svg:path>`,
})
export class SiGlyphArrowLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowLeftRightIcon],svg[si-glyph-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 9h8.066v2.864l3.85-3.82l-3.85-4.013L13 7H5l-.114-2.97L1.03 8.07l3.856 3.866z"></svg:path>`,
})
export class SiGlyphArrowLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowMoveIcon],svg[si-glyph-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.946 9.976c1.075 0 2.044-.89 2.044-1.988S9.02 6 7.946 6S6 6.89 6 7.988s.871 1.988 1.946 1.988M5.21 3.984c-.198-.229-.236-.68-.034-.914L7.55.136a.466.466 0 0 1 .729-.005l2.537 2.951c.202.229.202.67 0 .902zm5.61 8.057a.47.47 0 0 1 0 .688l-2.506 3.104a.59.59 0 0 1-.725 0l-2.365-3.104a.467.467 0 0 1 0-.686l5.597-.002zm2.11-6.773l2.934 2.306a.5.5 0 0 1 .006.76l-2.948 2.411c-.228.207-.654.211-.886 0V5.262s.661-.204.894.006m-8.917 5.521c-.23.209-.688.207-.917 0L.164 8.33a.502.502 0 0 1 .004-.76l2.908-2.357c.229-.207.707-.209.937 0z"></svg:path>`,
})
export class SiGlyphArrowMoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowReloadIcon],svg[si-glyph-arrow-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.796 8.908L15.234 7.21a.553.553 0 0 0-.776 0l-1.564 1.698a.543.543 0 0 0 0 .772h1.294a5.35 5.35 0 0 1-3.789 3.79a5.38 5.38 0 0 1-5.767-2.119l-1.091.751a6.71 6.71 0 0 0 7.196 2.643A6.67 6.67 0 0 0 15.55 9.68h1.245a.544.544 0 0 0 .001-.772M5.475 8.021a.543.543 0 0 0 0-.772H4.018a5.34 5.34 0 0 1 3.771-3.738a5.37 5.37 0 0 1 5.766 2.121l1.092-.752a6.71 6.71 0 0 0-7.199-2.645a6.67 6.67 0 0 0-4.8 5.014H1.196a.543.543 0 0 0 0 .772l1.638 1.637a.553.553 0 0 0 .776 0z"></svg:path>`,
})
export class SiGlyphArrowReloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize1Icon],svg[si-glyph-arrow-resize-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.995 10.852L5.133 9.008l-3.026 2.98L.062 9.972v5.903h5.987l-2.076-2.047zM9.961.008l2.097 2.087l-3.053 3.033l1.88 1.88l3.057-3.038l1.967 1.996V.008z"></svg:path>`,
})
export class SiGlyphArrowResize1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize2Icon],svg[si-glyph-arrow-resize-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.075 6.95l1.843-1.862l-2.98-3.026L5.955.018H.052v5.986l2.046-2.076zm10.928 2.966l-2.171 2.097l-3.033-3.053l-1.881 1.881l3.039 3.056l-1.996 2.084h6.042z"></svg:path>`,
})
export class SiGlyphArrowResize2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize3Icon],svg[si-glyph-arrow-resize-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.995 1.852L14.133.008l-3.026 2.98L9.062.972v5.903h5.987l-2.076-2.047zM.961 9.008l2.097 2.087l-3.053 3.033l1.88 1.88l3.057-3.038l1.967 1.996V9.008z"></svg:path>`,
})
export class SiGlyphArrowResize3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize4Icon],svg[si-glyph-arrow-resize-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.12 16.003L16 14.122l-3.038-3.057L15.018 9H9v6.047l2.087-2.097zM7 .969L4.913 3.065L1.88.013L0 1.894L3.038 4.95L1.042 6.917H7z"></svg:path>`,
})
export class SiGlyphArrowResize4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize5Icon],svg[si-glyph-arrow-resize-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.988 0h-4.977a1.01 1.01 0 0 0-1.012 1.009l1.58 1.575l-7.98 7.981L1.029 9C.472 9 .02 9.45.02 10.006v4.946c0 .555.452 1.006 1.009 1.006h4.962c.558 0 1.009-.451 1.009-1.006l-1.582-1.577l7.98-7.98l1.59 1.585A1.01 1.01 0 0 0 16 5.971V1.009A1.01 1.01 0 0 0 14.988 0"></svg:path>`,
})
export class SiGlyphArrowResize5Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowResize6Icon],svg[si-glyph-arrow-resize-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.031 0h4.977A1.01 1.01 0 0 1 7.02 1.009L5.44 2.584l7.98 7.981L14.99 9c.557 0 1.009.45 1.009 1.006v4.946c0 .555-.452 1.006-1.009 1.006h-4.962a1.007 1.007 0 0 1-1.009-1.006l1.582-1.577l-7.98-7.98l-1.59 1.585A1.01 1.01 0 0 1 .019 5.971V1.009A1.01 1.01 0 0 1 1.031 0"></svg:path>`,
})
export class SiGlyphArrowResize6Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowRightIcon],svg[si-glyph-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.077 1.162c0 .225.062.45.196.65l4.156 6.229l-4.197 6.037a1.175 1.175 0 0 0 .328 1.629a1.174 1.174 0 0 0 1.63-.325l4.63-6.688c.264-.394.266-.908.002-1.304L8.233.51a1.178 1.178 0 0 0-2.156.652"></svg:path>`,
})
export class SiGlyphArrowRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowShuffleIcon],svg[si-glyph-arrow-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.121 5.958h1.934v.854a.55.55 0 0 0 .778 0l1.965-1.352a.55.55 0 0 0 0-.778l-1.965-1.495a.55.55 0 0 0-.778 0v.849H12.09c-.195-.008-1.936-.032-3.238 1.222c-.857.824-1.292 1.662-1.292 3.103c0 .873-.226 1.534-.669 1.964c-.697.675-1.771.742-1.818.741H1.084v1.898l4.062.002c.451 0 1.955-.09 3.113-1.194c.861-.819 1.297-1.968 1.297-3.411c0-.873.226-1.226.672-1.662c.702-.686 1.86-.737 1.893-.741m4.719 5.729l-2.027-1.52a.55.55 0 0 0-.778 0v.914h-2.154s-.653.008-1.28-.282l-.909 1.653c.964.445 1.906.48 2.163.48l.063-.001h2.117v.901a.55.55 0 0 0 .778 0l2.027-1.369a.55.55 0 0 0 0-.776M6.555 6.329l1.052-1.618c-1.188-.666-2.445-.633-2.54-.63H1v1.89l4.111-.001c.012.004.778-.015 1.444.359"></svg:path>`,
})
export class SiGlyphArrowShuffleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickDownIcon],svg[si-glyph-arrow-thick-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.327 15.886l5.447-5.94a.65.65 0 0 0-.002-.849l-3.841-.005V1.068c0-.553-.437-1-.976-1H7.004a.987.987 0 0 0-.976 1v8.02l-3.95-.005a.65.65 0 0 0 .004.848l5.485 5.954a.5.5 0 0 0 .76.001"></svg:path>`,
})
export class SiGlyphArrowThickDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickLeftIcon],svg[si-glyph-arrow-thick-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.133 8.367l5.94 5.346a.65.65 0 0 0 .849-.002l.005-3.728h8.024a.99.99 0 0 0 1-.982V7.035a.99.99 0 0 0-1-.982h-8.02l.005-3.81a.65.65 0 0 0-.848.003L.134 7.603a.503.503 0 0 0-.001.764"></svg:path>`,
})
export class SiGlyphArrowThickLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickRightIcon],svg[si-glyph-arrow-thick-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.818 7.646l-5.94-5.44a.64.64 0 0 0-.849.002l-.005 3.793H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8.019l-.006 3.877a.64.64 0 0 0 .849-.003l5.954-5.452a.518.518 0 0 0 .002-.777"></svg:path>`,
})
export class SiGlyphArrowThickRightIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickThinDownIcon],svg[si-glyph-arrow-thick-thin-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.336 8.667c.199 0 .404.045.596.141l6.07 3.034l6.069-3.034a1.332 1.332 0 1 1 1.192 2.385l-6.666 3.333a1.33 1.33 0 0 1-1.193 0l-6.666-3.333a1.332 1.332 0 0 1 .598-2.526"></svg:path><svg:path d="M2.336 4.334q.151-.001.297.07l6.369 3.184l6.367-3.184a.67.67 0 0 1 .895.298a.67.67 0 0 1-.299.895L9.299 8.93a.67.67 0 0 1-.596 0L2.037 5.597a.668.668 0 0 1 .299-1.263"></svg:path></svg:g>`,
})
export class SiGlyphArrowThickThinDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickThinUpIcon],svg[si-glyph-arrow-thick-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.666 8.333c-.201 0-.404-.045-.596-.141L9.002 5.158L2.931 8.192a1.332 1.332 0 1 1-1.192-2.385l6.666-3.333a1.33 1.33 0 0 1 1.193 0l6.666 3.333a1.332 1.332 0 0 1-.598 2.526"></svg:path><svg:path d="M15.666 12.666a.66.66 0 0 1-.297-.07L9.002 9.412l-6.369 3.184a.667.667 0 1 1-.596-1.193L8.703 8.07a.67.67 0 0 1 .596 0l6.666 3.333a.668.668 0 0 1-.299 1.263"></svg:path></svg:g>`,
})
export class SiGlyphArrowThickThinUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickUpIcon],svg[si-glyph-arrow-thick-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.65 1.158l-5.485 5.94a.65.65 0 0 0 .002.849l3.868.005v8.024c0 .553.439 1 .982 1h1.965a.99.99 0 0 0 .982-1v-8.02l3.811.005a.65.65 0 0 0-.004-.848L9.414 1.159a.506.506 0 0 0-.764-.001"></svg:path>`,
})
export class SiGlyphArrowThickUpIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinDownIcon],svg[si-glyph-arrow-thin-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.031 15.97L2.339 9.665c-.459-.459-.296-1.16-.094-1.359c.403-.402.998-.342 1.402.061l4.438 3.896L8.086.948a.94.94 0 0 1 .952-.927a.937.937 0 0 1 .95.927l.013 11.212l4.271-3.854a1.036 1.036 0 0 1 1.461 0c.405.4.304.95-.101 1.352z"></svg:path>`,
})
export class SiGlyphArrowThinDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinLeftIcon],svg[si-glyph-arrow-thin-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.042 8.01l6.305-6.693c.459-.459 1.16-.296 1.359-.094c.402.403.342.998-.061 1.402L4.749 7.063l11.315.002a.94.94 0 0 1 .927.952a.937.937 0 0 1-.927.95L4.852 8.98l3.854 4.271a1.036 1.036 0 0 1 0 1.461c-.4.405-.95.304-1.352-.101z"></svg:path>`,
})
export class SiGlyphArrowThinLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinLeftBottomIcon],svg[si-glyph-arrow-thin-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.124 15.922l-.017-8.721c0-.648.611-1.029.895-1.027c.57.001.948.464.949 1.034l.01 5.347L15.355.355a.94.94 0 0 1 1.327.018A.936.936 0 0 1 16.7 1.7L4.554 14.012l5.333.008c.57.002 1.033.465 1.033 1.033c.003.57-.457.887-1.027.885z"></svg:path>`,
})
export class SiGlyphArrowThinLeftBottomIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinLeftTopIcon],svg[si-glyph-arrow-thin-left-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.885.006c.573-.002 1.075.403 1.073.974c0 .568-.507.942-1.079.944l-5.354.008l12.193 12.312a.934.934 0 0 1-.018 1.327a.95.95 0 0 1-1.334.018l-12.44-12.2l-.011 5.569c-.001.57-.381 1.033-.952 1.034c-.285.002-.898-.379-.898-1.027L1.082.022z"></svg:path>`,
})
export class SiGlyphArrowThinLeftTopIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinRightIcon],svg[si-glyph-arrow-thin-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.992 7.98l-6.305 6.693c-.459.459-1.16.296-1.359.094c-.402-.403-.342-.998.061-1.402l3.895-4.438L1.97 8.925a.94.94 0 0 1-.927-.952a.937.937 0 0 1 .927-.95l11.212-.013l-3.855-4.271a1.036 1.036 0 0 1 0-1.461c.4-.405.95-.304 1.352.101z"></svg:path>`,
})
export class SiGlyphArrowThinRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinRightBottomIcon],svg[si-glyph-arrow-thin-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.148 15.938c-.573.002-1.034-.314-1.032-.885c0-.568.465-1.031 1.038-1.033l5.353-.008L1.314 1.7A.934.934 0 0 1 1.331.373A.95.95 0 0 1 2.665.355l12.441 12.2l.01-5.347c.002-.57.381-1.033.953-1.034c.285-.002.898.379.898 1.027l-.017 8.721z"></svg:path>`,
})
export class SiGlyphArrowThinRightBottomIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinRightTopIcon],svg[si-glyph-arrow-thin-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.908.021l.017 8.931c0 .648-.611 1.029-.895 1.027c-.57-.001-.948-.464-.949-1.034l-.01-5.557l-12.394 12.2a.94.94 0 0 1-1.328-.018c-.372-.372-.381-.966-.017-1.327L13.478 1.931l-5.333-.008c-.57-.002-1.062-.376-1.062-.944C7.08.409 7.568.003 8.14.005z"></svg:path>`,
})
export class SiGlyphArrowThinRightTopIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThinUpIcon],svg[si-glyph-arrow-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.002.02l6.693 6.305c.459.459.297 1.16.094 1.359c-.402.402-.998.342-1.402-.061L9.949 3.728l-.002 11.314a.94.94 0 0 1-.951.928a.94.94 0 0 1-.951-.928L8.033 3.831L3.762 7.685a1.036 1.036 0 0 1-1.461 0c-.404-.4-.303-.949.102-1.352z"></svg:path>`,
})
export class SiGlyphArrowThinUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThreeWay1Icon],svg[si-glyph-arrow-three-way-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.816 3.989a.577.577 0 0 0 0-.817L8.433.169a.58.58 0 0 0-.818 0L5.232 3.172a.577.577 0 0 0 0 .817h1.811v11.979h1.936V3.989z"></svg:path><svg:path d="m14.516 5.008l-2.986.35a.46.46 0 0 0-.454.462l.808.821l-1.86 1.89v7.47h1.956V9.359l1.29-1.306l.903.92a.46.46 0 0 0 .455-.462l.342-3.042a.46.46 0 0 0-.454-.461M5.002 8.842a.463.463 0 0 0-.462-.462L1.5 8.031a.46.46 0 0 0-.463.461l.35 3.04c0 .256.207.463.462.463l.884-.883l1.314 1.622v3.197l1.9.052v-4.025L4.129 9.714z"></svg:path></svg:g>`,
})
export class SiGlyphArrowThreeWay1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThreeWay2Icon],svg[si-glyph-arrow-three-way-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.062 4.938L8.958.059L6.03 4.94H8v1.806c0 .74.234 1.161.974 1.161c.737 0 .995-.421.995-1.161V4.939zm-1.021 9.996l5.782-.006l-2.552-5.087l-1.055 1.662l-1.525-.968c-.625-.397-1.105-.424-1.502.2c-.396.622-.178 1.065.447 1.462l1.525.968zm-4.102-.084l-5.782-.006l2.552-5.087l1.055 1.662l1.525-.968c.625-.397 1.106-.424 1.502.2c.395.622.178 1.065-.447 1.462l-1.525.968z"></svg:path>`,
})
export class SiGlyphArrowThreeWay2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTriangleRecycleIcon],svg[si-glyph-arrow-triangle-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.9 12.815L14.873 9.48A.61.61 0 0 0 14 9.281a.693.693 0 0 0-.187.926l1.398 2.357h-2.996v-1.439c-.12-.129-.309-.137-.422-.017l-2.04 1.827c-.112.121-.106.322.015.451l2.023 1.475c.122.128.311.135.423.014v-1.026h4.154a.63.63 0 0 0 .554-.35a.71.71 0 0 0-.024-.684zm-10.957-.207H2.861l1.68-2.752l.883.656a.32.32 0 0 0 .26-.37L5.55 7.316a.31.31 0 0 0-.365-.254l-2.515.832a.327.327 0 0 0-.258.372l1.07.799l-2.3 3.801a.72.72 0 0 0-.024.704a.64.64 0 0 0 .569.361H6c.357 0 .647-.31.647-.691s-.345-.632-.704-.632m4.079-5.991l2.458.842c.158.032.31-.087.342-.266l.157-2.716c.03-.179-.071-.348-.227-.379l-.9.65l-2.05-3.37c-.23-.382-.826-.383-1.058.001L6.84 4.512a.696.696 0 0 0 .187.927a.61.61 0 0 0 .873-.2l1.374-2.261l1.535 2.525l-1.013.732c-.033.18.068.35.226.382"></svg:path>`,
})
export class SiGlyphArrowTriangleRecycleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoLeftRightIcon],svg[si-glyph-arrow-two-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.688 7.716a.84.84 0 0 0 1.17 0V5.992h9.641c.828 0 1.5-.66 1.5-1.472s-.672-1.472-1.5-1.472H4.858V1.249a.84.84 0 0 0-1.17 0l-2.48 2.708a.8.8 0 0 0 0 1.146zm12.07 3.114l-2.573-2.538a.834.834 0 0 0-1.171 0v1.731H2.583c-.828 0-1.5.664-1.5 1.481s.672 1.481 1.5 1.481h9.431v1.732a.84.84 0 0 0 1.171 0l2.573-2.538c.322-.318.322-1.031 0-1.349"></svg:path>`,
})
export class SiGlyphArrowTwoLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoUpIcon],svg[si-glyph-arrow-two-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.973 5.175l5.002 3.744v-3.94L8.973 1.036L4.004 5.078v3.918l.012.011zm0 7.783l5.002 3.951v-3.938L8.973 9.005l-4.969 4.064v3.918l.012.01z"></svg:path>`,
})
export class SiGlyphArrowTwoUpIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoWayIcon],svg[si-glyph-arrow-two-way-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.8 10.167a.55.55 0 0 0-.779 0v.888H9.98c-.345-.073-2.035-.643-2.035-3.144c0-2.456 1.563-2.894 1.972-2.96H13v.903a.55.55 0 0 0 .779 0l2.06-1.427a.55.55 0 0 0 0-.779l-2.06-1.481a.55.55 0 0 0-.779 0v.847l-3.261.006c-1.198.131-3.314 1.176-3.711 4.022H1c-.553 0-1 .377-1 .929a1 1 0 0 0 1 1h5.044c.437 2.75 2.53 3.814 3.698 3.989l3.278.01v.863a.55.55 0 0 0 .779 0l2.039-1.405a.55.55 0 0 0 0-.779z"></svg:path>`,
})
export class SiGlyphArrowTwoWayIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoWayLeftRightIcon],svg[si-glyph-arrow-two-way-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.763 2.989L14.203.385c-.294-.3-.918-.3-1.211 0v1.814c-1.459.062-3.101.913-3.992 2.144c-.893-1.23-2.651-2.082-4.109-2.144V.385c-.295-.3-.918-.3-1.212 0L1.237 2.989a.776.776 0 0 0 0 1.085l2.442 2.603c.294.3.917.3 1.212 0V4.915c1.401.088 3.156 1.255 3.156 2.689v7.333h1.875V7.604c0-1.435 1.668-2.602 3.07-2.689v1.762c.293.3.917.3 1.211 0l2.56-2.603a.776.776 0 0 0 0-1.085"></svg:path>`,
})
export class SiGlyphArrowTwoWayLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoWayRightIcon],svg[si-glyph-arrow-two-way-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.276 6.716a.84.84 0 0 1-1.17 0V4.992H2.464c-.827 0-1.5-.66-1.5-1.472s.673-1.472 1.5-1.472h9.642V.249a.84.84 0 0 1 1.17 0l2.48 2.708a.8.8 0 0 1 0 1.146zm2.482 4.114l-2.573-2.538a.834.834 0 0 0-1.171 0v1.731H2.583c-.828 0-1.5.664-1.5 1.481s.672 1.481 1.5 1.481h9.431v1.732a.84.84 0 0 0 1.171 0l2.573-2.538c.322-.318.322-1.031 0-1.349"></svg:path>`,
})
export class SiGlyphArrowTwoWayRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowTwoWayRightBottomIcon],svg[si-glyph-arrow-two-way-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.807 2.894L14.049.135a.666.666 0 0 0-.944.005l-.01 1.963H4.383c-.738 0-1.336.599-1.336 1.335v8.622l-1.912.012a.666.666 0 0 0 .006.943l2.787 2.786a.663.663 0 0 0 .943.006l2.758-2.758c.26-.26.258-.756-.005-1.018l-1.666.012V5.941c0-.738.272-.983 1.011-.983h6.112l-.01 1.671c.26.259.681.257.942-.005l2.789-2.787a.667.667 0 0 0 .005-.943"></svg:path>`,
})
export class SiGlyphArrowTwoWayRightBottomIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowUpIcon],svg[si-glyph-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.812 9.896a1.15 1.15 0 0 1-.65-.197l-6.23-4.156L2.895 9.74a1.175 1.175 0 0 1-1.629-.328a1.173 1.173 0 0 1 .326-1.629L8.28 3.152a1.175 1.175 0 0 1 1.303-.002l6.881 4.59a1.176 1.176 0 0 1-.652 2.156"></svg:path>`,
})
export class SiGlyphArrowUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowUpDownIcon],svg[si-glyph-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.021 3.961V12H5.062l3.819 3.991L12.896 12H10V3.961h2.896L8.857.105L4.991 3.961z"></svg:path>`,
})
export class SiGlyphArrowUpDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowWaveIcon],svg[si-glyph-arrow-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.031 7.125V9h-2.062l-.004-4H8.016l.027 6H5.984L5.98 7.031H2.035L2.031 9H1.004v1h1.949l.004-2h2.07l.004 4h3.922l.004-6h2.059l.004 4h3.011v1.958L17 9.5z"></svg:path>`,
})
export class SiGlyphArrowWaveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphArtBoardIcon],svg[si-glyph-art-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.953 12.938H3.046V3.022h9.907zm-8.99-.876h8.135V3.833H3.963zM12 0h.959v1.943H12zM3 0h.959v1.984H3zm9 14h.938v1.922H12zm-9 0h.959v1.984H3zm11-2h1.875v.994H14zM0 12h1.855v.918H0zm14-9h1.98v.938H14zM0 3h1.938v.957H0z"></svg:path>`,
})
export class SiGlyphArtBoardIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAskteriskIcon],svg[si-glyph-askterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.991 6.153c-.351 0-1.952.454-3.948.788c1.422-1.581 2.768-2.755 2.961-3.062c.576-.917.235-2.092-.763-2.622c-.999-.53-2.274-.216-2.852.702c-.19.305-.622 1.949-1.39 3.86c-.768-1.911-1.199-3.556-1.388-3.86c-.579-.918-1.854-1.232-2.852-.702c-.998.531-1.34 1.705-.762 2.622c.19.307 1.537 1.48 2.961 3.062c-1.998-.334-3.6-.788-3.95-.788c-1.08 0-1.955.842-1.955 1.882c0 1.038.875 1.88 1.955 1.88c.351 0 1.93-.448 3.907-.782c-1.408 1.557-2.731 2.711-2.92 3.014c-.576.92-.234 2.092.764 2.624c.998.528 2.273.216 2.851-.703c.19-.304.622-1.948 1.39-3.86c.769 1.912 1.199 3.557 1.392 3.86c.575.919 1.851 1.233 2.85.703c.998-.531 1.339-1.704.763-2.622c-.189-.305-1.511-1.459-2.918-3.016c1.978.334 3.557.782 3.905.782c1.08 0 1.956-.842 1.956-1.88c-.001-1.04-.877-1.882-1.957-1.882"></svg:path>`,
})
export class SiGlyphAskteriskIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAtmCardIcon],svg[si-glyph-atm-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.666 3.07H2.333C1.597 3.07 1 3.641 1 4.347v.639h16v-.639c0-.705-.598-1.277-1.334-1.277M1 11.648c0 .731.597 1.323 1.333 1.323h13.333c.736 0 1.334-.592 1.334-1.323V7.07H1zm6-2.745h4v1.125H7zm-2.042 2.03H13v1.096H4.958z"></svg:path>`,
})
export class SiGlyphAtmCardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphAxeIcon],svg[si-glyph-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.038 8.5c-.671.672-2.108.652-4.198-1.438C.752 4.974.793 3.474 1.402 2.865c.61-.61.883.455 2.363-.471C5.244 1.466 5.564.487 6.081 1.003L8.897 3.82c.518.517-.797 1.173-1.39 2.316c-.549 1.065.202 1.694-.469 2.364m9.259 6.457c-.142.143-.461.053-.715-.201l-6.961-6.96c-.252-.253-.344-.573-.201-.716l.577-.576c.141-.143.462-.051.716.201l6.959 6.961c.254.253.344.572.201.715z"></svg:path><svg:path d="M3.008.137h.972v1.702h-.972z"></svg:path></svg:g>`,
})
export class SiGlyphAxeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBabyIcon],svg[si-glyph-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.975 1.988A1.98 1.98 0 0 1 9 3.971a1.98 1.98 0 0 1-1.972-1.983C7.028.892 7.914.005 9 .005a1.98 1.98 0 0 1 1.975 1.983m-.121 8.044c.3.31.104.456-.005.565l-1.023 1.132c-.299.311-1.379.312-1.677.002l-.999-1.113c-.06-.061-.297-.254.005-.566zm.021-4.682a1.37 1.37 0 0 0-.862-.315h-2.02c-.328 0-.63.126-.876.328a503 503 0 0 0-2.036 2.774a.464.464 0 0 0 .087.589a.35.35 0 0 0 .277.07a.37.37 0 0 0 .239-.171L7.02 7.581v.979s-.182.397.459.397h3.11c.348 0 .41-.397.41-.397v-.951l1.336 1.028a.37.37 0 0 0 .241.172a.34.34 0 0 0 .276-.071a.46.46 0 0 0 .089-.589s-2.01-2.769-2.066-2.799M7.421 15.964c-.173 0-.524-.126-.626-.3l-1.266-2.309c-.145-.244.912-2.254.912-2.254l1.154 1.281s-.567.655-.586.84s.854 1.793.854 1.793c.167.276.103.656-.144.844a.48.48 0 0 1-.298.105m3.11 0c.174 0 .525-.126.628-.3l1.265-2.309c.145-.244-.911-2.254-.911-2.254l-1.154 1.281s.568.655.587.84s-.855 1.793-.855 1.793c-.167.276-.103.656.143.844a.48.48 0 0 0 .297.105"></svg:path>`,
})
export class SiGlyphBabyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBabyMilkBotlIcon],svg[si-glyph-baby-milk-botl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.443 5H6.566c-.947 0-1.518.674-1.518 1.453v8.133c0 .776.766 1.406 1.711 1.406h4.49c.946 0 1.711-.63 1.711-1.406V6.453C12.961 5.674 12.39 5 11.443 5m.577 9.243c0 .436-.525.792-1.17.792H7.14c-.646 0-1.169-.356-1.169-.792V7.574c0-.22.141-1.214 3.059-.329c2.92.889 2.99.113 2.99.329zM10.982 2.958L9.71 1.992V.683c0-.382-.332-.691-.741-.691c-.408 0-.739.31-.739.691v1.284l-1.181.99l-.031-.004V4h3.965V2.954v.004z"></svg:path>`,
})
export class SiGlyphBabyMilkBotlIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBabyStrollerIcon],svg[si-glyph-baby-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.002 12.037a1.96 1.96 0 0 0-1.967 1.955c0 1.08.882 1.956 1.967 1.956a1.96 1.96 0 0 0 1.967-1.956a1.96 1.96 0 0 0-1.967-1.955m0 3.174a1.22 1.22 0 0 1-1.225-1.219c0-.674.549-1.219 1.225-1.219s1.227.545 1.227 1.219s-.551 1.219-1.227 1.219m7.991-3.174a1.955 1.955 0 1 0 .001 3.913a1.955 1.955 0 0 0-.001-3.913m0 3.176a1.22 1.22 0 1 1 .003-2.439a1.22 1.22 0 0 1-.003 2.439M11.121 0S8.65 3.41 8.338 4.908h7.57C15.908-.643 13.117 0 11.121 0"></svg:path><svg:path d="M15.943 6.107H6.396L4.093 4.041H.509c-.28 0-.507.208-.507.465c0 .256.227.463.507.463h3.163l1.27 1.139H.068C.136 9.29-.68 11.92 7.658 11.92c8.719 0 8.272-2.6 8.285-5.813"></svg:path></svg:g>`,
})
export class SiGlyphBabyStrollerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBabyTrollerIcon],svg[si-glyph-baby-troller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.954.007c-1.043 0-1.792.359-1.89 1.28L15 3.526c-.812-.958-2.083-1.786-3.346-2.239c-.471-.169-1.607-.461-1.607.147V5.29c0 .382-.209.755-.594.755H1.762c-.494 0-.72.548-.72 1.243c0 1.451.796 2.752 3.492 3.342l1.474 2.41H4.736a1.93 1.93 0 0 0-1.69-1.014c-1.065 0-2.046.866-2.046 1.933s.98 2.039 2.046 2.039c1.061 0 1.92-.96 1.931-2.02h6.045c.002 1.082.88 2.022 1.962 2.022S15 15.057 15 13.973c0-1.083-.934-1.959-2.016-1.959c-.744 0-1.383.417-1.716 1.026h-1.221l1.467-2.403c3.253-.739 4.455-2.64 4.455-4.711c0-.138-.069-4.343-.069-4.343c0-.49.403-.606 1.054-.606zm-9.74 13.035L5.43 10.794c.802.113 1.736.174 2.827.174c.874 0 1.65-.061 2.355-.164l-1.794 2.238z"></svg:path>`,
})
export class SiGlyphBabyTrollerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBackPackIcon],svg[si-glyph-back-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.033 6c-1.074 0-1.938.331-2.568.984c-1.451 1.507-1.443 3.436-1.44 4.996l.001.216c0 .805.281 1.254.941 1.501c.646.242 1.576.261 2.726.261h.682c2.55 0 3.666-.166 3.666-1.762l.001-.216c.004-1.561.01-3.489-1.44-4.996C10.971 6.331 10.106 6 9.033 6"></svg:path><svg:path d="M14.945 10.107c-.095-1.677-.371-3.577-1.139-5.116c.065.009.126.025.195.025c.544 0 .98-.276.98-.617v-.757c0-.342-.437-.618-.98-.618c-.541 0-.981.276-.981.618v.134a4.66 4.66 0 0 0-2.057-1.422v-1.32c0-.543-.509-.984-1.134-.984H8.183c-.625 0-1.135.441-1.135.984v1.323a4.7 4.7 0 0 0-2.126 1.521v-.236c0-.342-.426-.618-.954-.618c-.524 0-.952.276-.952.618v.757c0 .341.428.617.952.617c.09 0 .17-.018.252-.033c-.755 1.509-1.037 3.368-1.137 5.023c-2.139.031-2.066 2.221-2.066 3.114c0 .895.944.871 2.107.871V13.8c.497 2.198 2.941 2.142 5.887 2.142c2.901 0 5.318.059 5.867-2.035c1.167 0 2.098-.009 2.098-.835c.001-.832.058-2.836-2.031-2.965M7.953 1.313c0-.187.223-.345.488-.345h1.1c.266 0 .49.158.49.345v.803a6.4 6.4 0 0 0-1.02-.086c-.379 0-.726.039-1.059.094zm6.09 11.344c0 2.425-2.387 2.425-4.693 2.425h-.738c-1.315 0-2.387-.021-3.197-.298c-1.004-.344-1.492-1.04-1.492-2.127l-.002-.211c-.002-1.645-.01-4.706 1.771-6.397c.822-.778 1.928-1.174 3.291-1.174c1.36 0 2.465.396 3.289 1.174c1.782 1.691 1.774 4.753 1.771 6.397z"></svg:path></svg:g>`,
})
export class SiGlyphBackPackIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBackwardPageIcon],svg[si-glyph-backward-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m.252 4.516l3.905-3.25c.276-.288.593-.335.871-.048c0 0-.037 2.19-.006 2.19c.679 0 1.083.113 1.7.314A6.3 6.3 0 0 1 8.93 4.99c1.276 1.123 2.093 2.402 2.093 4.213c0 1.182-.523.752-.742.339c-1.035-1.945-2.923-2.928-5.282-2.928c-.03 0 .003 2.146.003 2.146a.607.607 0 0 1-.87.047l-3.88-3.25a.75.75 0 0 1 0-1.041"></svg:path><svg:path d="M1.954 9.079v4.983h13.118V4.937H9.871c-.275-.312-.619-.717-1.219-.919H16v10.964H1.08V8.258z"></svg:path></svg:g>`,
})
export class SiGlyphBackwardPageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBadgeNameIcon],svg[si-glyph-badge-name-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.997 5.883c-.528 0-.957-.212-.957-.991V1.856c0-.781.429-.856.957-.856s.956.075.956.856v3.036c0 .779-.428.991-.956.991"></svg:path><svg:path d="m11 4.938l.058.615c0 1.188-.922 1.497-2.059 1.497c-1.139 0-2.063-.309-2.063-1.497V5l-3.889-.062a1.986 1.986 0 0 0-2.006 2v7c0 1.132.896 1.992 2.006 1.992h11.908c1.105 0 2.003-.918 2.003-2.05V7.05c0-1.131-.897-2.05-2.003-2.05zm-4.5 3c.827 0 1.5.688 1.5 1.536c0 .846-.673 2.464-1.5 2.464c-.829 0-1.5-1.62-1.5-2.464c0-.848.672-1.536 1.5-1.536m3.483 6H3.002s-.12-1.987 1.672-1.987c.373.573.887 1.126 1.834 1.126c.949 0 1.399-.557 1.77-1.139c2.017 0 1.705 2 1.705 2M15 13.896h-4v-1h4zm0-2.004h-4v-1h4zm0-1.996h-4v-1h4z"></svg:path></svg:g>`,
})
export class SiGlyphBadgeNameIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBagIcon],svg[si-glyph-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492"></svg:path><svg:path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492m.55-.911V16h1.329c.327 0 .594-.254.594-.566V3.626c0-.314-.267-.565-.594-.565z"></svg:path><svg:path d="M1.645 3.061c-.33 0-.601.252-.601.565v11.808c0 .312.271.566.601.566h10.306l.006-12.939z"></svg:path></svg:g>`,
})
export class SiGlyphBagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBagPlusIcon],svg[si-glyph-bag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492"></svg:path><svg:path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492M11 13h5v1h-5z"></svg:path><svg:path d="M13 11h1v5h-1zm1.371-8h-1.329v7h1.923V3.565c0-.313-.267-.565-.594-.565M10 12h1.951l.005-9l-10.312.061c-.33 0-.601.252-.601.565V15.4c0 .312.271.6.601.6H12s-.05-.416-.049-1H10z"></svg:path></svg:g>`,
})
export class SiGlyphBagPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBagRemoveIcon],svg[si-glyph-bag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.494 4.011a.49.49 0 0 1-.489-.492a2.51 2.51 0 0 0-2.503-2.514A2.51 2.51 0 0 0 4 3.519a.49.49 0 1 1-.979 0C3.021 1.59 4.583.021 6.502.021c1.92 0 3.482 1.569 3.482 3.498a.49.49 0 0 1-.49.492"></svg:path><svg:path d="M12.492 4.011a.49.49 0 0 1-.488-.492c0-1.386-1.119-2.514-2.492-2.514a.49.49 0 0 1-.488-.492a.49.49 0 0 1 .488-.492c1.912 0 3.469 1.569 3.469 3.498a.49.49 0 0 1-.489.492M11 14h5v1h-5zm3.371-10.939h-1.329v9.897h1.923V3.626c0-.313-.267-.565-.594-.565"></svg:path><svg:path d="M11.951 13.047L11.956 3H1.644a.614.614 0 0 0-.601.6v11.773c0 .312.227.627.557.627H10v-2.953z"></svg:path></svg:g>`,
})
export class SiGlyphBagRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBalanceIcon],svg[si-glyph-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.953 14H6.016v1.031H5V16h7v-.969h-1.047zM8.016 4v8.953h.953V4H13.5L8.969 2.833V1.016h-.953v1.817L3.469 4zM3.492 5.979l1.9 4.005l.566-.207l-2.225-4.609c-.053-.098-.157-.16-.298-.152c-.128.005-.239.075-.279.175L1.012 9.8l.588.162zm9.69-.784l-2.158 4.619l.592.162l1.902-3.99L15.43 10l.57-.208l-2.238-4.619c-.053-.097-.16-.159-.299-.151c-.13.003-.24.075-.281.173m2.802 5.836c0 1.061-1.112 1.922-2.484 1.922s-2.484-.861-2.484-1.922zm-10 0c0 1.061-1.112 1.922-2.484 1.922s-2.484-.861-2.484-1.922z"></svg:path>`,
})
export class SiGlyphBalanceIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBalloonIcon],svg[si-glyph-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.998 13.272c-1.634 0-1.838-.415-1.863-.497c-.102-.352.514-1.103.996-1.512l-.027-.041c2.15-.667 3.807-4.533 3.807-6.773A4.446 4.446 0 0 0 7.469 0a4.446 4.446 0 0 0-4.442 4.449c0 2.35 1.818 6.486 4.121 6.849c-.393.462-.787 1.106-.611 1.702c.197.674.98.988 2.463.988c.123 0 .18.147.068.305c-.332.457-1.217.991-2.62.991V16c2.171 0 3.374-1.169 3.374-1.977a.73.73 0 0 0-.255-.572a.88.88 0 0 0-.569-.179M4.643 4.648c0 .688-.596.396-.596-.604c0-1.688 1.332-3.058 2.978-3.058c.978 0 1.269.613.595.613c-1.643.001-2.977 1.36-2.977 3.049"></svg:path>`,
})
export class SiGlyphBalloonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBandageIcon],svg[si-glyph-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.927 10.543C-.238 11.711-.25 13.59.902 14.742l.354.354c1.151 1.15 3.029 1.139 4.195-.027l1.536-1.534l-4.525-4.523zm14.202-9.321l-.354-.354C13.623-.283 11.742-.27 10.57.899L9.008 2.463l4.527 4.525l1.562-1.563c1.169-1.169 1.182-3.052.032-4.203M3.469 7.969L8 12.469l4.562-4.438l-4.588-4.646zm4.557-1.943H6.979V4.979h1.047zm2 2.016H8.979V6.98h1.047zm-.015 2H8.98V8.98h1.031zm-2-2H6.98V6.98h1.031zm-2 0H4.98V6.98h1.031zm2.015 2H6.979V8.98h1.047z"></svg:path>`,
})
export class SiGlyphBandageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBankIcon],svg[si-glyph-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 14v-1h-1.002v-1H14V6.032h-.969V12H11V6.032h-1V12H8V6.032H7V12H5V6.032h-.99L4 12H3v1H2v1H1v1h16v-1zM3.021 6h11.958V5h1V4h-1.01L9.031.094L3.031 4H2v1h1.021z"></svg:path>`,
})
export class SiGlyphBankIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBarcodeIcon],svg[si-glyph-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2h1.953v10.914H14zm-3 0h1.967v10.914H11zM9 2h.95v10.914H9zM5 2h1.972v10.914H5zM3 2h.973v10.914H3zM1 2h.973v10.914H1z"></svg:path>`,
})
export class SiGlyphBarcodeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBarrierIcon],svg[si-glyph-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.703 2a.67.67 0 0 0-.667.673v3.494c0 .211.1.39.25.514a.65.65 0 0 0 .417.159s.305.019.305.028V15h1.007v-2h11.999v2h.994V6.868c0-.009.263-.028.263-.028a.67.67 0 0 0 .667-.673V2.673A.67.67 0 0 0 16.271 2zm9.308 1H13l-2.01 3H9zM6.729 3h1.713L6.713 6H5zm-1.752 7h2.039l-.963 2H4.016l.96-2zm4 0h2.039l-.963 2H8.016l.96-2zm4 0h2.039l-.963 2h-2.037zM2.095 5.71A.6.6 0 0 1 2 5.392V3.61c0-.337.26-.61.582-.61H4L2.582 6a.57.57 0 0 1-.487-.29M15 7.023V9H3V7h11.042c-.001.01.958.017.958.024zm.357-1.038h-1.31l1.762-3c.166.117.279.29.279.49v1.872c0 .354-.326.638-.731.638"></svg:path>`,
})
export class SiGlyphBarrierIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBaseballIcon],svg[si-glyph-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3.518 14.562c.916-.816 2.194-1.372 3.345-1.599c1.734-.341 3.031-1.979 3.019-3.812A3.16 3.16 0 0 0 8.916 6.9a3.1 3.1 0 0 0-2.14-.839l-.153.003c-1.808.081-2.85 1.008-3.376 3.007c-.318 1.22-1.033 2.495-1.836 3.4a8 8 0 0 0 2.107 2.091"></svg:path><svg:path d="M8 .046C3.591.046.016 3.603.016 7.989a7.9 7.9 0 0 0 .764 3.373c.545-.703 1.057-1.64 1.307-2.596c.663-2.52 2.13-3.795 4.484-3.899l.201-.005c1.119 0 2.176.417 2.977 1.175a4.36 4.36 0 0 1 1.332 3.105c.018 2.4-1.695 4.548-3.985 4.996c-.876.174-1.776.544-2.464 1.045a8 8 0 0 0 3.369.749c4.409 0 7.984-3.557 7.984-7.943S12.409.046 8 .046"></svg:path></svg:g>`,
})
export class SiGlyphBaseballIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBaseballStickIcon],svg[si-glyph-baseball-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.291 15.114l-.275-.277c3.4-4.055 6.998-5.629 9.898-8.164c2.951-2.579 3.102-2.885 3.45-3.234c.822-.822.87-2.105.109-2.867c-.763-.763-2.047-.715-2.869.107c-.349.348-.655.5-3.233 3.45c-2.535 2.901-4.457 6.485-8.185 9.881l-.276-.277c-.136-.136-.431-.06-.66.169s-.305.523-.168.66l1.382 1.381c.136.137.431.061.66-.168c.228-.229.305-.524.167-.661"></svg:path>`,
})
export class SiGlyphBaseballStickIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketIcon],svg[si-glyph-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.244 5.084h-1.928l-1.035-3.637a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.741 3.023H5.17l.768-3.019a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L3.672 5.083h-1.89c-.4 0-.725.302-.725.672c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309h7.021c2.145 0 2.115-1.336 2.115-1.336l.363-6.649h.766c.4 0 .725-1.22.725-1.22c-.001-.37-.326-.672-.726-.672M4.031 7.031H2.969V5.969h1.062zm2.031 5.711c0 .35-.251.633-.559.633H5.48c-.311 0-.561-.283-.561-.633V8.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm2.998-.195c0 .334-.237.605-.529.605H8.51c-.293 0-.529-.271-.529-.605V8.448c0-.334.236-.604.529-.604h.021c.292 0 .529.271.529.604zm2.968.092c0 .338-.245.611-.546.611h-.022c-.302 0-.545-.273-.545-.611V8.483c0-.338.243-.611.545-.611h.022c.301 0 .546.273.546.611zm2.003-5.577h-1.094V5.968h1.094z"></svg:path>`,
})
export class SiGlyphBasketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketArrowDownIcon],svg[si-glyph-basket-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.975 12.953h1.979V11h.306l.22-4.024h.766c.4 0 .725-1.22.725-1.22c0-.37-.324-.672-.725-.672h-1.928l-1.035-3.709a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.741 3.096H4.172L4.94 2a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L2.674 5.084H.784c-.4 0-.725.302-.725.672c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309h7.021c.574 0 .984-.1 1.289-.24zm.963-6.984h1.094v1.094h-1.094zM3.031 7.031H1.969V5.969h1.062zm2 5.554c0 .333-.237.603-.527.603h-.023c-.293 0-.529-.27-.529-.603V8.461c0-.333.236-.602.529-.602h.023c.29 0 .527.269.527.602zm3.03-.038c0 .334-.246.605-.543.605h-.024c-.301 0-.544-.271-.544-.605V8.448c0-.334.243-.604.544-.604h.024c.297 0 .543.271.543.604zm2.453.672h-.021c-.293 0-.529-.271-.529-.607V8.479c0-.336.236-.607.529-.607h.021c.291 0 .53.271.53.607v4.133c0 .335-.239.607-.53.607m2.517.828l1.469 1.87l1.488-1.87H15V12h-.965v2.047z"></svg:path>`,
})
export class SiGlyphBasketArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketArrowLeftIcon],svg[si-glyph-basket-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.461 13.486l2.725-2.14l.293-5.371h.766c.4 0 .725-1.22.725-1.22c0-.37-.363-.711-.764-.711h-1.928L11.271.374a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.713 3.057H4.132L4.918.979a.66.66 0 0 0-.282-.865L4.567.078a.616.616 0 0 0-.842.277L2.633 4.044H.743c-.4 0-.686.341-.686.711c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309h7.021c.019 0 .033-.004.052-.004zm1.477-8.517h1.094v1.094h-1.094zM3.031 6.031H1.969V4.969h1.062zm2.031 5.711c0 .35-.251.633-.559.633H4.48c-.311 0-.561-.283-.561-.633V7.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm2.998-.195c0 .334-.237.605-.529.605H7.51c-.293 0-.529-.271-.529-.605V7.448c0-.334.236-.604.529-.604h.021c.292 0 .529.271.529.604zm1.856.092V7.483c0-.338.243-.611.545-.611h.022c.301 0 .546.273.546.611v4.156c0 .338-.245.611-.546.611h-.022c-.302 0-.545-.273-.545-.611m4.027.383l-1.87 1.469l1.87 1.488v-.988h2.047v-.965h-2.047z"></svg:path>`,
})
export class SiGlyphBasketArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketArrowRightIcon],svg[si-glyph-basket-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.979 13.012c-.1.142-.323.238-.497.238h-.022c-.302 0-.545-.273-.545-.611V8.483c0-.338.243-.611.545-.611h.022c.301 0 .546.273.546.611v4.156a.65.65 0 0 1-.111.352h2.077V10.94l.257.2l.228-4.164h.766c.4 0 .725-1.22.725-1.22c0-.37-.324-.672-.725-.672h-1.928l-1.035-3.637a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.741 3.023H4.171l.768-3.019a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L2.673 5.083H.783c-.4 0-.725.302-.725.672c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309h7v-1.949zm.959-7.043h1.094v1.094h-1.094zM3.031 7.031H1.969V5.969h1.062zm2.031 5.711c0 .35-.251.633-.559.633H4.48c-.311 0-.561-.283-.561-.633V8.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm2.998-.195c0 .334-.237.605-.529.605H7.51c-.293 0-.529-.271-.529-.605V8.448c0-.334.236-.604.529-.604h.021c.292 0 .529.271.529.604zm6.01 3.412l1.868-1.448l-1.868-1.467v.974h-2.041v.951h2.041z"></svg:path>`,
})
export class SiGlyphBasketArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketArrowUpIcon],svg[si-glyph-basket-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.018 14.956l2.184-2.915l.277-5.091h.766c.4 0 .725-1.224.725-1.224c0-.371-.324-.674-.725-.674h-1.928l-1.035-3.646a.614.614 0 0 0-.838-.287l-.071.036a.66.66 0 0 0-.289.866l.741 3.031H4.171l.768-3.026a.66.66 0 0 0-.281-.868l-.07-.036a.615.615 0 0 0-.842.278L2.673 5.052H.783c-.4 0-.725.303-.725.674c0 0 .324 1.224.725 1.224h.636l.449 6.695s.052 1.312 2.113 1.312h7.021zm.92-9.016h1.094v1.097h-1.094zM3.031 7.006H1.969V5.941h1.062zm2.031 5.553c0 .332-.251.601-.559.601H4.48c-.311 0-.561-.269-.561-.601V8.452c0-.332.25-.6.561-.6h.023c.308 0 .559.268.559.6zm2.999-.022c0 .335-.251.607-.559.607h-.024c-.31 0-.56-.272-.56-.607v-4.11c0-.335.25-.606.56-.606h.024c.308 0 .559.271.559.606zm2.463.601h-.022c-.301 0-.544-.27-.544-.602V8.449c0-.333.243-.602.544-.602h.022c.302 0 .546.269.546.602v4.087c0 .332-.244.602-.546.602m5.465.846L14.51 12l-1.479 1.984h.99v1.995h.963v-1.995z"></svg:path>`,
})
export class SiGlyphBasketArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketCheckedIcon],svg[si-glyph-basket-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="m9.652 13.02l.28-.289c-.005-.031-.017-.059-.017-.092V8.483c0-.338.243-.611.545-.611h.021c.301 0 .546.273.546.611v3.113l.7-.725l1.125 1.117l.372-.386l.253-4.627h.766c.4 0 .725-1.22.725-1.22c0-.37-.324-.672-.725-.672h-1.928L11.28 1.446a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.741 3.023H4.169l.768-3.019a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L2.671 5.082H.781c-.4 0-.725.302-.725.672c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309H11c.215 0 .393-.021.566-.046zm2.286-7.051h1.094v1.094h-1.094zM3.031 7.031H1.969V5.969h1.062zm2.031 5.711c0 .35-.251.633-.559.633H4.48c-.311 0-.561-.283-.561-.633V8.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm2.999-.195c0 .334-.237.605-.529.605h-.021c-.293 0-.529-.271-.529-.605V8.448c0-.334.236-.604.529-.604h.021c.292 0 .529.271.529.604z"></svg:path><svg:path stroke="currentColor" d="M11.092 12.972L13 14.958l2.943-3.972"></svg:path></svg:g>`,
})
export class SiGlyphBasketCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketErrorIcon],svg[si-glyph-basket-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m11.504 13.524l-.566-.567c-.098.172-.261.293-.455.293h-.021c-.302 0-.545-.273-.545-.611V8.483c0-.338.243-.611.545-.611h.021c.301 0 .546.273.546.611v2.541l.991-.991l1.225 1.227l.234-4.342h.766c.4 0 .725-1.161.725-1.161c0-.37-.324-.672-.725-.672h-1.928l-1.035-3.729a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.741 3.116H4.171l.768-3.084a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L2.673 5.085H.783c-.4 0-.725.302-.725.672c0 0 .324 1.161.725 1.161h.636l.449 6.735s.052 1.309 2.113 1.309h6.089zm.434-7.555h1.094v1.094h-1.094zM3.031 7.031H1.969V5.969h1.062zm2.031 5.711c0 .35-.251.633-.559.633H4.48c-.311 0-.561-.283-.561-.633V8.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm3.04-.195c0 .334-.26.605-.578.605h-.025a.593.593 0 0 1-.58-.605V8.448c0-.334.259-.604.58-.604h.025c.318 0 .578.271.578.604z"></svg:path><svg:path d="M15.969 15.281L14.17 13.48l1.78-1.78l-.667-.663l-1.779 1.78l-1.77-1.77l-.707.708l1.769 1.77l-1.744 1.746l.664.663l1.745-1.745l1.8 1.8z"></svg:path></svg:g>`,
})
export class SiGlyphBasketErrorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketPlusIcon],svg[si-glyph-basket-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.927 12.918a.65.65 0 0 1-.067-.279V8.483c0-.338.286-.576.588-.576h.021c.301 0 .594.238.594.576v3.46h.902V9.982h1.293l.164-3.006h.766c.4 0 .725-1.22.725-1.22c0-.37-.324-.672-.725-.672H12.26l-1.035-3.637a.614.614 0 0 0-.838-.286l-.072.036a.66.66 0 0 0-.288.863l.741 3.023H4.114l.768-3.019a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L2.616 5.083H.726c-.4 0-.725.302-.725.672c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309h6.004v-2.043zM11.969 6h1.062v1.062h-1.062zM3.094 7.031H1.912V5.906h1.182zm1.912 5.711c0 .35-.251.633-.559.633h-.023c-.311 0-.561-.283-.561-.633V8.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm2.998-.195c0 .334-.23.605-.514.605h-.021c-.284 0-.514-.271-.514-.605V8.448c0-.334.229-.604.514-.604h.021c.283 0 .514.271.514.604z"></svg:path><svg:path d="M16 13.012h-2.008v-1.906h-.937v1.906h-2.003v.894h2.003v2.032h.937v-2.032H16z"></svg:path></svg:g>`,
})
export class SiGlyphBasketPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketRemoveIcon],svg[si-glyph-basket-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11 13h4.953v1H11z"></svg:path><svg:path d="M14.244 5.084h-1.928l-1.035-3.637a.614.614 0 0 0-.838-.286l-.071.036a.657.657 0 0 0-.289.863l.741 3.023H4.17l.768-3.019a.66.66 0 0 0-.281-.865l-.07-.036a.616.616 0 0 0-.842.277L2.672 5.083H.782c-.4 0-.725.302-.725.672c0 0 .324 1.22.725 1.22h.636l.449 6.677s.052 1.309 2.113 1.309h5.989v-2.067a.7.7 0 0 1-.053-.255V8.483c0-.338.243-.611.545-.611h.021c.301 0 .546.273.546.611v3.486h2.177l.273-4.993h.766c.4 0 .725-1.22.725-1.22c0-.37-.324-.672-.725-.672M3.031 7.031H1.969V5.969h1.062zm2.031 5.711c0 .35-.251.633-.559.633H4.48c-.311 0-.561-.283-.561-.633V8.413c0-.35.25-.632.561-.632h.023c.308 0 .559.282.559.632zm2.999-.195c0 .334-.244.605-.544.605h-.022c-.302 0-.545-.271-.545-.605V8.448c0-.334.243-.604.545-.604h.022c.3 0 .544.271.544.604zm4.97-5.485h-1.094V5.968h1.094z"></svg:path></svg:g>`,
})
export class SiGlyphBasketRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBasketballIcon],svg[si-glyph-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.831 2.645A7.47 7.47 0 0 0 .107 8.739c1.667-.379 3.312-.117 4.527.832l2.06-2.061zm4.376 12.238a7.47 7.47 0 0 0 6.149-1.714L7.447 8.261l-2.061 2.061c.955 1.222 1.214 2.881.821 4.561M.354 9.804a7.4 7.4 0 0 0 1.46 2.587l2.022-2.021c-.938-.681-2.193-.855-3.482-.566m4.792 4.824c.298-1.298.124-2.563-.56-3.508l-2.025 2.025a7.5 7.5 0 0 0 2.585 1.483m8.002-2.257a7.47 7.47 0 0 0 1.668-6.133c-1.663.376-3.304.113-4.514-.834l-2.06 2.061zM8.707.175a7.46 7.46 0 0 0-6.078 1.677L7.49 6.714l2.061-2.061c-.94-1.202-1.207-2.828-.844-4.478m5.846 5.001a7.4 7.4 0 0 0-1.471-2.551l-1.98 1.98c.931.674 2.173.85 3.451.571M9.775.428c-.273 1.269-.094 2.501.574 3.426l1.979-1.978A7.4 7.4 0 0 0 9.775.428"></svg:path>`,
})
export class SiGlyphBasketballIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryChargingIcon],svg[si-glyph-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.56 1.003H9.907V.031H7v.972H5.4c-.766 0-1.384.52-1.384 1.163v12.633c0 .643.618 1.164 1.384 1.164h6.159c.762 0 1.382-.521 1.382-1.164V2.166c0-.644-.62-1.163-1.381-1.163m.471 13.467c0 .343-.324.62-.72.62H5.632c-.395 0-.719-.277-.719-.62V2.529c0-.343.324-.621.719-.621h5.679c.396 0 .72.278.72.621z"></svg:path><svg:path d="m10 3.006l-3.959 7.683L8.005 9.42l-.989 4.584l3.952-7.821L8.881 7.5z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryChargingIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryEmptyIcon],svg[si-glyph-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.306 1h-1.307V.016H8V1H6.77C5.834 1 5 1.721 5 2.646v11.679C5 15.249 5.834 16 6.77 16h5.536c.936 0 1.694-.751 1.694-1.675V2.646C14 1.721 13.241 1 12.306 1M13 14c0 .516-.484 1-1 1H7c-.515 0-1.011-.484-1.011-1V3c0-.514.496-1.051 1.011-1.051h5c.516 0 1 .536 1 1.051z"></svg:path>`,
})
export class SiGlyphBatteryEmptyIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryFullIcon],svg[si-glyph-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.446 3H6.534C6.279 3 6 3.301 6 3.58v9.902c0 .273.278.497.535.497h3.912c.254 0 .553-.224.553-.497V3.58c0-.279-.297-.58-.554-.58"></svg:path><svg:path d="M11.306 1.021H9.999V.005H7v1.016H5.77c-.936 0-1.694.766-1.694 1.709v11.562c0 .942.759 1.709 1.694 1.709h5.536c.936 0 1.694-.767 1.694-1.709V2.73c0-.944-.759-1.709-1.694-1.709M12 14c0 .525-.494 1-1 1H6c-.506 0-1.011-.475-1.011-1V3c0-.523.505-1 1.011-1h5c.506 0 1 .476 1 1z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryFullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryHalfIcon],svg[si-glyph-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 13.448c0 .281.272.511.529.511h3.912c.255 0 .559-.229.559-.511V5.069L7 8.281z"></svg:path><svg:path d="M12.252 1H11V.016H8.023V1H6.715c-.936 0-1.694.575-1.694 1.5v11.825c0 .924.759 1.675 1.694 1.675h5.536c.936 0 1.694-.751 1.694-1.675V2.5c.001-.925-.757-1.5-1.693-1.5M13 14c0 .516-.484 1-1 1H7c-.515 0-1-.484-1-1V3c0-.514.485-1.051 1-1.051h5c.516 0 1 .536 1 1.051z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryHalfIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryHalf2Icon],svg[si-glyph-battery-half-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.062 13.472a.48.48 0 0 0 .471.487h3.936a.48.48 0 0 0 .47-.487V8.094l-4.876 2.065v3.313z"></svg:path><svg:path d="M12.252 1H11V0H8.023v1H6.715c-.936 0-1.694.492-1.694 1.417v12.125c0 .924.759 1.458 1.694 1.458h5.536c.936 0 1.748-.535 1.748-1.458V2.417C14 1.492 13.188 1 12.252 1M13 14c0 .516-.484 1-1 1H7c-.515 0-1-.484-1-1V3c0-.514.485-1 1-1h5c.516 0 1 .485 1 1z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryHalf2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryLowIcon],svg[si-glyph-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.062 13.508c0 .248.21.451.467.451h3.912c.255 0 .559-.203.559-.451v-2.407l-4.938 2.056z"></svg:path><svg:path d="M12.252 1H11V.016H8.023V1H6.715c-.936 0-1.694.658-1.694 1.583v11.742c0 .924.759 1.675 1.694 1.675h5.536c.936 0 1.694-.751 1.694-1.675V2.583C13.946 1.658 13.188 1 12.252 1M13 14c0 .516-.484 1-1 1H7c-.515 0-1.064-.484-1.064-1V3c0-.514.55-1.051 1.064-1.051h5c.516 0 1 .536 1 1.051z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryLowIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBedIcon],svg[si-glyph-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 5)"><svg:path d="M15.031 2.016v1.015H1.938V.078H.009v5.893h1.929V4.938h13.093v1.033h.938V2.016z"></svg:path><svg:ellipse cx="3.985" cy=".97" rx=".985" ry=".97"></svg:ellipse><svg:path d="M13.991 1.998H6.013v-.866c0-.598.643-1.083 1.434-1.083h5.109c.793 0 1.435.485 1.435 1.083z"></svg:path></svg:g>`,
})
export class SiGlyphBedIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBellIcon],svg[si-glyph-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.141 1.318c0-.711-.559-1.286-1.248-1.286S7.646.607 7.646 1.318q.001.12.022.237C5.002 2.594 3 4.772 3 10h12c.001-5.229-2.216-7.405-4.883-8.445q.023-.116.024-.237M16 13H2l.906-2h11.906zm-7.039 3a1.96 1.96 0 0 0 1.961-1.957H7A1.96 1.96 0 0 0 8.961 16"></svg:path>`,
})
export class SiGlyphBellIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBicycle1Icon],svg[si-glyph-bicycle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.998 8.023a2.987 2.987 0 0 0-2.982 2.982a2.987 2.987 0 0 0 2.982 2.983a2.986 2.986 0 0 0 2.983-2.983a2.986 2.986 0 0 0-2.983-2.982m0 5.024a2.043 2.043 0 0 1-2.04-2.041c0-1.125.915-2.04 2.04-2.04s2.041.915 2.041 2.04a2.043 2.043 0 0 1-2.041 2.041m9.987-4.982a2.946 2.946 0 0 0-2.935 2.952a2.945 2.945 0 0 0 2.935 2.951c1.616 0 2.932-1.324 2.932-2.951s-1.315-2.952-2.932-2.952m-.036 4.965a2.03 2.03 0 0 1-2.029-2.024a2.03 2.03 0 0 1 4.058 0a2.027 2.027 0 0 1-2.029 2.024"></svg:path><svg:path d="M6.712 9.944a.535.535 0 0 1-.535-.534l-.773-3.504h-.799c-.328 0-.585-.382-.585-.868c0-.494.252-.867.585-.867c2.442.324 2.364.726 2.364.86c0 .495-.174.875-.508.875h-.03l.683 2.707l4.465-2.158l-.293-.906a.53.53 0 0 1 .12-.53l1.115-2.061h-1.916a.534.534 0 0 1-.534-.533c0-.295.239-.425.534-.425h2.85c.214 0 .407.018.491.213a.53.53 0 0 1-.102.577l-1.455 2.696l.564 2.092a.537.537 0 0 1-1.021.325l-.128-.333c.001 0-5.038 2.374-5.092 2.374"></svg:path></svg:g>`,
})
export class SiGlyphBicycle1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBicycle3Icon],svg[si-glyph-bicycle-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.84.042c0 1.098-1.744 1.991-2.826 1.991S5.339 1.139 5.339.042H1.1v.916h3.111c.602.915 1.689 2.008 2.859 2.266v5.443s.392-.767.954-.767c.396 0 .812.317.94.75V3.221c1.191-.264 2.45-1.323 3.04-2.264h2.912V.041zm-2.816 10c-.529 0-.958.327-.958.731v4.537c0 .404.429.731.958.731s.958-.327.958-.731v-4.537c0-.404-.428-.731-.958-.731m-2.571.959H3.581c-.29 0-.522.215-.522.479c0 .265.232.479.522.479h1.872c.288 0 .522-.215.522-.479c.001-.264-.234-.479-.522-.479m7.041 2.041h-1.872c-.288 0-.522.206-.522.458c0 .253.234.459.522.459h1.872c.289 0 .521-.206.521-.459c.001-.252-.232-.458-.521-.458"></svg:path>`,
})
export class SiGlyphBicycle3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBicycleManIcon],svg[si-glyph-bicycle-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 2)"><svg:path d="M8.5 12.969c-.359-.002-.495-.289-.494-.653l.015-2.784L5.153 6.44a.667.667 0 0 1 .121-.925l3.562-2.933a.644.644 0 0 1 .91.121l1.544 1.805l2.289 1.097c.335.13.504.511.377.852a.647.647 0 0 1-.839.383l-2.461-1.163a.65.65 0 0 1-.285-.215l-1.26-1.429L6.687 6.16l2.191 2.538c.086.116.09.214.09.36l.017 3.254c-.001.364-.126.658-.485.657"></svg:path><svg:path d="M12.98 7.982c-1.645 0-2.977 1.344-2.977 3.001s1.332 3.001 2.977 3.001s2.978-1.344 2.978-3.001s-1.333-3.001-2.978-3.001m-.005 5.064a2.066 2.066 0 0 1-2.072-2.062c0-1.139.928-2.062 2.072-2.062c1.141 0 2.069.923 2.069 2.062a2.067 2.067 0 0 1-2.069 2.062M2.991 8.023a2.97 2.97 0 1 0 0 5.942a2.97 2.97 0 1 0 0-5.942m0 5.04a2.068 2.068 0 1 1 0-4.138a2.07 2.07 0 0 1 0 4.138"></svg:path><svg:ellipse cx="11.469" cy="1.486" rx="1.469" ry="1.486"></svg:ellipse></svg:g>`,
})
export class SiGlyphBicycleManIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBikiniIcon],svg[si-glyph-bikini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.942 10.074C10 10.074 6 10.07 4.138 10.07c-.354 0-.03.467.104.503c1.645.44 3.027 2.347 3.734 4.97c.148.551.971.592 1.114.053c.702-2.643 1.957-4.383 3.73-5.018c.192-.07.476-.504.122-.504m-.858-6.442C11.606 2.184 10.565.083 8.528.083c-2.052 0-3.095 2.132-3.566 3.581c-.535.572-.908 2.064-.908 2.988c0 2.168 2.693 1.038 3.52.101a4.14 4.14 0 0 0 1.917.017c.844.926 3.502 2.011 3.502-.117c-.001-.945-.364-2.476-.909-3.021M7.861 5.926c-.05-.935-1.214-2.094-1.968-2.469C6.324 2.281 7.132.833 8.528.833s2.206 1.458 2.638 2.636c-.766.394-1.944 1.552-1.98 2.475a3.3 3.3 0 0 1-.619.063c-.241 0-.477-.03-.706-.081"></svg:path>`,
})
export class SiGlyphBikiniIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBilliardBallIcon],svg[si-glyph-billiard-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.01.057a7.94 7.94 0 1 0 .002 15.88A7.94 7.94 0 0 0 9.01.057m-1 12.057c-2.804 0-5.076-2.283-5.076-5.099c0-2.814 2.272-5.098 5.076-5.098c2.805 0 5.078 2.283 5.078 5.098s-2.274 5.099-5.078 5.099"></svg:path><svg:path d="M8 4h.938v5.938H8z"></svg:path><svg:path d="M7 4h1.969v.938H7z"></svg:path></svg:g>`,
})
export class SiGlyphBilliardBallIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBinocularIcon],svg[si-glyph-binocular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 14h6v.916H0zm10 0h6v.916h-6zM2.041 3.012L.666 12.917h4.667l-.687-3.905h1.323v-6h-.985V1.979h.981v-.95H2.006v.95H3v1.033zm8.959 0h-.969v6h1.344l-.709 3.905h4.667l-1.375-9.905h-.974V1.979h.981v-.95h-3.959v.95H11z"></svg:path><svg:path d="M8.984 2.016H7.016V3H5.969v1.969h1.066v3.062H5.969v1.94h4.062v-1.94H8.994V4.969h1.037V3H8.984z"></svg:path></svg:g>`,
})
export class SiGlyphBinocularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBirthdayCakeIcon],svg[si-glyph-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.002 13.062v1.107c0 1.305-.107 1.775 1.482 1.775h8.91c1.588 0 1.48-.471 1.48-1.775v-1.107zM4 3h.935v3.072H4zm3 0h1v2.969H7zm4 0h.99v2.851H11zM4.965.975c.1.406-.058.873-.437.915c-.354.04-.625-.417-.353-.87c.279-.46.353-.96.353-.96s.32.427.437.915m2.973.046c.105.426-.061.918-.469.962c-.381.042-.672-.439-.378-.914c.3-.485.378-1.01.378-1.01s.342.45.469.962m4.036.002c.112.426-.066.916-.498.96c-.404.042-.714-.438-.401-.913a2.9 2.9 0 0 0 .401-1.008s.363.45.498.961"></svg:path><svg:path d="M3.146 8.437c.415 0 1.016-.394 1.193-.532c.005-.006.727-.684 1.602-.684c.871 0 1.623.672 1.654.701c.162.14.698.515 1.174.515c.562 0 1.108-.505 1.108-.505c.04-.038.787-.711 1.688-.711c.905 0 1.626.678 1.656.707c.161.138.464.341.737.442c-.031-1.301-.629-2.34-2.176-2.34H4.259c-1.391 0-2.018.837-2.154 1.949c.225.167.688.458 1.041.458m9.571 1.032c-.018-.016-.557-.519-1.151-.519c-.599 0-1.165.507-1.172.513c-.026.023-.751.7-1.624.7c-.865 0-1.641-.667-1.674-.696c-.163-.146-.682-.517-1.154-.517c-.562 0-1.104.503-1.111.507c-.115.092-.932.706-1.684.706c-.386 0-.772-.159-1.07-.325v2.107h11.889v-1.814c-.611-.127-1.177-.601-1.249-.662M0 14h15.851v1.935H0z"></svg:path></svg:g>`,
})
export class SiGlyphBirthdayCakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBiscuitIcon],svg[si-glyph-biscuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.8 6.826a.9.9 0 0 0-.217-.307l-.024-.009a1.1 1.1 0 0 0-.418-.239L9.352 4.126c.379-.436.617-.997.617-1.619a2.476 2.476 0 1 0-4.954 0c0 .633.244 1.204.635 1.642L.863 6.312c-.642.202-.984.936-.762 1.637l.025.08c.222.701.922 1.105 1.564.902l1.982-.964c.491-.045.898-.032 1.015.079c.312.295-1.819 4.369-2.424 5.561c-.438.859-.235 1.84.452 2.188l.075.039c.688.349 1.558-.088 2.036-.925c.344-.603 1.518-3.582 2.576-3.582c1.058-.001 2.476 2.977 2.782 3.582c.438.859 1.349 1.273 2.036.925l.076-.039c.688-.349.891-1.329.451-2.188c-.385-.761-2.835-5.06-2.626-5.561c.068-.164.575-.126 1.24-.021l1.948.865c.643.203 1.342-.201 1.564-.902l.025-.08a1.35 1.35 0 0 0-.098-1.082m-6.739-.847v1.052H6.907V5.979zm.001 4.083H6.906V8.906h1.156z"></svg:path>`,
})
export class SiGlyphBiscuitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBlenderIcon],svg[si-glyph-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.822 12.062l-.864.007L9.987 11H7.03l-.01 1.06l-.902-.002c-1.19.809-2.097 2.134-2.097 2.983c0 1.229 8.929 1.25 8.929 0c0-.453-.827-2.049-2.128-2.979m-1.779 2H7.958v-1.104h1.085zm2.814-12.039c.076-.512.122-.874.122-.992c0-1.312-6.917-1.291-6.917 0c0 1.311 1.682 8.901 3.031 8.901h.733c.448 0 .892-.84 1.287-2.005c3.229-.413 3.882-3.235 3.886-3.293V2.023zm-1.378 4.956c.419-1.303.769-2.87.983-4h1.558l.001 1.692c-.009.085-.238 1.891-2.542 2.308"></svg:path>`,
})
export class SiGlyphBlenderIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBloodBagIcon],svg[si-glyph-blood-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.958 9.221V1.783S13.14.052 10.896.052H6.084c-2.244 0-2.062 1.731-2.062 1.731v7.438s-.146 1.748 1.062 1.748h1.959v.948h1.001V14H7.043v1h1.001v.917H9V15h.938v-1H9v-2.083h1v-.948h1.896c1.354 0 1.062-1.748 1.062-1.748m-2.308.946H10V10H7.042v.167H6.39c-1.546 0-1.478-1.356-1.478-1.356V4.954h2.057v-.901H4.912V2.954h2.041v-.901H4.965c.104-.424.423-1.136 1.424-1.136h4.261c1.35 0 1.479 1.445 1.479 1.445v6.449c.001 0 .121 1.356-1.479 1.356"></svg:path><svg:path d="M6.023 8.137c0 .696.703.807.703.807h3.541s.704-.026.704-.807v-3.11H6.023z"></svg:path></svg:g>`,
})
export class SiGlyphBloodBagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBluetoothIcon],svg[si-glyph-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m8 11.967l.969-.943L8 10zm.03-5.985l.939-.945l-.939-1.028z"></svg:path><svg:path d="M7.506 0C5.033 0 3.027 1.546 3.027 3.453v9.095C3.027 14.454 5.033 16 7.506 16c2.472 0 4.477-1.546 4.477-3.452V3.453C11.982 1.546 9.978 0 7.506 0m2.946 11.011L6.94 14V8.815l-2.22 2.066l-.674-.748l2.09-2.07L4 6.1l.72-.666l2.22 1.912V2l3.56 3.117l-2.862 2.978z"></svg:path></svg:g>`,
})
export class SiGlyphBluetoothIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoardIcon],svg[si-glyph-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M5 10H4V7H3V6h2zm4-2H8v1H7V8H6V7h1V6h1v1h1zm3 2h-1V7h-1V6h2zm3-1h-2V8h2zm0-2h-2V6h2z"></svg:path>`,
})
export class SiGlyphBoardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoatIcon],svg[si-glyph-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.978 14.895l.988-1.829c-4.372 0-10.502.51-12.888-1.036C1.028 11.524 1.042 11 1.042 11s.68 3.895 3.036 3.895zm-3.961-3.905L12.014 2l4.899 8.99zm-1.002.032V-.052L6 10.253z"></svg:path>`,
})
export class SiGlyphBoatIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoltIcon],svg[si-glyph-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.289.023L6.925 0L2.984 8H8l-4.334 7.916L14.924 4.941H10.35z"></svg:path>`,
})
export class SiGlyphBoltIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBomb1Icon],svg[si-glyph-bomb-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.004 5.016c-.814 0-1.962 1.12-1.962 2.917s1.071 3.029 1.976 3.029s6.561-.335 7.332-.335c.772 0 2.672-.438 2.672-2.694c-.001-2.256-1.712-2.655-2.672-2.655s-6.532-.262-7.346-.262m-3.031.368c0 .327-.177.593-.395.593H2.394c-.218 0-.394-.266-.394-.593V3.606c0-.328.177-.593.394-.593l1.578 1.778zm.015 5.804L2.41 12.957c-.217 0-.395-.264-.395-.59v-1.769c0-.326.178-.59.395-.59h1.184c.218 0 .394.264.394.59zm-2.55-4.185c-.327 0-.406.443-.406.989c0 .547.079.988.406.988h2.531V7.002H1.438z"></svg:path>`,
})
export class SiGlyphBomb1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBomb2Icon],svg[si-glyph-bomb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.427.016c-.093.952-.854 1.255-2.095 1.639c-.584.182-1.205.379-1.712.72c-.89-.473-1.511-.363-1.511-.363L9.808 3.628a6.03 6.03 0 0 1 3.104 2.271L14.2 4.296s.095-.688-.958-1.513c.378-.2.825-.344 1.287-.487c1.135-.352 2.325-.832 2.47-2.296zm-7.57 4.348a6 6 0 0 0-1.895-.312a5.964 5.964 0 1 0 4.957 2.649a5.97 5.97 0 0 0-3.062-2.337M7.299 6.077c-2.707 0-4.162 1.509-4.162 3.966H2.031c0-2.635 2.212-4.81 5.038-5.079c-.001 0 .388 1.113.23 1.113"></svg:path>`,
})
export class SiGlyphBomb2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoneIcon],svg[si-glyph-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.321 13.61s.062 1.264.649 1.852c.684.683 1.781.694 2.452.024c.954-.954 1.084-2.273.97-3.367l5.766-5.765c1.087.109 2.404-.027 3.375-.998c.662-.662.647-1.752-.034-2.434c-.589-.588-1.786-.577-1.786-.577s-.038-1.246-.631-1.839c-.686-.688-1.789-.703-2.457-.033c-.97.97-1.085 2.322-.958 3.429L4.939 9.631c-1.091-.109-2.416.026-3.395 1.004c-.664.663-.651 1.75.025 2.427c.587.584 1.752.548 1.752.548"></svg:path>`,
})
export class SiGlyphBoneIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBookIcon],svg[si-glyph-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 0h2v16H0zm11 6v3h.885L12 6z"></svg:path><svg:path d="M3 0v16h10.82c.651 0 1.18-.453 1.18-1.01V1.01C15 .452 14.472 0 13.82 0zm10.051 9.053h-.971l-.018 1.01H7.906l.018-1.021h-.967V6.99h.958V5.948l3.042-.01v-.887H7.026v.997h-.997v3.91h1.012v1.017h4.006v1.039H6.961v-.951H5.958v-1.031H4.953V5.991h1.02V4.973h.965V3.938h4.094v1.021h.979v.99h1.041z"></svg:path><svg:path d="M8 7h2v2H8z"></svg:path></svg:g>`,
})
export class SiGlyphBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBook1Icon],svg[si-glyph-book-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.007C4.691 1.444 2.11 2.32 0 3.61v10.325c2.105-1.298 5.248-2.364 8-.946v-9.98zm0 9.995c3.629-1.463 5.919-.353 8 .937V3.621c-2.081-1.285-4.118-2.438-8-.845z"></svg:path>`,
})
export class SiGlyphBook1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBook3Icon],svg[si-glyph-book-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.048 13.774l2.014 2.122l8.847-2.065V1.965l-.977-.581l-7.87 2.577l-1.065-1.04l7.7-2.285l-1.148-.625l-7.487 2.122z"></svg:path>`,
})
export class SiGlyphBook3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBook4Icon],svg[si-glyph-book-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 0v16H3.016v-2H4v-2h-.984V4H4V2h-.984V0zM2 2v2h1V2zm0 10v2h1v-2zm15-1.93h-1v2.843h1zm0-4.052h-1V9h1zm0-3.917h-1V4.96h1z"></svg:path>`,
})
export class SiGlyphBook4Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBookOpenIcon],svg[si-glyph-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.969 2.74C4.92 1.288 3.942 2.326 2 3.523v7.445c1.941-1.205 3.434-1.969 5.969-.651zm.058.018v7.591c3.352-1.361 4.035-.549 5.957.651V3.542c-1.922-1.194-2.537-2.268-5.957-.784"></svg:path><svg:path d="M15.938 13H.051V3.049h.902v9.029h14.078V3.094h.907z"></svg:path></svg:g>`,
})
export class SiGlyphBookOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBookPersonIcon],svg[si-glyph-book-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 0h.918v16H2zm12.905 0H4v16h10.905c.604 0 1.095-.453 1.095-1.01V1.01C16 .452 15.51 0 14.905 0m-4.899 2.875c1.095 0 1.985.886 1.985 1.979s-.891 3.184-1.985 3.184c-1.096 0-1.984-2.09-1.984-3.184a1.98 1.98 0 0 1 1.984-1.979M14.976 12H5.002s-.171-2.987 2.387-2.987c.537.577 1.272.931 2.625.931c1.354 0 1.999-.36 2.529-.944c2.878 0 2.433 3 2.433 3"></svg:path>`,
})
export class SiGlyphBookPersonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBookcaseIcon],svg[si-glyph-bookcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.667.037H3.332A1.32 1.32 0 0 0 2.016 1.36l.01 14.075c0 .376.642.58.995.58c.354 0 .938-.204.938-.58v-1.407q.015.001.017.003h10.01l.036-.004v1.408c0 .376.635.602.979.602c.347 0 .958-.226.958-.602l.027-14.075A1.32 1.32 0 0 0 14.667.037m-1.688.921h1.041V3h-1.041zm-2.021 0h1v2h-1zm-1.985 0h1.048v2H8.973zm6.048 9.063H2.98V8.98h12.041zM3.958 8V6h1v2zm2.014-.007v-2h1v2zM7.961 8V5.993h1V8zm7.06-3H2.98V3.979h12.041z"></svg:path>`,
})
export class SiGlyphBookcaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBookmarkIcon],svg[si-glyph-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.677 0H3.326c-.732 0-1.324.605-1.324 1.353v13.294c0 .748.593 1.353 1.324 1.353l4.676-4.013L12.676 16c.732 0 1.326-.605 1.326-1.353V1.353A1.336 1.336 0 0 0 12.677 0m-2.195 10L8.01 8.633L5.538 10l.473-2.896L4.01 5.055l2.764-.422L8.01 2l1.236 2.633l2.764.422l-2 2.05z"></svg:path>`,
})
export class SiGlyphBookmarkIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBotl2Icon],svg[si-glyph-botl-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0h1.969v2.03H8zm1.886 3H8.06s.497 1.247-1.112 2.006C5.691 5.599 6 5.259 6 7.203V14.9c0 .608.521 1.1 1.16 1.1h3.679c.64 0 1.161-.492 1.161-1.1V7.203c-.001-2.029.187-1.436-.97-2.166C9.505 4.08 9.886 3 9.886 3M11 15h-1V7h1z"></svg:path>`,
})
export class SiGlyphBotl2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBotlMilkIcon],svg[si-glyph-botl-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.137 15.984H4.885c-1.013 0-1.837-.747-1.837-1.666V7.022c0-.42.444-1.397 1.173-2.956c.422-.898.996-2.127 1.002-2.375c0-.124-.209-.352-.35-.503c-.238-.257-.484-.524-.33-.828c.148-.294.554-.335.974-.335H9.5c.53.004.91.066 1.053.354c.148.305-.107.577-.332.818c-.139.147-.348.369-.348.493c.002.25.562 1.494.975 2.401c.701 1.545 1.126 2.514 1.126 2.93v7.296c0 .92-.826 1.667-1.837 1.667M5.543 1.041c.219.242.453.585.453.939c0 .347-.324 1.113-.965 2.506c-.449.971-1.059 2.299-1.059 2.6v7.043c0 .533.475.966 1.055.966H9.99c.584 0 1.058-.433 1.058-.966V7.086c0-.301-.587-1.619-1.018-2.58c-.604-1.361-1.011-2.181-1.011-2.531c0-.358.309-.689.531-.93c.016-.019-.076-.068-.167-.068H5.627c-.053 0-.101.044-.084.064"></svg:path><svg:path d="M9.963 13.092c0 .701-.521.887-1.164.887H6.235c-.643 0-1.163-.186-1.163-.887V6.538c0-.701.63 1.534 1.985.474c1.356-1.056 2.906-1.175 2.906-.474z"></svg:path></svg:g>`,
})
export class SiGlyphBotlMilkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBowTieIcon],svg[si-glyph-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.953 10.974c1.234 0 5.01-1.313 5.01-2.613v-.705c0-1.354-4.383-2.655-5.01-2.655C-.278 5-.26 10.974.953 10.974m14.103-.047c-1.237 0-5.022-1.303-5.022-2.593v-.699C10.034 6.29 14.429 5 15.056 5c1.235 0 1.215 5.927 0 5.927M7 7h1.984v1.984H7z"></svg:path>`,
})
export class SiGlyphBowTieIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoxIcon],svg[si-glyph-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h16v2H1zm1 10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5H2zm4.98-5.041h4.082v1.104H6.98z"></svg:path>`,
})
export class SiGlyphBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoxDownloadIcon],svg[si-glyph-box-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.644 4.236a1.02 1.02 0 0 0-1.433.113l-2.062 2.754c-.104-.016-8.143-.016-8.225-.006l-2.159-2.76a1.005 1.005 0 0 0-1.422-.092a1.02 1.02 0 0 0-.091 1.434l2.027 2.607a2.1 2.1 0 0 0-.196.873v4.746a2.09 2.09 0 0 0 2.089 2.088h7.661a2.09 2.09 0 0 0 2.089-2.088V9.159c0-.289-.059-.562-.165-.814l2-2.68a1.013 1.013 0 0 0-.113-1.429"></svg:path><svg:path d="m11.781 2.057l-1.812.373L9.99.994a.98.98 0 0 0-.988-.988C8.45.008 8.002.457 8 1.008l.031 1.393l-1.781-.344a.7.7 0 0 0-.003.986l2.265 2.676c.271.271.712.27.985-.004l2.278-2.672a.7.7 0 0 0 .006-.986"></svg:path></svg:g>`,
})
export class SiGlyphBoxDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoxUploadIcon],svg[si-glyph-box-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.644 4.236a1.02 1.02 0 0 0-1.433.113l-2.062 2.754c-.104-.016-8.143-.016-8.225-.006l-2.159-2.76a1.005 1.005 0 0 0-1.422-.092a1.02 1.02 0 0 0-.091 1.434l2.027 2.607a2.1 2.1 0 0 0-.196.873v4.746a2.09 2.09 0 0 0 2.089 2.088h7.661a2.09 2.09 0 0 0 2.089-2.088V9.159c0-.289-.059-.562-.165-.814l2-2.68a1.013 1.013 0 0 0-.113-1.429"></svg:path><svg:path d="m6.236 3.944l1.812-.373l-.021 1.436a.98.98 0 0 0 .989.988c.55-.002.999-.451 1.001-1.002L9.986 3.6l1.781.344a.697.697 0 0 0 .003-.986L9.505.282a.696.696 0 0 0-.985.004L6.242 2.958a.7.7 0 0 0-.006.986"></svg:path></svg:g>`,
})
export class SiGlyphBoxUploadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBreadIcon],svg[si-glyph-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.942 9.189a9 9 0 0 1 1.173-.666a19 19 0 0 0-1.561-1.973a9 9 0 0 0-2.564.557c-1.673.643-2.354-.227-.771-1.311a8.4 8.4 0 0 1 1.685-.879a21 21 0 0 0-2.243-1.752a9 9 0 0 0-2.395.548c-1.671.642-2.354-.228-.769-1.311c.291-.199.598-.371.911-.532C3.859.668 1.6.515.523 1.697c-1.719 1.884 1.365 5.196 5.479 8.944c4.111 3.748 7.691 6.514 9.412 4.629c.973-1.068.767-3.001-.339-5.158c-.467.1-.925.219-1.362.388c-1.674.643-2.356-.226-.771-1.311"></svg:path>`,
})
export class SiGlyphBreadIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBriefcaseIcon],svg[si-glyph-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.959 3.079c0-.619.482-1.124 1.072-1.124h1.838c.59 0 1.184.505 1.184 1.124v-.058h.919v-.474c0-.86-.478-1.548-1.458-1.548H7.385c-.654 0-1.362.73-1.362 1.548v.474h.937v.058z"></svg:path><svg:path d="M11 5.969v1.012h6V3.016H.985v3.965h6.003V5.969zM7 8.998v-.995H1.022V16H17V8.003h-5.987v.995H7.001zM8 7v.967h1.99V7z"></svg:path></svg:g>`,
})
export class SiGlyphBriefcaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBriefcasePersonIcon],svg[si-glyph-briefcase-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.562 3.083H1.437c-.794 0-1.438.651-1.438 1.453V13.5c0 .804.644 1.454 1.438 1.454h12.125c.794 0 1.438-.65 1.438-1.454V4.536c0-.802-.644-1.453-1.438-1.453M7.504 5.906c.855 0 1.551.706 1.551 1.577c0 .872-.695 2.538-1.551 2.538S5.953 8.355 5.953 7.483s.695-1.577 1.551-1.577m3.5 7.125H4s-.119-3.076 1.677-3.076c.375.594.892 1.164 1.843 1.164c.949 0 1.401-.574 1.775-1.178c2.021 0 1.709 3.09 1.709 3.09"></svg:path><svg:path d="M5.782 2.682c0-.428.295-.775.66-.775h2.093c.364 0 .659.348.659.775v.885h.781V2.376c0-.742-.514-1.347-1.144-1.347H6.15c-.632 0-1.147.604-1.147 1.347v1.191h.78v-.885z"></svg:path></svg:g>`,
})
export class SiGlyphBriefcasePersonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBrightnessIcon],svg[si-glyph-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.041 3.001C6.326 3.001 4.125 5.239 4.125 8c0 2.762 2.201 5 4.916 5c2.717 0 4.917-2.238 4.917-5s-2.2-4.999-4.917-4.999m.042 8.226a3.227 3.227 0 1 1 0-6.453a3.227 3.227 0 0 1 0 6.453M8 0h1.958v2H8zm0 14h2v1.958H8zm7-7h1.958v1.958H15zM1 7h1.958v2H1zm13.691-5.207l1.326 1.327l-1.326 1.324l-1.325-1.328zM3.468 12.714l1.325 1.327l-1.367 1.366L2.1 14.08zm11.082.064l1.364 1.363l-1.326 1.326l-1.364-1.364zM3.443 1.775l1.301 1.302l-1.326 1.325l-1.3-1.3z"></svg:path>`,
})
export class SiGlyphBrightnessIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBrush1Icon],svg[si-glyph-brush-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.056 8.306l4.308-3.351l6.703 6.705l-3.35 4.308s.044-1.054-1.437-1.437c-1.39-.359-1.632-2.288-2.843-2.688s-1.426-1.242-1.986-2.145s-1.395-1.392-1.395-1.392m12.925-.476l-1.146-1.146c1.841-1.603 3.279-2.902 3.537-3.162A2.032 2.032 0 0 0 13.499.649c-.258.26-1.559 1.697-3.16 3.54L9.193 3.043a1.355 1.355 0 0 0-1.916-.001l-.957.957l6.704 6.705l.958-.959a1.355 1.355 0 0 0-.001-1.915m.265-5.053a.977.977 0 1 1 1.383-1.383a.976.976 0 0 1 0 1.383a.976.976 0 0 1-1.383 0"></svg:path>`,
})
export class SiGlyphBrush1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBrush2Icon],svg[si-glyph-brush-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.172 4.244c-.457.541-4.619 4.77-6.846 6.422l-.913-.867c1.29-2.511 4.741-7.292 5.196-7.832c.595-.704 2.037-1.215 2.807-.669c1.012.716.35 2.24-.244 2.946m-8.565 6.458s-2.092-.553-3.348 1.594S.808 13.708.27 13.524s1.256 2.27 2.093 2.27c.818 0 4.389 1.175 5.268-3.434c.018-.101.072-1.483-1.024-1.658"></svg:path>`,
})
export class SiGlyphBrush2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBrushAndPencilIcon],svg[si-glyph-brush-and-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.833 13.042c-.517.179-1.538.55-2.712-1.436c-1.174-1.984-2.726-1.523-2.726-1.523c-.087.015-.161.044-.238.07c-1.752-2.495-6.679-7.929-7.113-8.364C2.421 1.167 1.375.583.5 1.5c-.823.862-.401 1.987.222 2.61c.438.438 5.902 5.39 8.396 7.136a1.2 1.2 0 0 0-.076.337c0 3.646 3.729 3.453 4.5 3.312c1.375-.249 2.808-2.03 2.291-1.853"></svg:path><svg:path d="m5.613 10.73l-.227.752l.486.486l-3.811 1.656l-.75-.719l1.721-3.627l-.018.706l.998-.014l.853-.845c-.53-.45-1.058-.906-1.562-1.347l-.834.835S.157 13.933 0 14.363c-.125.34.306.771.604.625c.48-.237 5.74-2.52 5.74-2.52l1.168-1.172a59 59 0 0 1-1.361-1.094zm6.534-8.81l1.259 1.236l-4.23 4.107c.378.46.734.902 1.051 1.311l4.261-4.275c.502-.502.53-1.226-.008-1.763L12.475.546c-.539-.537-1.383-.565-1.884-.064L6.71 4.37c.446.51.909 1.045 1.364 1.581z"></svg:path></svg:g>`,
})
export class SiGlyphBrushAndPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleChatIcon],svg[si-glyph-bubble-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m2.701 14.927l1.051-3.998H2.299C1.059 10.929 0 9.944 0 8.672V2.303C0 1.033 1.011 0 2.252 0h11.496C14.989 0 16 1.033 16 2.303v6.369c0 1.271-.963 2.257-2.203 2.257H7.983zM.959 2.513v6.052c0 .88.703 1.452 1.566 1.452h2.297l-.77 2.869l3.482-2.87h5.98c.865 0 1.568-.571 1.568-1.451V2.513c0-.879-.703-1.595-1.568-1.595H2.525c-.863 0-1.566.716-1.566 1.595"></svg:path><svg:path d="M12.625 8.946H3.344c-.996 0-1.295-.419-1.295-1.384V3.468c0-.963.361-1.426 1.357-1.426h9.219c.998 0 1.314.557 1.314 1.519v3.97c-.001.965-.316 1.415-1.314 1.415"></svg:path></svg:g>`,
})
export class SiGlyphBubbleChatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageIcon],svg[si-glyph-bubble-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.988 1.002c-4.387 0-7.947 2.619-7.947 5.852c0 2.95 2.968 5.383 6.824 5.786l-2.042 3.332l6.103-3.686c2.934-.86 5.012-2.967 5.012-5.433c0-3.232-3.559-5.851-7.95-5.851"></svg:path>`,
})
export class SiGlyphBubbleMessageIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageDotIcon],svg[si-glyph-bubble-message-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.1 0H3.902C2.873 0 2.039.795 2.039 2.094v5.844c0 1.299.834 2.051 1.863 2.051h5.7l-1.57 4.98l4.474-4.98h1.595c1.029 0 1.864-.752 1.864-2.051V2.094C15.964.795 15.129 0 14.1 0M5.02 6.312a1.31 1.31 0 0 1-1.301-1.318c0-.728.582-1.317 1.301-1.317c.721 0 1.301.59 1.301 1.317A1.31 1.31 0 0 1 5.02 6.312M9 6.24c-.709 0-1.281-.558-1.281-1.246S8.291 3.749 9 3.749c.707 0 1.281.558 1.281 1.245c0 .689-.574 1.246-1.281 1.246m4 0c-.705 0-1.281-.558-1.281-1.246S12.295 3.749 13 3.749c.707 0 1.281.558 1.281 1.245c0 .689-.574 1.246-1.281 1.246"></svg:path>`,
})
export class SiGlyphBubbleMessageDotIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageDot2Icon],svg[si-glyph-bubble-message-dot-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.019 1.04c-4.398 0-7.968 2.62-7.968 5.852c0 2.95 2.975 5.384 6.842 5.787l-2.048 3.25l6.119-3.603c2.942-.861 5.025-2.968 5.025-5.435c0-3.231-3.569-5.851-7.97-5.851M6 8H4V6h2zm4 0H8V6h2zm4 0h-2V6h2z"></svg:path>`,
})
export class SiGlyphBubbleMessageDot2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageHiIcon],svg[si-glyph-bubble-message-hi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.979.021c-4.398 0-7.968 2.792-7.968 6.235c0 3.143 2.976 5.734 6.841 6.164l-2.047 3.551l6.119-3.926c2.94-.917 5.023-3.161 5.023-5.789c0-3.444-3.568-6.235-7.968-6.235m.061 8.997H7.972V7.075h-1.94v1.943l-1.072.023V3.992l1.072-.023v2.018h1.94V3.969H9.04zm1.96 0H9.954v-3.08H11zm.031-3.977H9.954V3.937h1.077zm3 3.975h-1.063V7.963h1.063zm-.015-2h-1.047V3.954h1.047z"></svg:path>`,
})
export class SiGlyphBubbleMessageHiIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageQuoteIcon],svg[si-glyph-bubble-message-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.009.042C3.615.042.052 2.826.052 6.263c0 3.136 2.972 5.722 6.832 6.151l-2.116 3.57l6.183-3.945c2.937-.914 5.018-3.154 5.018-5.776c-.001-3.437-3.566-6.221-7.96-6.221M7.051 7c0 1.333-1.655 2.062-3.084 2.062V7.945c.721 0 1.741-.354 1.741-.945H3.967V3.989h3.084zm5 0c0 1.333-1.655 2.062-3.084 2.062V7.945c.721 0 1.741-.354 1.741-.945H8.967V3.989h3.084z"></svg:path>`,
})
export class SiGlyphBubbleMessageQuoteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageTalkIcon],svg[si-glyph-bubble-message-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.939 1C2.666 1 .009 2.987.009 5.438c0 2.236 2.215 4.082 5.092 4.387L3.88 12.26l4.249-2.7C10.318 8.906 12 7.309 12 5.438C12 2.988 9.213 1 5.939 1m10.008 8.89c0-1.124-1.062-2.288-2.289-2.868c-.344 1.95-1.924 3.745-4.417 4.447l-1.187.642c.454.34 1.01.611 1.634.788l3.638 1.971l-1.303-1.776c2.217-.225 3.924-1.571 3.924-3.204"></svg:path>`,
})
export class SiGlyphBubbleMessageTalkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageTextIcon],svg[si-glyph-bubble-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.01.078C3.606.078.031 2.759.031 6.065c0 3.018 2.98 5.508 6.852 5.92l-2.121 3.438l6.197-3.799c2.945-.88 5.031-3.035 5.031-5.559c0-3.306-3.574-5.987-7.98-5.987M10 9H4V8h6zm2-1.954H4V6h8zm0-2.055H4v-1h8z"></svg:path>`,
})
export class SiGlyphBubbleMessageTextIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBucketIcon],svg[si-glyph-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M8.759 1.143c-.507-.509-2.356.521-4.13 2.302c-1.772 1.782-2.801 3.637-2.293 4.146c.506.508 2.354-.521 4.129-2.304C8.237 3.506 9.266 1.65 8.759 1.143"></svg:path><svg:path fill="currentColor" d="m16.737 7.881l-.903-.896c-.327.91-.975 1.689-1.929 2.25c-1.017.6-2.293.916-3.691.916a9.6 9.6 0 0 1-2.378-.305a.593.593 0 1 1 .297-1.149c.695.18 1.398.271 2.091.271c1.175 0 2.239-.261 3.077-.753c.793-.468 1.314-1.111 1.507-1.861c.028-.114.023-.233.038-.35L8.862.062S7.173-.244 4.044 2.899c-3.133 3.145-3.01 4.935-3.01 4.935s7.16 7.189 7.877 7.907c.717.72 2.991-.208 5.339-2.564c2.348-2.363 3.093-4.688 2.487-5.296M2.336 7.59c-.508-.509.521-2.363 2.293-4.146C6.402 1.663 8.252.633 8.759 1.142s-.521 2.363-2.294 4.144C4.69 7.068 2.842 8.098 2.336 7.59"></svg:path><svg:path fill="currentColor" d="M15.864 6.621c.69-2.685-1.775-5.647-5.498-6.605a.5.5 0 0 0-.604.355a.496.496 0 0 0 .356.602c3.063.787 5.157 3.049 4.833 5.136l.806.799c.034-.097.082-.187.107-.287"></svg:path></svg:g>`,
})
export class SiGlyphBucketIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBugIcon],svg[si-glyph-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 9.984V9h-1.031L15 6.016h-2.252a5.4 5.4 0 0 0-1.281-1.683L11.028 4h1.957V1.985h.984v-.969h-1.953v.016H12v2.016h-1.406c-.067-.443-.303-.885-.609-1.215V0H9v1.224a2.8 2.8 0 0 0-1-.203c-.365 0-.7.087-1.016.209V0H6v1.854A2.2 2.2 0 0 0 5.411 3H3.984V1.031h-.016v-.016H2.015v.969H3v1.984h2.013l-.48.364a5.4 5.4 0 0 0-1.281 1.683H1.027V9H0v.984h1.984V7h.896a5.3 5.3 0 0 0-.173 1.321c0 .979.269 1.894.729 2.679l-2.409.026v3.016H.055V15H2v-3.031h2.194a5.27 5.27 0 0 0 2.793 1.554L8 5l1.029 8.519c1.08-.214 2.025-.771 2.762-1.534H14V15h1.969v-.984h-1V11h-2.406a5.26 5.26 0 0 0 .729-2.679c0-.457-.063-.945-.172-1.368h.896v3.031zm-10 .975H5v-1h1zm-1-3H4v-1h1zm7 0h-1v-1h1zm-2-3H9v-1h1zm-3.062 0h-1v-1h1zm4.062 6h-1v-1h1z"></svg:path>`,
})
export class SiGlyphBugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBuildingIcon],svg[si-glyph-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.961 3.031h-.992v-.997h-1.016V.031h-.938v2.003h-.957v.997h-1.023v2H9V16h6.982V5.031h-1.021zm-1.992.938h1v1h-1zm-2 .015h1v1h-1zM11 13.956h-1v-1h1zm0-1.999h-1v-1h1zm0-1.999h-1v-1h1zM11 8h-1V7h1zm2 5.956h-1v-1h1zm0-1.999h-1v-1h1zm0-1.999h-1v-1h1zM13 8h-1V7h1zm2 5.956h-1v-1h1zm0-1.999h-1v-1h1zm0-1.999h-1v-1h1zm0-2.009h-1v-1h1zm-8.039-4.9H5.924v-.997h-.949V.047h-.928v2.005H3.014v.997h-.979v1.998H1V16h6.982V5.047H6.961zm-2.004.912h1v1h-1zM3 3.961h1v1H3zm0 10.032H2v-1h1zm0-2.004H2v-1h1zm0-2.018H2v-1h1zM3 8H2V7h1zm2 5.969H4v-1h1zm0-1.995H4v-1h1zm0-1.993H4v-1h1zm0-2.006H4v-1h1zm2 5.984H6v-1h1zm0-1.998H6v-1h1zm0-1.998H6v-1h1zm0-2.008H6v-1h1z"></svg:path>`,
})
export class SiGlyphBuildingIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBulletCheckedListIcon],svg[si-glyph-bullet-checked-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.016 9h-3V6h3zM.953 8h1V6.969h-1zm2.016 4.986H.016V10h2.953zM.954 12h1v-1h-1zM5 3h10.977v.976H5zm0 4h10.977v.96H5zm0 4h10.977v.914H5zM1.366 5.295L.021 3.939l.635-.635l.71.696l2.036-2l.623.636z"></svg:path>`,
})
export class SiGlyphBulletCheckedListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBulletListIcon],svg[si-glyph-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.016 9h-3V6h3zM.953 8h1V6.969h-1zm2.016 4.986H.016V10h2.953zM.954 12h1v-1h-1zm2.062-7h-3V2h3zM.953 4h1V2.969h-1zM5 7h10.977v.96H5zm0-4h10.977v.96H5zm0 8h10.977v.914H5z"></svg:path>`,
})
export class SiGlyphBulletListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBulletList2Icon],svg[si-glyph-bullet-list-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h2v2H1zm0 5h2v2H1zm0 5h2v2H1zm5-9h11v1H6zm0 5h11v1H6zm0 5h11v1H6z"></svg:path>`,
})
export class SiGlyphBulletList2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphBusIcon],svg[si-glyph-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 3)"><svg:ellipse cx="3.492" cy="8.48" rx="1.492" ry="1.48"></svg:ellipse><svg:circle cx="12.485" cy="8.485" r="1.485"></svg:circle><svg:path d="M14.078.024h-7.91c-2.104 0-3.137.5-3.137 2.991c0 0-.888.993-1.586.993S0 4.451 0 4.993v3.131c0 .408.219.728.918.819a2.7 2.7 0 0 1-.049-.485c0-1.438 1.182-2.605 2.637-2.605S6.143 7.02 6.143 8.458q-.001.264-.053.512l3.822.002a2.7 2.7 0 0 1-.048-.477a2.644 2.644 0 0 1 2.642-2.643a2.643 2.643 0 0 1 2.641 2.643a2.6 2.6 0 0 1-.049.478h.887V3.009c-.001-1.863-.671-2.985-1.907-2.985M7.016 3.031H3.918c0-2.223.947-2.05 1.293-2.05L7.023.967zm5.027-.01H7.969V.978h4.074zm.931 0V.978h1.435c.692 0 .67 2.043.67 2.043z"></svg:path></svg:g>`,
})
export class SiGlyphBusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowDownIcon],svg[si-glyph-button-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.984 16C3.595 16 .025 12.424.025 8.027c0-4.395 3.57-7.971 7.959-7.971s7.959 3.576 7.959 7.971c0 4.397-3.57 7.973-7.959 7.973M7.977 1.904c-3.363 0-6.102 2.732-6.102 6.086c0 3.357 2.739 6.09 6.102 6.09c3.365 0 6.102-2.733 6.102-6.09c-.001-3.354-2.738-6.086-6.102-6.086"></svg:path><svg:path d="m5.047 8.051l2.984 3.904l2.916-3.905H8.944V4.786c0-.344-.324-.79-.955-.79c-.63 0-.976.483-.976.826v3.229z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowLeftIcon],svg[si-glyph-button-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 8.041C1 3.652 4.582.082 8.985.082c4.401 0 7.983 3.57 7.983 7.959S13.386 16 8.985 16C4.582 16 1 12.43 1 8.041m14.057 0c0-3.333-2.715-6.045-6.051-6.045S2.954 4.708 2.954 8.041s2.716 6.045 6.052 6.045c3.337 0 6.051-2.712 6.051-6.045"></svg:path><svg:path d="M8.975 5.02L5.071 8.022l3.905 2.951V8.97h3.14c.345 0 .791-.324.791-.955c0-.63-.483-.975-.826-.975H8.976V5.02z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowRightIcon],svg[si-glyph-button-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.969 8.041c0 4.389-3.582 7.959-7.986 7.959c-4.4 0-7.982-3.57-7.982-7.959S4.583.082 8.983.082c4.404 0 7.986 3.57 7.986 7.959m-14 0c0 3.305 2.712 5.996 6.045 5.996s6.047-2.691 6.047-5.996s-2.713-5.996-6.047-5.996s-6.045 2.691-6.045 5.996"></svg:path><svg:path d="m9.057 10.969l3.904-3.002l-3.905-2.951v2.003H5.793c-.346 0-.791.324-.791.955c0 .63.483.975.826.975h3.229z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonArrowUpIcon],svg[si-glyph-button-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.984.057c4.389 0 7.959 3.562 7.959 7.941c0 4.377-3.57 7.939-7.959 7.939s-7.959-3.562-7.959-7.939c0-4.379 3.571-7.941 7.959-7.941m-.015 14.026c3.347 0 6.074-2.729 6.074-6.083s-2.727-6.083-6.074-6.083C5.62 1.917 2.896 4.647 2.896 8s2.724 6.083 6.073 6.083"></svg:path><svg:path d="M11.975 7.906L8.973 4.002L6.022 7.907h2.003v3.264c0 .344.324.79.955.79c.63 0 .975-.483.975-.826V7.906z"></svg:path></svg:g>`,
})
export class SiGlyphButtonArrowUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonBuyIcon],svg[si-glyph-button-buy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m13.36 2.094l-5.36 1l-5.318-1C1.231 2.094.053 3.412.053 5.039v4.982c0 1.626 1.178 2.943 2.629 2.943L8 11.937l5.36 1.027c1.453 0 2.63-1.317 2.63-2.943V5.039c0-1.627-1.177-2.945-2.63-2.945M6 9.041h-.968V10H2V5h3.032v1H6zM10 10H7V5h1v4.025h1V5h1zm4-1.975L13.04 8v2h-1.08l.02-1.975H11V5h.98v3.025h1.06V5H14z"></svg:path><svg:path d="M3 8v1.037h2.006V8zm0-2h2.026v1.029H3z"></svg:path></svg:g>`,
})
export class SiGlyphButtonBuyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonErrorIcon],svg[si-glyph-button-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.646 2.371c-3.111-3.11-8.177-3.111-11.288 0s-3.11 8.177 0 11.289c3.111 3.11 8.176 3.111 11.288 0c3.112-3.113 3.111-8.177 0-11.289M4.587 12.431C2.148 9.993 2.146 6.028 4.58 3.594s6.399-2.432 8.838.006s2.439 6.404.006 8.838c-2.436 2.434-6.4 2.431-8.837-.007"></svg:path><svg:path d="M11.164 11.063a.56.56 0 0 1-.388-.141L9.009 9.157l-1.695 1.695a.62.62 0 0 1-.423.146a.84.84 0 0 1-.603-.265c-.221-.22-.27-.438-.271-.58a.55.55 0 0 1 .14-.4l1.724-1.725l-1.68-1.678c-.152-.153-.279-.627.12-1.025c.225-.225.446-.272.593-.272c.183 0 .32.072.387.141L9.009 6.9l1.696-1.696a.62.62 0 0 1 .424-.146a.84.84 0 0 1 .604.266c.378.379.302.81.131.98L10.138 8.03l1.737 1.736c.067.068.146.22.146.424a.83.83 0 0 1-.265.602c-.225.224-.445.271-.592.271"></svg:path></svg:g>`,
})
export class SiGlyphButtonErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonHdIcon],svg[si-glyph-button-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.276 2L9.015 3.062L3.723 2C2.218 2 .999 3.243.999 4.777v5.41c0 1.534 1.219 2.777 2.724 2.777l5.292-1.012l5.261 1.012c1.504 0 2.724-1.243 2.724-2.777v-5.41C17 3.243 15.78 2 14.276 2m-6.231 8.032H6.957v-1.97H5.061v1.97H3.973V4.969h1.088v1.969h1.896V4.969h1.088zm3.955.029H9.953V4.96L12 4.959c2.303 0 2.072.812 2.072 2.552c0 1.738.335 2.55-2.072 2.55"></svg:path><svg:path d="M12.197 6.006H11v2.979h1.197c.99-.016.792-.248.792-1.488c0-1.243.199-1.477-.792-1.491"></svg:path></svg:g>`,
})
export class SiGlyphButtonHdIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonPlayIcon],svg[si-glyph-button-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.309 3L9.032 4.125L3.63 3C2.178 3 1.001 4.329 1.001 5.967v5.021c0 1.638 1.177 2.967 2.629 2.967l5.402-1.018l5.277 1.018c1.452 0 2.629-1.329 2.629-2.967V5.967C16.938 4.329 15.761 3 14.309 3m-3.48 6.117l-2.505 1.917a1.17 1.17 0 0 1-1.418-.004l.029-5.104c.419-.319.945-.222 1.368.101l2.521 1.93c.422.321.424.841.005 1.16"></svg:path>`,
})
export class SiGlyphButtonPlayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonPlusIcon],svg[si-glyph-button-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.021.114c-4.394 0-7.969 3.554-7.969 7.922s3.575 7.922 7.969 7.922s7.969-3.554 7.969-7.922S13.415.114 9.021.114M9.013 14.07c-3.329 0-6.04-2.724-6.04-6.071s2.711-6.071 6.04-6.071s6.039 2.725 6.039 6.071c0 3.348-2.71 6.071-6.039 6.071"></svg:path><svg:path d="M8.996 11.969c-.654 0-.959-.437-.959-.731V8.983H5.813c-.265 0-.782-.298-.782-.986c0-.654.438-.959.732-.959h2.271V4.801c0-.264.298-.782.986-.782c.654 0 .959.438.959.732v2.285h2.236c.265 0 .783.299.783.987c0 .653-.438.958-.732.958H9.981v2.206c.001.263-.296.782-.985.782"></svg:path></svg:g>`,
})
export class SiGlyphButtonPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonRemoveIcon],svg[si-glyph-button-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.021.114C3.627.114.052 3.668.052 8.036s3.575 7.922 7.969 7.922s7.969-3.554 7.969-7.922S12.415.114 8.021.114M8.013 14.07c-3.329 0-6.04-2.724-6.04-6.071s2.711-6.071 6.04-6.071s6.039 2.725 6.039 6.071c0 3.348-2.71 6.071-6.039 6.071"></svg:path><svg:path d="M4.813 8.982c-.265 0-.782-.298-.782-.986c0-.654.438-.959.732-.959l6.453-.002c.265 0 .783.299.783.987c0 .653-.438.958-.732.958z"></svg:path></svg:g>`,
})
export class SiGlyphButtonRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonSaleIcon],svg[si-glyph-button-sale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 7h.968v1.939H7z"></svg:path><svg:path d="M13.513 3.002L8.438 4.063L3.473 3.002C2.108 3.002 1 4.334 1 5.977v5.036c0 1.644 1.107 2.976 2.473 2.976l5.09-1.082l4.95 1.082c1.364 0 2.472-1.332 2.472-2.976V5.977c-.001-1.643-1.108-2.975-2.472-2.975M5.047 7.016H3.014v.969h1.002v.984h1.031v1.047H4.043v1H1.969V9.954h2.002v-.951h-.997v-.984H1.969V6.983h1.005V5.955h2.073zm3.966 4.031H7.969v-1.031h-.953v1.031H5.969V6.985h1V5.971h1.047v1.014h.997zm3.003-.031H9.969V5.954h1.047V9.97h1zm3.015-4H14.01v.938h.994v1.078h-.973v.933h1v1.052h-2.062V5.97h2.062z"></svg:path></svg:g>`,
})
export class SiGlyphButtonSaleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonSellIcon],svg[si-glyph-button-sell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.343 2.033L9.01 3.083l-5.375-1.05C2.18 2.033 1 3.359 1 4.996v5.018c0 1.637 1.18 2.964 2.635 2.964l5.375-1.02l5.333 1.02c1.456 0 2.636-1.327 2.636-2.964V4.996c0-1.637-1.18-2.963-2.636-2.963M6.042 6.004H4.021v.97h.995v1.009h1.026V9.08h-1v.978H2.98V8.939h1.989v-.907H3.98V7.023h-1V5.958h1V4.949h2.062zm3 .026H8.021v.962h.995v1.051h-.974v.873h1v1.141H6.98V4.979h2.062zm3 4.027H9.984V4.958h1.031v3.979h1.026zm3 0h-2.058V4.948h1.031V9h1.026z"></svg:path>`,
})
export class SiGlyphButtonSellIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonStarburstIcon],svg[si-glyph-button-starburst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.584 7.939c1.535-.506 2.469-1.008 2.401-1.378s-1.118-.53-2.736-.49c1.265-.99 1.967-1.776 1.774-2.101c-.189-.325-1.234-.121-2.742.458c.846-1.354 1.23-2.327.938-2.569s-1.203.299-2.416 1.352c.32-1.557.342-2.602-.018-2.73c-.357-.128-1.024.686-1.797 2.08C9.747.991 9.402 0 9.021 0c-.383 0-.727.99-.967 2.561C7.282 1.166 6.615.352 6.254.479c-.36.129-.337 1.174-.016 2.73c-1.212-1.051-2.124-1.592-2.417-1.352s.092 1.216.937 2.57c-1.507-.58-2.553-.783-2.743-.458c-.191.325.51 1.111 1.777 2.102c-1.619-.04-2.672.119-2.738.49c-.067.368.867.872 2.4 1.378c-1.533.506-2.467 1.01-2.4 1.379s1.119.53 2.738.489c-1.268.989-1.971 1.774-1.777 2.101c.19.326 1.236.123 2.741-.458c-.845 1.355-1.229 2.329-.937 2.571c.295.242 1.205-.301 2.417-1.351c-.321 1.556-.343 2.601.017 2.729c.359.129 1.028-.686 1.801-2.082c.24 1.57.584 2.561.967 2.561c.381 0 .726-.99.967-2.561c.772 1.395 1.44 2.209 1.799 2.081c.36-.128.338-1.173.016-2.729c1.213 1.051 2.124 1.593 2.416 1.351c.295-.242-.09-1.216-.936-2.569c1.506.581 2.551.782 2.742.458c.191-.326-.512-1.111-1.775-2.101c1.617.04 2.668-.12 2.735-.491c.068-.368-.866-.872-2.401-1.378"></svg:path>`,
})
export class SiGlyphButtonStarburstIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonTriangleUpIcon],svg[si-glyph-button-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.027 8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M5.154 10c-.205-.186-.205-.774 0-.96l3.467-4.9a.566.566 0 0 1 .746 0l3.478 4.9c.207.185.207.773 0 .96h-7.69z"></svg:path>`,
})
export class SiGlyphButtonTriangleUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonTvIcon],svg[si-glyph-button-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.338 3.045l-5.33 1.002l-5.361-1.002c-1.452 0-2.631 1.328-2.631 2.966v5.023C1.016 12.672 2.195 14 3.647 14l5.361-1.031L14.338 14c1.452 0 2.631-1.328 2.631-2.966V6.011c0-1.638-1.179-2.966-2.631-2.966M8.024 7.016H6.026v4.031H4.964V7.016h-1.98V6h5.04zm5.062 4.017h-1.127L9.962 5.965h1.3l1.268 3.666l1.231-3.666h1.294z"></svg:path>`,
})
export class SiGlyphButtonTvIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCabinCableIcon],svg[si-glyph-cabin-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.283 7H9V2H7.024v5h-.35C5.203 7 2.013 8.147 2.013 9.563v4.428C2.013 15.406 3.206 16 4.677 16h6.603c1.472 0 2.663-.594 2.663-2.009V9.563C13.943 8.147 10.752 7 9.283 7M5.03 12.046H2.951v-1.703c0-.385.454-1.343 1.51-1.343h.569zm5.016 2.286c0 .37-.294.669-.656.669H6.602a.66.66 0 0 1-.655-.669V9.573c0-.369.294-.573.655-.573H9.39c.362 0 .656.204.656.573zm2.995-2.286H10.94V9h.576c1.146 0 1.524.972 1.524 1.354v1.692z"></svg:path><svg:path d="M1.682 4.93c-.367 0-.666-.273-.666-.612s.299-.613.666-.613c5.575 0 11.077-.985 14.358-2.573c.327-.158.728-.042.899.258c.171.299.045.67-.28.827C13.199 3.891 7.46 4.93 1.682 4.93"></svg:path></svg:g>`,
})
export class SiGlyphCabinCableIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCabinetIcon],svg[si-glyph-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M4 15.021h10V8.959H4zm1.042-4.98h7.938v3.917H5.042z"></svg:path><svg:path fill="currentColor" d="M13.721.039H4.239c-.691 0-1.238.478-1.238 1.178v13.605c0 .614.531 1.178 1.238 1.178h9.482c.842 0 1.238-.548 1.238-1.178V1.217c0-.7-.568-1.178-1.238-1.178M14 15.021H4V8.959h10zm0-8H4V.959h10z"></svg:path><svg:path fill="currentColor" d="M10.042 10.041v.999H7.938v-.999H5.042v3.917h7.937v-3.917zm0-7.041H7.958v-.958H5V6h8V2.042h-2.958z"></svg:path></svg:g>`,
})
export class SiGlyphCabinetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalculatorIcon],svg[si-glyph-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.689.041h-5.606v6.876h6.875V1.299c0-.694-.567-1.258-1.269-1.258m-.645 4.004h-3.106V2.938h3.106zM10 15.958h5.674c.71 0 1.284-.569 1.284-1.274V9.042H10zm1.953-4.989h3.07v1.062h-3.07zm0 1.984H15v1.094h-3.047zM7.898.041H2.326A1.25 1.25 0 0 0 1.083 1.3v5.623h6.815zM6 4.023h-.984v1.039H3.98V4.023H2.959V2.982H3.98V1.98h1.036v1.002H6zM1.083 14.676c0 .709.562 1.282 1.255 1.282h5.62V9H1.083zm2.36-3.967l1.046 1.047l1.048-1.049l.732.732l-1.048 1.049l1.061 1.061l-.735.736l-1.062-1.061l-1.022 1.021l-.732-.732l1.021-1.021l-1.045-1.047z"></svg:path>`,
})
export class SiGlyphCalculatorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalculator2Icon],svg[si-glyph-calculator-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.58 0H4.322C3.592 0 3 .598 3 1.334v13.333C3 15.404 3.592 16 4.322 16h9.258c.729 0 1.42-.596 1.42-1.333V1.334C15 .598 14.31 0 13.58 0M7.021 14H4.987v-1h2.034zm0-5.979H4.987V7h2.034zM10 14H7.986v-1H10zm-2.979-3H4.987v-1h2.034zM10 11H7.986v-1H10zm0-3H7.986V7H10zm3 6h-2V9.979h2zm0-5.98h-2.014V7H13zM14.014 6H4V2h10.014z"></svg:path>`,
})
export class SiGlyphCalculator2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalendar1Icon],svg[si-glyph-calendar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13 .031V1h-2V.031H5V1H3V.031H0V16h16V.031zm1.029 13.977H1.955v-9.07h12.074z"></svg:path><svg:path d="M6.027 7.957h-.98v-.941h1.902v4.938h-.922zm4 0H9v-.941h1.953v4.938h-.926z"></svg:path></svg:g>`,
})
export class SiGlyphCalendar1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalendar3Icon],svg[si-glyph-calendar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M15 3.902H3c-1.027 0-1 .031-1 1.098v9c0 1.067-.027 1 1 1h12c1.027 0 1 .067 1-1V5c0-1.066.027-1.098-1-1.098M13.957 12H12v1.998h-.959V12H6.937v2h-.9v-2H4v-.952h2.037V9H4.029v-.929h2.008V6.065h.9v2.006h4.104V6.067H12v2.004h1.953V9H12v2.048h1.957z"></svg:path><svg:path fill="currentColor" d="M12 9h1.953v-.929H12V6.067h-.959v2.004H6.937V6.065h-.9v2.006H4.029V9h2.008v2.048H4V12h2.037v2h.9v-2h4.104v1.998H12V12h1.957v-.952H12zm-.975 2.048H6.968V9h4.057z"></svg:path><svg:path fill="currentColor" d="M14.77 1.051H13V2h-1v-.949H6V2H5v-.949H3.23C1.998 1.051 1 2.061 1 3.306v10.322c0 1.244.998 2.255 2.23 2.255h11.539c1.232 0 2.23-1.011 2.23-2.255V3.306c.001-1.245-.997-2.255-2.229-2.255M16 14c0 1.067.027 1-1 1H3c-1.027 0-1 .067-1-1V5h14zM5 0h.979v1H5zm7 0h1v1h-1z"></svg:path></svg:g>`,
})
export class SiGlyphCalendar3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalendarEmptyIcon],svg[si-glyph-calendar-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4 0h.971v1.911H4zm7 0h1v1.906h-1z"></svg:path><svg:path d="M15.976 4.959V2.456c0-.771-.606-1.398-1.354-1.398h-1.59v2.026H9.968V1.058H6.034v2.026H2.938V1.058H1.401c-.748 0-1.354.627-1.354 1.398v2.503zM.046 6.003v8.562c0 .772.606 1.399 1.354 1.399h13.221c.748 0 1.354-.627 1.354-1.399V6.003z"></svg:path></svg:g>`,
})
export class SiGlyphCalendarEmptyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCallIcon],svg[si-glyph-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.031 11.852c-.428-.539-1.123-1.32-1.718-1.394c-.362-.045-.778.255-1.188.538c-.08.04-.698.408-.773.43c-.396.113-1.241.146-1.752-.32c-.492-.45-1.27-1.283-1.898-2.046c-.6-.786-1.229-1.731-1.551-2.311c-.336-.601-.094-1.396.114-1.746c.038-.063.498-.536.601-.646l.015.018c.381-.32.78-.645.825-.997c.074-.586-.525-1.439-.953-1.979C5.325.858 4.662-.089 3.759.045c-.34.05-.633.169-.922.34L2.829.376l-.048.037l-.025.013l.003.004c-.166.128-.64.482-.694.53c-.586.521-1.468 1.748-.786 3.955c.506 1.64 1.585 3.566 3.055 5.514l-.008.007c.072.094.146.179.221.27q.104.14.211.277l.01-.007c1.56 1.879 3.196 3.381 4.689 4.267c2.01 1.192 3.439.655 4.099.228c.062-.041.534-.408.694-.529l.004.004l.018-.02l.043-.033l-.006-.008c.242-.234.436-.484.57-.799c.351-.829-.42-1.693-.848-2.234"></svg:path>`,
})
export class SiGlyphCallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCallForwardIcon],svg[si-glyph-call-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m14.252 8.774l2.512-2.139a.776.776 0 0 0 0-1.115l-2.512-2.139c-.34-.331-1.191-.452-1.191-.048v1.761H9.139c-.559 0-1.01.424-1.01.946s.451.946 1.01.946h3.922v1.74c0 .278.818.307 1.191.048"></svg:path><svg:path d="M14.031 11.852c-.428-.539-1.123-1.32-1.718-1.394c-.362-.045-.778.255-1.188.538c-.08.04-.698.408-.773.43c-.396.113-1.241.146-1.752-.32c-.492-.45-1.27-1.283-1.898-2.046c-.6-.786-1.229-1.731-1.551-2.311c-.336-.601-.094-1.396.114-1.746c.038-.063.498-.536.601-.646l.015.018c.381-.32.78-.645.825-.997c.074-.586-.525-1.439-.953-1.979C5.325.858 4.662-.089 3.759.045c-.34.05-.633.169-.922.34L2.829.376l-.048.037l-.025.013l.003.004c-.166.128-.64.482-.694.53c-.586.521-1.468 1.748-.786 3.955c.506 1.64 1.585 3.566 3.055 5.514l-.008.007c.072.094.146.179.221.27q.104.14.211.277l.01-.007c1.56 1.879 3.196 3.381 4.689 4.267c2.01 1.192 3.439.655 4.099.228c.062-.041.534-.408.694-.529l.004.004l.018-.02l.043-.033l-.006-.008c.242-.234.436-.484.57-.799c.351-.829-.42-1.693-.848-2.234"></svg:path></svg:g>`,
})
export class SiGlyphCallForwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCallReplyIcon],svg[si-glyph-call-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.878 3.259L8.366 5.398a.776.776 0 0 0 0 1.115l2.512 2.139c.339.331 1.122.452 1.122.048V6.939h3.991c.558 0 1.011-.424 1.011-.946s-.453-.946-1.011-.946H12v-1.74c0-.278-.748-.307-1.122-.048"></svg:path><svg:path d="M14.031 11.852c-.428-.539-1.123-1.32-1.718-1.394c-.362-.045-.778.255-1.188.538c-.08.04-.698.408-.773.43c-.396.113-1.241.146-1.752-.32c-.492-.45-1.27-1.283-1.898-2.046c-.6-.786-1.229-1.731-1.551-2.311c-.336-.601-.094-1.396.114-1.746c.038-.063.498-.536.601-.646l.015.018c.381-.32.78-.645.825-.997c.074-.586-.525-1.439-.953-1.979C5.325.858 4.662-.089 3.759.045c-.34.05-.633.169-.922.34L2.829.376l-.048.037l-.025.013l.003.004c-.166.128-.64.482-.694.53c-.586.521-1.468 1.748-.786 3.955c.506 1.64 1.585 3.566 3.055 5.514l-.008.007c.072.094.146.179.221.27q.104.14.211.277l.01-.007c1.56 1.879 3.196 3.381 4.689 4.267c2.01 1.192 3.439.655 4.099.228c.062-.041.534-.408.694-.529l.004.004l.018-.02l.043-.033l-.006-.008c.242-.234.436-.484.57-.799c.351-.829-.42-1.693-.848-2.234"></svg:path></svg:g>`,
})
export class SiGlyphCallReplyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCameraIcon],svg[si-glyph-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(.995 2.98)"><svg:circle cx="7.958" cy="6.958" r="2.958"></svg:circle><svg:path d="M14.666 2.042h-3.713L9.937.031H6L5 2.042H1.333C.597 2.042 0 2.639 0 3.375v7.25c0 .736.597 1.334 1.333 1.334h13.333c.736 0 1.334-.598 1.334-1.334v-7.25c0-.736-.598-1.333-1.334-1.333M6.953.969h2.094v1.062H6.953zm1.049 10.064a4.05 4.05 0 0 1-4.055-4.048a4.05 4.05 0 0 1 4.055-4.048a4.05 4.05 0 0 1 4.055 4.048a4.05 4.05 0 0 1-4.055 4.048M14 4.031h-2.047V2.969H14z"></svg:path></svg:g>`,
})
export class SiGlyphCameraIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCameraProjectorIcon],svg[si-glyph-camera-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.997 5.509A3.49 3.49 0 0 0 4.51 2.021a3.49 3.49 0 0 0-3.488 3.488c0 1.086.239 1.905 1.018 2.546l.007 6.154c0 .435.403.734.833.734h5.117zM4.5 7C3.675 7 3 6.327 3 5.5C3 4.674 3.675 4 4.5 4C5.326 4 6 4.674 6 5.5S5.326 7 4.5 7m11.812-1.968H9.006v5.938h7.306c.366 0 .662-.3.662-.667V5.698a.66.66 0 0 0-.662-.666m-.296 2.999h-2.047V6.953h2.047z"></svg:path>`,
})
export class SiGlyphCameraProjectorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCameraSecurityIcon],svg[si-glyph-camera-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 12h3.05v1.945H1zm3.16.227l2.028-5.768l1.183.416l-2.027 5.768z"></svg:path><svg:path d="m2.595 3.217l-.486 1.664s-.294.774.427 1.014c.812.248 6.992 2.084 6.992 2.084l1.391-2.38z"></svg:path><svg:path d="M13.709 4.971c.105-.039 2.249-1.2 2.249-1.2c-.162-.163-.257-.286-.495-.355L4.145.101a1.395 1.395 0 0 0-1.738.937l-.351 1.197s9.708 2.844 10.006 2.886l-1.019 1.798l2.946 1.025l.99-2.922c0-.001-1.11-.001-1.27-.051m-11.95 7.208l-.356-.529c1.944-1.198 2.61-4.396 2.59-6.771l.658-.006c.021 2.656-.726 5.971-2.892 7.306"></svg:path><svg:path d="M2.029 12.996c0 1.645-.908 2.977-2.029 2.977v-5.952c1.121 0 2.029 1.332 2.029 2.975"></svg:path></svg:g>`,
})
export class SiGlyphCameraSecurityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCanWaterIcon],svg[si-glyph-can-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.168 5.069c-.506-2.648-2.262-4.037-4.626-4.037c-2.362 0-4.125 1.384-4.636 4.027c-.473.012-.849.314-.849.69v1.847L3.904 5.575L3.9 5.573c.314-.551.385-1.075.121-1.346c-.39-.398-1.344-.099-2.131.668c-.787.77-1.111 1.715-.723 2.113c.266.273.797.214 1.355-.092l3.534 6.101v2.257c0 .382.39.692.873.692h9.158c.483 0 .873-.311.873-.692V5.749c.002-.359-.348-.646-.792-.68M11.528 2c1.784 0 3.062.938 3.472 3H8c.41-2.062 1.744-3 3.527-3z"></svg:path>`,
})
export class SiGlyphCanWaterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCandleIcon],svg[si-glyph-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 5h.926v1.823H8z"></svg:path><svg:path d="M10.287 5.973c.11-2.604-.986-3.368-1.61-3.368c-.65 1.177-2.032 1.498-2.329 3.394C5.034 3.567 8.004 3.059 8.153.027c.252-.001 4.403 3.559 2.134 5.946m1.031 1.436s-.518.644-2.244.644s-3.37-.644-3.37-.644a.677.677 0 0 0-.681.672v7.226c0 .371.305.673.681.673h5.614a.68.68 0 0 0 .682-.673V8.081a.677.677 0 0 0-.682-.672m-.258 7.607H9.951V8.954h1.109z"></svg:path></svg:g>`,
})
export class SiGlyphCandleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCandyIcon],svg[si-glyph-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.484.037c-1.494 0-2.791.786-3.469 1.947h6.936C11.275.823 9.977.037 8.484.037m4.24 2.984H4.278c-.137 0-.248.102-.248.226v2.498c0 .124.111.225.248.225h8.446c.138 0 .248-.101.248-.225V3.247c0-.124-.111-.226-.248-.226m-.742 3.985H5.009c.584 1.052 1.742 1.802 2.99 1.997v6.95h.262v.031h.597v-.031h.126V9.021a3.98 3.98 0 0 0 2.998-2.015"></svg:path>`,
})
export class SiGlyphCandyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCandyStickIcon],svg[si-glyph-candy-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.75.468A5.6 5.6 0 0 0 10.682.13A5.5 5.5 0 0 0 9.496.009A5.35 5.35 0 0 0 7.28.527a4.5 4.5 0 0 0-2.013 1.908C5.216 2.528.146 13.977.146 13.977c-.318.72.014 1.56.738 1.872a1.45 1.45 0 0 0 1.898-.743L7.751 3.844c.223-.503.723-.847 1.346-.952c.127-.021.256-.037.393-.037a2.74 2.74 0 0 1 1.797.66l.635.825c.195.434.23.899.045 1.318a1.41 1.41 0 0 0 .67 1.834c.025.013.045.028.07.039c.502.217 1.083.102 1.494-.229c.168-.137.312-.308.404-.513c.164-.374.264-.758.317-1.146c.281-2.067-.967-4.229-3.172-5.175"></svg:path>`,
})
export class SiGlyphCandyStickIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCarIcon],svg[si-glyph-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="siGlyphCar0" d="M6.514 1.607C6.319 2.141 5.934 3 5.934 3h3.092V.957H7.544c-.28 0-.843.131-1.03.65m5.932-.64H9.968V3h4.086l-.484-1.447s-.41-.586-1.124-.586"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd" transform="translate(1 4)"><svg:circle cx="12.49" cy="6.49" r="1.49" fill="currentColor"></svg:circle><svg:circle cx="3.49" cy="6.49" r="1.49" fill="currentColor"></svg:circle><svg:use href="#siGlyphCar0"></svg:use><svg:use href="#siGlyphCar0"></svg:use><svg:path fill="currentColor" d="M16 4.836c0-.597-.078-1.137-.753-1.524l-.585-1.974C14.662.947 13.747 0 12.618 0H7.339C6.21 0 5.296 1.088 5.296 1.338L4.432 3l-.781.107C1.633 3.107.583 4.334.583 5.515L.024 6.984h1.007a2.5 2.5 0 0 1-.056-.518a2.51 2.51 0 0 1 2.519-2.498a2.51 2.51 0 0 1 2.518 2.498q-.001.267-.056.518h4.074a2.5 2.5 0 0 1-.056-.518a2.51 2.51 0 0 1 2.519-2.498a2.51 2.51 0 0 1 2.519 2.498q-.001.267-.056.518H16zM9.025 3H5.933s.385-.858.58-1.393c.188-.52.751-.65 1.03-.65h1.482zm.944 0V.967h2.478c.714 0 1.124.586 1.124.586L14.055 3z"></svg:path></svg:g>`,
})
export class SiGlyphCarIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCarGarageIcon],svg[si-glyph-car-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M.043 2.083v11.855h1.939V3.943h12.036v9.995h1.94V2.083z"></svg:path><svg:path d="M3 5h9.956v.952H3zm0 2h9.957v.971H3zm8.97 5.96v.515c0 .271-.438.492-.975.492s-.974-.221-.974-.492h.001v-.485H5.946v.498c0 .247-.434.449-.964.449s-.961-.202-.961-.449v-.509h.139c-1.287-.117-1.156-1.13-1.156-1.13c0-.73.152-1.901.996-2.402V8h1v1.192l.059-.008S7.096 9.001 8 9.001s2.79.214 2.901.23l.098.018V8h1v1.457c.756.331 1 1.354 1 2.392c0 0-.027.93-1.03 1.111zm-7.001-.991h-1v-1h1zm3.99-.011h-2v-1h2zm3.01.011h-1v-1h1z"></svg:path></svg:g>`,
})
export class SiGlyphCarGarageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCasetteIcon],svg[si-glyph-casette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(1 3)"><svg:path d="M4.629 4C3.178 4 2 5.189 2 6.656s1.178 2.656 2.629 2.656c1.453 0 2.629-1.189 2.629-2.656S6.082 4 4.629 4m6.981 0C10.169 4 9 5.189 9 6.656s1.169 2.656 2.61 2.656c1.442 0 2.611-1.189 2.611-2.656S13.053 4 11.61 4"></svg:path><svg:path fill="currentColor" d="M14.654 0h-.347l-.843 1.954H2.61L1.756 0h-.36C.65 0 .046.624.046 1.392L.001 9.608c0 .768.604 1.392 1.35 1.392h13.32c.746 0 1.285-.624 1.285-1.392L16 1.392C16.002.624 15.398 0 14.654 0M4.5 9a2.5 2.5 0 1 1 .001-5.001A2.5 2.5 0 0 1 4.5 9m7 0a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path><svg:path fill="currentColor" d="M3.529.908h8.707L12.927 0H3.033z"></svg:path><svg:ellipse cx="4.453" cy="6.469" fill="currentColor" rx="1.453" ry="1.469"></svg:ellipse><svg:ellipse cx="11.453" cy="6.469" fill="currentColor" rx="1.453" ry="1.469"></svg:ellipse></svg:g>`,
})
export class SiGlyphCasetteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCashierMachineIcon],svg[si-glyph-cashier-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.641 4.012h-1.656V2.957h1.352c.346 0 .625-.346.625-.771V.772c0-.427-.279-.771-.625-.771H9.646c-.346 0-.624.345-.624.771v1.414c0 .426.278.771.624.771h1.378v1.055H4.353c-.37 0-.67.3-.67.668l-1.67 8.631V16h13.998v-2.689L14.312 4.68a.67.67 0 0 0-.671-.668m-7.625 8.004H4.985v-1.047h1.031zm-1.032-2V8.969h1.031v1.047zm3.032 2.015H6.985v-1.062h1.031zm0-2.031H6.969V8.984h1.047zm2 2.029H8.969v-1.061h1.047zM8.969 10V8.969h1.047V10zm1.047-2H4.985V6h5.031zM13 8h-2.018V6.98H13z"></svg:path>`,
})
export class SiGlyphCashierMachineIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCastleIcon],svg[si-glyph-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 5h-1v1h-1v-.985L13 5v4h-2V4c.549 0 1-.434 1-.97c0 0-3.443-2.988-3.992-2.988h-.016c-.548 0-3.991 2.988-3.991 2.988c0 .536.493.97 1.041.97v5H2.98V6s-.457.055-.979.015V7h-1V6h-1v8.951c0 .556.489 1.007 1.042 1.007H7v-2.896c0-1.427 1.041-1.125 1.041-1.125s1.042-.302 1.042 1.125c0 0 .002 2.854 0 2.896H15c.553 0 1-.487 1-1.087zM1 10V9h1v1zm2 3H2v-1h1zm2 0H4v-1h1zm4-6H6.953V4.935H9zm3 6h-1v-1h1zm2 0h-1v-1h1zm1-3h-1.021V9H15z"></svg:path>`,
})
export class SiGlyphCastleIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCaterpillarMachineIcon],svg[si-glyph-caterpillar-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.017 10.012a1.98 1.98 0 0 0-1.983 1.97c0 1.087.89 1.97 1.983 1.97a1.977 1.977 0 0 0 1.981-1.97c0-1.087-.889-1.97-1.981-1.97m-6.033.05c-1.09 0-1.979.865-1.979 1.934c0 1.066.889 1.934 1.979 1.934c1.094 0 1.98-.867 1.98-1.934c.001-1.068-.886-1.934-1.98-1.934M3.276 6.496c0 1.379-1.837 2.496-3.276 2.496L.67 4c1.439 0 2.606 1.117 2.606 2.496"></svg:path><svg:path d="M6.155 8.625L1.509 6.82l.414-1.361l4.645 1.805z"></svg:path><svg:path d="M15.225 7.9c.031-.133-.267-.271-.267-.414V3.889c0-1.013-.501-1.836-1.507-1.836H9.16a1.83 1.83 0 0 0-1.824 1.836l-.672 3.597l.002.014c-.835.24-1.371.801-1.371 1.846c0 .044.008.083.009.127a3 3 0 0 1 1.681-.51a3.01 3.01 0 0 1 2.971 2.506c.027.119.044.227.052.312a3.016 3.016 0 0 1 3.011-2.811c1.227 0 2.28.731 2.756 1.776c.146-.407.173-.886.173-1.401c-.002-.665-.286-1.128-.723-1.445m-4.172-.838H8.938V3.355c0-.288.105-.4.234-.4h1.645c.13 0 .236.112.236.4zm2.965-1.003h-2.059V2.938h2.059z"></svg:path></svg:g>`,
})
export class SiGlyphCaterpillarMachineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCenteJustifyIcon],svg[si-glyph-cente-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 1.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 1h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 4h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 7h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m-3 3c0 .518-.42.938-.938.938H4.98a.938.938 0 0 1 0-1.876h8.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphCenteJustifyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChair1Icon],svg[si-glyph-chair-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.377 7.984H6.641l-.592-6.641S5.704-.001 9.008-.001c3.306 0 2.96 1.344 2.96 1.344zM12.953 16H12.1l-1.026-2.984h1.879zm-7.055 0h-.896v-2.984h1.973zm7.078-4.778c0 .415-.252.75-.563.75H5.59c-.311 0-.562-.335-.562-.75c0 0 .429-2.186 1.134-2.186h5.682c.799 0 1.132 2.186 1.132 2.186m.896-2.867c0 .349-.19.631-.421.631c-.232 0-.42-.282-.42-.631V5.672c0-.349.188-.631.42-.631c.23 0 .421.282.421.631zm-8.925 0c0 .349-.209.631-.465.631c-.258 0-.466-.282-.466-.631V5.672c0-.349.208-.631.466-.631c.256 0 .465.282.465.631z"></svg:path>`,
})
export class SiGlyphChair1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChair2Icon],svg[si-glyph-chair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 14.095V11h1.938v3.085c1.739.205 3.031.972 3.031 1.886H5.045c0-.9 1.254-1.657 2.955-1.876m3.379-6.142H6.622L6.027 1.34S5.681.016 9 .016s2.975 1.324 2.975 1.324z"></svg:path><svg:path d="M12.969 11.225c0 .416-.231.752-.629.752H5.66c-.396 0-.629-.336-.629-.752c0 0 .458-2.195 1.357-2.195h5.066c1.024-.001 1.515 2.195 1.515 2.195m1.006-3.715c0 .395-.213.475-.476.475s-.476-.08-.476-.475V4.485c0-.396.213-.453.476-.453s.476.058.476.453zm-9 0c0 .395-.213.475-.476.475s-.476-.08-.476-.475V4.485c0-.396.213-.453.476-.453s.476.058.476.453z"></svg:path></svg:g>`,
})
export class SiGlyphChair2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChampionCupIcon],svg[si-glyph-champion-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.969 1H3.082v1.031h-3.09v4.836c0 1.869 2.086 3.407 4.133 3.567c.672.72 1.854 1.243 2.906 1.466v1.264c-1.006.309-2.803 1.035-2.906 1.826h6.904c-.104-.791-2.084-1.518-3.092-1.826V11.9c1.056-.223 2.291-.746 2.964-1.466c2.046-.16 4.04-1.698 4.04-3.567V2.031h-2.972zM.941 2.947H3.01v4.166c0 .822.212 1.604.585 2.308C2.047 8.928.941 7.658.941 6.172zm8.104 5.081l-1.544-.851l-1.546.851l.295-1.8L5 4.954l1.727-.263l.774-1.636l.772 1.636L10 4.954L8.75 6.228zm2.295 1.526c.375-.736.59-1.55.59-2.411V2.974h2.074V6.16c0 1.553-1.111 2.879-2.664 3.394"></svg:path>`,
})
export class SiGlyphChampionCupIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartColumnIcon],svg[si-glyph-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16 14.031H.984V1.016H.027L0 14.95h.027v.029L16 14.95z"></svg:path><svg:path d="M4.958 8.021H2.016v4.964h2.942zm5.011-1.974H7.016v6.922h2.953zm4.984-2.016H12v8.947h2.953z"></svg:path></svg:g>`,
})
export class SiGlyphChartColumnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartColumnDecreaseIcon],svg[si-glyph-chart-column-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 16h15.938v.969H0zm14.906-7.058l-4.756-.875l1.609-1.609l-4.78-4.057L2.9 5.733a.5.5 0 1 1-.658-.753l4.745-3.914l5.479 4.685l1.684-1.684z"></svg:path><svg:path d="M6 6h2.951v8.878H6zM1 9h2.982v5.878H1zm10 2h2.951v3.892H11z"></svg:path></svg:g>`,
})
export class SiGlyphChartColumnDecreaseIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartColumnIncreaseIcon],svg[si-glyph-chart-column-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 15h15.938v.969H1zM15.906.065L11.15.94l1.609 1.609l-4.78 4.057L3.9 3.274a.5.5 0 1 0-.658.753l4.745 3.914l5.479-4.685L15.15 4.94zM12 7h2.951v6.878H12zM2 8h2.982v5.878H2zm5 2h2.951v3.892H7z"></svg:path>`,
})
export class SiGlyphChartColumnIncreaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartDecreaseIcon],svg[si-glyph-chart-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 14.051H2.885V.084H1.041L1 15.875h.041v.041L17 15.875z"></svg:path><svg:path d="M16.816 2h-3.727a.13.13 0 0 0-.129.129l1.527 1.533l-3.476 4.463L8 6l-3.973 5.188l.062 1.75L8.061 8l2.949 2l4.36-5.449L16.813 6a.13.13 0 0 0 .129-.129V2.129A.125.125 0 0 0 16.816 2"></svg:path></svg:g>`,
})
export class SiGlyphChartDecreaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartPieceIcon],svg[si-glyph-chart-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.392 1.049c-.349-.051-.562-.033-.925-.033c-4.095 0-7.424 3.334-7.424 7.43s3.329 7.431 7.424 7.431c4.094 0 7.423-3.335 7.423-7.431c0-.346.044-.598-.002-.929l-7.399.961z"></svg:path><svg:path d="m11.375.047l-.945 6.539l6.613-.928C16.638 2.764 14.314.466 11.375.047"></svg:path></svg:g>`,
})
export class SiGlyphChartPieceIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCheckedIcon],svg[si-glyph-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.432 6.189a1 1 0 0 1 1.415 0L6.968 8.31l6.179-6.179a.99.99 0 0 1 1.401.013l2.122 2.122a.99.99 0 0 1 .014 1.4l-9.022 9.021a.99.99 0 0 1-1.401-.014l-4.95-4.95a1 1 0 0 1 0-1.413z"></svg:path>`,
})
export class SiGlyphCheckedIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCheeseIcon],svg[si-glyph-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.744 2.128c-.22.039-1.438.411-2.941 1.085c.301.464.383.945.158 1.266c-.346.5-1.295.416-2.119-.188c-.052-.036-.096-.079-.144-.118C3.92 5.454 1.031 6.841 1.031 6.841v2.594c1.207.125 2.154 1.123 2.164 2.354l7.752.698c.144-.975.73-1.706 1.434-1.706c.766 0 1.388.865 1.457 1.967l2.43.218l.242-2.24c-.727-.065-1.283-.397-1.283-.801c0-.435.647-.786 1.459-.81c0 0 .109-.961.248-2.273c.304-1.774-3.886-4.943-5.19-4.714m2.79 2.583c.463 0 .838.354.838.792c0 .435-.375.791-.838.791c-.461 0-.837-.356-.837-.791c0-.439.376-.792.837-.792m-3.003-.945c.566 0 1.025.312 1.025.697s-.459.696-1.025.696s-1.024-.312-1.024-.696c0-.386.458-.697 1.024-.697m-5.014.924c.458 0 .827.348.827.779c0 .43-.369.777-.827.777s-.827-.348-.827-.777c-.001-.431.369-.779.827-.779m-.011 6.435c-.887 0-1.604-.502-1.604-1.125c0-.621.717-1.125 1.604-1.125c.885 0 1.603.504 1.603 1.125c-.001.623-.718 1.125-1.603 1.125m9.525-3.094h-3.01c-.228.482-.714 1.016-1.506 1.016c-.794 0-1.285-.533-1.512-1.016h-8.02V6.937h8.051c.255-.447.678-.984 1.434-.984s1.266.537 1.521.984h3.042z"></svg:path>`,
})
export class SiGlyphCheeseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCherryIcon],svg[si-glyph-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.74 9.09c-.117-.279-.24-.552-.354-.8c-.713-1.55-1.645-3.086-2.449-4.165c-.83-1.113-3.965-3.803-4.57-4.043l-.262.645c.492.194 1.488 1.064 1.488 1.064c.177.15.412 1.021.41 1.163a3 3 0 0 0 0 .266c.027.613-.078 1.288-.323 2.06c-.486 1.534-1.577 2.812-2.712 3.833c-.164-.023-.328-.05-.5-.05c-1.916 0-3.469 1.539-3.469 3.438s1.553 3.438 3.469 3.438s3.469-1.539 3.469-3.438c0-1.43-.881-2.654-2.135-3.172C6.884 8.292 7.89 7.023 8.371 5.501c.271-.855.387-1.612.354-2.314c-.003-.057 1.158.904 1.658 1.576c.783 1.05 1.676 2.324 2.388 3.869c.069.149.144.312.219.479c-1.688.232-2.991 1.653-2.991 3.39c0 1.898 1.553 3.438 3.469 3.438s3.469-1.539 3.469-3.438c.001-1.808-1.41-3.272-3.197-3.411"></svg:path>`,
})
export class SiGlyphCherryIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChristmasMistletoeIcon],svg[si-glyph-christmas-mistletoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 3)"><svg:circle cx="7.428" cy="9.428" r="1.428"></svg:circle><svg:ellipse cx="11.461" cy="8.493" rx="1.461" ry="1.493"></svg:ellipse><svg:ellipse cx="8.477" cy="5.493" rx="1.477" ry="1.493"></svg:ellipse><svg:path d="M7.079 2.363c-.074.025-.14.088-.2.145a1.83 1.83 0 0 1-.854.443c-.419.1-1.159-.211-1.522-.507c-.498 1.206-2.152 1.447-2.881.451c.103.571.149.824-.273 1.226c-.412.391-.839.62-1.339.815c.168-.065.325-.116.507-.122c.726-.028 1.482.411 1.908 1.002c.201.281.338.627.307.985c-.005.062-.062.21-.008.244c.078.049.277-.116.346-.147c.262-.117.557-.161.839-.141c.442.029.731.307.982.654c.149.204.353 1.272.788.85c.153-.149.194-.484.321-.677c.148-.227.374-.366.527-.569c.189-.25.019-.615-.096-.858a1.6 1.6 0 0 1-.126-.556c-.341-.225-1.189-.632-2.855-.619h-.002a.324.324 0 0 1-.322-.325a.324.324 0 0 1 .319-.33l.085-.001c1.424 0 2.325.301 2.844.565c.047-.181.105-.36.174-.525c.096-.232.275-.358.469-.488c.161-.109.322-.248.283-.478c-.061-.348-.206-.675-.221-1.037m8.93-2.199c-.528.172-1.02.273-1.603.248c-.599-.027-.725-.243-1.008-.725c.053 1.188-1.434 2.056-2.609 1.486c-.104.447-.499 1.141-.899 1.333a2.06 2.06 0 0 1-.974.214c-.084-.004-.177-.009-.252.021c-.072.027.525.669.634.724c.327.162.671.187.896.48c.08.104.158.226.229.35a12 12 0 0 1 2.483-2.525a.356.356 0 0 1 .474.045a.297.297 0 0 1-.048.439c-1.594 1.204-2.437 2.488-2.65 2.841a.7.7 0 0 0 .175.371c.291.31.671.171 1.046.275c.23.063.451.161.653.282c.188.114.307.304.542.318c.31.018.539-.121.654-.385c.158-.355-.061-.558-.08-.899c-.021-.412.033-.799.371-1.101c.214-.191.479-.346.766-.425c.075-.021.342-.025.372-.11c.022-.061-.118-.132-.161-.174c-.257-.243-.37-.582-.388-.916c-.038-.701.289-1.5.891-1.938a1.7 1.7 0 0 1 .486-.229"></svg:path></svg:g>`,
})
export class SiGlyphChristmasMistletoeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChristmassBallIcon],svg[si-glyph-christmass-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.346 2.287a6.86 6.86 0 0 0-3.115-.121l8.605 8.547a6.8 6.8 0 0 0-.115-3.072c-.073-.269-5.123-5.287-5.375-5.354M2.178 13.826c2.132 2.118 5.215 2.66 7.711 1.602L.567 6.17C-.5 8.647.047 11.709 2.178 13.826M2.033 4.06c-.271.269-.503.56-.713.861l9.824 9.757a6 6 0 0 0 .867-.706a6.1 6.1 0 0 0 1.253-1.828l-9.39-9.328A6.1 6.1 0 0 0 2.033 4.06m7.925 6.912h1.085v1.055H9.958zm-2-2.008h1.085v1.098H7.958zm-2-1.986h1.085v1.076H5.958zm-2-2.07h1.085v1.139H3.958zm6.085-2.012l3.742 3.776l1.551-1.563l-3.744-3.777zM14.127.698c-.848 0-1.559.58-1.783 1.368l.598.593c-.002-.023-.008-.044-.008-.067a1.2 1.2 0 0 1 1.193-1.211a1.2 1.2 0 0 1 1.193 1.211c0 .668-.533 1.21-1.193 1.21l-.041-.005l.596.593a1.89 1.89 0 0 0 1.312-1.799c0-1.044-.838-1.893-1.867-1.893"></svg:path>`,
})
export class SiGlyphChristmassBallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChristmassEggIcon],svg[si-glyph-christmass-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.764 3.12C11.707 1.23 9.989 0 8.045 0C6.139 0 4.446 1.188 3.384 3.021c1.468.581 3.099.908 4.817.908c1.619 0 3.16-.289 4.563-.809M2.223 10.865C2.818 14.28 5.198 16 8.045 16c2.801 0 5.143-1.663 5.787-4.961c-1.689.806-3.756 1.389-5.781 1.389c-2.17 0-4.056-.649-5.828-1.563m1.951-3.074c.723 0 1.418-.265 1.906-.727l.15-.141l.15.141c.486.463 1.181.727 1.904.727c.705 0 1.363-.241 1.855-.678l.145-.13l.146.13c.491.437 1.15.678 1.855.678c.611 0 1.195-.192 1.662-.533a9.9 9.9 0 0 0-.9-3.223a13.4 13.4 0 0 1-4.845.899c-1.821 0-3.552-.363-5.109-1.009a9.8 9.8 0 0 0-.915 3.053l.072.07c.49.473 1.191.743 1.924.743m8.068-2.977l1.049.894l-1.049.894l-1.049-.894zm-4.185.565l1.049.894l-1.049.894l-1.05-.894zm-4.2-.567l1.049.893l-1.049.894l-1.049-.894z"></svg:path><svg:path d="M13.982 8.234c-.498.247-1.084.474-1.695.474c-.75 0-1.451-.28-2.002-.636c-.549.355-1.252.636-2 .636c-.766 0-1.502-.299-2.055-.673c-.555.374-1.292.673-2.057.673s-1.494-.297-2.045-.669a7 7 0 0 0-.052.846c0 .367.032.711.082 1.043c1.774.789 3.687 1.366 5.892 1.366c2.064 0 4.163-.521 5.858-1.22q.102-.56.104-1.189a6 6 0 0 0-.03-.651M5.945 10.3c-.502 0-.91-.296-.91-.661c0-.363.408-.66.91-.66s.91.297.91.66c0 .365-.408.661-.91.661m4.266.02c-.502 0-.91-.295-.91-.66c0-.364.408-.66.91-.66c.503 0 .911.296.911.66s-.408.66-.911.66"></svg:path></svg:g>`,
})
export class SiGlyphChristmassEggIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChristmassHatIcon],svg[si-glyph-christmass-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.33.691c-.494.018-1.045.411-1.498.159c-2.182-1.212-6.19-1.157-7.729.963c-.832 1.146-.594 2.663-1.373 3.799c-1.061 1.549-2.763 2.326-2.699 4.593c.031 1.101 1.533.722 2.312.718a2421 2421 0 0 1 7.781-.017c2.919 0 1.506-1.327 1.157-3.068c-.166-.837-.69-1.951-.988-2.72c-.366-.938-1.649-3.04-.178-3.325c2.037-.396.203 1.445 3.218 2.177c.88.213 1.638-.739 1.638-1.647A1.66 1.66 0 0 0 15.883.772a1.4 1.4 0 0 0-.553-.081m-.405 13.978c0 .72-.624 1.303-1.39 1.303H2.422c-.766 0-1.389-.583-1.389-1.303v-1.303c0-.719.623-1.302 1.389-1.302h11.113c.766 0 1.39.583 1.39 1.302z"></svg:path>`,
})
export class SiGlyphChristmassHatIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphChristmassTreeIcon],svg[si-glyph-christmass-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m6.781 3.981l1.221-.936l1.217.936l-.465-1.516l1.219-.938H8.467L8.002.011l-.467 1.516H6.028l1.22.938z"></svg:path><svg:path d="m10.984 11.979l1.934.016l-2.902-4.031H12L7.985 3.98L4.031 7.996h2.031l-3.047 3.953h2.016l-3.016 4.016l11.977-.017zm-4.968 3.032H4.969v-1.062h1.047zm1-4H5.969V9.949h1.047zm1.015-4H6.969V5.949h1.062zm.938 2.937h1.047v1.062H8.969zm1 5.063v-1.062h1.047v1.062z"></svg:path><svg:path d="M12 7.995h.969v.984H12zm1 4h.969v.984H13zm-11 0h.969v.984H2zm1-4h.969v.984H3z"></svg:path></svg:g>`,
})
export class SiGlyphChristmassTreeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleIcon],svg[si-glyph-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="9" r="8" fill="currentColor" fill-rule="evenodd"></svg:circle>`,
})
export class SiGlyphCircleIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleBackwardIcon],svg[si-glyph-circle-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.031.021c-4.394 0-7.955 3.567-7.955 7.969s3.562 7.969 7.955 7.969s7.955-3.567 7.955-7.969S13.424.021 9.031.021M12.5 10.346c-.793-1.449-1.416-2.126-3.232-2.126l-.236.001v1.598a.49.49 0 0 1-.678.035L5.125 7.432a.55.55 0 0 1 0-.775l3.229-2.422c.215-.215.465-.25.678-.036v1.633l.256-.001c2.616 0 3.785 1.735 3.785 4.264c-.001.88-.406.558-.573.251"></svg:path>`,
})
export class SiGlyphCircleBackwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleControlPadIcon],svg[si-glyph-circle-control-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .032a8 8 0 1 0 0 16a8 8 0 0 0 0-16M5 9.859a.755.755 0 0 1-.88 0L2.182 8.345c-.243-.19-.243-.498 0-.688L4.12 6.143a.75.75 0 0 1 .88 0zm1.142-5.74l1.514-1.937c.19-.243.498-.243.687 0L9.856 4.12a.74.74 0 0 1 0 .881H6.143a.75.75 0 0 1-.001-.881zm3.715 7.742L8.344 13.8c-.193.243-.5.243-.689 0l-1.512-1.939a.75.75 0 0 1 0-.879h3.714a.75.75 0 0 1 0 .879m2.024-2.004a.75.75 0 0 1-.881 0V6.143a.75.75 0 0 1 .88 0l1.937 1.513c.244.191.244.5 0 .689z"></svg:path>`,
})
export class SiGlyphCircleControlPadIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleDrashedIcon],svg[si-glyph-circle-drashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.922 7.984c0-.385.04-.76.108-1.124l-.841-.319a7 7 0 0 0-.152 1.443c0 .671.101 1.317.277 1.932l.818-.369a6 6 0 0 1-.21-1.563m7.549 5.892A6 6 0 0 1 9 14.064q-.634-.002-1.231-.126l-.315.83c.498.114 1.015.18 1.547.18c.637 0 1.252-.094 1.839-.254zm-6.75-8.892a6.1 6.1 0 0 1 1.844-2.01l-.367-.816a7 7 0 0 0-2.317 2.508zM14.21 11.1a6.1 6.1 0 0 1-1.904 1.979l.365.812a7 7 0 0 0 2.378-2.472zm-10.255.271l-.811.365a7 7 0 0 0 2.445 2.312l.318-.84a6.1 6.1 0 0 1-1.952-1.837m3.424-9.238A6 6 0 0 1 9 1.906c.394 0 .777.041 1.149.112l.318-.839a6.9 6.9 0 0 0-3.457.135zm6.684 2.495l.812-.365a7 7 0 0 0-2.534-2.385l-.318.84a6.1 6.1 0 0 1 2.04 1.91m1.63 1.46l-.816.367c.127.49.202 1 .202 1.529c0 .432-.048.852-.132 1.258l.83.314a7 7 0 0 0 .186-1.572a7 7 0 0 0-.27-1.896"></svg:path>`,
})
export class SiGlyphCircleDrashedIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleErrorIcon],svg[si-glyph-circle-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.618 2.397C10.513-.708 5.482-.713 2.383 2.386c-3.101 3.102-3.098 8.131.009 11.236c3.105 3.105 8.137 3.109 11.235.01c3.1-3.099 3.097-8.13-.009-11.235m-4.003 8.954L7.927 9.663l-1.688 1.688c-.689.689-1.207 1.289-2.029.468c-.82-.821-.223-1.339.469-2.029l1.688-1.687l-1.688-1.688c-.69-.689-1.289-1.207-.469-2.029c.822-.82 1.34-.221 2.029.469l1.688 1.686l1.688-1.686c.69-.689 1.205-1.29 2.027-.469s.223 1.34-.467 2.029L9.487 8.102l1.688 1.687c.689.691 1.289 1.209.467 2.03c-.82.821-1.337.221-2.027-.468"></svg:path>`,
})
export class SiGlyphCircleErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleForwardIcon],svg[si-glyph-circle-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.076 7.989c0 4.401 3.562 7.969 7.955 7.969s7.955-3.567 7.955-7.969S12.424.02 8.031.02C3.639.021.076 3.588.076 7.989m3.914 2.105c0-2.528 1.169-4.264 3.785-4.264l.256.001V4.198c.213-.214.463-.179.678.036l3.229 2.422a.55.55 0 0 1 0 .775L8.709 9.853a.49.49 0 0 1-.678-.035V8.22l-.236-.001c-1.816 0-2.439.677-3.232 2.126c-.167.308-.573.63-.573-.251"></svg:path>`,
})
export class SiGlyphCircleForwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleHelpIcon],svg[si-glyph-circle-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 0a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m0 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1.647-5.757c-.473.365-.734.566-.734 1.147v.814c0 .459-.406.834-.907.834c-.502 0-.909-.375-.909-.834V9.39c0-1.357.831-1.998 1.38-2.422c.474-.366.734-.566.734-1.146c0-.654-.541-1.188-1.205-1.188c-.665 0-1.205.533-1.205 1.188c0 .461-.408.833-.909.833c-.5 0-.909-.372-.909-.833c0-1.574 1.357-2.854 3.023-2.854c1.665 0 3.021 1.279 3.021 2.854c0 1.356-.83 1.996-1.38 2.421"></svg:path>`,
})
export class SiGlyphCircleHelpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleInfoIcon],svg[si-glyph-circle-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.969 0a7.938 7.938 0 1 0 0 15.876A7.938 7.938 0 0 0 8.97 0zM8 3h2v2H8zm2 8.765C10 12.447 9.554 13 9 13c-.553 0-1-.552-1-1.235v-4.53C8 6.555 8.447 6 9 6c.554 0 1 .553 1 1.235z"></svg:path>`,
})
export class SiGlyphCircleInfoIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleLoadLeftIcon],svg[si-glyph-circle-load-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.947 8.379c-.075-4.122-3.351-7.412-7.303-7.337c-3.917.073-6.853 2.89-6.83 6.964H.204c-.217.22-.217.876 0 1.096l1.911 1.758a.546.546 0 0 0 .785 0l1.92-1.758c.219-.22.219-.876 0-1.096H3.204C3.18 4.668 5.462 2.461 8.67 2.402c3.232-.062 5.912 2.63 5.975 6.002c.062 3.322-2.445 6.077-5.613 6.216v1.361c3.898-.139 6.991-3.521 6.915-7.602"></svg:path>`,
})
export class SiGlyphCircleLoadLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleLoadRightIcon],svg[si-glyph-circle-load-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.04 7.379C.115 3.257 3.392-.033 7.344.042c3.917.073 6.854 2.929 6.83 7.003h1.545a.57.57 0 0 1 0 .799L13.873 9.86a.546.546 0 0 1-.785 0l-1.725-2.016a.57.57 0 0 1 0-.799h1.422c.023-3.338-2.259-5.584-5.467-5.644c-3.233-.062-5.912 2.63-5.975 6.002c-.062 3.322 2.445 6.077 5.613 6.216v1.361C3.059 14.842-.035 11.46.04 7.379"></svg:path>`,
})
export class SiGlyphCircleLoadRightIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCirclePlusIcon],svg[si-glyph-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.021.097c-4.396 0-7.958 3.558-7.958 7.943c0 4.388 3.562 7.945 7.958 7.945c4.395 0 7.958-3.558 7.958-7.945c0-4.386-3.564-7.943-7.958-7.943m2.304 8.985h-1.237v1.237c0 .979.059 1.769-1.088 1.769c-1.144 0-1.088-.79-1.088-1.769V9.082H6.675c-.979 0-1.769.056-1.769-1.088c0-1.146.79-1.088 1.769-1.088h1.237V5.669C7.912 4.69 7.856 3.9 9 3.9c1.146 0 1.088.79 1.088 1.769v1.237h1.237c.979 0 1.769-.059 1.769 1.088c0 1.144-.79 1.088-1.769 1.088"></svg:path>`,
})
export class SiGlyphCirclePlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleRemoveIcon],svg[si-glyph-circle-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.021 1.097C3.625 1.097.063 4.655.063 9.04c0 4.388 3.562 7.945 7.958 7.945c4.395 0 7.958-3.558 7.958-7.945c0-4.386-3.564-7.943-7.958-7.943M10.271 10H5.729C4.772 10 4 10.05 4 9c0-1.053.772-1 1.728-1h4.544C11.228 8 12 7.946 12 9c0 1.051-.772 1-1.728 1z"></svg:path>`,
})
export class SiGlyphCircleRemoveIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleStarIcon],svg[si-glyph-circle-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .062c-4.419 0-8 3.559-8 7.947c0 4.39 3.581 7.949 8 7.949c4.418 0 8-3.56 8-7.949S12.418.062 8 .062m3.108 11.963L8.021 9.902l-3.088 2.123L6.112 8.59L3.024 6.465h3.817l1.18-3.435l1.18 3.435h3.816L9.93 8.59z"></svg:path>`,
})
export class SiGlyphCircleStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleTriangleDownIcon],svg[si-glyph-circle-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8.041a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-16 0M12.846 6c.205.185.205.772 0 .96l-3.467 4.9a.57.57 0 0 1-.746 0l-3.479-4.9c-.205-.187-.205-.774 0-.96z"></svg:path>`,
})
export class SiGlyphCircleTriangleDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleTriangleLeftIcon],svg[si-glyph-circle-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 0a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m2 11.846c-.186.205-.774.205-.96 0l-4.9-3.467a.563.563 0 0 1 0-.745l4.9-3.48c.185-.205.773-.205.96 0z"></svg:path>`,
})
export class SiGlyphCircleTriangleLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleTriangleRightIcon],svg[si-glyph-circle-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 16a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8M7 4.154c.186-.205.775-.205.96 0l4.9 3.467a.57.57 0 0 1 0 .745l-4.9 3.48c-.185.205-.774.205-.96 0z"></svg:path>`,
})
export class SiGlyphCircleTriangleRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCityIcon],svg[si-glyph-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8v8h3V8zm2 7H1.979v-2.021H3zm.021-3H1.98V9.979h1.041zM10 5V3H9V0H8v3H7v2H5v11h7V5zM7 15H6v-2h1zm0-2.958H6V10h1zm0-3H6V7h1zM9 15H8v-2h1zm0-2.958H8V10h1zm0-3H8V7h1zM11 15h-1v-2h1zm0-2.958h-1V10h1zm0-3h-1V7h1zM13 7v9h4v-5zm2.031 8.062H14v-1.094h1.031zm0-2H14v-1.094h1.031zm0-2H14V9.968h1.031z"></svg:path>`,
})
export class SiGlyphCityIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClampIcon],svg[si-glyph-clamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.297 1.938h5.656V.042H6.297A2.27 2.27 0 0 0 4 2.335v6.371c0 1.287 1.01 2.273 2.297 2.273H9v3.089h-.64v.815c-.825.266-1.39.739-1.39 1.116h4.982c0-.376-.559-.846-1.375-1.112v-.819h-.64v-3.089h1.999V9.04H9.937V6.948c.034-.01.062-.021.093-.031h.906v-.891H8.04v.891h.853c.036.012.066.023.105.034V9.04H6.295a.335.335 0 0 1-.334-.334V2.27a.337.337 0 0 1 .336-.332"></svg:path>`,
})
export class SiGlyphClampIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClapboardIcon],svg[si-glyph-clapboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.042 7.954l14.916-3.523l-.98-4.056L1.063 3.898zM13.55 4.357l-1.448-2.312l2.01-.486l1.449 2.312zm-3.351.81L8.75 2.855l2.009-.485l1.45 2.312zm-3.351.81L5.4 3.665l2.01-.485l1.449 2.312zm-3.35.81L2.049 4.475l2.009-.485l1.449 2.312zm-1.477 1.25H17v7.95H2.021z"></svg:path>`,
})
export class SiGlyphClapboardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClapboardPlayIcon],svg[si-glyph-clapboard-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.979 8.954l14.916-3.523l-.98-4.056L0 4.898zm11.508-3.597l-1.448-2.312l2.01-.486l1.449 2.312zm-3.35.81L7.688 3.855l2.009-.485l1.45 2.312zm-3.352.81L4.337 4.665l2.01-.485l1.449 2.312zm-3.349.81L.987 5.475l2.009-.485l1.449 2.312zM1 9.037v8h15v-8zm6.904 6.13v-4.25l3.232 2.169z"></svg:path>`,
})
export class SiGlyphClapboardPlayIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClipIcon],svg[si-glyph-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.031 15.991h.953c-.504-1.792-2.192-9.907-2.219-10.054c.014-.449.008-1.28.303-1.574c.318-.314.9-.791.9-1.657c0-.81-.389-2.69-3.016-2.69c-2.631 0-2.914 1.881-2.914 2.69c0 .696.24 1.202.801 1.687c.448.441.371.791.371 1.514c0 .319-1.658 8.3-2.211 10.085h.953c.424-1.404 1.984-9.664 1.984-10.085c0-1.025-.107-1.561-.617-2.062c-.402-.349-.367-.657-.367-1.139c0-1.303.547-1.769 2-1.769c1.448 0 2.078.466 2.078 1.769c0 .523-.135.804-.477 1.143c-.412.411-.494 1.401-.518 2.062c-.002.13 1.61 8.667 1.996 10.08"></svg:path><svg:path d="M7.746 9.023c-.549 2.39-1.412 5.619-1.775 6.965h4.014c-.33-1.354-1.227-4.612-1.775-6.965zm4.262-.015c.494 2.203 1.328 5.263 1.719 6.98h2.232V9.023zm-12 .029v6.925h2.227c.438-1.701 1.205-4.714 1.716-6.925z"></svg:path></svg:g>`,
})
export class SiGlyphClipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClipboardIcon],svg[si-glyph-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.002 1.016v.937h3.014v13.089H2.971V1.953h2.982v-.906H2V16h13V1.016z"></svg:path><svg:path d="M9.95 1.5C9.95.672 9.298 0 8.491 0c-.808 0-1.46.672-1.46 1.5c0 .176.035.343.09.5h-.057v1h2.873V2h-.076c.054-.157.089-.324.089-.5m-1.981.516V.959h1.047v1.057zM11.031 3v1.016H5.969V3h-1.94v11h8.951V3z"></svg:path></svg:g>`,
})
export class SiGlyphClipboardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClipboardCheckedIcon],svg[si-glyph-clipboard-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.002 1.016v.937h3.014v13.089H3.971V1.953h2.982v-.906H3V16h13V1.016z"></svg:path><svg:path d="M10.95 1.5c0-.828-.652-1.5-1.459-1.5c-.808 0-1.46.672-1.46 1.5c0 .176.035.343.09.5h-.057v1h2.873V2h-.076c.054-.157.089-.324.089-.5m-1.981.516V.959h1.047v1.057zm3.062 2H6.969V3H5.03v11h8.951V3h-1.95zM7.453 8.127l.762-.762l1.414 1.414l2.088-2.09l.811.811l-2.851 2.852z"></svg:path></svg:g>`,
})
export class SiGlyphClipboardCheckedIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphClockIcon],svg[si-glyph-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.008 16.929c-4.385 0-7.95-3.563-7.95-7.942c0-4.381 3.565-7.944 7.95-7.944s7.95 3.563 7.95 7.944c0 4.378-3.566 7.942-7.95 7.942M8.973 2.863c-3.354 0-6.084 2.742-6.084 6.111s2.73 6.111 6.084 6.111c3.355 0 6.085-2.742 6.085-6.111s-2.73-6.111-6.085-6.111"></svg:path><svg:path d="M8 5h.959v3.978H8zm0 4h3.938v.979H8z"></svg:path></svg:g>`,
})
export class SiGlyphClockIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloseIcon],svg[si-glyph-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.053 10.938v-.906h.895v.906zM1.048 9.932V7.037h.905v2.895zm1.005-2.994v-.906h.895v.906zm5.968 4.041V10H9v.979zm1.016-1.038V7.037h.905v2.904zm-1.978 0V7.037h.873v2.904zM8 6.973v-.972h.951v.972zm-3.941 3.958V6.059h.883v3.989h1.031v.884zm10.999.016V6.042h1.9v.905h-1.04V8.1h1.061v.847H15.94v1.106h1.018v.894zm-3.979-.031v-.832h1.863v.832zm1.928-.969v-.921h.936v.921zm-.976-.983v-.943h.932v.943zm-.994-1.006v-.932h.926v.932zm1.042-1.042v-.848h1.863v.848z"></svg:path>`,
})
export class SiGlyphCloseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudIcon],svg[si-glyph-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.797 7.445c-.25 0-.487.068-.713.168c-.694-1.036-1.832-1.714-3.119-1.714c-.206 0-.407.022-.605.056c-.682-1.129-1.869-1.88-3.225-1.88c-1.91 0-3.49 1.491-3.779 3.438l-.051-.004c-1.281 0-2.318 1.104-2.318 2.467h16c-.139-1.425-1.061-2.531-2.19-2.531"></svg:path>`,
})
export class SiGlyphCloudIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudCloudIcon],svg[si-glyph-cloud-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.037 6.286c.958 0 1.803.543 2.32 1.234a1.4 1.4 0 0 1 .531-.111c.46 0 .869.225 1.166.581h3.887c0-.917-.702-1.661-1.57-1.661l-.034.003c-.196-1.31-1.265-2.315-2.559-2.315c-.917 0-1.72.507-2.182 1.267a2.5 2.5 0 0 0-.411-.038c-.732 0-1.391.236-1.86.754c.093.103.184.209.261.325a3 3 0 0 1 .451-.039m3.469 3.124c-.298-.394-.709-.644-1.172-.644c-.188 0-.365.049-.533.123c-.52-.765-1.369-1.264-2.332-1.264q-.232.002-.453.041a3 3 0 0 0-.264-.36c-.525-.628-1.193-1.257-2.051-1.257c-1.43 0-2.709 1.33-2.925 2.768q-.018-.003-.038-.004c-.958 0-1.734 1.14-1.734 2.145h11.969c-.047-.476-.219-1.223-.467-1.548"></svg:path>`,
})
export class SiGlyphCloudCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudDownloadIcon],svg[si-glyph-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.982 8.016v1.987h1.002l-1.492 1.966l-1.476-1.966h1.017V8.016z"></svg:path><svg:path d="M4.969 6.938h3.062v2.027h7.955C15.847 7.531 14.927 6.42 13.8 6.42c-.249 0-.486.066-.711.167c-.693-1.042-1.826-1.724-3.112-1.724c-.206 0-.407.022-.604.057c-.682-1.137-1.866-1.892-3.219-1.892c-1.906 0-3.484 1.501-3.771 3.46c-.018 0-.035-.006-.051-.006c-1.279 0-2.314 1.111-2.314 2.482h4.951z"></svg:path></svg:g>`,
})
export class SiGlyphCloudDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudHeavyRainIcon],svg[si-glyph-cloud-heavy-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.801 5.42c-.249 0-.486.066-.711.167c-.693-1.042-1.826-1.724-3.112-1.724c-.206 0-.407.022-.604.057c-.682-1.137-1.866-1.892-3.219-1.892c-1.906 0-3.484 1.501-3.771 3.46c-.018 0-.035-.006-.051-.006c-1.279 0-2.314 1.111-2.314 2.482h15.969c-.14-1.433-1.06-2.544-2.187-2.544M2.387 13.967a.5.5 0 0 1-.148-.025c-.186-.068-.27-.255-.189-.413l2.208-4.275c.083-.156.301-.228.484-.159c.187.069.271.255.188.413l-2.205 4.273a.38.38 0 0 1-.338.186m3.036-.031a.4.4 0 0 1-.146-.025c-.184-.069-.267-.255-.187-.412l2.172-4.275c.082-.157.295-.229.479-.16c.183.069.266.255.186.412L5.755 13.75a.37.37 0 0 1-.332.186m2.942 0a.5.5 0 0 1-.15-.025c-.188-.068-.273-.252-.19-.408l2.241-4.234c.084-.155.305-.227.493-.158s.274.252.19.408l-2.24 4.233a.39.39 0 0 1-.344.184m3.004 0a.4.4 0 0 1-.147-.025c-.187-.068-.271-.252-.188-.408l2.207-4.234c.08-.155.299-.227.484-.158s.271.252.189.408l-2.207 4.233a.38.38 0 0 1-.338.184"></svg:path>`,
})
export class SiGlyphCloudHeavyRainIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudPlusIcon],svg[si-glyph-cloud-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.916 9.941V7.937H10v-1h3.029v.969h1.033v2.031l2.947.014c-.14-1.43-1.062-2.539-2.189-2.539a1.7 1.7 0 0 0-.714.168c-.694-1.04-1.831-1.72-3.118-1.72c-.207 0-.408.022-.605.056C9.701 4.783 8.514 4.03 7.158 4.03c-1.91 0-3.49 1.497-3.779 3.451c-.018 0-.034-.006-.051-.006c-1.281 0-2.318 1.108-2.318 2.476z"></svg:path><svg:path d="M12.969 9h-1.031v-.994h-.876V9H10.01v.959h1.052v.989h.876v-.989h1.031z"></svg:path></svg:g>`,
})
export class SiGlyphCloudPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudRainHeavyRainIcon],svg[si-glyph-cloud-rain-heavy-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.801 5.426c-.248 0-.486.066-.711.166c-.693-1.035-1.828-1.713-3.113-1.713c-.207 0-.408.022-.607.055c-.68-1.129-1.865-1.879-3.219-1.879c-1.908 0-3.486 1.49-3.773 3.438l-.052-.004C1.047 5.489.011 6.593.011 7.956H15.99c-.14-1.425-1.06-2.53-2.189-2.53M2.004 11.701a.515.515 0 1 1-.929-.448c.124-.257 1.11-1.115 1.11-1.115s-.058 1.306-.181 1.563m3.044-2.109a.516.516 0 0 1-.929-.448c.124-.256 1.11-1.114 1.11-1.114s-.057 1.304-.181 1.562m1.974 2.064a.515.515 0 0 1-.929-.448c.123-.257 1.11-1.114 1.11-1.114s-.057 1.304-.181 1.562M9.92 9.654a.515.515 0 1 1-.929-.448c.124-.258 1.11-1.115 1.11-1.115s-.057 1.306-.181 1.563m-1.918 5.024a.515.515 0 1 1-.929-.448c.124-.257 1.11-1.115 1.11-1.115s-.056 1.306-.181 1.563m-4 0a.515.515 0 1 1-.929-.448c.124-.257 1.11-1.115 1.11-1.115s-.056 1.306-.181 1.563m6.993-2.001a.516.516 0 0 1-.929-.448c.125-.256 1.109-1.114 1.109-1.114s-.056 1.305-.18 1.562m3.023-2.982a.514.514 0 1 1-.928-.448c.124-.258 1.109-1.115 1.109-1.115s-.057 1.306-.181 1.563"></svg:path>`,
})
export class SiGlyphCloudRainHeavyRainIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudRemoveIcon],svg[si-glyph-cloud-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.965 10.991V8.987l5.051-.034v2.031l2.994-.033c-.14-1.43-1.062-2.539-2.189-2.539a1.7 1.7 0 0 0-.714.168c-.694-1.04-1.831-1.72-3.118-1.72c-.207 0-.408.022-.605.056C8.702 5.783 7.515 5.03 6.159 5.03c-1.91 0-3.49 1.497-3.779 3.451c-.018 0-.034-.006-.051-.006c-1.281 0-2.318 1.108-2.318 2.476z"></svg:path><svg:path d="M9 10h2.959v.99H9z"></svg:path></svg:g>`,
})
export class SiGlyphCloudRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudSnowIcon],svg[si-glyph-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 3)"><svg:path d="M13.803 3.424c-.25 0-.486.067-.711.168c-.693-1.043-1.827-1.725-3.11-1.725q-.31.002-.604.056C8.698.785 7.513.03 6.162.03c-1.907 0-3.483 1.501-3.771 3.462c-.018 0-.034-.005-.051-.005c-1.277 0-2.312 1.112-2.312 2.484h15.959c-.138-1.434-1.059-2.547-2.184-2.547"></svg:path><svg:circle cx="1.973" cy="7.973" r=".973"></svg:circle><svg:circle cx="5.962" cy="9.962" r=".962"></svg:circle><svg:circle cx="9.973" cy="7.973" r=".973"></svg:circle><svg:circle cx="13.962" cy="9.962" r=".962"></svg:circle></svg:g>`,
})
export class SiGlyphCloudSnowIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudSunIcon],svg[si-glyph-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.798 10.445c-.25 0-.487.066-.712.167c-.693-1.035-1.827-1.712-3.111-1.712c-.207 0-.408.022-.605.057c-.681-1.129-1.867-1.879-3.219-1.879c-1.906 0-3.483 1.49-3.771 3.436c-.018 0-.034-.006-.051-.006c-1.279 0-2.314 1.104-2.314 2.465h15.969c-.139-1.424-1.06-2.528-2.186-2.528m-3.829-2.271c.201-.035.403-.06.612-.06c1.015 0 1.933.447 2.62 1.171c.475-.558.77-1.283.77-2.088c0-1.747-1.355-3.163-3.025-3.163c-1.415 0-2.594 1.02-2.924 2.394c.806.327 1.492.943 1.947 1.746"></svg:path>`,
})
export class SiGlyphCloudSunIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudThunderIcon],svg[si-glyph-cloud-thunder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m11.125 6.915l-.998 2.046h6.891c-.139-1.433-1.061-2.543-2.189-2.543c-.25 0-.487.067-.713.168c-.694-1.041-1.83-1.722-3.118-1.722q-.309.002-.606.056C9.71 3.785 8.523 3.031 7.169 3.031c-1.912 0-3.492 1.498-3.781 3.455c-.018 0-.033-.005-.051-.005c-1.281 0-2.318 1.11-2.318 2.479h4.663l.944-2.058z"></svg:path><svg:path d="M9.701 10.071H8.59l.648-2.051H7.381l-1.029 2.925l1.336-.013l-.657 3.037z"></svg:path></svg:g>`,
})
export class SiGlyphCloudThunderIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudUploadIcon],svg[si-glyph-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m6.531 5.906l2.123 3.059h7.332C15.847 7.531 14.927 6.42 13.8 6.42c-.249 0-.486.066-.711.167c-.693-1.042-1.826-1.724-3.112-1.724c-.206 0-.407.022-.604.057c-.682-1.137-1.866-1.892-3.219-1.892c-1.906 0-3.484 1.501-3.771 3.46c-.018 0-.035-.006-.051-.006c-1.279 0-2.314 1.111-2.314 2.482h4.343z"></svg:path><svg:path d="M6.016 11.973V9.984H5.014L6.506 8.02l1.476 1.964H6.965v1.989z"></svg:path></svg:g>`,
})
export class SiGlyphCloudUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloverIcon],svg[si-glyph-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.538 7.99H9.035V4.461C9.035 2.565 10.655 1 12.55 1a3.43 3.43 0 0 1 3.429 3.435c0 1.897-1.548 3.553-3.441 3.553zm-4.59.024H4.43C2.535 8.014 1 6.333 1 4.435A3.434 3.434 0 0 1 4.429.999c1.894.001 3.52 1.539 3.52 3.436zm.072 4.543c0 1.897-1.743 3.436-3.611 3.436s-3.383-1.538-3.383-3.436s1.49-3.552 3.358-3.552c.956 0 3.636.025 3.636.025zm4.527 3.436c-1.887 0-3.513-1.548-3.513-3.446c0-.943.02-3.545.02-3.545h3.493c1.886 0 3.416 1.657 3.416 3.555c0 1.897-1.53 3.436-3.416 3.436"></svg:path>`,
})
export class SiGlyphCloverIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCockPotIcon],svg[si-glyph-cock-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.127 11.941H1.883C.529 11.941.016 7.004.016 7.004h9.979c0 .001-.268 4.937-1.868 4.937"></svg:path><svg:path d="M15.984 7.486c0 .252-.276.456-.615.456H8.807c-.34 0-.614-.204-.614-.456s.274-.457.614-.457h6.562c.339 0 .615.205.615.457M4 4h1.922v1.297H4z"></svg:path><svg:path d="M0 5h9.906v.969H0z"></svg:path></svg:g>`,
})
export class SiGlyphCockPotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCocktailIcon],svg[si-glyph-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.92 1.898C4.744.712 3.727 0 2.484 0A2.47 2.47 0 0 0 .01 2.462a2.468 2.468 0 0 0 2.954 2.414L.975 1.888z"></svg:path><svg:path d="m9.966 9.001l6.066-5.975l-13-.026l6.042 6v4.031L7.027 15h5.01l-2.045-1.963zM5.188 4l8.594.04l-1.786 1.701c-.47.015-1.142-.087-2.058-.484c-1.219-.442-2.322.405-2.697.743z"></svg:path></svg:g>`,
})
export class SiGlyphCocktailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCoconutIcon],svg[si-glyph-coconut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.574 6.456c1.594-.299 3.322.218 3.322.218c-.576-1.486-2.635-1.486-2.635-1.486c-.125-1.008 2.635-2.521 2.635-2.521c-2.143-.744-4.035.918-4.035.918C10.531 2.261 12.507 0 12.507 0C9.624.195 8.884 3.294 8.884 3.294C7.565 2.025 4.023 2.133 4.023 2.133c1.483.135 2.802 2.507 2.802 2.507c-3.542 1.229-2.719 3.838-2.719 3.838c.857-.66 1.519-1.026 2.026-1.223c.428-.033 1.34-.117 1.206 1.041C6.489 13.584 8.457 16 8.457 16h3.541c-2.459-2.446-2.722-5.562-2.805-7.315c-.02.002-.005-1.907 2.381-2.229"></svg:path>`,
})
export class SiGlyphCoconutIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCodeIcon],svg[si-glyph-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.74 11.993a.7.7 0 0 0 .493-.195l3.479-3.316a.644.644 0 0 0 0-.939l-3.479-3.318a.72.72 0 0 0-.984 0a.643.643 0 0 0 0 .938l2.987 2.85l-2.987 2.848a.643.643 0 0 0 0 .938a.7.7 0 0 0 .491.194m-7.439-.11a.73.73 0 0 1-.497-.19L.287 8.425a.62.62 0 0 1 0-.923l3.517-3.268a.74.74 0 0 1 .995 0a.624.624 0 0 1 0 .924l-3.02 2.805l3.02 2.804a.626.626 0 0 1 0 .926a.74.74 0 0 1-.498.19m2.384 3.006a.67.67 0 0 0 .503-.51L9.934 1.885a.636.636 0 0 0-.488-.768a.66.66 0 0 0-.77.514L5.93 14.125a.636.636 0 0 0 .755.764"></svg:path>`,
})
export class SiGlyphCodeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCoffeeMachineIcon],svg[si-glyph-coffee-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1.021 15.085v.879H17v-2.928H3.027c-1.109 0-2.006.917-2.006 2.049M6.035 12h.918c1.104 0 2-.926 2-2.067V8.037H4.035v.991h-1v.905h1c0 1.141.897 2.067 2 2.067"></svg:path><svg:path d="M1.083.083v1.834c0 1.076.851.947 1.917.991v1.05h2.042v2H6v.917h.959V3.958h1.916V2.917H11v9.067h6V.083zm4.959 3.001H4.917V1.916h1.125zm2 0H6.917V1.916h1.125z"></svg:path></svg:g>`,
})
export class SiGlyphCoffeeMachineIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphColorPickerIcon],svg[si-glyph-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.308 4.434c.912-.911.81-2.495-.229-3.534c-1.041-1.039-2.624-1.142-3.534-.23l-1.181 1.183l3.764 3.764zm-9.84 9.842l6.147-6.148l.772.772l1.584-1.586l-5.309-5.309l-1.585 1.584l.773.773l-6.148 6.146l-1.682 4.693l.754.754zm3.448-8.848l1.635 1.636l-6.262 6.26l-2.594.96l.959-2.596z"></svg:path>`,
})
export class SiGlyphColorPickerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphColumnDecreaseIcon],svg[si-glyph-column-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 14.977c0 .537.275.974.615.974h13.77c.34 0 .615-.437.615-.974c0-.539-.275-.976-.615-.976H1.615c-.34 0-.615.437-.615.976m11.053-2.719c0 .377.365.686.816.686h1.223c.451 0 .815-.309.815-.686v-3.44c0-.378-.364-.686-.815-.686h-1.223c-.451 0-.816.308-.816.686zm-4.964.001c0 .378.365.685.815.685h1.224c.45 0 .815-.307.815-.685v-4.48c0-.378-.365-.685-.815-.685H7.904c-.45 0-.815.307-.815.685zm-5.027-.027c0 .375.367.68.824.68h1.236c.456 0 .824-.305.824-.68V5.727c0-.375-.368-.68-.824-.68H2.886c-.457 0-.824.305-.824.68zm13.204-5.311a.703.703 0 0 0 .705-.673a.7.7 0 0 0-.682-.719C10.285 5.352 5.521 3.424 2.215.236a.715.715 0 0 0-1.001.012a.69.69 0 0 0 .012.985C4.832 4.71 9.809 6.73 15.24 6.92z"></svg:path>`,
})
export class SiGlyphColumnDecreaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphColumnIncreaseIcon],svg[si-glyph-column-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 14.977c0 .537-.275.974-.615.974H1.615c-.34 0-.615-.437-.615-.974c0-.539.275-.976.615-.976h13.77c.34 0 .615.437.615.976M4.947 12.258c0 .377-.366.686-.816.686H2.908c-.451 0-.815-.309-.815-.686v-3.44c0-.378.364-.686.815-.686h1.223c.45 0 .816.308.816.686zm4.964.001c0 .378-.365.685-.815.685H7.872c-.45 0-.815-.307-.815-.685v-4.48c0-.378.365-.685.815-.685h1.224c.45 0 .815.307.815.685zm5.027-.027c0 .375-.367.68-.824.68h-1.236c-.456 0-.824-.305-.824-.68V5.727c0-.375.368-.68.824-.68h1.236c.457 0 .824.305.824.68zM1.734 6.921a.703.703 0 0 1-.705-.673a.7.7 0 0 1 .682-.719c5.004-.177 9.768-2.105 13.074-5.293a.714.714 0 0 1 1 .012a.69.69 0 0 1-.011.985C12.168 4.71 7.191 6.73 1.76 6.92z"></svg:path>`,
})
export class SiGlyphColumnIncreaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphColumnWaveIcon],svg[si-glyph-column-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.057c0-.584.447-1.057.999-1.057S16 1.473 16 2.057v12.719c0 .584-.449 1.057-1.001 1.057S14 15.36 14 14.776zm-4 3c0-.584.449-1.057.999-1.057C11.552 4 12 4.473 12 5.057v9.719c0 .584-.448 1.057-1.001 1.057c-.55 0-.999-.473-.999-1.057zm-3.998 3C6.002 7.473 6.449 7 7 7c.552 0 1 .473 1 1.057v6.719c0 .584-.448 1.057-1 1.057c-.551 0-.998-.473-.998-1.057zm-3.959 3c0-.584.438-1.057.978-1.057S4 10.473 4 11.057v3.719c0 .584-.439 1.057-.979 1.057s-.978-.473-.978-1.057z"></svg:path>`,
})
export class SiGlyphColumnWaveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCombIcon],svg[si-glyph-comb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.563 2.427l2.388 2.389c.283-.975-.717-2.714-2.49-4.486c-1.242-1.244-4.587 1.375-8.217 5.006c-3.629 3.629-6.168 6.892-4.926 8.135c1.738 1.737 3.533 2.775 4.524 2.48l-2.401-2.4c-.324-.324-.337-.834-.031-1.141l1.489-1.488l2.805 2.805c.333.333.825.378 1.103.102c.275-.276.23-.77-.102-1.102L5.899 9.922l2-1.999l2.805 2.804c.333.333.825.378 1.103.102c.275-.276.23-.77-.102-1.102L8.9 6.922l2-1.999l2.805 2.804c.333.333.825.378 1.103.102c.275-.276.23-.77-.102-1.102l-2.805-2.805l1.523-1.523c.306-.308.816-.295 1.139.028"></svg:path>`,
})
export class SiGlyphCombIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCompassIcon],svg[si-glyph-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.021.035c-4.411 0-8 3.588-8 8c0 4.413 3.588 8 8 8c4.411 0 8-3.587 8-8c0-4.412-3.589-8-8-8M9.001 14A6.006 6.006 0 0 1 3 8c0-3.307 2.692-6 6-6c3.31 0 6 2.693 6 6s-2.69 6-6 6z"></svg:path><svg:path d="m6.042 6.021l2.021 3L12.98 11l-2.979-3.958z"></svg:path></svg:g>`,
})
export class SiGlyphCompassIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphConeIcon],svg[si-glyph-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.287 13.025h-2.013l-.528-2h-9.57l-.528 2H1.692c-.37 0-.671.271-.671.609v.684c0 .337.301.609.671.609h14.596c.37 0 .671-.272.671-.609v-.684c-.001-.337-.302-.609-.672-.609m-5.08-11.994h-4.41l-.759 2.921h5.931zm1.139 4.973H5.658l-.637 2.951h7.963z"></svg:path>`,
})
export class SiGlyphConeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCongratulationHatIcon],svg[si-glyph-congratulation-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 13.099L4.125 10.64v3.154s0 .548.355.633c1.114.264 2.279.516 3.52.516c1.27 0 2.485-.191 3.604-.543c.271-.058.271-.551.271-.551V10.64zM1.246 8.066h-.48C.355 9.63.052 14.603.052 14.912q.002.043.013.084h1.883a.4.4 0 0 0 .011-.084c-.001-.308-.305-5.281-.713-6.846"></svg:path><svg:path d="M8 1.062L0 6.043l1.33.999l5.555-1.258c.092-.529.528-.941 1.084-.941a1.125 1.125 0 0 1 0 2.25a1.07 1.07 0 0 1-.783-.352L2.374 7.83L8 11.702l8-5.659z"></svg:path></svg:g>`,
})
export class SiGlyphCongratulationHatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphConnect1Icon],svg[si-glyph-connect-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.969 11.082V4.918A2.47 2.47 0 1 0 12 2.5c0 1.213.877 2.217 2.031 2.425v6.15c-.32.058-.618.177-.883.345L5.533 3.848c.254-.388.404-.85.404-1.348a2.47 2.47 0 1 0-2.938 2.422v6.156a2.468 2.468 0 1 0 1 .014V4.908c.301-.066.58-.186.829-.351l7.599 7.556a2.47 2.47 0 1 0 2.542-1.031"></svg:path>`,
})
export class SiGlyphConnect1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphConnect2Icon],svg[si-glyph-connect-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 13.043c-.258 0-.498.069-.71.182l-3.259-3.271c.207-.29.354-.623.422-.986h1.133a1.49 1.49 0 0 0 1.414.992c.829 0 1.5-.652 1.5-1.458s-.671-1.458-1.5-1.458a1.49 1.49 0 0 0-1.426 1.029h-1.119a2.5 2.5 0 0 0-.382-.954l3.29-3.302c.194.089.408.143.637.143c.829 0 1.5-.652 1.5-1.458s-.671-1.458-1.5-1.458c-.828 0-1.498.652-1.498 1.458c0 .261.075.503.199.715L9.945 6.486a2.5 2.5 0 0 0-.996-.419V4.886C9.556 4.7 10 4.155 10 3.502c0-.806-.671-1.458-1.5-1.458c-.828 0-1.498.652-1.498 1.458c0 .655.445 1.203 1.058 1.387v1.177c-.364.064-.7.205-.991.408l-3.26-3.271c.118-.209.191-.445.191-.7c0-.806-.671-1.458-1.5-1.458c-.828 0-1.498.652-1.498 1.458s.67 1.458 1.498 1.458c.234 0 .455-.057.652-.15l3.285 3.297c-.196.285-.33.613-.393.967H4.926a1.49 1.49 0 0 0-1.427-1.029c-.828 0-1.498.652-1.498 1.458s.67 1.458 1.498 1.458c.66 0 1.215-.416 1.414-.992h1.133c.068.369.221.707.434 1l-3.254 3.266a1.5 1.5 0 0 0-.727-.189c-.828 0-1.498.652-1.498 1.458s.67 1.458 1.498 1.458c.829 0 1.5-.652 1.5-1.458c0-.226-.057-.437-.15-.626l3.275-3.289c.277.184.594.309.935.369v1.159c-.612.184-1.058.731-1.058 1.387c0 .806.67 1.458 1.498 1.458c.829 0 1.5-.652 1.5-1.458c0-.652-.443-1.198-1.051-1.384v-1.163c.344-.062.663-.19.942-.377l3.269 3.281a1.4 1.4 0 0 0-.158.643c0 .806.67 1.458 1.498 1.458c.829 0 1.5-.652 1.5-1.458s-.67-1.462-1.499-1.462"></svg:path>`,
})
export class SiGlyphConnect2Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphContactBookIcon],svg[si-glyph-contact-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.061 2.917h1.022v1.215H1.061v7.835h.988v1.117h-.988v2.797h11.897V0H1.061zm3.384 1.475c.03-.024.271-.204.357-.269l-.006-.002l.017-.007c.005-.006.021-.017.024-.02l.004.005c.146-.086.297-.146.469-.172c.462-.068.799.412 1.018.687c.219.272.523.706.486 1.003c-.022.179-.227.344-.421.506l-.007-.01c-.053.057-.287.296-.307.328c-.107.178-.23.581-.058.885c.163.295.485.773.79 1.172c.322.387.717.81.967 1.037c.262.237.693.22.895.162c.039-.01.354-.197.395-.217c.209-.144.42-.296.607-.273c.303.038.656.434.875.707c.219.274.613.712.433 1.132a1.2 1.2 0 0 1-.293.405l.004.004l-.022.016l-.006.008l-.004.001l-.354.269c-.336.217-1.066.488-2.092-.115c-.761-.449-1.596-1.211-2.393-2.163l-.004.003l-.107-.141l-.114-.137l.004-.003c-.748-.987-1.298-1.965-1.556-2.796c-.347-1.12.102-1.741.399-2.005M0 3h.979v.992H0zm0 9h.977v.943H0zM14 2h.916v2.875H14zm0 9h.887v2.847H14zm0-5h.901v3.895H14z"></svg:path>`,
})
export class SiGlyphContactBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphContacterIcon],svg[si-glyph-contacter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3 5H2V4h1zm13.038-1.958H2.046c-.556 0-1.004.452-1.004 1.012v8.976c0 .56.448 1.012 1.004 1.012h13.992c.556 0 1.004-.451 1.004-1.012V4c0-.56-.448-.958-1.004-.958M3 13H2v-1h1zm11-2H4V6h10zm2 2h-1v-1h1zm0-8h-1V4h1z"></svg:path><svg:path d="M5 7v3h5V7z"></svg:path></svg:g>`,
})
export class SiGlyphContacterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphContrastIcon],svg[si-glyph-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.502.115a7.42 7.42 0 1 0 .003 14.839A7.42 7.42 0 0 0 8.502.115m-.584 13.127V1.827c3.477 0 6.292 2.556 6.292 5.707s-2.815 5.708-6.292 5.708"></svg:path>`,
})
export class SiGlyphContrastIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphControlPadIcon],svg[si-glyph-control-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.277 7.048c-2.344 0-3.242 1.958-3.242 4.372v.166c0 2.416.898 4.373 3.242 4.373h9.475c2.344 0 3.242-1.957 3.242-4.373v-.166c0-2.414-.898-4.372-3.242-4.372zM8 12H6v2.016H5V12H3v-1h2V8.984h1V11h2zm4-1h-1v-1h1zm2 2h-1v-1h1z"></svg:path><svg:path d="M9 7.104H8V4l2.031.041L10 1.047h1V5H9z"></svg:path></svg:g>`,
})
export class SiGlyphControlPadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCorkscrewIcon],svg[si-glyph-corkscrew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.107.038H5.859C5.386.038 5 .448 5 .953v.085c0 .504.387.915.859.915h7.248c.476 0 .859-.411.859-.915V.953c.001-.505-.383-.915-.859-.915m-2.12 8.458c.012-.146-1.021-1.309-1.021-1.309l-.025-4.232h2.012V2h-4.91v.955h2.014v1.528s-1.015.886-1.017 1.024c-.005.137.981 1.326.981 1.326v4.338s-.951 1.215-.953 1.374c0 .159.957 1.329.957 1.329l.012 1.625c0 .277.215.5.48.5c.268 0 .451-.191.451-.469l-.002-5.636c.001.002 1.01-1.251 1.021-1.398"></svg:path>`,
})
export class SiGlyphCorkscrewIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCornerFlagIcon],svg[si-glyph-corner-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1.48 15.845a.43.43 0 0 1-.309-.128a.434.434 0 0 1-.001-.619l4.888-4.888V1.264c0-.241.184-.437.41-.437s.408.195.408.437v8.856h9.581c.241 0 .438.172.438.383c0 .21-.196.381-.438.381h-4.815l-.028.198c-.312 2.172-2.19 3.81-4.371 3.81a4.4 4.4 0 0 1-2.994-1.175l-.158-.216l-.224.136l-2.077 2.078a.43.43 0 0 1-.31.13m3.122-2.942l.213.159c.684.62 1.535.955 2.429.955a3.565 3.565 0 0 0 3.474-2.856l.057-.276H6.623z"></svg:path><svg:path d="M7.637 5.941c-.957.001-1.51-.868-1.524-1.044l.001-3.795c0-.22.146-.405.344-.452c.173.189.59.555 1.252.555c.495 0 1.021-.206 1.568-.612c.453-.339 1.633-.51 2.077-.51c1.007 0 1.623.851 1.646 1.023L13 4.899c0 .22-.147.404-.345.451a1.78 1.78 0 0 0-1.311-.579c-.515 0-1.783.214-2.345.637c-.47.355-.929.533-1.362.533"></svg:path></svg:g>`,
})
export class SiGlyphCornerFlagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCoverFlowIcon],svg[si-glyph-cover-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4v8h7.894L13 4zm9 0v8h.916V4zm2-2h1v12h-1zM3 4h1v8H3zM1 2h.979v11.918H1z"></svg:path>`,
})
export class SiGlyphCoverFlowIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCoverFoodIcon],svg[si-glyph-cover-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.471 12.076H1.49c-.271 0-.489.207-.489.461c0 .256.219.463.489.463h14.981c.271 0 .49-.207.49-.463c0-.254-.22-.461-.49-.461M8.987 4.201c-3.839 0-6.95 3.008-6.95 6.718h13.9c.001-3.71-3.112-6.718-6.95-6.718"></svg:path><svg:path d="M8 3h1.969v1.969H8z"></svg:path></svg:g>`,
})
export class SiGlyphCoverFoodIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCowIcon],svg[si-glyph-cow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.953 15.079c0 .476-1.771.861-3.961.861c-2.188 0-3.962-.386-3.962-.861zM2.046 3.715C1.12 2.824.801.741 1.337.229c.533-.512 1.224.267 2.151 1.155c.927.89 2.643 2.025 2.107 2.537c-.533.514-2.621.682-3.549-.206m13.965-.041c.925-.891 1.244-2.974.708-3.486c-.533-.512-1.223.267-2.15 1.155c-.927.89-2.643 2.025-2.107 2.537c.533.514 2.621.682 3.549-.206M7 6h.984v.984H7zm3 0h.984v.984H10z"></svg:path><svg:path d="M14.277 7.383c.21-.499.329-1.037.329-1.598c0-2.633-2.491-4.765-5.565-4.765c-3.076 0-5.566 2.132-5.566 4.765c0 .548.113 1.073.312 1.563c-1.031.399-1.76 1.343-1.76 2.442v.826c0 1.463 1.985 3.338 3.566 3.338h6.805c1.581 0 3.566-1.875 3.566-3.338V9.79c.001-1.073-.693-1.991-1.687-2.407m-6.23 4.664H6.953v-1.094h1.094zM5.841 6.876c0-1.655.509-2.999 1.137-2.999c.629 0 1.138 1.344 1.138 2.999a1.142 1.142 0 0 1-2.275 0m5.206 5.171H9.953v-1.094h1.094zM9.946 6.848c0-1.64.479-2.97 1.067-2.97c.59 0 1.067 1.33 1.067 2.97c.001 1.637-2.134 1.637-2.134 0"></svg:path></svg:g>`,
})
export class SiGlyphCowIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCpuIcon],svg[si-glyph-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.83 2.041H5.254A2.206 2.206 0 0 0 3.042 4.24v7.561c0 1.215.99 2.199 2.212 2.199h7.576a2.204 2.204 0 0 0 2.212-2.199V4.24a2.205 2.205 0 0 0-2.212-2.199M5 12.958H4v-1h1zm0-9H4v-1h1zm6.958 6.07a.973.973 0 0 1-.975.972h-4.05a.973.973 0 0 1-.975-.972V5.973c0-.538.435-.973.976-.973h4.05c.538 0 .974.435.974.973zM14 12.958h-1v-1h1zm0-9h-1v-1h1z"></svg:path><svg:path d="M7.72 6a.72.72 0 0 0-.72.722V9.18c0 .398.322.722.72.722h2.436c.396 0 .72-.323.72-.722V6.722a.72.72 0 0 0-.72-.722zM5 0h.871v1H5zm7 0h.871v1H12zM8 0h.871v1H8zM5 15h.959v.896H5zm7 0h.876v.896H12zm-4 0h.918v.896H8zm-7-4h1v.975H1zm0-7h1v.975H1zm0 3h1v.975H1zm15 4h.957v.975H16zm0-4h.957v.975H16zm0-3h.957v.975H16z"></svg:path></svg:g>`,
})
export class SiGlyphCpuIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCranIcon],svg[si-glyph-cran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.939 7.002h-.916v2.01h-.94v1.968h2.855V9.012h-.999z"></svg:path><svg:path d="M16.631 5.024L8.979 1.846v-.148c0-.366-.127-.661-.479-.661c-.353 0-.5.295-.5.661v3.331H5.98v-.243c0-.434-.267-.784-.596-.784H3.622c-.328 0-.596.351-.596.784v.243H1.511a.477.477 0 0 0-.47.486c0 .268.209.484.47.484h1.515v.175c0 .434.268.785.596.785h1.762c.329 0 .596-.352.596-.785V6h1.999v-.057H8v8.078h-.661c-.366 0-.665.339-.665.757v.576h-.002c-.366 0-.664.66-.664 1.037v.582h4.979v-.582c0-.377-.298-1.037-.664-1.037h-.002v-.576c0-.418-.299-.757-.665-.757h-.677V5.943h7.41c.01 0 .018-.006.027-.006a.7.7 0 0 0 .201-.045c.164-.066.374-.173.374-.359c0-.491-.02-.367-.36-.509m-7.652.005V2.875l5.126 2.154z"></svg:path></svg:g>`,
})
export class SiGlyphCranIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCropIcon],svg[si-glyph-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 3v2.036h1.978V3zm12 11v2.031h1.984V14zm-.01-9.015v4.976h1.979V3.039H7.047v1.946z"></svg:path><svg:path d="M6.007 11.041V0H4v12.959h13v-1.918z"></svg:path></svg:g>`,
})
export class SiGlyphCropIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCrossHairIcon],svg[si-glyph-cross-hair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.5 1C4.364 1 1 4.361 1 8.492s3.364 7.492 7.5 7.492S16 12.623 16 8.492S12.637 1 8.5 1m.469 13.945v-1.898h-.938v1.898A6.46 6.46 0 0 1 2.056 9h1.912V8H2.056a6.46 6.46 0 0 1 5.943-5.943v1.928h.969v-1.93A6.46 6.46 0 0 1 14.943 8h-1.928v.969h1.93a6.46 6.46 0 0 1-5.976 5.976"></svg:path><svg:path d="M8.984 6.021h-.941v2.021H6.031v.942h2.012v1.975h.941V8.984h1.954v-.942H8.984z"></svg:path></svg:g>`,
})
export class SiGlyphCrossHairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCrossHair2Icon],svg[si-glyph-cross-hair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.979 10c1.093 0 1.979-.962 1.979-2.043c0-1.08-.886-1.957-1.979-1.957A1.97 1.97 0 0 0 7 7.957C7 9.037 7.886 10 8.979 10M8 0h1.986v4H8zm0 12v4.003h2.007V12zM1 7h3.984v1.969H1zm12 0v1.928h3.99V7z"></svg:path>`,
})
export class SiGlyphCrossHair2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCrownIcon],svg[si-glyph-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:path d="M12.971 15.23c0 .423-.417.768-.932.768H3.951c-.515 0-.932-.345-.932-.768v-.45c0-.422.417-.767.932-.767h8.088c.515 0 .932.345.932.767zm-.506-2.251H3.547L1.421 5.365l1.141-.709l3.011 4.251l1.772-5.865h1.418l1.594 6.22l3.188-4.606l1.046.709z"></svg:path><svg:circle cx="14.968" cy="2.968" r=".968"></svg:circle><svg:circle cx="7.964" cy=".964" r=".964"></svg:circle><svg:ellipse cx=".983" cy="2.974" rx=".983" ry=".974"></svg:ellipse></svg:g>`,
})
export class SiGlyphCrownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCruiseIcon],svg[si-glyph-cruise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.143 12.728c.07.064.234.175.361.168c.08-.002.172-.058.264-.164c.301-.351.635-.538.992-.558c.541-.031.949.342 1.146.521c.27.242.385.263.422.258c.047-.004.426-.419.625-.545V6.059l-2.974.654V3.558c0-.343.289-.62.643-.62H8.02v3.14c.263-.058.694-.058.959 0v-3.14h2.407c.354 0 .642.277.642.62l.015 3.182l-3-.681v6.167q.115-.031.25-.035c.267-.002.668.074 1.057.495c.131.138.268.215.34.214c.09-.005.273-.208.287-.222c.047-.047.475-.461 1.053-.447c.244.007.604.091.928.464c.139.159.271.254.367.26c.158.012.393-.204.492-.295c.225-.202.517-.421.875-.472c0 0 .57-2.447.137-3.531c-.23-.576-.285-1.078-1.508-1.501c-.111-.038-.227-.065-.339-.103V3.388c0-.755-.636-1.368-1.419-1.368H9.98V.021h-.978V2.02H7.98V.042h-.978V2.02H5.455c-.783 0-1.421.613-1.421 1.368v3.668c-.109.035-.221.062-.328.1c-1.216.423-1.237.96-1.505 1.52c-.514 1.075.285 3.79.285 3.79c.299-.211.574-.25.772-.237c.486.033.789.376.885.499m11.775 2.019c-.268-.44-.58-.683-.927-.72a1 1 0 0 0-.253.014c-.367.064-.667.344-.898.599c-.102.114-.34.391-.504.375c-.096-.007-.234-.128-.375-.33c-.333-.473-.701-.581-.951-.589c-.594-.016-1.029.507-1.078.568a.4.4 0 0 0-.041.062c-.043.073-.161.212-.256.219c-.073.002-.213-.098-.344-.273c-.4-.532-.811-.629-1.082-.626a1 1 0 0 0-.26.043c-.173.05-.32.138-.443.233c-.206.16-.331.336-.355.371q-.026.036-.045.08c-.109.169-.197.236-.243.241c-.044.006-.159-.02-.437-.328c-.204-.226-.625-.701-1.186-.663c-.366.027-.711.265-1.023.708c-.096.136-.189.207-.271.211c-.132.006-.299-.134-.372-.215c-.097-.156-.413-.591-.913-.632c-.205-.019-.489.031-.796.299a2 2 0 0 0-.299.326c-.095.125-.244.268-.374.271c-.16-.002-.33-.189-.375-.256c-.15-.216-.426-.26-.621-.096a.535.535 0 0 0-.09.689c.043.066.443.631 1.06.648c.274.008.684-.096 1.082-.627l.024-.031c.125-.155.248-.246.322-.242c.092.006.212.146.251.213a.4.4 0 0 0 .045.068c.048.061.484.602 1.078.568c.249-.007.616-.117.948-.589c.145-.202.28-.323.379-.329c.161-.005.399.258.504.373c.262.292.613.617 1.053.617q.047 0 .096-.004c.199-.021.385-.117.559-.271c.131-.116.254-.261.367-.449q.01-.014.016-.028q.025-.03.061-.063c.074-.072.182-.15.285-.152h.003c.138 0 .276.148.37.272c.419.556.822.646 1.096.624c.5-.041.816-.475.914-.633c.055-.061.232-.232.369-.213q.127.003.273.209c.312.443.658.683 1.023.707c.258.02.489-.077.684-.207c.219-.145.395-.333.504-.453c.275-.309.396-.336.434-.328c.052.005.15.083.275.287c.137.227.414.287.617.135a.53.53 0 0 0 .12-.683"></svg:path>`,
})
export class SiGlyphCruiseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCubicIcon],svg[si-glyph-cubic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 13.316a.667.667 0 0 1-.667.667l-6.667 2A.666.666 0 0 1 9 15.316V8.65c0-.369.298-.667.666-.667l6.667-2c.368 0 .667.298.667.667zm-9.021 2c0 .369-.283.667-.635.667l-5.711-2c-.35 0-.633-.298-.633-.667V6.65c0-.369.283-.667.633-.667l5.711 2c.352 0 .635.298.635.667zM17 4.014c0 .318-.666.538-.666.538L9.666 6.741s-.564.22-1.006.22c-.441 0-.977-.232-.977-.232l-5.996-2.15s-.688-.215-.688-.564s.688-.586.688-.586l5.998-2.15s.621-.232.994-.232c.372 0 .99.222.99.222l6.662 2.188c.001-.002.669.238.669.557"></svg:path>`,
})
export class SiGlyphCubicIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCupCakeIcon],svg[si-glyph-cup-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.807 8.328c-.39 0-.75-.091-1.073-.238c-.595-.271-1.044-.309-1.204-.895c-.246.691-1.008.797-1.996 1.019a4.3 4.3 0 0 1-.956.114c-.335 0-.653-.045-.956-.114c-1.059-.236-1.846-.407-2.029-1.169H4.55c-.12.648-.566.744-1.195 1.041a2.55 2.55 0 0 1-1.07.242a2.5 2.5 0 0 1-.844-.146l1.35 5.045c.104.522.558 1.736 1.52 1.736h6.555c.949 0 1.363-1.214 1.52-1.736l1.353-5.067a2.7 2.7 0 0 1-.932.168m-4.786 5.734H6.946V9.937h1.075zm-2.753-.093l-.872.109l-.605-3.943l.878-.11zm5.24-3.945l.879.11l-.605 3.943l-.873-.109zM7.599.061C3.527.061.174 2.518.174 4.696c0 .039-.024.305-.024.404C.15 6.151 1.159 7 2.403 7c.376 0 .727-.085 1.04-.224c.636-.282 1.087-.809 1.184-1.436c.146.732.933 1.328 1.994 1.554c.294.063.603.105.93.105s.636-.042.93-.105c.962-.204 1.7-.711 1.941-1.349c.156.54.592.985 1.171 1.235c.314.135.664.219 1.043.219c1.262 0 2.283-.85 2.283-1.9l.003-.404C14.921 2.518 11.672.061 7.599.061"></svg:path>`,
})
export class SiGlyphCupCakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCurtainIcon],svg[si-glyph-curtain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.963 15.959h-.901V.953L.938.961v14.998H.043V.047h15.92z"></svg:path><svg:path d="M1.295 11.253C7.052 9.019 5.889.954 5.889.954h-.873c.188 4.64-.879 7.296-3.041 8.888c.18-.253 2.119-1.623 2.01-8.888h-.953c-.023.995.265 7.181-2.463 9.601c0 0 1.581-2.226 1.369-9.601H.126v15.039h1.836c-.025-2.095-.267-3.503-.961-4.009c0 0 1.998-.048 2.047 4.009h.938c-.002 0 .264-3.946-2.691-4.74m13.422-.023C8.961 9.003 10.123.97 10.123.97H11c-.281 4.576.877 7.269 3.037 8.854c-.178-.253-2.209-1.621-1.96-8.854h.892c.025.994-.252 7.153 2.476 9.565c0 0-1.626-2.218-1.413-9.565h1.932v14.982h-1.912c.027-2.087.271-3.435.965-3.938c0 0-2.029-.104-2.078 3.938h-.906c-.002.001-.455-3.733 2.684-4.722"></svg:path></svg:g>`,
})
export class SiGlyphCurtainIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphCustomerSupportIcon],svg[si-glyph-customer-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.005 12.094c-1.442 0-2.907-.856-3.762-1.989c-4.102 0-4.226 5.86-4.226 5.86h15.975s.322-5.886-4.291-5.886c-.854 1.147-2.254 2.015-3.696 2.015m3.436-7.025c0 1.686-1.539 4.91-3.439 4.91c-1.897 0-3.437-3.225-3.437-4.91s1.539-3.053 3.437-3.053c1.9.001 3.439 1.369 3.439 3.053"></svg:path><svg:path d="M13.975 3.614c0-.316-.44-.571-.986-.573V2.39c0-.097.037-2.368-3.975-2.368c-4.01 0-3.973 2.271-3.973 2.368v.674l-.027-.003c-.543 0-.98.251-.98.562v2.754c0 .309.438.561.98.561s.982-.252.982-.561V3.623c0-.043-.027-.082-.043-.122V2.75c0-.069-.288-1.783 3.061-1.783c3.35 0 3.002 1.714 3.002 1.783v.791c-.006.025-.025.047-.025.073v2.817c0 .317.443.574.992.574c.012 0 .021-.004.033-.004V8.03h-.984V9h1.953z"></svg:path></svg:g>`,
})
export class SiGlyphCustomerSupportIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDashboardIcon],svg[si-glyph-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.521 15.979c-4.111 0-7.459-3.36-7.459-7.489C1.062 4.359 4.41 1 8.521 1s7.458 3.359 7.458 7.49c0 4.129-3.346 7.489-7.458 7.489M8.512 2.956c-3.052 0-5.534 2.486-5.534 5.545s2.482 5.545 5.534 5.545s5.532-2.487 5.532-5.545c0-3.059-2.482-5.545-5.532-5.545"></svg:path><svg:path d="M8.965 10.062V7.639c0-.347-.213-.626-.477-.626s-.479.279-.479.626v2.423c-.387.192-.968.542-.968 1.438s.819 1.484 1.446 1.484s1.428-.589 1.428-1.484s-.56-1.245-.95-1.438M8 4h.959v.976H8zM5 5h.998v.979H5zm6 0h.998v.979H11z"></svg:path></svg:g>`,
})
export class SiGlyphDashboardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDataArrowDownIcon],svg[si-glyph-data-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.997 10.04H2.023c-.555 0-1.003.833-1.003 1.859v1.241c0 1.026.448 1.859 1.003 1.859h13.974c.554 0 1.003-.833 1.003-1.859v-1.241c0-1.026-.449-1.859-1.003-1.859M12.5 14.104c-.885 0-1.604-.732-1.604-1.635s.719-1.636 1.604-1.636s1.604.732 1.604 1.636c0 .902-.719 1.635-1.604 1.635m-.734-9.94H9.878V1.687c0-.557-.421-.633-.938-.633c-.519 0-.938.076-.938.633v2.477H6.213a.735.735 0 0 0 0 1.033l2.265 2.568a.725.725 0 0 0 1.027 0l2.261-2.568a.73.73 0 0 0 0-1.033"></svg:path>`,
})
export class SiGlyphDataArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseIcon],svg[si-glyph-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421"></svg:ellipse><svg:path d="M6.463 11.08c-3.516 0-6.447-.98-6.447-1.636v3.269c0 1.188 2.887 2.146 6.447 2.146s6.447-.959 6.447-2.146V9.444c0 .656-2.931 1.636-6.447 1.636"></svg:path><svg:path d="M6.494 6.051C2.978 6.051.047 5.049.047 4.377v3.346c0 1.214 2.887 2.196 6.447 2.196s6.447-.982 6.447-2.196V4.377c0 .672-2.931 1.674-6.447 1.674"></svg:path></svg:g>`,
})
export class SiGlyphDatabaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseDownloadIcon],svg[si-glyph-database-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(2)"><svg:ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421"></svg:ellipse><svg:path d="M6.494 6.051C2.978 6.051.047 5.049.047 4.377v3.346c0 1.214 2.887 2.196 6.447 2.196s6.447-.982 6.447-2.196V4.377c0 .672-2.931 1.674-6.447 1.674"></svg:path></svg:g><svg:path d="M11.014 12.003h2.02V10.5c-1.175.33-2.799.58-4.57.58c-3.516 0-6.447-.98-6.447-1.636v3.269c0 1.188 2.887 2.146 6.447 2.146c1.648 0 3.146-.207 4.287-.546zm3.968-.987v1.987h1.002l-1.492 1.966l-1.476-1.966h1.017v-1.987z"></svg:path></svg:g>`,
})
export class SiGlyphDatabaseDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseErrorIcon],svg[si-glyph-database-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(2)"><svg:ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421"></svg:ellipse><svg:path d="m8.575 11.832l1.014-1.013c-.931.159-1.997.261-3.126.261c-3.516 0-6.447-.98-6.447-1.636v3.269c0 1.188 2.887 2.146 6.447 2.146a18 18 0 0 0 2.605-.184l1.176-1.176zM6.494 9.919c3.561 0 6.447-.982 6.447-2.196V4.377c0 .672-2.932 1.674-6.447 1.674S.047 5.049.047 4.377v3.346c0 1.214 2.887 2.196 6.447 2.196"></svg:path><svg:path d="m14.991 11.799l-.816-.816l-1.702 1.703l-1.668-1.667l-.815.813l1.668 1.668l-1.685 1.686l.814.816l1.687-1.687l1.702 1.703l.815-.814l-1.703-1.702z"></svg:path></svg:g>`,
})
export class SiGlyphDatabaseErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabasePlusIcon],svg[si-glyph-database-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.43 5C10.981 5 14 3.837 14 2.5S10.981 0 7.43 0S1 1.163 1 2.5S3.879 5 7.43 5"></svg:path><svg:path d="M7.494 9.919c3.561 0 6.447-.982 6.447-2.196V4.377c0 .672-2.932 1.674-6.447 1.674S1.047 5.049 1.047 4.377v3.346c0 1.214 2.887 2.196 6.447 2.196M11 13h4.915v.957H11z"></svg:path><svg:path d="M1.016 9.444v3.269c0 1.188 2.887 2.146 6.447 2.146c.869 0 1.697-.059 2.455-.162v-2.739h2.04V10.52c-1.169.321-2.76.561-4.495.561c-3.516-.001-6.447-.981-6.447-1.637M13 11h.958v4.937H13z"></svg:path></svg:g>`,
})
export class SiGlyphDatabasePlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseRemoveIcon],svg[si-glyph-database-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.43 5c3.551 0 6.43-1.242 6.43-2.579S10.981 0 7.43 0S1 1.084 1 2.421S3.879 5 7.43 5m6.449 7.917a.7.7 0 0 0 .031-.204V9.444c0 .655-2.932 1.636-6.447 1.636s-6.447-.98-6.447-1.636v3.269c0 1.188 2.887 2.146 6.447 2.146c.885 0 1.728-.06 2.495-.166v-1.776z"></svg:path><svg:path d="M7.494 9.919c3.561 0 6.447-.982 6.447-2.196V4.377c0 .672-2.932 1.674-6.447 1.674S1.047 5.049 1.047 4.377v3.346c0 1.214 2.887 2.196 6.447 2.196M11 14h4v.912h-4z"></svg:path></svg:g>`,
})
export class SiGlyphDatabaseRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseShareIcon],svg[si-glyph-database-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.73 6c-.37 0-.668.734-.668 1.54v.977c0 .805.299 1.461.668 1.461H7V14h2V9.978h6.394c.37 0 .606-.656.606-1.461V7.5c.002-.807-.235-1.5-.605-1.5zm13.332 3.031h-1.125V7.969h1.125zM.687 3.972h14.667c.368 0 .667-.665.667-1.485v-.991c0-.82-.299-1.485-.667-1.485H.687C.321.011.021.676.021 1.496v.991c0 .82.299 1.485.666 1.485m12.251-2.003h1v1h-1zM5 15h2v1H5zm-4 0h1.927v.919H1zm8 0h1.958v.938H9zm4 0h1.982v.888H13z"></svg:path>`,
})
export class SiGlyphDatabaseShareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseUploadIcon],svg[si-glyph-database-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(2 1)"><svg:ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421"></svg:ellipse><svg:path d="M6.479 5.988C2.963 5.988.032 4.986.032 4.314V7.66c0 1.214 2.887 2.196 6.447 2.196s6.447-.982 6.447-2.196V4.314c0 .672-2.932 1.674-6.447 1.674"></svg:path></svg:g><svg:path d="M11.953 15.031H9.906l2.705-3.488c-1.131.276-2.587.475-4.164.475c-3.516 0-6.447-.98-6.447-1.636v3.269c0 1.188 2.887 2.146 6.447 2.146c1.32 0 2.484-.133 3.506-.359z"></svg:path><svg:path d="M13.018 15.969v-1.988h-1.002l1.492-1.965l1.476 1.965h-1.017v1.988z"></svg:path></svg:g>`,
})
export class SiGlyphDatabaseUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDeleteIcon],svg[si-glyph-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.566 8l3.045-3.044c.42-.421.42-1.103 0-1.522L12.566.389a1.08 1.08 0 0 0-1.523 0L7.999 3.433L4.955.389a1.08 1.08 0 0 0-1.523 0L.388 3.434a1.074 1.074 0 0 0-.001 1.522L3.431 8L.387 11.044a1.075 1.075 0 0 0 .001 1.523l3.044 3.044c.42.421 1.102.421 1.523 0l3.044-3.044l3.044 3.044a1.076 1.076 0 0 0 1.523 0l3.045-3.044c.42-.421.42-1.103 0-1.523z"></svg:path>`,
})
export class SiGlyphDeleteIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDeliciousCircleIcon],svg[si-glyph-delicious-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.916 9.021c0-4.369-3.555-7.91-7.937-7.91c-4.385 0-7.938 3.541-7.938 7.91s3.554 7.909 7.938 7.909c4.382.001 7.937-3.54 7.937-7.909m-8.013.063H2.976c0-3.339 2.734-6.044 6.107-6.044l.025.001v5.865h6.081c0 3.329-2.926 6.204-6.287 6.219z"></svg:path>`,
})
export class SiGlyphDeliciousCircleIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDenyIcon],svg[si-glyph-deny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.016.06a7.97 7.97 0 1 0 .002 15.936A7.97 7.97 0 0 0 9.016.06M3.049 8.028a5.974 5.974 0 0 1 5.967-5.966c1.354 0 2.6.458 3.602 1.221l-8.347 8.348a5.93 5.93 0 0 1-1.222-3.603m5.967 5.966a5.92 5.92 0 0 1-3.447-1.105l8.309-8.309a5.93 5.93 0 0 1 1.104 3.448a5.974 5.974 0 0 1-5.966 5.966"></svg:path>`,
})
export class SiGlyphDenyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDesktopIcon],svg[si-glyph-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.089.064H1.913A.91.91 0 0 0 1 .975V11.05c0 .504.409.912.913.912h14.176A.91.91 0 0 0 17 11.05V.975a.91.91 0 0 0-.911-.911M2.971 9.369V2.575c0-.375.283-.677.633-.677h10.794c.351 0 .633.302.633.677v6.794c0 .373-.282.676-.633.676H3.604c-.35 0-.633-.303-.633-.676m11.476 4.714H9.911v-2.041H8.052v2.041H3.583c-.282 0-.511.792-.511 1.193c0 .403.229.623.511.623h10.864c.282 0 .511-.22.511-.623c0-.401-.229-1.193-.511-1.193"></svg:path>`,
})
export class SiGlyphDesktopIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDialNumberIcon],svg[si-glyph-dial-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.878 3.639c0 .635-.449 1.152-1.004 1.152h-1.871C11.45 4.791 11 4.273 11 3.639V2.15c0-.635.45-1.15 1.003-1.15h1.871c.555 0 1.004.516 1.004 1.15zm-5 0c0 .635-.449 1.152-1.004 1.152H7.003C6.45 4.791 6 4.273 6 3.639V2.15C6 1.515 6.45 1 7.003 1h1.871c.555 0 1.004.516 1.004 1.15zm-5 0c0 .635-.449 1.152-1.004 1.152H2.003C1.45 4.791 1 4.273 1 3.639V2.15C1 1.515 1.45 1 2.003 1h1.871c.555 0 1.004.516 1.004 1.15zm10 5c0 .635-.449 1.152-1.004 1.152h-1.871C11.45 9.791 11 9.273 11 8.639V7.15c0-.635.45-1.15 1.003-1.15h1.871c.555 0 1.004.516 1.004 1.15zm-5 0c0 .635-.449 1.152-1.004 1.152H7.003C6.45 9.791 6 9.273 6 8.639V7.15C6 6.515 6.45 6 7.003 6h1.871c.555 0 1.004.516 1.004 1.15zm-5 0c0 .635-.449 1.152-1.004 1.152H2.003C1.45 9.791 1 9.273 1 8.639V7.15C1 6.515 1.45 6 2.003 6h1.871c.555 0 1.004.516 1.004 1.15zm10 5c0 .635-.449 1.152-1.004 1.152h-1.871c-.553 0-1.003-.518-1.003-1.152V12.15c0-.635.45-1.15 1.003-1.15h1.871c.555 0 1.004.516 1.004 1.15zm-5 0c0 .635-.449 1.152-1.004 1.152H7.003C6.45 14.791 6 14.273 6 13.639V12.15c0-.635.45-1.15 1.003-1.15h1.871c.555 0 1.004.516 1.004 1.15zm-5 0c0 .635-.449 1.152-1.004 1.152H2.003C1.45 14.791 1 14.273 1 13.639V12.15c0-.635.45-1.15 1.003-1.15h1.871c.555 0 1.004.516 1.004 1.15z"></svg:path>`,
})
export class SiGlyphDialNumberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDialNumber1Icon],svg[si-glyph-dial-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:circle cx="2" cy="3" r="2"></svg:circle><svg:circle cx="7" cy="3" r="2"></svg:circle><svg:circle cx="13" cy="2" r="2"></svg:circle><svg:circle cx="2" cy="8" r="2"></svg:circle><svg:circle cx="7" cy="8" r="2"></svg:circle><svg:circle cx="12" cy="8" r="2"></svg:circle><svg:circle cx="2" cy="13" r="2"></svg:circle><svg:circle cx="7" cy="13" r="2"></svg:circle><svg:circle cx="12" cy="13" r="2"></svg:circle></svg:g>`,
})
export class SiGlyphDialNumber1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiamondIcon],svg[si-glyph-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.93 15.644L3.34 8.796a1.16 1.16 0 0 1-.002-1.641L7.904.323a1.16 1.16 0 0 1 1.642.002l4.54 6.85a1.16 1.16 0 0 1 .004 1.641l-4.518 6.83s-1.187.451-1.642-.002"></svg:path>`,
})
export class SiGlyphDiamondIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice1Icon],svg[si-glyph-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 0H3.178c-1.18 0-2.135.966-2.135 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 14.763 0M9.017 11.155c-1.696 0-3.069-1.406-3.069-3.14s1.373-3.14 3.069-3.14c1.694 0 3.069 1.406 3.069 3.14s-1.375 3.14-3.069 3.14"></svg:path>`,
})
export class SiGlyphDice1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice2Icon],svg[si-glyph-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 0H3.178c-1.18 0-2.135.966-2.135 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 14.763 0M6.002 10.153c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m6 0c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123"></svg:path>`,
})
export class SiGlyphDice2Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice3Icon],svg[si-glyph-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.763 0H2.178C.998 0 .043.966.043 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 13.763 0M4.002 6.153c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m8 8c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m-4-4c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123"></svg:path>`,
})
export class SiGlyphDice3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice5Icon],svg[si-glyph-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 0H3.178c-1.18 0-2.135.966-2.135 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 14.763 0M5.002 6.153c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m8 0c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m0 8c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m-4-4c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m-4 4c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123"></svg:path>`,
})
export class SiGlyphDice5Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDice6Icon],svg[si-glyph-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 0H3.178c-1.18 0-2.135.966-2.135 2.155v11.69c0 1.189.955 2.154 2.135 2.154h11.585a2.145 2.145 0 0 0 2.136-2.154V2.155A2.147 2.147 0 0 0 14.763 0M6.002 7.153c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m6 0c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m0 6c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123m-6 0c-1.146 0-2.075-.951-2.075-2.123s.929-2.123 2.075-2.123s2.076.951 2.076 2.123s-.93 2.123-2.076 2.123"></svg:path>`,
})
export class SiGlyphDice6Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscIcon],svg[si-glyph-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g transform="translate(3 3)"><svg:path d="M7.466 1.066L8.984-.452l.869.87l-1.518 1.517zM.895 10.405l-.868-.87L1.545 8.02l.868.87z"></svg:path><svg:ellipse cx="5.115" cy="5.141" rx="3.115" ry="3.141"></svg:ellipse><svg:path fill="currentColor" d="M4.988 3.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path></svg:g><svg:path fill="currentColor" d="M15.958 7.958C15.958 3.516 12.385 0 7.979 0S0 3.516 0 7.958S3.572 16 7.979 16c4.564 0 7.979-3.69 7.979-8.042m-3.697-5.067l.869.869l-1.518 1.518l-.869-.869zM3.633 13.193l-.868-.869l1.518-1.518l.868.869zm1.252-5.208C4.885 6.25 6.28 4.843 8 4.843c1.719 0 3.115 1.406 3.115 3.142c0 1.733-1.396 3.14-3.115 3.14c-1.721 0-3.115-1.406-3.115-3.14"></svg:path></svg:g>`,
})
export class SiGlyphDiscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscAddIcon],svg[si-glyph-disc-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11 12h5.938v1.969H11z"></svg:path><svg:path d="M13 10h1.97v5.938H13zM8.988 6.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path><svg:path d="M16.958 7.969c0-4.413-3.573-7.906-7.979-7.906S1 3.556 1 7.969c0 4.412 3.572 7.989 7.979 7.989q.51-.002 1.001-.071v-4.935a3 3 0 0 1-.979.173c-1.721 0-3.115-1.406-3.115-3.14s1.395-3.142 3.115-3.142c1.719 0 3.115 1.406 3.115 3.142c0 .356-.072.695-.182 1.015h4.933c.053-.348.091-.693.091-1.031M6.15 11.676l-1.518 1.518l-.868-.869l1.518-1.518zm6.462-6.399l-.869-.869l1.518-1.518l.869.869z"></svg:path></svg:g>`,
})
export class SiGlyphDiscAddIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscDenyIcon],svg[si-glyph-disc-deny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.477 10.979a2.498 2.498 0 0 0 0 4.994a2.498 2.498 0 0 0 0-4.994m-1.643 2.677c0-1.018.816-1.843 1.82-1.843a1.8 1.8 0 0 1 .82.198l-2.443 2.475a1.85 1.85 0 0 1-.197-.83m1.494 1.504q-.376-.001-.723-.159l2.377-2.41a1.826 1.826 0 0 1-1.654 2.569M7.987 6.049c-1.11 0-2.01.875-2.01 1.955c0 1.079.9 1.954 2.01 1.954c1.108 0 2.009-.875 2.009-1.954c0-1.08-.9-1.955-2.009-1.955"></svg:path><svg:path d="M9.879 13.499c0-1.989 1.623-3.604 3.623-3.604c.775 0 1.489.247 2.078.659A7.9 7.9 0 0 0 16 8.029c0-4.396-3.579-7.96-7.992-7.96S.016 3.633.016 8.029s3.578 7.96 7.992 7.96c.887 0 1.738-.153 2.535-.42a3.56 3.56 0 0 1-.664-2.07m2.544-10.727l.846.845l-1.787 1.788l-.845-.845zM3.548 13.338l-.845-.845l1.788-1.788l.845.846zM5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path></svg:g>`,
})
export class SiGlyphDiscDenyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscDownloadIcon],svg[si-glyph-disc-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.987 6.042c-1.11 0-2.011.88-2.011 1.968c0 1.084.9 1.964 2.011 1.964c1.108 0 2.009-.88 2.009-1.964c0-1.088-.9-1.968-2.009-1.968"></svg:path><svg:path d="m10.979 12.963l1.95-.008v-2.018h2.507a7.8 7.8 0 0 0 .565-2.896c0-4.396-3.582-7.958-8-7.958s-8 3.562-8 7.958S3.583 16 8.001 16a8 8 0 0 0 3.333-.73l.667-.301zm1.444-10.279l.846.846l-1.787 1.787l-.845-.845zM3.548 13.25l-.845-.846l1.788-1.787l.845.845zM8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path d="m14.521 15.958l1.373-1.937l-.921.003v-1.962h-.944v1.964l-.982.004z"></svg:path></svg:g>`,
})
export class SiGlyphDiscDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscErrorIcon],svg[si-glyph-disc-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m11.172 14.414l4.198-4.199l1.393 1.393l-4.2 4.199z"></svg:path><svg:path d="m11.172 11.586l1.393-1.393l4.198 4.199l-1.393 1.393zM8.988 6.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path><svg:path d="M16.958 7.969c0-4.413-3.573-7.906-7.979-7.906S1 3.556 1 7.969c0 4.412 3.572 7.989 7.979 7.989q.51-.002 1.001-.071v-4.935a3 3 0 0 1-.979.173c-1.721 0-3.115-1.406-3.115-3.14s1.395-3.142 3.115-3.142c1.719 0 3.115 1.406 3.115 3.142c0 .356-.072.695-.182 1.015h4.933c.053-.348.091-.693.091-1.031M6.15 11.676l-1.518 1.518l-.868-.869l1.518-1.518zm6.462-6.399l-.869-.869l1.518-1.518l.869.869z"></svg:path></svg:g>`,
})
export class SiGlyphDiscErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscPauseIcon],svg[si-glyph-disc-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g transform="translate(3 3)"><svg:path d="M7.466 1.064L8.984-.453l.869.869l-1.518 1.517zm-6.57 9.341l-.869-.87L1.546 8.02l.868.87z"></svg:path><svg:ellipse cx="5.115" cy="5.141" rx="3.115" ry="3.141"></svg:ellipse><svg:path fill="currentColor" d="M4.988 3.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path></svg:g><svg:path fill="currentColor" d="M15.301 10.953c.4-.991.657-1.967.657-2.984c0-4.413-3.573-7.906-7.979-7.906S0 3.556 0 7.969c0 4.412 3.572 7.989 7.979 7.989c.68 0 1.332-.1 1.959-.264v-4.741zm-3.04-8.062l.869.869l-1.518 1.518l-.869-.869zM3.633 13.193l-.868-.869l1.518-1.518l.868.869zM8 5a3 3 0 1 1-.002 6.002A3 3 0 0 1 8 5"></svg:path><svg:path fill="currentColor" d="M11 12h2.009v4H11zm3 0h1.981v4H14z"></svg:path></svg:g>`,
})
export class SiGlyphDiscPauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscPlayIcon],svg[si-glyph-disc-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g transform="translate(3 3)"><svg:path d="M7.437 1.077L8.954-.441l.87.87l-1.518 1.517zM.883 10.403l-.868-.87l1.518-1.516l.868.87z"></svg:path><svg:ellipse cx="5.115" cy="5.141" rx="3.115" ry="3.141"></svg:ellipse><svg:path fill="currentColor" d="M4.988 3.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path></svg:g><svg:path d="M3.593 11.137h1.229v2.146H3.593z"></svg:path><svg:ellipse cx="8.115" cy="8.142" rx="3.115" ry="3.142"></svg:ellipse><svg:path d="M11.114 2.744h1.229V4.89h-1.229z"></svg:path><svg:path fill="currentColor" d="m11.991 10.911l2.384 1.845a8.02 8.02 0 0 0 1.583-4.787c0-4.413-3.573-7.906-7.979-7.906S0 3.556 0 7.969c0 4.412 3.572 7.989 7.979 7.989a8 8 0 0 0 4.013-1.068v-3.979zm.27-8.02l.869.869l-1.518 1.518l-.869-.869zM3.633 13.193l-.868-.869l1.518-1.518l.868.869zM8 11.125c-1.721 0-3.115-1.406-3.115-3.14S6.28 4.843 8 4.843c1.719 0 3.115 1.406 3.115 3.142c0 1.734-1.396 3.14-3.115 3.14"></svg:path><svg:path fill="currentColor" d="M13.031 16v-2.969l1.938 1.5z"></svg:path></svg:g>`,
})
export class SiGlyphDiscPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscPlay2Icon],svg[si-glyph-disc-play-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.516 2.984L12.141 7h2.805L8.492.027L2.035 7h2.807zm0 10.035L4.809 9.031H2.003l6.468 6.903l6.468-6.903h-2.806z"></svg:path>`,
})
export class SiGlyphDiscPlay2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscRemoveIcon],svg[si-glyph-disc-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13 14h3.938v1.969H13z"></svg:path><svg:path d="M16.958 7.969c0-4.413-3.573-7.906-7.979-7.906S1 3.556 1 7.969c0 4.412 3.572 7.989 7.979 7.989a7.9 7.9 0 0 0 2.992-.601v-2.402h3.314c.941-1.319 1.673-3.255 1.673-4.986M4.633 13.193l-.868-.869l1.518-1.518l.868.869zM9 11.125c-1.721 0-3.115-1.406-3.115-3.14S7.28 4.843 9 4.843c1.719 0 3.115 1.406 3.115 3.142c0 1.734-1.396 3.14-3.115 3.14m3.612-5.848l-.869-.869l1.518-1.518l.869.869z"></svg:path><svg:path d="M8.988 6.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path></svg:g>`,
})
export class SiGlyphDiscRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscStopIcon],svg[si-glyph-disc-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g transform="translate(3 3)"><svg:path d="M7.465 1.063L8.982-.455l.87.87l-1.518 1.517zm-6.57 9.34l-.868-.87l1.518-1.516l.869.87z"></svg:path><svg:ellipse cx="5.115" cy="5.141" rx="3.115" ry="3.141"></svg:ellipse><svg:path fill="currentColor" d="M4.988 3.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path></svg:g><svg:path fill="currentColor" d="M15.301 10.953c.4-.991.657-1.967.657-2.984c0-4.413-3.573-7.906-7.979-7.906S0 3.556 0 7.969c0 4.412 3.572 7.989 7.979 7.989c.68 0 1.332-.1 1.959-.264l1.031-.257l-.031-4.484zm-3.04-8.062l.869.869l-1.518 1.518l-.869-.869zM3.633 13.193l-.868-.869l1.518-1.518l.868.869zM5 8.001a3 3 0 1 1 6 0a3.001 3.001 0 0 1-6 0"></svg:path><svg:path fill="currentColor" d="M12 12h4.023v4H12z"></svg:path></svg:g>`,
})
export class SiGlyphDiscStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscUploadIcon],svg[si-glyph-disc-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.917 6C6.857 6 6 6.863 6 7.93c0 1.065.857 1.928 1.917 1.928A1.92 1.92 0 0 0 9.832 7.93C9.832 6.864 8.974 6 7.917 6"></svg:path><svg:path d="m10.979 15.11l3.531-4.607l.69.902a8 8 0 0 0 .799-3.459c0-4.447-3.582-7.946-8-7.946s-8 3.499-8 7.946c0 4.448 3.582 8.054 8 8.054c1.367 0 2.643-.3 3.766-.89zm1.444-12.419l.846.846l-1.788 1.787l-.844-.845zM3.548 13.258l-.845-.846l1.787-1.787l.846.845zM8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path d="m16 13.966l-1.489-1.86l-1.49 1.86h.997v2.003h.97v-2.003z"></svg:path></svg:g>`,
})
export class SiGlyphDiscUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDishIcon],svg[si-glyph-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.979 4.06a3.933 3.933 0 0 0-3.926 3.929a3.933 3.933 0 0 0 3.926 3.931a3.933 3.933 0 0 0 3.926-3.931A3.933 3.933 0 0 0 8.979 4.06"></svg:path><svg:path d="M9.007.072c-4.399 0-7.964 3.562-7.964 7.957a7.96 7.96 0 0 0 7.964 7.96c4.397 0 7.965-3.562 7.965-7.96c0-4.394-3.568-7.957-7.965-7.957m-.028 13.064a5.15 5.15 0 0 1-5.143-5.147a5.15 5.15 0 0 1 5.143-5.146a5.15 5.15 0 0 1 5.143 5.146a5.15 5.15 0 0 1-5.143 5.147"></svg:path></svg:g>`,
})
export class SiGlyphDishIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiskAntennaIcon],svg[si-glyph-disk-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.916 8.877c-2.558 2.559-6.535 2.734-8.877.391l9.269-9.27c2.342 2.344 2.169 6.318-.392 8.879M4.625 5.958c-.846-.845-.783-2.274.137-3.194s2.35-.98 3.193-.137z"></svg:path><svg:path d="M13.644 15.997H6.378a.363.363 0 0 1-.318-.542l3.69-6.582a.37.37 0 0 1 .319-.186h.002a.36.36 0 0 1 .318.189l3.574 6.582a.364.364 0 0 1-.319.539"></svg:path></svg:g>`,
})
export class SiGlyphDiskAntennaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDnaIcon],svg[si-glyph-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.105 3.551l.05-.07C9.145 2.118 10 .94 10 .042H9c0 .242-.139.576-.352.959H6.334C6.129.628 6 .297 6 .042H5c0 .96.877 2.142 1.89 3.512l.002.003C5.903 4.942 5 6.336 5 7.535s.908 2.564 1.896 3.915l-.051.07C5.855 12.882 5 14.061 5 14.959h1c0-.247.144-.589.363-.979h2.291c.211.382.346.721.346.979h1c0-.961-.876-2.142-1.89-3.512l-.003-.004C9.097 10.059 10 8.665 10 7.467c0-1.199-.907-2.567-1.895-3.916m-.067-1.593q-.261.377-.543.766q-.287-.389-.552-.766zM8.531 6H6.492c.273-.519.63-1.064 1.01-1.608c.389.542.755 1.088 1.029 1.608M9 7.467c0 .166-.035.347-.084.533H6.064A2 2 0 0 1 6 7.533c0-.172.037-.36.09-.555h2.839c.042.17.071.335.071.489m-2.039 5.575q.262-.378.545-.767q.286.39.551.767zm-.504-4.063h2.061c-.273.524-.635 1.078-1.021 1.629c-.393-.549-.765-1.104-1.04-1.629"></svg:path>`,
})
export class SiGlyphDnaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentIcon],svg[si-glyph-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2 0v16h13V4.024L9 4V.062zm11 13H4v-1h9zm0-2H4v-1h9zm0-4v1H4V7z"></svg:path><svg:path d="M10 0v2.844h4.752z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowDownIcon],svg[si-glyph-document-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.984 0L2.016.052l.01 10.927l2.005-.01l-.004 1.984h2.02L4.031 16h9.938V6.012H7.984z"></svg:path><svg:path d="M9 0v4.969h5zM4.017 14.059l-1.5 1.884l-1.5-1.884H2.03V12h.954v2.059z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowLeftIcon],svg[si-glyph-document-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10 0v4h4z"></svg:path><svg:path d="M9 5V.042H3.033v11.02L4 10.258v1.659L6 12v3.042H4v.937h9.98V5z"></svg:path><svg:path d="m2.9 12.004l-.003 1h2.044v.975H2.892l-.004.979l-1.846-1.452z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowRightIcon],svg[si-glyph-document-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10 4h4l-4-4z"></svg:path><svg:path d="M9 5.042v-5H3v11.403l3.583 3.138l-1.971 1.396H14V5.042z"></svg:path><svg:path d="m3.084 13.004l.003 1H1.043v.975h2.05l.004.979l1.845-1.452z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentArrowUpIcon],svg[si-glyph-document-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.984 0L2.016.052l.01 9.927l4.005 5.037H4v.953h1.031V16h8.938V6.012H7.984z"></svg:path><svg:path d="M9 0v4.969h5zM1.016 13.953h.993v2.006h.966v-2.006h.978l-1.422-1.937z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentBackwardIcon],svg[si-glyph-document-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.017.058v15.896h11.926V5.032H7.952V.058zm9.025 12.524q0 .552-.288.554c-.205 0-.349-.255-.377-.306c-.519-.963-2.046-1.779-3.361-1.805v.905l-.039.038a.6.6 0 0 1-.429.155a.64.64 0 0 1-.393-.118l-2.108-1.603a.55.55 0 0 1 0-.756l2.097-1.613a.63.63 0 0 1 .447-.172c.158 0 .293.051.386.146l.039.039V9c1.873.026 4.026 1.582 4.026 3.582"></svg:path><svg:path d="M9.004.016v3.978h4.946z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentBackwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentBulletListIcon],svg[si-glyph-document-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871z"></svg:path><svg:path d="M9 5V0H2.042v16H14V5zM5 8H4V7h1zm0 2H4V9h1zm-.062 2h-1v-1h1zm1.02 0v-1h5v1zm5-2h-5V9h5zm0-2h-5V7h5z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentBulletListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentCheckedIcon],svg[si-glyph-document-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.024.016v3.979h4.947z"></svg:path><svg:path d="M8 5.062V0H2.008v12.745l.436.437l2.135-2.136l2.109 2.105l-2.801 2.802H14V5z"></svg:path><svg:path d="m4.58 12.46l-2.136 2.136l-1.399-1.4l-.693.693l2.092 2.092l2.829-2.829z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentCopyIcon],svg[si-glyph-document-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.02.062H5.026V13h10.991V2.991h-5.995V.062zM6.998 10.096V8.937l7.02.096v.997zm.014-2.12v-.97h7.02v.97zm7.005-1.945H6.96V4.938h7.056z"></svg:path><svg:path d="M11.06.062v1.844h4.752zm-8.997 2V16h10.886v-2.021H3.945V2.062z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentCopyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentDocIcon],svg[si-glyph-document-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871zM4 9h.965v1.989H4zm4 0h.953v1.953H8z"></svg:path><svg:path d="M8.938 5.092V.069H2.042v15.869h11.896V5.092zm-3.905 5.939v1.009H2.982V7.973l2.064.01v.971h.984l.016 2.078zm4.979.016h-.996v.984H7.969v-.984h-.994V8.985h.994V7.969h1.047v1.016h.996zm3.004-2.031h-1v1.969h1V12h-1.062v-.976h-.984V8.957h.984v-.986h1.062z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentDocIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentEditIcon],svg[si-glyph-document-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.016.016v3.968h1.263L9.932 2.34z"></svg:path><svg:path d="M8.979 12.29c-1.511.585-3.757 1.467-4.021 1.594a1.3 1.3 0 0 1-.562.131a1.42 1.42 0 0 1-1.159-.631a1.39 1.39 0 0 1-.173-1.274c.088-.229.926-2.702 1.435-4.208l.078-.231l2.667-2.654H5.969V.012H.034V15.97h11.942V9.426l-2.793 2.786z"></svg:path><svg:path d="m14.682 3.91l-1.535-1.514c-.41-.408-1.218-.577-1.607-.189L5.485 8.234s-1.321 3.913-1.446 4.242c-.099.262.231.59.46.475c.374-.186 4.105-1.631 4.105-1.631l6.071-6.057c.39-.388.418-.946.007-1.353m-6.661 6.944l-2.567.974l-.461-.425l1.225-2.965l.741.546h1.058z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentErrorIcon],svg[si-glyph-document-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.016 3.984h4.981L11.016.016zm-4.809 7.102L4.5 12.793l-1.707-1.707l-.707.707L3.793 13.5l-1.707 1.707l.707.707L4.5 14.207l1.707 1.707l.707-.707L5.207 13.5l1.707-1.707z"></svg:path><svg:path d="M9.969 5.016V.011H4.034v10.4l.466.466l1.908-1.906l2.623 2.623L7.125 13.5l2.47 2.469h6.382V5.016z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentForwardIcon],svg[si-glyph-document-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.017.058v15.896h12.006V5.032H7.952V.058zM8.922 9v-.953l.039-.039a.53.53 0 0 1 .386-.146c.174 0 .341.063.447.172l2.097 1.613a.55.55 0 0 1 0 .756l-2.108 1.603a.64.64 0 0 1-.393.118a.6.6 0 0 1-.429-.155l-.039-.038v-.905c-1.315.025-2.843.842-3.361 1.805c-.029.051-.173.306-.377.306q-.288-.002-.288-.554c0-2.001 2.153-3.557 4.026-3.583"></svg:path><svg:path d="M9.004.016v3.978h4.946z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentHelpIcon],svg[si-glyph-document-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.969.062H3.031v15.92h10.938V4.062h-5zm.047 12.972H7.954v-1.081h1.062zm1-7.05v1.004l1.001-.004v2.031h-1.001v.996h-1v1.011H7.969V8.968h2.016V7H7.016v1.031H5.969V6.969h1v-.984h3.047z"></svg:path><svg:path d="M10.04.076v2.912H14z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentHelpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentMusicIcon],svg[si-glyph-document-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.016 3.984h4.981L10.016.016z"></svg:path><svg:path d="M8.969 5.016V.011H3.034v15.958h11.942V5.016zm3.058 6.642c-.045.379-.566.935-1.07 1.143c-.656.271-1.34.12-1.528-.336s.19-1.046.847-1.316c.231-.096.48-.15.709-.158V8.363l-2.973.699l.004 3.548c-.045.379-.649 1.02-1.153 1.228c-.655.271-1.339.12-1.529-.336c-.188-.456.192-1.046.848-1.316c.28-.116.528-.19.788-.166V8.142l5.062-1.188z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentMusicIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentPdfIcon],svg[si-glyph-document-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.964 0H2.016v15.958h11.942V5.033H8.964zM6.047 10.036H5.029v.985h-.998v1.025H2.969V7.954l2.061.014v.984h1.018zm4.906-2.083h2.078v1.078H12.02v.922h1.011v1.061H12.02v1.018h-1.067zm-1.92.018v.998h.973L10.02 11H9.016v1.016H6.969V7.961z"></svg:path><svg:path d="M10.025.021v3.967h3.954zM4 9h.973v.961H4zm4 0h.969v1.983H8z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentPdfIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentPlusIcon],svg[si-glyph-document-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.927.062L4.073.114l-.021 9.833l1.969.015v2.017H8v3.083H6.062V16h9.907V6.012H9.927z"></svg:path><svg:path d="M11 0v4.969h5zM6.979 13H4.992v-2h-.963v2H2.021v.986h2.008v2.008h.963v-2.008h1.987z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentRemoveIcon],svg[si-glyph-document-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.969 16V6.012H10V.062L4 0v14l4-.031V16z"></svg:path><svg:path d="M11 0v4.969h4.917zM2 15v.937h4.99V15z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentRssIcon],svg[si-glyph-document-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.958.042H2.02v15.911h11.959V4.042H7.958zm-3.979 13.02v-2.305a2.305 2.305 0 0 1 2.306 2.305zm3.615 0c0-2.07-1.57-3.659-3.614-3.659V7.83c2.718 0 5.177 2.48 5.177 5.232zm4.485-.025h-1.562c0-3.686-2.835-6.583-6.507-6.583V4.893c4.367.001 8.069 3.76 8.069 8.144"></svg:path><svg:path d="M9.047.036v2.953h4.914z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentRssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentSearchIcon],svg[si-glyph-document-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871zm-3.539 8.99a2.478 2.478 0 0 0-2.049 3.867l-2.385 2.385l.707.707l2.398-2.398c.385.246.838.394 1.328.394a2.48 2.48 0 0 0 2.477-2.477a2.48 2.48 0 0 0-2.476-2.478m.024 4.078a1.58 1.58 0 0 1-1.578-1.578c0-.87.708-1.578 1.578-1.578a1.58 1.58 0 0 1 1.578 1.578a1.58 1.58 0 0 1-1.578 1.578"></svg:path><svg:path d="M9 5V0H2.042v13.876l1.059-1.059a3.6 3.6 0 0 1-.256-1.316a3.625 3.625 0 1 1 3.625 3.625c-.428 0-.832-.088-1.213-.223L4.222 16H14V5z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentStarIcon],svg[si-glyph-document-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 .058L2.008 0v15.954H14V5H7.977C7.964 5 8 .058 8 .058m1.052 9.165h3.056l-2.471 1.806l.943 2.924l-2.471-1.808l-2.473 1.808l.943-2.924l-2.471-1.806h3.056l.943-3.27z"></svg:path><svg:path d="M9.024.016v3.979h4.947z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentWarningIcon],svg[si-glyph-document-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.031.031v3.938h3.871z"></svg:path><svg:path d="M8.994 0H3.042v16h11V5l-5.048.064zM4.958 13l3.48-7l3.52 7z"></svg:path><svg:path d="M8 8v2.015h.977V8zm0 3h.875v1H8z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDogIcon],svg[si-glyph-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.348 6.007c-.026 0-.058.014-.086.017l.031-.03L.025 3.965l-.014.597l1.5 2.46c-.277.341-.473.706-.473.988v4.908H3v-1.655l2.98-1.334h3.019l.667 2.989h1.252v-5.59l-1.007-1.32zm10.404-2.384l-.416-1.385l-2.655 2.622l1.329 1.383l2.81.604l1.192-.872z"></svg:path>`,
})
export class SiGlyphDogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDoorIcon],svg[si-glyph-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m4.083.041l6.959 2.667v12.084l-6.709-1.709l-.208.834l7.803 2v-2.042l1.968-.001V.041z"></svg:path><svg:path d="M9 8h.875v.875H9z"></svg:path></svg:g>`,
})
export class SiGlyphDoorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDownstairIcon],svg[si-glyph-downstair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.969.047h-2.896v2h-2.011v2h-2.01v2H8.043v2H6.031v2h-2.01v2H1v2.918h2.896L17 2.965zM2.029 5.971l4.924.001l-2.154-1.414L7.98 1.377L6.654.051l-3.18 3.181l-1.448-2.205z"></svg:path>`,
})
export class SiGlyphDownstairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDownwardsArrowToBarIcon],svg[si-glyph-downwards-arrow-to-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.152 11.004a.99.99 0 0 0-.988.99v1.979c0 .547.442.99.988.99h13.855a.99.99 0 0 0 .99-.99v-1.979a.99.99 0 0 0-.99-.99zm7.899-1.443a1.49 1.49 0 0 1-2.104 0L.504 3.116c-.582-.58-.838-2.102 1-2.102h12.988c1.902 0 1.582 1.521 1.002 2.102z"></svg:path>`,
})
export class SiGlyphDownwardsArrowToBarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDrillIcon],svg[si-glyph-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.999 4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1-1h-1c0-.553-.446-1-.998-1H5.009C1.019 1 .021 3.447.021 4v3C.021 8.983 1.438 9 2 9l-2 5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1s-4 0 0-5h.007C6.559 9 9 9 9 7h1a1 1 0 0 0 1-1h1a1 1 0 0 0 1-1h3V4zm-10 0h1v3h-1zm-2 0h1v3h-1z"></svg:path>`,
})
export class SiGlyphDrillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDropWaterIcon],svg[si-glyph-drop-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10.333C3 13.463 5.427 16 8.418 16S14 13.463 14 10.333S8.418 0 8.418 0S3 7.204 3 10.333"></svg:path>`,
})
export class SiGlyphDropWaterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDropboxIcon],svg[si-glyph-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.98 1.41L2.615 4.36L.042 2.695L4.627.015zm7.999 1.285L12 0L9.016 1.388l4.944 3.139zM6.13 12.667L2 10.184v2.455L7.953 16v-5.675z"></svg:path><svg:path d="M2.589 5.333L1 7.723l5.115 2.96l1.838-2.451zM9 10.065V16l5.979-3.167v-2.472l-4.134 2.047z"></svg:path><svg:path d="m9.021 8.22l1.864 2.45l5.094-2.726l-1.515-2.624z"></svg:path></svg:g>`,
})
export class SiGlyphDropboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphDrumIcon],svg[si-glyph-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:path d="M14.969 5.984c0 .509-.308.922-.687.922H.749c-.379 0-.687-.413-.687-.922c0-.508.308-.922.687-.922h13.533c.379 0 .687.415.687.922m0 9c0 .509-.308.922-.687.922H.749c-.379 0-.687-.413-.687-.922c0-.508.308-.922.687-.922h13.533c.379 0 .687.415.687.922m-1.996-6.922H1.996a.997.997 0 0 0-.996 1v2.844c0 .553.445 1 .996 1h10.977a.997.997 0 0 0 .996-1V9.062c0-.552-.446-1-.996-1"></svg:path><svg:ellipse cx="5.439" cy="2.459" rx="1.439" ry="1.459"></svg:ellipse><svg:ellipse cx="9.439" cy="2.459" rx="1.439" ry="1.459"></svg:ellipse><svg:path d="M5.528 2.957a.5.5 0 0 1-.194-.041L1.251.79C1.033.694.942.457 1.052.262c.106-.195.37-.277.587-.18l4.085 2.126c.218.096.307.333.2.528a.45.45 0 0 1-.396.221m3.918 0a.5.5 0 0 0 .194-.041L13.723.79c.218-.096.308-.333.199-.528c-.107-.195-.37-.277-.587-.18L9.25 2.208c-.218.096-.307.333-.2.528a.45.45 0 0 0 .396.221"></svg:path></svg:g>`,
})
export class SiGlyphDrumIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEasalIcon],svg[si-glyph-easal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.957 11.062V3.107H9.98v-1h-.995V1c0-.553-.445-1-.996-1s-.905.447-.905 1v1.107h-.995v1H3.023v7.955H1.085v.875l3.064.062l-.985 2.709c-.185.52-.002 1.047.516 1.232c.519.186.957-.15 1.143-.67l1.115-3.271h1.147v3c0 .553.355 1 .905 1a.997.997 0 0 0 .996-1v-3h1.089l1.064 3.334c.185.52.646.793 1.162.607c.519-.186.702-.691.518-1.213l-.956-2.729l3.033-.062v-.874zM3.95 3.979h2.073v.938h3.894v-.938h2.132v7.084H3.95z"></svg:path>`,
})
export class SiGlyphEasalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEditIcon],svg[si-glyph-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m15.682 2.91l-1.535-1.514c-.41-.408-1.218-.577-1.607-.189L6.485 7.234s-1.321 3.913-1.446 4.242c-.099.262.231.59.46.475c.374-.186 4.105-1.631 4.105-1.631l6.071-6.057c.39-.388.418-.946.007-1.353M9.021 9.854l-2.567.974l-.461-.425l1.225-2.965l.741.546h1.058z"></svg:path><svg:path d="M12.042 10.345v3.697H.958V3l8.183-.083l.812-.859H0V15h13l-.057-5.422z"></svg:path></svg:g>`,
})
export class SiGlyphEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEggIcon],svg[si-glyph-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.262 7.956a2.41 2.41 0 0 1 2.031-.681c.439.056.395-.274.043-.402c-.893-.329-1.914-.149-2.607.547c-.69.694-.87 1.711-.549 2.604c.127.355.466.422.406-.012c-.099-.741.123-1.5.676-2.056"></svg:path><svg:path d="M16.523 6.627c-.439-.798-1.008-1.199-1.881-1.638c-.764-.383-1.546-.753-2.232-1.243c-.637-.456-.727-.873-.982-1.51C10.895.904 8.571.17 7.128.063c-.56-.042-1.104.05-1.661.049C4.104.105 2.934.478 2.52 1.763c-.097.303.02.639.051.945a8.2 8.2 0 0 1 0 1.721c-.076.748-.186 1.602-.512 2.299c-.246.531-.614.926-.758 1.507c-.354 1.413-.404 3.023.521 4.277c.552.748 1.54 1.252 2.509 1.326c1.033.078 1.924.859 2.819 1.255c.81.356 1.6.619 2.482.785c1.552.294 2.979.102 3.919-1.111c.479-.615.663-1.336.883-2.044c.232-.747.725-1.579 1.402-2.079c.658-.482.992-1.155 1.078-1.927c.082-.738-.025-1.422-.391-2.09m-7.529-.721a3.12 3.12 0 0 1 3.131 3.121a3.145 3.145 0 0 1-3.145 3.131a3.115 3.115 0 0 1-3.131-3.121a3.147 3.147 0 0 1 3.145-3.131"></svg:path></svg:g>`,
})
export class SiGlyphEggIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEjectIcon],svg[si-glyph-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.152 1.004a.99.99 0 0 0-.988.99v1.979c0 .547.442.99.988.99h13.855a.99.99 0 0 0 .99-.99V1.994a.99.99 0 0 0-.99-.99zm7.899 14.557a1.49 1.49 0 0 1-2.104 0L1.504 9.116c-.582-.58-.838-2.102 1-2.102h12.988c1.902 0 1.582 1.521 1.002 2.102z"></svg:path>`,
})
export class SiGlyphEjectIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphElectronIcon],svg[si-glyph-electron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="7.956" cy="7.964" rx="1.956" ry="1.964"></svg:ellipse><svg:path d="M11.977 15.997c-2.42 0-5.461-1.544-7.938-4.03C.177 8.09-1.113 3.311 1.103 1.086C1.808.377 2.812.002 4.001.002c2.421 0 5.462 1.545 7.939 4.032c3.861 3.876 5.15 8.655 2.936 10.88c-.705.709-1.708 1.083-2.899 1.083M4.002 1.342c-.841 0-1.5.232-1.956.691c-1.63 1.636-.285 5.752 2.936 8.986c2.235 2.244 4.916 3.639 6.995 3.639c.842 0 1.5-.232 1.957-.691c1.631-1.637.285-5.752-2.936-8.986c-2.235-2.245-4.916-3.639-6.996-3.639"></svg:path><svg:path d="M4.002 15.997c-1.189 0-2.193-.374-2.898-1.083C-1.113 12.689.177 7.91 4.04 4.033C6.517 1.547 9.558.002 11.978.002c1.191 0 2.193.375 2.9 1.084c2.214 2.223.924 7.003-2.936 10.881c-2.478 2.486-5.52 4.03-7.94 4.03m7.975-14.656c-2.079 0-4.76 1.395-6.995 3.639c-3.221 3.235-4.565 7.351-2.936 8.987c.456.458 1.115.691 1.956.691c2.08 0 4.76-1.395 6.996-3.639c3.221-3.235 4.564-7.352 2.935-8.987c-.457-.458-1.115-.691-1.956-.691"></svg:path></svg:g>`,
})
export class SiGlyphElectronIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphElevatorDownIcon],svg[si-glyph-elevator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.334 14.943c-.736 0-1.334-.748-1.334-1.484s.598-1.334 1.334-1.334h2.184l8-5.999h3.148c.736 0 1.334.597 1.334 1.333s-.598 1.521-1.334 1.521h-2.184L5.47 14.943z"></svg:path><svg:g transform="translate(4 1)"><svg:ellipse cx="2.488" cy="1.5" rx="1.488" ry="1.5"></svg:ellipse><svg:path d="M2.482 4.042c-.789 0-1.43.64-1.43 1.428v1.856l-.904.938a.358.358 0 0 0 .228.632c.081 0 .16-.027.228-.083l3.305-2.937V5.47c0-.159-.031-.312-.081-.456a1.42 1.42 0 0 0-1.346-.972"></svg:path></svg:g></svg:g>`,
})
export class SiGlyphElevatorDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphElevatorUpIcon],svg[si-glyph-elevator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.482 13.986H2.334C1.598 13.986 1 13.236 1 12.5s.598-1.44 1.334-1.44h2.143l8.041-6.043h3.148c.736 0 1.334.704 1.334 1.441c0 .735-.598 1.523-1.334 1.523h-2.184z"></svg:path><svg:g transform="translate(5 1)"><svg:ellipse cx="1.438" cy="1.479" rx="1.438" ry="1.479"></svg:ellipse><svg:path d="M3.924 4.155a.327.327 0 0 0-.471-.045l-.889.771c-.201-.5-.676-.85-1.231-.85c-.736 0-1.334.618-1.334 1.384v2.584L3.88 4.644a.36.36 0 0 0 .044-.489"></svg:path></svg:g></svg:g>`,
})
export class SiGlyphElevatorUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEmoticonIcon],svg[si-glyph-emoticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.981.084a7.939 7.939 0 1 0 0 15.876a7.938 7.938 0 0 0 0-15.876M10.998 4a2 2 0 1 1 .003 3.999A2 2 0 0 1 10.998 4M5 4a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 4m3 10c-3.013 0-5-1.899-5-4h10c0 2.101-1.988 4-5 4"></svg:path>`,
})
export class SiGlyphEmoticonIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEndPageIcon],svg[si-glyph-end-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.327 11.886l4.447-4.94a.65.65 0 0 0-.002-.849l-2.841-.005V1.068c0-.553-.437-1-.976-1H7.004a.987.987 0 0 0-.976 1v5.02l-2.95-.005a.65.65 0 0 0 .004.848l4.485 4.954a.5.5 0 0 0 .76.001m5.591 2.948c0 .552-.437 1-.973 1H3.056c-.537 0-.973-.448-.973-1V14c0-.552.436-1 .973-1h9.889c.536 0 .973.448.973 1z"></svg:path>`,
})
export class SiGlyphEndPageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEraseIcon],svg[si-glyph-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.932 13.014L3.958 7.039L10.84.158c.322-.325.856-.314 1.191.022l4.762 4.759c.334.336.345.869.021 1.191zm-.969 1.096c-1.582 1.583-5.434.3-7.102-1.368c-1.666-1.667-.52-3.087 1.063-4.67z"></svg:path>`,
})
export class SiGlyphEraseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEuroIcon],svg[si-glyph-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.629 13.113c-1.027.4-2.15.503-3.252.297a5.87 5.87 0 0 1-3.779-2.45h3.723l.667-1.952H5.757a5.3 5.3 0 0 1-.032-2.067h4.578l.665-1.925H6.501c1.207-1.847 3.516-2.885 5.902-2.438l.452-2.406C8.872-.575 5.034 1.541 3.634 5.017H1.682l-.666 1.925h2.128c-.086.7-.077 1.394.025 2.067H1.697l-.668 1.952h2.705c1.059 2.42 3.317 4.319 6.188 4.856a8.56 8.56 0 0 0 4.7-.43z"></svg:path>`,
})
export class SiGlyphEuroIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphExcavatorIcon],svg[si-glyph-excavator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.858 12.071H5.141c-.61 0-1.102.581-1.102 1.3v1.299c0 .718.491 1.299 1.102 1.299h9.717c.608 0 1.101-.581 1.101-1.299v-1.299c0-.719-.492-1.3-1.101-1.3m-7.879 3.034a1.123 1.123 0 0 1-1.115-1.131c0-.627.5-1.132 1.115-1.132c.613 0 1.113.505 1.113 1.132s-.5 1.131-1.113 1.131m3.007-.011a1.08 1.08 0 0 1-1.076-1.08c0-.597.482-1.081 1.076-1.081a1.08 1.08 0 0 1 1.076 1.081c0 .597-.483 1.08-1.076 1.08m3.045.032c-.631 0-1.145-.495-1.145-1.108c0-.615.514-1.111 1.145-1.111s1.145.496 1.145 1.111c0 .613-.514 1.108-1.145 1.108m-1.053-7.105l.021-2.014H7.417L6.584 3.91l-.004-.012l-.005.002l-2.586-2.696l.348-.9l-.864-.336l-2.258 6.283a2.37 2.37 0 0 0-.936 3.151c.6 1.146 2.303 1.926 3.44 1.315c.881-.472-.52-3.405-1.589-4.269l1.489-4.286l2.162 2.255l1.281 4.585v.996c0 1.607 1.031.944 1.031.944h6.031s.844.39.844-1.007V8.716c0-.867-.938-.708-.938-.708zm-.947 2.041H7.937V6.937h3.094z"></svg:path>`,
})
export class SiGlyphExcavatorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphExtinguisherIcon],svg[si-glyph-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.995 13.914v-6.83a3 3 0 0 0-2.03-2.959V2.969h2.032v-.941h-2.032v.035h-.905c-.005-.027-.022-.051-.025-.078c.06-.584.616-1.043 1.291-1.043h1.672V0h-1.672c-1.188 0-2.168.826-2.285 1.879L9.034 2H7.425c-1.51.064-3.355 1.002-3.385 4.078l-1.011 4.828h2.937L5.04 6.082C5.073 3.195 7.329 3.006 7.446 3h1.583v1.125s-1.932.541-1.932 2.959v6.809s-.467 1.951 2.66 1.951h.605c2.88 0 2.633-1.93 2.633-1.93"></svg:path>`,
})
export class SiGlyphExtinguisherIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEyeDropIcon],svg[si-glyph-eye-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.661 4.051c.234-1.077-.051-2.229-.86-3.046c-1.29-1.299-3.422-1.26-4.76.089S.663 4.589 1.954 5.889c.81.816 1.951 1.103 3.023.868l.602.586l-.58.583l.502.506l.546-.552l5.062 5.073h2.875v-2.766L8.777 5.129l.528-.533l-.5-.505l-.555.559zm5.355 6.371l.005 1.623l-1.804.009l-4.545-4.71l1.547-1.625zm2.969 4.418c0 .619-.44 1.122-.986 1.122c-.545 0-.985-.503-.985-1.122s.985-1.777.985-1.777s.986 1.157.986 1.777"></svg:path>`,
})
export class SiGlyphEyeDropIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphEyeGlassIcon],svg[si-glyph-eye-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1.376 8.967a.4.4 0 0 1-.095-.012a.353.353 0 0 1-.258-.432l2.282-2.842a.36.36 0 0 1 .088-.152l2.749-1.381a.37.37 0 0 1 .514-.014a.346.346 0 0 1 .016.498L3.984 5.946L1.726 8.704a.36.36 0 0 1-.35.263m15.189 0a.354.354 0 0 0 .35-.444l-2.282-2.842a.36.36 0 0 0-.088-.152l-2.749-1.381a.37.37 0 0 0-.514-.014a.347.347 0 0 0-.016.498l2.688 1.314l2.258 2.758c.043.159.19.263.353.263"></svg:path><svg:path d="M4.986 12.832c.728 0 2.963-.758 3.274-2.938c.237-.017.473-.034.718-.034c.249 0 .482.024.721.042c.318 2.192 2.497 2.944 3.227 2.944c.786 0 4.043-.77 4.043-3.451c0-2.369-1.636-2.361-3.654-2.361c-1.725 0-3.168.113-3.552 1.523a8 8 0 0 0-.771-.045a7 7 0 0 0-.801.056c-.388-1.391-1.816-1.503-3.525-1.503c-2.008 0-3.635-.039-3.635 2.349c0 2.662 3.172 3.418 3.955 3.418"></svg:path></svg:g>`,
})
export class SiGlyphEyeGlassIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFactoryIcon],svg[si-glyph-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 2v7L9 6v3L5 6v3L0 6v9h15V2zM3 12H1v-2h2zm4 0H5v-2h2zm4 0H9v-2h2z"></svg:path>`,
})
export class SiGlyphFactoryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFaucetIcon],svg[si-glyph-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.957 14.119c0 1.022-.66 1.851-1.475 1.851c-.814 0-1.475-.828-1.475-1.851c0-1.021 1.475-3.119 1.475-3.119s1.475 2.098 1.475 3.119m-1.325-7.674c-1.205-1.208-2.851-1.362-4.633-1.382v-.014c0-.533-.373-.967-.834-.967H7.979V2.954c.708-.099 1.278-.47 1.514-.958c.262.116.62.189 1.016.189c.801 0 1.449-.294 1.449-.659c0-.364-.648-.659-1.449-.659a2.6 2.6 0 0 0-1.004.185C9.239.466 8.49.041 7.598.041c-.87 0-1.604.402-1.888.964c-.283-.12-.667-.194-1.093-.194c-.871 0-1.575.309-1.575.688c0 .38.704.687 1.575.687c.421 0 .801-.073 1.084-.19c.21.437.69.775 1.299.914v1.173H5.832c-.459 0-.832.434-.832.967v.01H1.436C.702 5.06.02 5.761.02 6.499c0 .737.596 1.464 1.33 1.464h3.653c.007.527.375.953.83.953h3.333c.451 0 .812-.417.828-.934c1.197.049 2.184.218 2.675.709c.277.278.497.648.617 1.268h2.613c-.157-1.405-.518-2.762-1.267-3.514"></svg:path>`,
})
export class SiGlyphFaucetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFeatherIcon],svg[si-glyph-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.247 6.038c1.415-2.604 1.945-4.637 1.625-4.939c-.274-.26-2.54.571-3.638 1.407c-.21.162-1.062 2.605-1.33 2.711c-.229.094-.194-1.478-.065-2.167c-1.065.495-2.854 1.772-3.842 2.657c-.077.07-.276 3.273-.368 3.369c-.188.188-.754-2.169-.912-1.967c-2.264 2.88-3.281 6.092-2.337 7.472C.478 16.033.026 16.973.026 16.973l.695-.027c.42-.719.837-1.394 1.252-2.048l.028.015c.998.098 3.428-.183 5.854-2.453c0 0-1.35-.771-1.13-1.002c.218-.232 2.313-.922 2.532-1.182c.785-.938 1.229-1.374 1.824-2.286c.157-.238-1.631.195-1.486-.04c.141-.228.469-1.387 2.652-1.912"></svg:path>`,
})
export class SiGlyphFeatherIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFemaleIcon],svg[si-glyph-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.982 9.965c2.243-.47 3.934-2.48 3.934-4.883c0-2.751-2.215-4.988-4.938-4.988c-2.721 0-4.936 2.237-4.936 4.988c0 2.412 1.704 4.43 3.959 4.888v2.073H5.062v1.925h2.939v2.001h1.98v-2.001h2.893v-1.925H9.981zm-4.048-5.01c0-1.768 1.367-3.205 3.045-3.205c1.68 0 3.045 1.438 3.045 3.205s-1.365 3.203-3.045 3.203c-1.678 0-3.045-1.436-3.045-3.203"></svg:path>`,
})
export class SiGlyphFemaleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFenceIcon],svg[si-glyph-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.004 6.041h-.972L15.017 3l-1.47-3l-1.579 3l.015 3.041H9.962L9.942 3L8.525 0L7.007 3l.023 3.041H4.97L4.941 3L3.524 0L2.006 3l.023 3.041h-.967l.003.979h.967l.012 5.031L1.039 12v1.01h.993V16h2.935v-2.99H7.03V16h2.938v-2.99h2.015V16h3.052l-.02-2.99h.973V12h-.972V7.02h.973zm-11.02.931h2.058v5.079H4.96zM12.068 12H9.96l-.011-5.072h2.119z"></svg:path>`,
})
export class SiGlyphFenceIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFence2Icon],svg[si-glyph-fence-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.863 6c.582 0 1.055-.294 1.055-.657V4.74c0-.363-.473-.657-1.055-.657h-1.904c0-.553-.301-1-.672-1h-.615c-.371 0-.672.447-.672 1H5.918c0-.553-.289-1-.644-1h-.59c-.355 0-.642.447-.642 1H2c-.553 0-1 .294-1 .657v.603C1 5.706 1.447 6 2 6h2.043v1.041H2c-.553 0-1 .282-1 .629v.576c0 .348.447.629 1 .629h2.043v1.208H2c-.553 0-1 .294-1 .657v.603c0 .363.447.657 1 .657h2.043c0 .553.286 1 .642 1h.59c.354 0 .644-.447.644-1H12c0 .553.301 1 .672 1h.615c.371 0 .672-.447.672-1h1.904c.582 0 1.055-.294 1.055-.657v-.603c0-.363-.473-.657-1.055-.657h-1.904V8.875h1.904c.582 0 1.055-.281 1.055-.629V7.67c0-.347-.473-.629-1.055-.629h-1.904V6zM12 6v1.041H5.918V6zm-6.082 4.083V8.875H12v1.208z"></svg:path>`,
})
export class SiGlyphFence2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFileBoxIcon],svg[si-glyph-file-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.993.006H3.072l-2.06 8.755v5.17c0 1.334.472 2.028 1.804 2.028h12.28c1.246 0 1.885-.527 1.885-2.111V8.761zM11.016 10H6.985V8.969h4.031zM2.505 8.01L3.912.981h10.265L15.54 8.01z"></svg:path><svg:path d="M5 4h7.947v.968H5zm1-2h5.947v.968H6zM4 6h9.951v.965H4z"></svg:path></svg:g>`,
})
export class SiGlyphFileBoxIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFileDownloadIcon],svg[si-glyph-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.031 9.016v4H3v-4H1V16h15.938V9.016z"></svg:path><svg:path d="m9.072 9.947l2.91-3.876l-2.014-.021V1.065H8.03V6.05h-2z"></svg:path></svg:g>`,
})
export class SiGlyphFileDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFileUploadIcon],svg[si-glyph-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15 9.047v4H3v-4H1V16h15.969V9.047z"></svg:path><svg:path d="M8.997 1L6 4.963l2.016.021v4.985h1.937V4.984h2z"></svg:path></svg:g>`,
})
export class SiGlyphFileUploadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFilmIcon],svg[si-glyph-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 1h-.988v1h-2.017V1H4.101v1h-2.2V1H1v16h.901v-1h2.053v1h8.041v-1h2.017v1H15zM4 14H2v-2h2zm0-4H2V8h2zm0-4H2V4h2zm7 9H5v-5h6zm0-7H5V3h6zm3 6h-2v-2h2zm0-4h-2V8h2zm-2-4V4h2v2z"></svg:path>`,
})
export class SiGlyphFilmIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFilm35mmIcon],svg[si-glyph-film-35mm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.027 4.038v8.946l6.95-.012V4.079zM6.348 15.969h7.269c.73 0 1.322-.551 1.322-1.229v-.698H5.026v.698c0 .678.591 1.229 1.322 1.229m7.285-14.942h-1.664V.581c0-.312-.234-.565-.524-.565H8.56c-.29 0-.524.254-.524.565v.446H6.365c-.731 0-1.322.542-1.322 1.209v.729h9.913v-.729c-.001-.667-.593-1.209-1.323-1.209M6.984 13.021l.011-9h-.964v1H4.953v-1h-.997c0 .211-.083 1.431-.083 1.431C3.809 7.876.029 8.967.029 10.01v3.012H1v-1.037h1.031v1.037h.938V12H4v1.022h.969v-1.006h1.062v1.006zM3.157 8.435c1.05-.677 1.452-2.409 1.452-2.409L6 6l-.063 5H1c0-.001.452-1.465 2.157-2.565"></svg:path>`,
})
export class SiGlyphFilm35mmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFinderIcon],svg[si-glyph-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m8.198 1l-.126.312c-1.32 3.25-1.764 4.497-1.912 6.143L6.111 8h2.988a.46.46 0 0 1 .444.583c-.256.949-.652 1.614-.759 3.286q-.035.574-.02 1.136c.033 1.021.215.983.658 1.714l.146.24H16V1zm1.952 13c-.267-.576-.378-.287-.385-1.163c1.971-.428 2.629-1.334 3.274-2.044a.56.56 0 0 0-.032-.79a.546.546 0 0 0-.778.03c-.442.485-.773 1.23-2.417 1.638c.106-1.262.369-1.618.696-2.825a1.47 1.47 0 0 0-.249-1.271a1.47 1.47 0 0 0-1.16-.574H7.21c.18-1.635.615-2.3 1.664-5H15V14z"></svg:path><svg:path d="M6.321 12.028q-.011.459.023.921c.352.023.709.041 1.075.041c.453 0 .902-.025 1.344-.064a8 8 0 0 1 .022-.932c-.446.045-.9.077-1.365.077q-.562 0-1.099-.043M11 4h.988v.938H11z"></svg:path><svg:path d="M2.167 10.836a.566.566 0 0 1-.052-.791a.547.547 0 0 1 .779-.053c.893.792 1.603 1.697 3.719 1.919c.023-1.45.215-1.831.428-2.827H5.083a1 1 0 0 1-1-1c0-.183.027-2.203 1.864-7.084H0v14h7.021c-.297-.889-.336-.967-.388-1.965c-2.437-.228-3.43-1.279-4.466-2.199M2 4h1v1H2z"></svg:path></svg:g>`,
})
export class SiGlyphFinderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFingerUpIcon],svg[si-glyph-finger-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.048 13.172v1.626c0 .629.478 1.141 1.066 1.141h4.788c.59 0 1.066-.512 1.066-1.141v-1.626c0-.631-.477-1.142-1.066-1.142H9.114c-.589 0-1.066.511-1.066 1.142m.94-9.098L8.999.941S8.797.02 8.125.02c-.747 0-1.107.358-1.107 1.002v3.87c0 2.329-.755 1.955-.755 1.955l-1.908-.785c-1.182 0-1.338.27-1.338.885c.399 1.045 4.003 2.857 4.003 2.857c1.133.334 1.68 1.133 1.68 1.133l5.274.062l-.019-.522c0-1.56 1.008-1.745 1.008-2.389V4.315c0-.643-.512-1.294-1.145-1.294h-.798v1h-1.061V2.625a.54.54 0 0 0-.058-.24c-.098-.209-.625-.367-.882-.367c-.331 0-.985.254-1.011.562l-.01 1.441z"></svg:path>`,
})
export class SiGlyphFingerUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFireIcon],svg[si-glyph-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.849 9.245c-.417-.518-2.513-2.1-1.658-4.219c0 0-1.908.725-1.149 2.953c-.35-.496-3.318-1.616-3.04-7.85c0 0-4.912 2.954-4.912 7.059c0 0 0 3.256 1.974 4.799c0 0-2.616-.43-3.317-4.557c-.176.494-4.756 5.288 1.74 8.446l3.489.083h3.351s7.372-2.493 3.522-6.714"></svg:path>`,
})
export class SiGlyphFireIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFireAlarmIcon],svg[si-glyph-fire-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.986 9.977a4.936 4.936 0 0 0 4.93-4.941a4.936 4.936 0 0 0-4.93-4.941a4.936 4.936 0 0 0-4.931 4.941a4.937 4.937 0 0 0 4.931 4.941m0-7c1.135 0 2.055.921 2.055 2.059a2.056 2.056 0 1 1-4.109 0c0-1.138.92-2.059 2.054-2.059"></svg:path><svg:path d="M14.283 11.018H7.681a.68.68 0 0 0-.678.684v.646c-1.326-.998-2.27-3.02-2.568-4.748c.323-.264.533-.656.533-1.1c0-.794-.658-1.438-1.469-1.438c-.812 0-1.469.644-1.469 1.438c0 .67.471 1.228 1.104 1.387c.43 2.389 1.877 4.898 3.869 6.052v1.316a.68.68 0 0 0 .678.683h6.602a.68.68 0 0 0 .679-.683v-3.554a.68.68 0 0 0-.679-.683"></svg:path></svg:g>`,
})
export class SiGlyphFireAlarmIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFireHydrantIcon],svg[si-glyph-fire-hydrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 14.047h-.326c-.371 0-.674.457-.674 1.019v.893h7.987v-.893c0-.563-.303-1.019-.674-1.019h-.357V6H5zM4 4v.942L12 5V4zm3-2.858c-1.148.27-1.969.993-1.969 1.842h5.938c0-.854-.83-1.58-1.988-1.847V0H7zM3 8V7h.947v1h.027v.97h-.027v.938H3V8.97H2V8zm9.953.938v.968H12V7h.953v1h.989v.938z"></svg:path>`,
})
export class SiGlyphFireHydrantIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFireWoodIcon],svg[si-glyph-fire-wood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.884 10.689c.231.518.033 1.064-.442 1.223L3.376 15.915c-.478.158-1.05-.133-1.282-.65s-.034-1.064.442-1.222l12.066-4.004c.476-.158 1.048.133 1.282.65m-1.282 5.226c.477.158 1.049-.133 1.282-.65c.231-.517.033-1.064-.442-1.222l-1.59-.527l-3.242 1.075zM3.375 10.039c-.478-.158-1.05.133-1.282.65c-.231.518-.034 1.064.442 1.223l1.592.527l3.24-1.076zm7.143-.086s3.934-1.43 1.881-3.851c-.604-.773-1.012-1.8-.557-3.016c0 0-1.348 1.265-.943 2.542c-.186-.283-2.047-1.012-1.898-4.587c0 0-2.256 1.778-2.256 3.956c0 0 .213 2.512 1.439 2.904c0 0-1.872-.474-2.248-2.842c-.092.285-2.409 2.859.764 4.818c0 0-1.169-.784-.599-2.263c1.153 1.95 3.46.563 3.46.563s-2.393-.551-1.092-3.673c.299 1.619 1.738 2.479 2.651 2.622c-.48-.966.348-.223.705.381c.47 1.17-1.307 2.446-1.307 2.446"></svg:path>`,
})
export class SiGlyphFireWoodIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFirstAidBriefcaseIcon],svg[si-glyph-first-aid-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.82 3H3.18C1.975 3 1 3.99 1 5.209v7.58C1 14.01 1.975 15 3.18 15h11.64c1.205 0 2.18-.99 2.18-2.21V5.208C17.001 3.989 16.026 3 14.82 3m-4.785 7.016v1.953H8v-1.953H5.987V8H8V5.969h2.035V8h1.952v2.016zm1.937-8.047c0-1.038-.839-1.922-1.867-1.922h-2.19c-1.03 0-1.914.884-1.914 1.922l.971-.007c0-.598.363-1.026.956-1.026h2.167c.594 0 .984.429.984 1.026z"></svg:path>`,
})
export class SiGlyphFirstAidBriefcaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFishIcon],svg[si-glyph-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.537 7.348c-.65-1.275-3.148-2.226-6.143-2.226c-3.486 0-6.312 1.289-6.312 2.879s2.825 2.879 6.312 2.879c2.994 0 5.492-.951 6.143-2.226c.659.841 1.953 2.191 3.437 2.191V5.156c-1.484 0-2.778 1.351-3.437 2.192m-10.494.777H1V6.917h1.043z"></svg:path>`,
})
export class SiGlyphFishIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFlagIcon],svg[si-glyph-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0h1.994v15.913H1zm3.056.52v7.575S5.667 6.664 9.244 8c3.576 1.338 4.305.974 5.712.742c0 0-2.048-.871-3.222-4.029c0 0 2.987-2.755 3.222-4.274c0 0-3.7 1.212-5.751.241C7.152-.293 4.994-.089 4.056.52"></svg:path>`,
})
export class SiGlyphFlagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFloatIcon],svg[si-glyph-float-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 .062c-4.398 0-7.979 3.576-7.979 7.969c0 4.395 3.581 7.97 7.979 7.97c4.4 0 7.979-3.575 7.979-7.97C16.979 3.638 13.4.062 9 .062M15.947 7h-2.133a4.96 4.96 0 0 0-4.229-3.896h.413v-2.05A7.03 7.03 0 0 1 15.947 7M4.994 8.021a3.97 3.97 0 0 1 3.965-3.979a3.97 3.97 0 0 1 3.965 3.979A3.97 3.97 0 0 1 8.959 12a3.97 3.97 0 0 1-3.965-3.979M8 1.055v2.05h.332a4.96 4.96 0 0 0-4.229 3.896H2.054A7.03 7.03 0 0 1 8 1.055M2.053 8.979h2.042A4.97 4.97 0 0 0 8 12.902v2.045a7.03 7.03 0 0 1-5.947-5.968m7.946 5.968v-2.055h-.021a4.97 4.97 0 0 0 3.845-3.913h2.126a7.03 7.03 0 0 1-5.95 5.968"></svg:path>`,
})
export class SiGlyphFloatIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFloppyDiskIcon],svg[si-glyph-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.961.031H5.003v5.952h7.958zM12 5h-2V1h2z"></svg:path><svg:path d="M14.988.031h-.909v7.07H3.941V.031H2.99c-1.105 0-2 .92-2 2.052v10.895c0 1.133.896 2.053 2 2.053h12c1.106 0 2-.92 2-2.053V2.083zM12.968 13h-8v-1h8zm0-2h-8v-1h8z"></svg:path></svg:g>`,
})
export class SiGlyphFloppyDiskIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFlowerIcon],svg[si-glyph-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.164 8.404c-.171-.094-.522-.237-.982-.403c.46-.166.81-.308.981-.402c1.016-.549 1.121-2.16.235-3.598c-.887-1.437-2.429-2.157-3.444-1.609c-.173.095-.48.306-.865.597c.078-.458.119-.814.119-1c0-1.1-1.437-1.99-3.208-1.99s-3.21.89-3.21 1.99c0 .186.043.541.121.998a9 9 0 0 0-.863-.596C3.032 1.842 1.488 2.562.603 4s-.779 3.048.235 3.597c.173.095.522.238.985.404c-.463.167-.814.31-.986.404c-1.016.549-1.121 2.158-.235 3.597c.886 1.437 2.429 2.157 3.444 1.608c.173-.093.479-.304.865-.595c-.078.457-.121.81-.121.997c0 1.099 1.436 1.989 3.21 1.989c1.771 0 3.208-.89 3.208-1.989c0-.187-.041-.542-.119-1.001c.385.293.693.505.866.598c1.016.549 2.558-.17 3.443-1.607c.887-1.439.781-3.049-.234-3.598M8 11.047a3.047 3.047 0 1 1 0-6.092a3.05 3.05 0 0 1 3.049 3.046A3.05 3.05 0 0 1 8 11.047"></svg:path>`,
})
export class SiGlyphFlowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFlowerPotIcon],svg[si-glyph-flower-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.25 5.965H.663L0 3.083h15.914zm-2.475 8.971H3.139L1.055 7.022h13.804z"></svg:path>`,
})
export class SiGlyphFlowerPotIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderIcon],svg[si-glyph-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.02l.002 1h14.902L16.968 5z"></svg:path><svg:path d="M14.964 3.982h-5.61l-.33-.94h5.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderContactIcon],svg[si-glyph-folder-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 8v1.957h2.014V8zm3-1h1v3h-1z"></svg:path><svg:path d="M7.35 4L5.788 2.042H2.021v1.021H.023v9.913h1.02l.002 1h14.902L15.968 4zm3.643 6l-.018 1L7 11.067v-.99l-1-.021V7.972h1v-.98l3-.01V6H6v1h-.984v3.964h1v1.007h3.957V13H6v-1l-1 .058v-1.021H3.953V7.034h1.008V6.025H6V5h3.958v1.011H11v.981h.953V10z"></svg:path><svg:path d="M12.958 2.979h-4.27l-.667-.958h4.937z"></svg:path></svg:g>`,
})
export class SiGlyphFolderContactIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderErrorIcon],svg[si-glyph-folder-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.02l.002 1h14.902L16.968 5zm3.568 6.109l-.828.829l-1.578-1.577l-1.578 1.577l-.83-.829l1.578-1.578l-1.578-1.578l.83-.828l1.578 1.576l1.576-1.576l.83.828l-1.578 1.578z"></svg:path><svg:path d="M14.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderMusicIcon],svg[si-glyph-folder-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.35 5L5.788 2.042H2.021v1.021H.023v9.913h1.02l.002 1h14.902L15.968 5zm2.495 6.959a2 2 0 0 1-.752.155c-.499 0-.9-.221-1.048-.576c-.225-.551.214-1.255.978-1.571c.287-.118.595-.184.864-.184l.056.001V7.318l-2.884.781l.001 3.521c-.054.468-.714 1.2-1.284 1.438a2 2 0 0 1-.749.153c-.5 0-.902-.221-1.051-.576c-.224-.551.217-1.255.981-1.571a2.05 2.05 0 0 1 .985-.143V7.215l5.116-1.279l.016 4.683c-.053.463-.64 1.097-1.229 1.34"></svg:path><svg:path d="M13.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderMusicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderOpenIcon],svg[si-glyph-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.03 4.042l-.802-1H1.015v1H.009V13h1.017l.005.984l13.619-.021l1.303-9.922H8.03zm5.79 8.999H1.711L3.1 4.953h11.932z"></svg:path>`,
})
export class SiGlyphFolderOpenIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderPlusIcon],svg[si-glyph-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.787 2.042H2.02v1.021H.022v9.913h1.02l.002 1h14.902L15.967 5H7.349zm2.192 4.937h1.062V9h2.021v1.062H9.041v2.021H7.979v-2.021H5.958V9h2.021z"></svg:path><svg:path d="M13.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderRemoveIcon],svg[si-glyph-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.02l.002 1h14.902L16.968 5zm2.733 5.042H6.979V8.917h4.104z"></svg:path><svg:path d="M14.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderRemoveIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderRssIcon],svg[si-glyph-folder-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.021l.001 1h14.902L16.968 5zm-.327 7.042h-1v-1h.17a.83.83 0 0 1 .83.83zm.97-.06c0-.94-1.018-2.023-1.966-2.023v-.95c1.54 0 2.948 1.445 2.948 2.973zm2.137.013c0-2.476-1.654-4.115-4.12-4.115v-.838c3.299 0 4.932 1.636 4.932 4.954z"></svg:path><svg:path d="M14.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderRssIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderSearchIcon],svg[si-glyph-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.959 1V.043H6.043l1 .957zM4.002 8.486a3.485 3.485 0 0 0 3.49 3.48a3.485 3.485 0 0 0 3.488-3.48a3.484 3.484 0 0 0-3.488-3.479a3.485 3.485 0 0 0-3.49 3.479m6.007.014c0 1.414-1.138 2.562-2.538 2.562c-1.402 0-2.539-1.147-2.539-2.562c0-1.416 1.137-2.564 2.539-2.564c1.4 0 2.538 1.148 2.538 2.564"></svg:path><svg:path d="M3.652 0H1v1H0v12h1.016l.002 1h9.518l-1.299-1.279a4.627 4.627 0 0 1-6.4-4.263a4.625 4.625 0 0 1 4.627-4.616c2.551 0 4.629 2.07 4.629 4.616c0 .591-.123 1.151-.326 1.672L15.484 14h.42l.033-12H6z"></svg:path><svg:path d="m14.021 14.029l-.937.979l-2.582-2.541l1.019-1.041z"></svg:path></svg:g>`,
})
export class SiGlyphFolderSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderShareIcon],svg[si-glyph-folder-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.413 2.034L8.575 0H2.02v2.034h-.979l.021 8.924h.978l-.019 1h7.021L9.021 13h.937l.021-1.042h5.664l1.397-9.924zm5.366 9.069H2.837l1.428-8.127h11.756zM1 15h1.979v.956H1zm4 0h1.979v.956H5zm7 0h1.979v.956H12zm3 0h1.979v.956H15zm-5 0v-1H9v1H8v1h3v-1z"></svg:path>`,
})
export class SiGlyphFolderShareIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderWarningIcon],svg[si-glyph-folder-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.021l.001 1h14.902L16.968 5zm-3.329 8.021l4.5-7.041l4.459 7.041z"></svg:path><svg:path d="M14.964 3.982v-.94h-5.94l.33.94zM9 8h1v1.956H9zm0 3h1v.973H9z"></svg:path></svg:g>`,
})
export class SiGlyphFolderWarningIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFootSignIcon],svg[si-glyph-foot-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.428 13.572l-3.799-1.43l-.484 1.173s-.463 1.898 1.197 2.523c1.662.627 2.619-1.087 2.619-1.087zM8.207 3.193C6.565 2.534 4.26 3.979 3.463 5.8c-.328.75-.477 1.559-.601 2.357c-.059.381-.101.772-.176 1.152c-.096.477-.239.936-.381 1.399c-.197.643.02.751.619.861l2.098.792c.214.102.632.359.847.119c.19-.215.152-.607.279-.862c.164-.331.348-.668.551-.98C7.148 9.94 8 9.43 8.577 8.828c.715-.748 1.11-1.498 1.328-2.49c.29-1.321-.377-2.616-1.698-3.145m1.77 6.096l3.655 1.443s-.754 2.953-2.986 2.094c-2.232-.861-.669-3.537-.669-3.537M15.19.217c1.56.58 2.188 3.038 1.531 4.807c-.271.727-.703 1.379-1.146 2.014c-.212.302-.442.598-.643.911c-.247.39-.453.801-.661 1.211c-.291.57-.512.505-.996.206l-1.965-.773c-.213-.064-.669-.152-.657-.451c.011-.27.296-.52.378-.774c.106-.333.203-.685.269-1.028c.152-.768-.096-1.661-.092-2.441c0-.969.227-1.74.732-2.565c.677-1.106 1.992-1.582 3.25-1.117"></svg:path>`,
})
export class SiGlyphFootSignIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphForcusIcon],svg[si-glyph-forcus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.999 4.875V3.01A1.01 1.01 0 0 1 4.01 1.999h1.908V.082H4.066a2.987 2.987 0 0 0-2.983 2.984v1.809zm9.084-2.876h1.948c.558 0 1.012.453 1.012 1.011v1.865h1.875V3.066A2.99 2.99 0 0 0 13.933.082h-1.85zM5.918 14.042H4.01a1.01 1.01 0 0 1-1.011-1.011v-1.948H1.083v1.85a2.987 2.987 0 0 0 2.983 2.984h1.852zm9.125-2.959v1.948c0 .558-.454 1.011-1.012 1.011h-1.948v1.875h1.85a2.99 2.99 0 0 0 2.985-2.984v-1.85z"></svg:path>`,
})
export class SiGlyphForcusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphForkliftIcon],svg[si-glyph-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:circle cx="7.953" cy="8.953" r="1.953"></svg:circle><svg:circle cx="13.477" cy="9.477" r="1.477"></svg:circle><svg:path d="M13.477 6.925c1.23 0 2.252.882 2.475 2.044h.002l.047-7.024c.002-1.017-.91-1.917-1.943-1.919L9.656.015C8.625.013 8.142.734 7.779 1.852L6.674 4.476c0 .144-.719.25-.913.39c-.451.318-.743.78-.745 1.447c-.001.525.002 1.658.002 1.658l.168-.004a2.99 2.99 0 0 1 2.816-1.993c1.656 0 3 1.342 3 2.995l-.001.012H11a2.52 2.52 0 0 1 2.477-2.056m-1.49-5.091c.007-.931.146-.855.98-.853l1.042.002c.717.002.975.09.973.859l-.009 2.137l-2.991-.008l.006-2.137zM10.95 4l-2.989-.006l.653-2.08S8.887 1 9.716 1c.616 0 1.245.004 1.245.004L10.951 4zM3.033 2.375l-.018 6.656L.3 9.032c-.366-.001-.369.964-.002.965H3.35c.367.001.602-.297.604-.666l.019-6.954c.001-.367-.939-.37-.939-.002z"></svg:path></svg:g>`,
})
export class SiGlyphForkliftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphForwardPageIcon],svg[si-glyph-forward-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.798 3.516L11.892.266c-.277-.288-.593-.335-.871-.048c0 0 .037 2.19.006 2.19c-.68 0-1.083.113-1.7.314A6.3 6.3 0 0 0 7.119 3.99C5.843 5.113 5.026 6.392 5.026 8.203c0 1.182.523.752.742.339c1.035-1.945 2.923-2.928 5.281-2.928c.03 0-.001 2.146-.001 2.146c.278.287.628.253.869.047l3.881-3.25a.754.754 0 0 0 0-1.041"></svg:path><svg:path d="M14 8.079v4.983H.938V3.937h5.215c.276-.312.621-.717 1.223-.919H.008v10.964H14.97V7.258z"></svg:path></svg:g>`,
})
export class SiGlyphForwardPageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFridgeIcon],svg[si-glyph-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 .003c-.553 0-1 .444-1 .992V3.99c0 .548.447.992 1 .992h6c.553 0 1-.444 1-.992V.995a.996.996 0 0 0-1-.992zm6.042 2.038H9.958V.958h1.084zM5 5.99c-.553 0-1 .451-1 1.01v6.894c0 .558.447 1.01 1 1.01L5.021 16H6.98v-1.097h2.041V16h1.959v-1.097c.573 0 1.02-.452 1.02-1.01V6.999c0-.558-.447-1.009-1-1.009zm6.042 3.051H9.958V6.875h1.084z"></svg:path>`,
})
export class SiGlyphFridgeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphFullscreenIcon],svg[si-glyph-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5h12v8H3zm.918 9.938H1v-2.876h1v1.98h1.918zm13.082 0h-2.938v-.896H16v-1.984h1zm0-9.021h-1v-1.95h-1.943v-.946H17zM2 5.938H1V3h2.938v.938H2z"></svg:path>`,
})
export class SiGlyphFullscreenIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGame1Icon],svg[si-glyph-game-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.931 7.986l4.813-6.343A7.88 7.88 0 0 0 8.931-.001C4.551-.001 1 3.561 1 7.956c0 4.396 3.551 7.959 7.931 7.959c3.517 0 6.495-2.3 7.533-5.481zM7.499 5a1.5 1.5 0 1 1 .003-3.001A1.5 1.5 0 0 1 7.499 5"></svg:path>`,
})
export class SiGlyphGame1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGameControllIcon],svg[si-glyph-game-controll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.352 7.083S6.021 6.041 4.35 6.041S2.344 8.047 2.344 8.047l-1.336 5.974c0 1.106.835 2.005 2.005 2.005c1.039 0 1.859-1.714 2.304-2.902c.23.143.498.229.787.229c.773 0 1.533-.715 1.617-1.465h2.75c.084.75.584 1.465 1.356 1.465c.315 0 .608-.098.85-.264c.437 1.188 1.247 2.938 2.241 2.938c1.505 0 2.006-.898 2.006-2.005l-1.336-5.974s-.251-2.006-2.006-2.006s-1.881 1.042-1.881 1.042z"></svg:path><svg:path d="M10.041 7.459h-1V5.307c-.01-.007-.161-.927.4-1.63c.37-.462.936-.696 1.683-.696c1.63 0 1.876-.436 1.876-1.938h1c0 1.835-.48 2.971-2.876 2.971c-.431 0-.737.107-.907.318c-.272.335-.184.875-.184.875z"></svg:path></svg:g>`,
})
export class SiGlyphGameControllIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGasStationIcon],svg[si-glyph-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.475.07h-1.486l-1.988 2.335v8.927c0 .751-1 .793-1 .043L12 8.148c.005-.094.027-.934-.582-1.574c-.368-.385-.822-.539-1.446-.585V.053L2 0v14.018h-.001l-.008.003H1v1.938h9.979v-1.938l-.991.054l-.009-.003H9.97V7.006c.323.039.543.073.715.253c.327.336.316.842.314.867v3.25c0 1.082.729 1.604 1.562 1.604c.875 0 1.438-.604 1.438-1.647V2.959h.984v-.984l.373-1.023h1.037c.268 0 .563-.134.563-.399a.48.48 0 0 0-.481-.483M2.958.939h6.073v5.092H2.958zm6.125 6.977V9H6.958V7.916zM2.958 8H5.02v1H2.958z"></svg:path>`,
})
export class SiGlyphGasStationIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGateIcon],svg[si-glyph-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.589 7.076h-1.801l-.622-3.123h1.218c.278 0 .522-.152.522-.325V2.326c0-.173-.244-.325-.522-.325H2.538c-.278 0-.522.152-.522.325v1.302c0 .173.244.325.522.325h1.33l-.605 3.123H1.411c-.228 0-.411.141-.411.314v1.26c0 .174.184.314.411.314h1.486l-.831 4.288a.336.336 0 0 0 .245.407l1.301.324c.026.006.056.01.082.01c.154 0 .288-.105.332-.276l.921-4.753h7.163l.923 4.634a.336.336 0 0 0 .406.245l1.303-.324c.18-.045.289-.227.251-.385l-.83-4.17h1.426c.228 0 .411-.141.411-.314V7.39c0-.173-.184-.314-.411-.314m-10.276 0l.605-3.123h5.194l.622 3.123z"></svg:path>`,
})
export class SiGlyphGateIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGearIcon],svg[si-glyph-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.969 8.969V7.011h-2.07a5.94 5.94 0 0 0-1.019-2.465l1.463-1.463l-1.414-1.414l-1.463 1.463a5.95 5.95 0 0 0-2.465-1.021V.042h-2v2.069a5.94 5.94 0 0 0-2.465 1.021L3.073 1.669L1.688 3.053l1.459 1.459a5.95 5.95 0 0 0-1.046 2.499H.032v1.958h2.063a5.94 5.94 0 0 0 1.026 2.507l-1.463 1.463l1.414 1.414l1.463-1.463c.72.513 1.557.867 2.465 1.021v2.069h2v-2.069a5.96 5.96 0 0 0 2.499-1.046l1.458 1.458l1.385-1.384l-1.463-1.463a5.95 5.95 0 0 0 1.026-2.507zm-7.948 2.093a3.084 3.084 0 0 1 0-6.166a3.084 3.084 0 0 1 0 6.166"></svg:path>`,
})
export class SiGlyphGearIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGear1Icon],svg[si-glyph-gear-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.887 10.025a3.4 3.4 0 0 0-.658-1.55l.766-.765l-.688-.687l-.771.771a3.4 3.4 0 0 0-1.542-.633V6.066h-.973v1.089a3.45 3.45 0 0 0-1.56.622l-.752-.753l-.688.688l.74.74c-.35.449-.586.985-.674 1.572H1.062v.974H2.08c.082.591.316 1.134.664 1.589l-.724.723l.688.687l.729-.729a3.44 3.44 0 0 0 1.583.642v1.048h.973v-1.054a3.45 3.45 0 0 0 1.567-.652l.746.747l.688-.688l-.746-.747c.338-.449.564-.983.645-1.564h1.059v-.974zm-3.391 2.27a1.782 1.782 0 0 1 0-3.565a1.783 1.783 0 1 1 0 3.565m8.535-7.925l1.09-.281l-.252-.979l-1.091.282a2.6 2.6 0 0 0-.461-.672a2.5 2.5 0 0 0-.647-.464l.301-1.079l-.973-.271l-.299 1.072a2.52 2.52 0 0 0-1.566.382l-.76-.776l-.721.707l.756.77a2.53 2.53 0 0 0-.441 1.575l-1.04.268l.252.977l1.038-.268c.117.243.266.475.465.678a2.5 2.5 0 0 0 .686.485l-.289 1.039l.971.271l.293-1.048c.542.033 1.092-.1 1.563-.415l.771.786l.72-.707l-.776-.791a2.54 2.54 0 0 0 .41-1.541m-2.517 1.617a1.49 1.49 0 1 1-.001-2.983a1.49 1.49 0 0 1 .001 2.983"></svg:path>`,
})
export class SiGlyphGear1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGhostIcon],svg[si-glyph-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.008 7.91l.016 8.095L2.021 13l1.978 3.005L6.062 13l1.959 3.005L10.08 13l1.93 3.005L14.049 13l1.956 3.005l-.017-8.095C15.989 3.56 12.363.031 7.986.031S.008 3.559.008 7.91m4.508.184a1.563 1.563 0 1 1 0-3.125a1.563 1.563 0 1 1 0 3.125m6.994-.028a1.584 1.584 0 0 1-1.588-1.579c0-.873.711-1.581 1.588-1.581s1.588.708 1.588 1.581c0 .872-.71 1.579-1.588 1.579"></svg:path>`,
})
export class SiGlyphGhostIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGiftIcon],svg[si-glyph-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 4h16v3H0zm12.66 5.777a.68.68 0 0 1 0 1.029a.87.87 0 0 1-1.14 0L8.485 8.064h-.996l-3.035 2.742a.87.87 0 0 1-1.14 0a.683.683 0 0 1 0-1.029l1.898-1.713L1 8v8h14V8l-4.238.064z"></svg:path><svg:path d="M11.928.097c-1.159 0-2.623.838-3.96 2.253C6.634.935 5.17.097 4.014.097c-.592 0-1.098.221-1.46.637c-.599.684-.678 2.021-.293 3.304h1.96s-.59-1.007-.428-1.884c.015-.018.078-.051.22-.051c.573 0 1.905.678 3.057 1.935h1.845c1.157-1.264 2.42-1.935 3.013-1.935c.176 0 .22.049.22.049c.124 1.138-.432 1.886-.432 1.886h2.038c.387-1.283.23-2.62-.365-3.304c-.364-.416-.868-.637-1.46-.637z"></svg:path></svg:g>`,
})
export class SiGlyphGiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGlassWaterIcon],svg[si-glyph-glass-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.365 12.336l3.295 3.303a1.21 1.21 0 0 0 1.713.015l10.251-7.722a1.213 1.213 0 0 0-.014-1.713L10.765.364A1.21 1.21 0 0 0 9.054.35L1.351 10.622c-.47.47-.462 1.237.014 1.714m5.971-2.564c-1.59.008-3.354-1.247-3.354-1.247l2.677-3.43l2.659-3.408a1.17 1.17 0 0 1 1.631.014l4.393 4.323a1.12 1.12 0 0 1 .012 1.604l-4.565 3.428c-.001.001-1.6-1.293-3.453-1.284"></svg:path>`,
})
export class SiGlyphGlassWaterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGlobalIcon],svg[si-glyph-global-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.048 0a8 8 0 1 0 .001 16.001A8 8 0 0 0 8.048 0M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14"></svg:path><svg:path d="M2.959 2.684c-.27 1.344.735 3.399 2.872 3.899s1.218.084.886-.583c-.334-.667-.035-1.167.482-1.333c.518-.167.387.293 1.155-.667c.194-2-1.472-.027-1.638-.86C8.366 1.223 5.95.5 5.249.75s-2.02.589-2.29 1.934m3.914 5.01c-.124.055-.702.416-.901.666s-.286.778 0 1c.286.223-.016 1.279.755 1.473s1.543.307 1.572.917c.027.61-.072 2.027-.443 2.167c.5.277 1.717-1.195 2.145-1.973c.429-.777.572-1.889.543-2.167s.171-.86.257-1.61s-.57-.8-.655-1.133c-.087-.334-.203-.701-3.273.66M13.125 4s-2.012.861-.644 2.14c1.366 1.277 2.062 2.49 1.995 2.768c-.062.276-1.38 1.706-.623 1.594c.761-.111 1.322-1.611 1.443-2.501c.119-.89-.924-2.639-.967-2.777c-.036-.141-.722-1.209-1.204-1.224"></svg:path></svg:g>`,
})
export class SiGlyphGlobalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGlobeIcon],svg[si-glyph-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(3)"><svg:path d="M5.031 13.225v1.434c-2.154.083-3.936.613-3.936 1.26l.004.017l8.806.009s.005-.018.005-.025c0-.646-1.818-1.177-3.973-1.26v-1.48"></svg:path><svg:ellipse cx="5.012" cy="7.031" rx="5.012" ry="5.031"></svg:ellipse><svg:path d="M5.04 13.971a6.88 6.88 0 0 1-4.341-1.549a.5.5 0 0 1-.071-.697a.49.49 0 0 1 .69-.072a5.8 5.8 0 0 0 3.722 1.33c3.263 0 5.916-2.678 5.916-5.967c0-2.918-2.151-5.453-5.005-5.896a6 6 0 0 0-.911-.07a.493.493 0 0 1-.491-.494c0-.273.22-.495.491-.495q.53 0 1.061.081c3.328.518 5.837 3.475 5.837 6.875c0 3.834-3.094 6.954-6.898 6.954"></svg:path></svg:g>`,
})
export class SiGlyphGlobeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGloveIcon],svg[si-glyph-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.807 9.708c1.863-1.863 3.68-4.907.307-8.28a4.77 4.77 0 0 0-6.747 0L6.342 2.453v-.719c0-.958-.777-1.735-1.735-1.735C3.648 0 3 .777 3 1.735v4.188l-.847.719l-.613-.613L.313 7.256l7.974 7.974l1.227-1.227l-.549-.549z"></svg:path>`,
})
export class SiGlyphGloveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGolfBallIcon],svg[si-glyph-golf-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.031 12l2 1.969V16h.907v-2.031l2-1.969zm-3-6.547a5.452 5.452 0 1 0 10.906 0a5.452 5.452 0 1 0-10.906 0"></svg:path>`,
})
export class SiGlyphGolfBallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGolfFlagIcon],svg[si-glyph-golf-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="5.433" cy="14.98" rx="5.433" ry=".98"></svg:ellipse><svg:path d="M5 0h.956v12.959H5zm2.031.103s1.644-.42 4.45 1.461s2.249 3.512 4.103 3.646c.998-.066-.42 1.168-1.854.604c-2.781-1.093-3.6-2.637-6.699-1.21z"></svg:path><svg:circle cx="13.945" cy="13.945" r="1.945"></svg:circle></svg:g>`,
})
export class SiGlyphGolfFlagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphGuitarIcon],svg[si-glyph-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.781.959l-.734-.736c-.312-.313-.676-.23-.952.046l-2.289 2.295c-.244.245-.349.529-.128.836L9.324 6.763c-1.125-.788-2.533-.816-3.359.013c-.243.244-.916 1.046-1.014 1.368c-.074.243-.727.647-1.033.643c-.789-.007-1.53.254-2.078.804c-1.247 1.252-1.016 3.519.521 5.062c1.539 1.54 3.798 1.774 5.045.521c.55-.55.811-1.292.803-2.085c-.004-.306.414-.964.664-1.043c.315-.099 1.248-.682 1.486-.919c.818-.821.797-2.212.033-3.334l3.215-3.458c.309.226.623.079.869-.167l2.289-2.294c.276-.278.331-.6.016-.915M7.512 11.133a1.6 1.6 0 0 1-1.605-1.592a1.6 1.6 0 0 1 1.605-1.593c.884 0 1.604.712 1.604 1.593a1.6 1.6 0 0 1-1.604 1.592"></svg:path>`,
})
export class SiGlyphGuitarIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHamburgerIcon],svg[si-glyph-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.021 13.061c0 3.262 7.448 2.88 7.981 2.88s7.98.531 7.98-2.88zM1 11h15.951v.951H1zm.318-1.009a.3.3 0 0 0 .179-.055L3 8.744l1.836 1.18a.31.31 0 0 0 .352-.002l1.828-1.179L8.801 9.91a.31.31 0 0 0 .349 0l1.833-1.168l1.808 1.168c.107.072.244.07.351-.002l1.867-1.152l1.469 1.182a.313.313 0 0 0 .445-.094a.34.34 0 0 0-.09-.463l-1.645-1.303a.31.31 0 0 0-.354-.001l-1.871 1.155l-1.807-1.168a.31.31 0 0 0-.349.001L8.972 9.232L7.187 8.064a.31.31 0 0 0-.351.002L5.009 9.244L3.173 8.065a.31.31 0 0 0-.352.001l-1.68 1.313a.34.34 0 0 0-.09.462c.062.098.164.15.267.15m15.479-5.033c0-.011.004-.021.002-.03C16.204.662 11.014.066 8.998.066s-7.117.597-7.8 4.862l.001.03zm-2.839-2h1.085V4.02h-1.085zm-11 0h1.073v1.058H2.958zm3-1h1.058V3H5.958zm5 0H12v1.058h-1.042zm-3 1H9.02V4.02H7.958zM8.979.974H10v1.053H8.979zM1 6h15.924v.902H1z"></svg:path>`,
})
export class SiGlyphHamburgerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHammerIcon],svg[si-glyph-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.216 14.949c.532.533.859.154 1.295-.281s.815-.764.284-1.296c0 0-7.639-7.632-9.468-9.455L4.75 5.494zM2.048 7.015l.614-.604s-.271-.743.126-1.099s1.067-.136 1.067-.136L6.01 3.093s-.151-1.083.049-1.283S8.493.521 8.71.303l-.459-.459S5.123.219 4.784.558c-.199.2-1.689 1.704-2.751 2.766c0 0 .267.759-.083 1.109c-.351.351-1.141.099-1.141.099l-.623.623c-.263.265-.108.637.215.96l.686.686c.325.323.698.477.961.214"></svg:path>`,
})
export class SiGlyphHammerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHammerAndWrenchIcon],svg[si-glyph-hammer-and-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.217 15.949c.531.533.859.154 1.295-.281s.814-.764.283-1.296c0 0-7.402-7.395-9.23-9.218L4.987 6.731zM2.048 8.015l.614-.604s-.271-.743.126-1.099s1.067-.136 1.067-.136L6.01 4.093s-.151-1.083.049-1.283S8.494 1.521 8.71 1.303L8.251.844s-3.128.376-3.467.714c-.199.2-1.688 1.704-2.75 2.766c0 0 .266.759-.084 1.109c-.351.351-1.141.1-1.141.1l-.623.622c-.263.265-.108.637.215.96l.686.686c.325.324.698.477.961.214m9.685-1.5c1.077.511 2.428.354 3.322-.54c.69-.69.964-1.639.817-2.531l-1.521 1.519l-1.294.321l-1.462-1.442l.343-1.337l1.507-1.488c-.893-.146-1.902.065-2.592.756c-.895.895-1.017 2.279-.506 3.357l-.994.993l1.388 1.385zm-4.301 4.604L5.927 9.615l-1.308 1.309a.8.8 0 0 0-.181.266c-.077-.03-.12-.031-.147-.02a2.5 2.5 0 0 0-.791-.139c-1.381 0-2.5 1.105-2.5 2.469s1.119 2.469 2.5 2.469S6 14.864 6 13.5c0-.283-.059-.551-.146-.804c-.005-.024-.006-.046-.02-.081a.9.9 0 0 0 .288-.188zM3.5 14.938c-.812 0-1.469-.643-1.469-1.438s.656-1.438 1.469-1.438s1.469.643 1.469 1.438s-.657 1.438-1.469 1.438"></svg:path>`,
})
export class SiGlyphHammerAndWrenchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHandIcon],svg[si-glyph-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 6.792c-.39-.193-.847-.089-1.023.231c0 0-1.096 2.399-1.734 2.297c-.344-.056-.619-.38-.742-1.005V1.771c0-.426-.439-.771-.98-.771s-1.02.346-1.02.771v5.167h-1V.771c0-.426-.439-.771-.98-.771s-1.02.346-1.02.771v6.167h-1V2.771c0-.426-.44-.771-.981-.771s-1.019.346-1.019.771v8.415c0 2.584 1.729 4.721 5.678 4.721c4.883 0 6.205-8.188 6.205-8.188c.174-.32.003-.736-.384-.927"></svg:path>`,
})
export class SiGlyphHandIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHandLampIcon],svg[si-glyph-hand-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.951 7.979l1.006.013l-1.039-.975V4.866C11.918 2.554 9.807.06 7.49.06h-.969c-2.316 0-4.438 2.547-4.438 4.858v2.117l-1.13.892l1.09.01l-.006 4.647l-.975 1.395l2.602.655l1.986.438l1.348.862l1.352-.858l2.006-.401l2.624-.613l-1.021-1.615zM6.035 13.98l-3.098-.578V7.917l3.098.372zm5.002-.49l-3.069.466V8.367l3.069-.357zM8.049 4.828c.135-.191.215-.418.215-.664c0-.67-.582-1.213-1.297-1.213s-1.295.543-1.295 1.213c0 .247.08.476.215.668L2.943 6.644V5.021C2.943 3.189 4.59.996 6.534.996H7.5c1.943 0 3.525 2.193 3.525 4.025v1.62z"></svg:path>`,
})
export class SiGlyphHandLampIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHandSwitchIcon],svg[si-glyph-hand-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.484 3.062c-.82 0-1.484.637-1.484 1.422c0 .062.011.121.02.181L9.317 6.853c-.739-1.108-1.866-1.848-3.348-1.848l-.016.001l-.007-2.604c0-.715-.775-1.294-1.525-1.316c-.751.022-1.353.602-1.353 1.316v13.13c0 .715.602 1.294 1.353 1.316c.75-.022 1.525-.602 1.525-1.316v-2.604l.022.002c2.3 0 3.993-1.775 3.993-3.963c0-.309-.04-.607-.11-.895l3.955-2.332c.204.102.432.164.678.164c.82 0 1.484-.637 1.484-1.422s-.663-1.42-1.484-1.42"></svg:path>`,
})
export class SiGlyphHandSwitchIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHandcuffIcon],svg[si-glyph-handcuff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.556 6.076c-.366-.167-1.679.441-1.524.829c.162.467.309 1.501.064 2.274c-.094.299-.139.543-.193.607c-.075.146.771 1.2 1.412 1.005c.221-.336.271-.61.42-1.081c.392-1.242.292-3.361-.179-3.634M6.852.066c-.41-.084-1.254-.104-1.484.14c-.023.025-.05.049-.06.079l-1.444 2.49a5.3 5.3 0 0 0-1.439.685A5.33 5.33 0 0 0 .284 6.301a5.4 5.4 0 0 0 .083 3.508c.227.617.564 1.188.997 1.684a5.3 5.3 0 0 0 2.364 1.568a5.2 5.2 0 0 0 2.97.074c-.635-.447-.979-.916-1.434-1.639a3.4 3.4 0 0 1-.991-.159a3.5 3.5 0 0 1-1.113-.613a3.55 3.55 0 0 1-1.067-1.453a3.58 3.58 0 0 1-.105-2.419A3.54 3.54 0 0 1 3.5 4.921a3.5 3.5 0 0 1 1.709-.534h.051c.26-.008.359.009.551.071c.104-.155.465-.667.91-.864l.498-2.487c.135-.3.415-.492.549-.653L6.981.098C6.944.086 6.898.076 6.852.066"></svg:path><svg:path d="m13.524 4.241l-.895-2.475c-.002-.38-1.062-.684-1.454-.682l-1.564.005c-.357.001-1.375.263-1.543.6c-.015.03-.033.06-.033.092l-.623 2.48c-.455.3-.852.671-1.195 1.087A5.18 5.18 0 0 0 5.011 8.68a5.2 5.2 0 0 0 1.181 3.275c.416.512.928.944 1.506 1.277c.82.475 1.779.751 2.807.748c3.021-.011 5.465-2.398 5.455-5.336c-.009-1.835-.974-3.453-2.436-4.403m-2.555-2.257h1.062V3h-1.062zm-2 0h1.062V3H8.969zm1.453 10.266c-2.097 0-3.797-1.686-3.797-3.766s1.7-3.766 3.797-3.766c2.096 0 3.797 1.686 3.797 3.766s-1.701 3.766-3.797 3.766"></svg:path></svg:g>`,
})
export class SiGlyphHandcuffIcon {
  readonly viewBox = input("0 0 16 14")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHangerIcon],svg[si-glyph-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.542 11.375S9.841 6.953 9.579 6.846V5.96c.827-.233 1.38-1.005 1.38-1.915c0-1.098-.885-1.99-1.971-1.99a1.98 1.98 0 0 0-1.969 1.99c0 .293.237.529.531.529c.293 0 .426-.342.426-.635c0-.512.545-.981 1.044-.981c.5 0 1.021.575 1.021 1.087c0 .511-.554.928-1.054.928c-.294 0-.473.237-.473.529v1.322c-.198.073-6.995 4.551-6.995 4.551c-.503.513-1.188 2.582 1.206 2.582h12.581c2.194 0 1.717-2.094 1.236-2.582m-.985 1.646H2.456c-.671 0-.652-.756-.347-1.086l6.349-4.016c.343-.182.774-.206 1.113-.004l6.37 4.021c.307.33.231 1.085-.384 1.085"></svg:path>`,
})
export class SiGlyphHangerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHardwareIcon],svg[si-glyph-hardware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.007 4.014a2.977 2.977 0 0 0 0 5.954a2.977 2.977 0 0 0 0-5.954m0 5.021a2.046 2.046 0 0 1 0-4.093a2.046 2.046 0 0 1 0 4.093M6 14h3.965v2H6zm0-3h3.964v1.959H6zM2.473 4.53l2.1-3.066l1.211.83l-2.1 3.065zm-2.55-1.626l2.1-3.066L3.23.665l-2.1 3.066zm11.673-1.733h3.734v3.457h-3.734z"></svg:path>`,
})
export class SiGlyphHardwareIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHatIcon],svg[si-glyph-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.708 8.211c-.43.917-2.16 2.028-4.708 2.028c-2.532 0-4.333-1.097-4.712-2.013C1.375 8.312 0 9.456 0 10.136c0 1.128 3.581 2.728 8 2.728c4.418 0 8-1.6 8-2.728c0-.689-1.375-1.567-3.292-1.925"></svg:path><svg:path d="M10.077 3.197c-.516 0-1.582.354-2.065.354s-1.549-.354-2.064-.354c-1.114 0-1.81 1.372-1.907 1.897l-.02 2.427c.562.506 1.611 1.142 2.761 1.238a15.3 15.3 0 0 0 2.52 0c1.15-.097 2.074-.654 2.668-1.221l-.005-2.413c-.086-.546-.784-1.928-1.888-1.928"></svg:path></svg:g>`,
})
export class SiGlyphHatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHatChefIcon],svg[si-glyph-hat-chef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 15h10v1H4zm9.449-11.688A4.24 4.24 0 0 0 9.322.086a4.244 4.244 0 0 0-4.166 3.39a3.3 3.3 0 0 0-.833-.119a3.31 3.31 0 0 0-3.312 3.312c0 1.829 1.187 3.312 3.017 3.312c.019 0 .036-.005.056-.005v3.981h9.875v-3.384c1.883-.14 3.011-1.709 3.011-3.627a3.64 3.64 0 0 0-3.521-3.634M8.9 1.795c-.842.544-1.383 1.401-1.383 2.368H6.216c0-1.398 1.133-2.571 2.664-2.9c.277-.058.452.252.02.532"></svg:path>`,
})
export class SiGlyphHatChefIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeadIcon],svg[si-glyph-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.001 5.378S.812 1.177 5.145.305s6.963 1.506 7.35 3.171s.575 2.518.387 3.171c-.232.317-.155.555.309 1.348s1.393 1.665.077 1.823c-.851.159-.309.713-.309.713s.232.476-.464.555c0 0 .464.872.077.872s-.464.159-.542.476c-.077.317.077 2.061-2.631 1.03c-.619-.317-.892.977-1.238 1.744c-.208.461-.431 1.09-1.47.634c-.927-.407-2.995-1.378-3.771-2.705c-.424-.727.693-1.778.151-3.205s-.712-.987-1.254-1.779c-.541-.793-.738-1.824-.816-2.775"></svg:path>`,
})
export class SiGlyphHeadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeadSetIcon],svg[si-glyph-head-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.665 6.733l-.01.002V5.632c0-3.066-2.601-5.561-5.798-5.561H8.195c-3.197 0-5.797 2.494-5.797 5.561V6.74c-.025 0-.05-.008-.076-.008c-.707 0-1.282.59-1.282 1.317v2.687c0 .728.575 1.314 1.282 1.314c.062 0 .125-.011.185-.019c.579 1.731 2.681 3.066 5.289 3.314c.278.367.398.631 1.249.631c1.092 0 1.913-.43 1.913-.961s-.821-.961-1.913-.961c-.844 0-.961.26-1.244.622c-2.355-.235-4.236-1.41-4.686-2.914c.447 0 .816-.608.816-1.027v-.122h.006V5.574c0-2.547 1.518-3.618 4.258-3.618h1.662C12.59 1.956 14 2.992 14 5.585v5.04h.014v.11c0 .728.752 1.221 1.466 1.221s1.478-.493 1.478-1.221V8.048a1.306 1.306 0 0 0-1.293-1.315"></svg:path>`,
})
export class SiGlyphHeadSetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartIcon],svg[si-glyph-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.958 1.03a4.015 4.015 0 0 0-3.911 3.148A4.054 4.054 0 0 0 5.102 1.03c-2.237 0-4.05 1.824-4.05 4.072c0 6.496 8.005 9.838 8.005 9.838s7.912-3.258 7.912-9.879c0-2.228-1.795-4.031-4.011-4.031"></svg:path>`,
})
export class SiGlyphHeartIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartDeleteIcon],svg[si-glyph-heart-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m11.19 14.2l1.702-1.7l-1.703-1.699l.631-.632l1.701 1.701l1.7-1.7l.631.631l-1.7 1.699l1.7 1.7l-.631.631l-1.7-1.7l-1.699 1.7z"></svg:path><svg:path d="m9.633 10.802l2.188-2.189l1.701 1.702l1.536-1.537c.551-1.094.911-2.326.911-3.716a4.02 4.02 0 0 0-4.011-4.031a4.015 4.015 0 0 0-3.911 3.148a4.054 4.054 0 0 0-3.945-3.148c-2.237 0-4.05 1.824-4.05 4.072c0 6.496 8.005 9.838 8.005 9.838s.729-.304 1.74-.902l1.539-1.538z"></svg:path></svg:g>`,
})
export class SiGlyphHeartDeleteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartPlusIcon],svg[si-glyph-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11 12h4.958v.918H11z"></svg:path><svg:path d="M13 10h.918v4.957H13z"></svg:path><svg:path d="M11.917 8.958h3.055c.605-1.135.997-2.431.997-3.896a4.02 4.02 0 0 0-4.011-4.031a4.015 4.015 0 0 0-3.911 3.148a4.054 4.054 0 0 0-3.945-3.148c-2.237 0-4.05 1.824-4.05 4.072c0 6.496 8.005 9.838 8.005 9.838s.785-.324 1.86-.974v-3.05h2z"></svg:path></svg:g>`,
})
export class SiGlyphHeartPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartRemoveIcon],svg[si-glyph-heart-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.917 10.917h3.696c1.318-1.519 2.355-3.464 2.355-5.855a4.02 4.02 0 0 0-4.011-4.031a4.015 4.015 0 0 0-3.911 3.148a4.054 4.054 0 0 0-3.945-3.148c-2.237 0-4.05 1.824-4.05 4.072c0 6.496 8.005 9.838 8.005 9.838s.785-.324 1.86-.974z"></svg:path><svg:path d="M11 12h4.958v.918H11z"></svg:path></svg:g>`,
})
export class SiGlyphHeartRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHeartSignalIcon],svg[si-glyph-heart-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m9.953 8.107l-1.304 2.385a.33.33 0 0 1-.331.17a.33.33 0 0 1-.287-.23l-.975-3.316l-1.213 3.946a.33.33 0 0 1-.317.242h-.009a.33.33 0 0 1-.319-.229L3.44 5.447L2.303 7.933c-.058.106-.126.219-.251.219H.492c1.686 4.589 7.555 6.897 7.555 6.897s5.845-2.295 7.511-6.942z"></svg:path><svg:path d="m1.801 6.945l1.425-3.108a.33.33 0 0 1 .328-.181a.34.34 0 0 1 .29.238l1.647 5.511l1.221-4.16a.33.33 0 0 1 .319-.253h.004c.15 0 .283.1.323.244l1.089 3.868l1.007-1.928c.058-.11.173-.231.296-.231h6.006A7.6 7.6 0 0 0 16 5.044a4.03 4.03 0 0 0-7.963-.882A4.072 4.072 0 0 0 0 5.086c0 .672.09 1.256.244 1.859z"></svg:path></svg:g>`,
})
export class SiGlyphHeartSignalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHelicopterIcon],svg[si-glyph-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3.276 9.667c-1.255 0-2.275-1.038-2.275-2.312c0-1.275 1.021-2.312 2.275-2.312c.444 0 .874.13 1.244.376l-.364.545a1.6 1.6 0 0 0-.88-.266c-.893 0-1.619.743-1.619 1.657c0 .913.727 1.657 1.619 1.657zm12.978-5.615s-4.723.162-4.723.362v.132h-.043v-.132c0-.2-4.721-.362-4.721-.362c-.39 0-.705.162-.705.362v.205c0 .199.315.361.705.361c0 0 3.104-.107 4.277-.253v2.189h.922v-2.19c1.169.147 4.287.254 4.287.254c.39 0 .705-.162.705-.361v-.205c.001-.2-.314-.362-.704-.362m-1.476 10.896H8.863c-1.211 0-2.842-.904-2.842-1.62c0-.173.152-.312.34-.312s.34.14.34.312c0 .309 1.314.788 2.162.788h5.915c.847 0 1.48-.475 1.48-.782c0-.173.153-.312.339-.312c.188 0 .341.14.341.312c0 .715-.948 1.614-2.16 1.614"></svg:path><svg:path d="M12.59 6.125c-1.254 0-2.892.388-4.178.878H2.955a.626.626 0 0 0-.622.63l.698.228c0 .347.278.629.622.629l3.448.866c1.006 1.51 1.717 3.562 5.488 3.562c2.408 0 4.359-1.487 4.359-3.323s-1.95-3.47-4.358-3.47m.559 3.928c-.681 0-1.229-.719-1.229-1.605c0-.885-.156-1.604.522-1.604c.683 0 2.726.719 2.726 1.604c0 1.724-1.338 1.605-2.019 1.605"></svg:path></svg:g>`,
})
export class SiGlyphHelicopterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHelicopterPadIcon],svg[si-glyph-helicopter-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 .055c-4.418 0-8 3.566-8 7.968c0 4.4 3.582 7.968 8 7.968s8-3.567 8-7.968C16 3.621 12.418.055 8 .055m.004 15.057c-3.934 0-7.121-3.181-7.121-7.105S4.071.902 8.004.902s7.121 3.181 7.121 7.105s-3.187 7.105-7.121 7.105"></svg:path><svg:path d="M8.018 2.08c-3.264 0-5.91 2.654-5.91 5.927s2.646 5.927 5.91 5.927s5.911-2.654 5.911-5.927S11.281 2.08 8.018 2.08m2.059 8.039h-1.14V9.062H7.062v1.057H5.944V5.961h1.118v1.914h1.875V5.961h1.14z"></svg:path></svg:g>`,
})
export class SiGlyphHelicopterPadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHelmWheelIcon],svg[si-glyph-helm-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.922 6.992c-.237 0-.621.076-.994.199a5.97 5.97 0 0 0-1.193-2.853c.354-.177.68-.396.848-.563c.412-.412.434-1.059.051-1.441c-.385-.385-1.031-.362-1.442.049c-.169.17-.39.499-.566.854a5.9 5.9 0 0 0-2.858-1.179c.126-.376.203-.763.203-1.002c0-.582-.441-1.055-.984-1.055s-.984.473-.984 1.055c0 .24.078.63.204 1.007a5.97 5.97 0 0 0-2.854 1.184c-.177-.354-.396-.683-.566-.852c-.411-.412-1.057-.434-1.441-.05s-.361 1.03.05 1.441c.169.169.499.39.854.566a5.97 5.97 0 0 0-1.185 2.856c-.373-.125-.76-.201-.997-.201c-.582 0-1.055.441-1.055.984s.473.984 1.055.984c.237 0 .622-.076.995-.2a5.95 5.95 0 0 0 1.186 2.856c-.351.176-.676.394-.842.561c-.412.412-.434 1.058-.051 1.441c.385.385 1.031.362 1.442-.049c.167-.167.383-.488.56-.837a5.95 5.95 0 0 0 2.859 1.179c-.123.37-.197.751-.197.986c0 .582.441 1.055.984 1.055s.984-.473.984-1.055c0-.235-.074-.615-.196-.985a5.96 5.96 0 0 0 2.856-1.19c.176.348.391.67.557.836c.412.412 1.059.434 1.443.051c.384-.385.361-1.031-.051-1.442c-.166-.166-.488-.382-.836-.558a5.8 5.8 0 0 0 1.181-2.859c.37.121.749.195.983.195c.582 0 1.055-.441 1.055-.984s-.476-.984-1.058-.984m-3.229-2.113a4.8 4.8 0 0 1 1.12 2.709l-3.534.321a1.2 1.2 0 0 0-.293-.704zM8.839 7.058a1.33 1.33 0 0 0-.706-.3l.28-3.582a4.83 4.83 0 0 1 2.714 1.136zM7.627 3.174l.3 3.574c-.282.011-.54.107-.749.264L4.877 4.299a4.8 4.8 0 0 1 2.75-1.125M4.305 4.87l2.707 2.288c-.19.201-.311.461-.332.748l-3.505-.299a4.8 4.8 0 0 1 1.13-2.737m2.38 3.262c.032.282.157.536.354.729l-2.712 2.282a4.8 4.8 0 0 1-1.149-2.728zm.52.867c.205.146.455.233.728.243l-.3 3.574a4.83 4.83 0 0 1-2.734-1.105zm1.215 3.813l-.288-3.58c.262-.03.499-.132.689-.287l2.319 2.72a4.8 4.8 0 0 1-2.72 1.147m3.284-1.714L8.969 8.806a1.22 1.22 0 0 0 .307-.688l3.539.27a4.83 4.83 0 0 1-1.111 2.71"></svg:path>`,
})
export class SiGlyphHelmWheelIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHelmetIcon],svg[si-glyph-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.706 8.697h-.124c-.344-3.754-3.457-6.693-7.253-6.693c-4.026 0-7.288 3.305-7.288 7.383c0 2.579 1.192 4.589 5.218 4.589c3.146 0 1.98-2.803 5.315-4.026h4.132c.702 0 1.272-.271 1.272-.601v-.051c.001-.331-.57-.601-1.272-.601m-9.644 2.345H4.937V9.958h1.125z"></svg:path>`,
})
export class SiGlyphHelmetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHightheelIcon],svg[si-glyph-hightheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.396 8.909s-.521-.239-.876 1.241c-.271 1.421-.538 1.734-.538 1.734H2.36s.007-.652.007-1.141s-.283-2.062-.987-3.219C.678 6.367.879 4.881 2.764 3.026c.074-.072.442-.211.902.231c.598.573 3.321 3.391 5.629 4.371c2.168.921 3.627-.121 3.627-.121s2.825.631 3.881 2.413c1.055 1.784-2.296 1.908-2.296 1.908s-4.169.24-5.175-.605c-.151-.192-4.123-2.473-4.936-2.314"></svg:path>`,
})
export class SiGlyphHightheelIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHistoryIcon],svg[si-glyph-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.479 1.046c3.859 0 6.819 3.192 7.166 6.985h1.324l-1.892 1.952l-2.065-1.952h1.338c-.33-3.229-2.746-5.958-5.936-5.958c-3.412 0-6.189 2.888-6.189 6.437s2.777 6.438 6.189 6.438c1.695 0 3.231-.713 4.35-1.865l.822.826a7.37 7.37 0 0 1-5.107 2.065c-4.092 0-7.419-3.349-7.419-7.464s3.327-7.464 7.419-7.464"></svg:path><svg:path d="M8.058 4.03L8 8.953L12 9V8l-3.032.062V4.031z"></svg:path></svg:g>`,
})
export class SiGlyphHistoryIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHockeyIcon],svg[si-glyph-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.938 15.969H2.032a1 1 0 0 1-1-1c0-.553.447-.916 1-.916h3.807c.062-.113.143-.305.178-.388L11.022.818a1 1 0 0 1 1.317-.517c.506.222.737.811.517 1.317l-5 12.75c-.251.592-.675 1.601-1.918 1.601M10 15h2.938v1H10z"></svg:path>`,
})
export class SiGlyphHockeyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHomePageIcon],svg[si-glyph-home-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.65 4.158l-4.485 4.94a.65.65 0 0 0 .002.849l2.868.005v5.024c0 .553.439 1 .982 1h1.965a.99.99 0 0 0 .982-1v-5.02l2.811.005a.65.65 0 0 0-.004-.848L8.414 4.159a.506.506 0 0 0-.764-.001m6.268-2.324c0 .552-.437 1-.973 1H3.056c-.537 0-.973-.448-.973-1V1c0-.552.436-1 .973-1h9.889c.536 0 .973.448.973 1z"></svg:path>`,
})
export class SiGlyphHomePageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHorseIcon],svg[si-glyph-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.572 12.36c-1.889-2.274-.475-5.31-2.205-8.448a4.14 4.14 0 0 0-1.564-1.63l.033-.03c.916-.928 1.412-1.903 1.106-2.178c-.305-.277-1.296.252-2.212 1.18c-.176.178-.33.356-.472.533c-.976-.081-2.003.242-2.895 1.095c0 0-3.909 3.697-4.949 4.697c-1.044.998.367 1.534.367 1.534s4.003-.967 4.833-.645c1.445.558-2.029 2.992-1.918 6.148c.066 2.044 5.214 1.205 8.562.225c1.825-.533 1.67-2.054 1.314-2.48z"></svg:path>`,
})
export class SiGlyphHorseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHorseShoeIcon],svg[si-glyph-horse-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.502 1.042c-4.545 0-7.424 4.236-7.424 9.462c0 2.405 1.523 5.554 2.245 6.265s2.324-.822 2.05-1.323a8.36 8.36 0 0 1-1.014-3.969c0-3.647 1.605-6.604 4.143-6.604c2.535 0 4.142 2.957 4.142 6.604c0 1.486-.41 2.855-1.011 3.957c-.272.507 1.469 2.019 2.045 1.335c.577-.684 2.247-3.859 2.247-6.265c0-5.226-2.88-9.462-7.423-9.462"></svg:path>`,
})
export class SiGlyphHorseShoeIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHospitalIcon],svg[si-glyph-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 1H3v3.084H2v9.874c0 .547.447.989 1 .989h5V12h3.042v3l4.875-.053c.552 0 1.083-.442 1.083-.989V4h-1zM7.031 12.97H4v-1h3.031zm0-3H4v-1h3.031zm0-3H4v-1h3.031zM6.959 4h-3V3h3zM11 5.007h-1v.977H9v-.977H8V3.98h1v-.997h1v.997h1zm.953-2.028h3v1.047h-3zM15 12.97h-3v-1h3zm0-3h-3v-1h3zm0-3h-3v-1h3z"></svg:path>`,
})
export class SiGlyphHospitalIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphHouseIcon],svg[si-glyph-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m16.794 8.77l-3.81-3.906V2.017l-.968.022v1.728L9.502 1.245a.71.71 0 0 0-1.003 0L1.206 8.771a.713.713 0 0 0 0 1.002a.71.71 0 0 0 1.003-.001L9 2.982l6.793 6.79a.704.704 0 0 0 1.001.001a.715.715 0 0 0 0-1.003"></svg:path><svg:path d="M4.043 9.532v5.69c0 .394.218.786.567.786h2.277l.064-3.993h4.074l-.002 3.993h2.303c.349 0 .632-.391.632-.786V9.531L9 4.625z"></svg:path></svg:g>`,
})
export class SiGlyphHouseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphIceCreamIcon],svg[si-glyph-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.513 16.906L12 8.042H7z"></svg:path><svg:path d="M11.775 2.732C11.459 1.725 10.617 1 9.617 1c-1.09 0-1.996.856-2.233 2.002c-.021 0-.041-.008-.063-.008c-1.27 0-2.298 1.159-2.298 2.589c0 1.261.694 2.308 1.754 2.538l5.529.124C13.248 7.87 14 6.63 14 5.44c0-1.432-.98-2.592-2.225-2.708"></svg:path></svg:g>`,
})
export class SiGlyphIceCreamIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphIdBadgeIcon],svg[si-glyph-id-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.969 2.021H2.021C.911 2.021.01 2.916.01 4.016V11c0 1.101.9 1.995 2.011 1.995h.95v-1.042h2.027v1.042h5.961v-1.042h2.051v1.042h.959c1.11 0 2.01-.895 2.01-1.995V4.016c0-1.101-.9-1.995-2.01-1.995M5.457 3.969c.827 0 1.5.688 1.5 1.534s-.674 2.466-1.5 2.466c-.827 0-1.5-1.62-1.5-2.466s.673-1.534 1.5-1.534m3.537 7.05H1.987s-.12-3.028 1.679-3.028c.374.393.892.77 1.842.77s1.404-.381 1.775-.778c2.025-.002 1.711 3.036 1.711 3.036m5.035-1.066H9.984v-1h4.045zm-2.06-1.984h-2v-1h2zm2.047-2.015H9.969v-1h4.047z"></svg:path>`,
})
export class SiGlyphIdBadgeIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphImageIcon],svg[si-glyph-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:path d="M13.438 11.944H2.557c-1.394 0-2.528-1.163-2.528-2.591v-6.75c0-1.43 1.135-2.591 2.528-2.591h10.881c1.393 0 2.527 1.161 2.527 2.591v6.75c0 1.428-1.135 2.591-2.527 2.591M2.237.979c-.7 0-1.272.614-1.272 1.371v7.318c0 .757.572 1.371 1.272 1.371h11.517c.702 0 1.273-.614 1.273-1.371V2.35c0-.757-.571-1.371-1.273-1.371z"></svg:path><svg:ellipse cx="5.471" cy="3.461" rx="1.471" ry="1.461"></svg:ellipse><svg:path d="m11.234 3.037l2.76 6.951H2.021L5.497 5.98l3.117.944z"></svg:path></svg:g>`,
})
export class SiGlyphImageIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphInColumnsIcon],svg[si-glyph-in-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h4v12.998H1zm5 0h4v12.973H6zm5 0h4v13.019h-4z"></svg:path>`,
})
export class SiGlyphInColumnsIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphInboxDownloadIcon],svg[si-glyph-inbox-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="m6.198 4.256l2.19 2.513a.81.81 0 0 0 1.143 0l2.189-2.513c.314-.315.363-.876.049-1.19H9.965V1.144c0-.559-.433-1.01-.968-1.01s-.969.451-.969 1.01v1.922H6.247c-.315.315-.364.874-.049 1.19"></svg:path><svg:path d="M7 10h4.031v1.031H7z"></svg:path><svg:path fill="currentColor" d="M14.993 1.006h-3.962v.975h3.146L15.54 9.01H2.505l1.407-7.029h3.057v-.975H3.073l-2.06 8.755v4.17c0 1.334.472 2.028 1.804 2.028h12.28c1.246 0 1.885-.527 1.885-2.111V9.761zM11.016 11H6.985V9.969h4.031z"></svg:path></svg:g>`,
})
export class SiGlyphInboxDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphInboxUploadIcon],svg[si-glyph-inbox-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.768 2.757L9.579.244a.81.81 0 0 0-1.143 0L6.247 2.757c-.315.315-.363.876-.049 1.19H8v1.922c0 .559.434 1.01.969 1.01s.969-.451.969-1.01V3.947h1.781c.315-.315.364-.875.049-1.19"></svg:path><svg:path d="M14.993 1.006h-3.29l.891.975h1.583L15.54 9.01H2.505l1.407-7.029h1.682l.766-.975H3.073l-2.06 8.755v4.17c0 1.334.472 2.028 1.804 2.028h12.28c1.246 0 1.885-.527 1.885-2.111V9.761zM11.016 11H6.985V9.969h4.031z"></svg:path></svg:g>`,
})
export class SiGlyphInboxUploadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphInfinityIcon],svg[si-glyph-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.273 4.042c-1.331 0-2.836.703-3.769 1.772c-.18.206-.775.189-.964-.023c-.936-1.056-2.436-1.749-3.763-1.749C1.705 4.042.02 5.822.02 8.01c0 2.189 1.685 3.97 3.758 3.97c1.345 0 2.865-.711 3.8-1.792c.173-.201.735-.205.908-.004c.931 1.083 2.448 1.796 3.788 1.796c2.067 0 3.746-1.78 3.746-3.97c0-2.188-1.68-3.968-3.746-3.968zm-8.78 7.045C2.05 11.087.876 9.707.876 8.01c0-1.695 1.175-3.076 2.619-3.076c1.534 0 3.476 1.448 3.476 3.076s-1.942 3.077-3.476 3.077zm9-.032c-1.53 0-3.474-1.438-3.474-3.056c0-1.616 1.944-3.054 3.474-3.054c1.446 0 2.621 1.371 2.621 3.054c0 1.685-1.175 3.056-2.62 3.056z"></svg:path>`,
})
export class SiGlyphInfinityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphInfinity2Icon],svg[si-glyph-infinity-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.352 12.941c-2.383 0-4.32-1.992-4.32-4.441s1.938-4.441 4.32-4.441a4.29 4.29 0 0 1 3.424 1.73l-.972.951a2.97 2.97 0 0 0-2.452-1.315c-1.648 0-2.988 1.38-2.988 3.075s1.341 3.075 2.988 3.075c.868 0 2.119-1.929 3.126-3.478c1.349-2.078 2.622-4.039 4.173-4.039c2.377 0 4.31 1.986 4.31 4.428s-1.933 4.428-4.31 4.428c-1.339 0-2.6-.641-3.414-1.727l.963-.962a2.96 2.96 0 0 0 2.451 1.323c1.642 0 2.978-1.374 2.978-3.062s-1.336-3.062-2.978-3.062c-.836 0-2.073 1.902-3.065 3.431c-1.365 2.102-2.654 4.086-4.234 4.086"></svg:path>`,
})
export class SiGlyphInfinity2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphInfoIcon],svg[si-glyph-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(4)"><svg:ellipse cx="4.486" cy="1.525" rx="1.486" ry="1.525"></svg:ellipse><svg:path d="m4.479 13.325l1.373-8.622s.029-.699-.636-.699c-1.501 0-5.29.004-5.29.004s3.979.713 3.979 2.059c0 0-1.308 5.76-1.308 7.29s.836 2.644 2.337 2.644c1.225 0 2.338-1.336 2.254-3.283c-1.197 1.836-2.709 2.102-2.709.607"></svg:path></svg:g>`,
})
export class SiGlyphInfoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphIpodIcon],svg[si-glyph-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(4)"><svg:ellipse cx="4.469" cy="11.488" rx="1.469" ry="1.488"></svg:ellipse><svg:path d="M8.301.021H.779C.371.021.04.326.04.7v14.595c0 .375.33.679.739.679h7.522c.41 0 .739-.304.739-.679V.7c0-.374-.33-.679-.739-.679M4.5 14a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M8 6H1V1h7z"></svg:path></svg:g>`,
})
export class SiGlyphIpodIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphIronIcon],svg[si-glyph-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.317 8.083c.303-.62.636-1.136.636-1.946c0-.787-.226-1.354-.671-1.685c-.541-.4-1.809-.306-2.41-.231c-.086-.042-.2-.199-.302-.199l-6.558.607c-.73.151-1.455.883-1.455.883l-4.518 4.753c0 .374.056.692.669.692L13 10.943S12.491 8 14 8V4.867c.537-.043 1.613-.069 1.896.143q.392.293.393 1.127c0 .648-.254 1.168-.547 1.768c-.641 1.311-1.367 2.548.273 5.788c.06.116.175.184.295.184a.3.3 0 0 0 .153-.04a.344.344 0 0 0 .14-.461c-1.482-2.929-.865-3.943-.267-5.163zm-3.24-.944c-.316 0-2.145.149-2.145.14v-.554a.635.635 0 0 0-.627-.645h-.597a.635.635 0 0 0-.628.645v.554c0 .075-4.235.681-4.235.681l1.436-1.815s.446-.611.971-.611l5.34-.616c.269 0 .485.272.485.611z"></svg:path>`,
})
export class SiGlyphIronIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphJumpBackwardIcon],svg[si-glyph-jump-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.994 1c0-.553-.442-1-.989-1h-1.979a.994.994 0 0 0-.99 1v14c0 .553.443 1 .99 1h1.979a.994.994 0 0 0 .989-1zM.438 9.052a1.49 1.49 0 0 1 0-2.104L6.882.506c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path>`,
})
export class SiGlyphJumpBackwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphJumpDoublePageLeftRightIcon],svg[si-glyph-jump-double-page-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 8.062L14.172 5.25a.827.827 0 0 0-1.17 0v1.776h-2.058v-5.5s-.431-.5-.958-.5c-.529 0-.958.5-.958.5V14.5s.429.5.958.5c.527 0 .958-.5.958-.5V9h2.058v1.758a.83.83 0 0 0 1.17 0zM5.986 1.026c-.529 0-.958.5-.958.5v5.557L2.97 7.074V5.302a.83.83 0 0 0-1.17 0L0 8l1.801 2.75a.83.83 0 0 0 1.17 0V8.966l2.058-.008V14.5s.429.5.958.5c.527 0 .958-.5.958-.5V1.526c-.001 0-.431-.5-.959-.5"></svg:path>`,
})
export class SiGlyphJumpDoublePageLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphJumpForwardIcon],svg[si-glyph-jump-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.002 1c0-.553.442-1 .989-1H4.97c.547 0 .989.447.989 1v14c0 .553-.442 1-.989 1H2.991a.994.994 0 0 1-.989-1zm8.111 14.495c-.582.581-2.103.9-2.103-1.001V1.506c0-1.839 1.521-1.582 2.103-1l6.444 6.442a1.49 1.49 0 0 1 0 2.104z"></svg:path>`,
})
export class SiGlyphJumpForwardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphJumpPageLeftRightIcon],svg[si-glyph-jump-page-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.958 8.951V7.007H4.979v-1.94c0-.49-3.714 2.265-3.714 2.265a.946.946 0 0 0-.001 1.323s3.715 2.818 3.715 2.293V8.95h1.979zM11.002 7v1.973h2.046V11c0 .455 3.647-2.316 3.647-2.316a.87.87 0 0 0 0-1.261s-3.714-2.78-3.714-2.388L13.048 7zM8 0h2v16H8z"></svg:path>`,
})
export class SiGlyphJumpPageLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphJumpPageUpDownIcon],svg[si-glyph-jump-page-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.979 12.021v-1.979H8.02v1.979H6.291a.85.85 0 0 0 0 1.255l2.056 2.459a.96.96 0 0 0 1.334.001l2.053-2.46a.85.85 0 0 0 0-1.255zM8 3.952v2.046h1.979V3.952h1.73c.365-.36.365.055 0-.307L9.675.305a.95.95 0 0 0-1.326 0l-2.098 3.34c-.365.361-.365-.054 0 .307zM1 7h16v2H1z"></svg:path>`,
})
export class SiGlyphJumpPageUpDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphKetteIcon],svg[si-glyph-kette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m2.4 4.945l.683 7.262l1.044-.001c.173-3.921.648-5.88 1.33-7.604l-2.975.337z"></svg:path><svg:path fill="currentColor" d="M4.051 16.081c0 .416.009.476.022.878h9.857c.013-.402.022-.462.022-.878v-.019H4.05zm.076-3.875l-1.044.001L2.4 4.945l.082-.006l2.975-.337c-.682 1.724-1.157 3.683-1.33 7.604m8.947-7.878l-.506-.319c-.16-.417-.338-.597-.521-.915H6.379c-.056.077-4.027.509-4.027.509c-.715.025-1.289.627-1.286 1.414l.669 7.171c0 .749.846 1.357 1.583 1.357h.763c-.012.438-.001.95-.004 1.417h9.892c-.03-3.34-.173-5.917-.523-7.898c.005-.01 2.462-2.47 2.462-2.47c.152-.319-.419-.327-.908-.563c0 0-1.773-.02-1.926.297M7.031 1.997h4.914c-.735-.845-1.446-.955-2.361-.955c-.71 0-1.945.29-2.553.955"></svg:path></svg:g>`,
})
export class SiGlyphKetteIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphKeyIcon],svg[si-glyph-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.885.764C8.678 1.971 8.862 3.473 9.609 4.22l1.121 1.121l-9.496 9.497c-.246.246-.229.667.041.937s.689.288.937.04l1.387-1.386l1.556 1.555l.534-.532l.444-.446l.533-.532l-1.556-1.557l1.355-1.355l1.066 1.066l.979-.979l-1.065-1.065l4.263-4.265l1.121 1.121c.783.783 2.434.748 3.457-.275s.82-2.748.111-3.458L13.176.488c-.592-.593-2.248-.767-3.291.276m5.42 3.969c.297.297-.162 1.12-.27 1.228c-.104.104-.926.562-1.224.265l-2.946-2.945c-.297-.297.162-1.118.268-1.224c.107-.107.929-.565 1.226-.27z"></svg:path>`,
})
export class SiGlyphKeyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphKey2Icon],svg[si-glyph-key-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.797 1.272c-1.549-1.55-4.148-1.65-5.69-.107c-1.119 1.117-1.317 2.834-.812 4.233l-8.223 8.223s-.534 2.827 1.85 2.215c.058-.076 1.047-.586 1.047-.586l.023-2.289L6.215 13l.74-.875l.014-2.172h1.977l-.002-1.975l2.168-.008l.379-.258c1.439.602 3.197.162 4.321-.843c1.626-1.453 1.535-4.048-.015-5.597m-.781 1.759h-1.047V1.984h1.047z"></svg:path>`,
})
export class SiGlyphKey2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphKeyboardIcon],svg[si-glyph-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 4.031V11h14.997V4.031zM11.969 5h1.047v1.023h-1.047zm1.047 1.969v1.047h-1.031V6.969zm-3.049-1.99h1.05v1.06h-1.05zm1.055 1.996v1.062H9.979V6.975zm-3.04-1.996h1.033v1.036H7.982zm-.017 1.996h1.078v1.084H7.965zm-2.993-1.98h1.054v1.028H4.972zM7 6.988v1.049H5.985V6.988zm-1.969-.013v1.062H3.97V6.975zM2.969 4.984h1.062v1.047H2.969zm-1 1.995H3v1.037H1.969zM4 10H2V9h2zm8.021.021H4.969V8.968h7.052zM15 10h-2V9h2zm.016-2h-1.031V6.969h1.031zm0-1.977h-1.047V5h1.047z"></svg:path>`,
})
export class SiGlyphKeyboardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphKnifeIcon],svg[si-glyph-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.344 5.262L2.746 2.664c-.454-.453-.943.032-1.525-.551C.639 1.531 1.294.745 1.7.34S2.725-.104 3.083.253l3.275 3.276c.357.358-.657 2.092-1.014 1.733m11.594 10.363c-1.212 1.212-6.35-3.236-11.623-8.51l2.318-2.311c0 .001 9.885 10.24 9.305 10.821"></svg:path>`,
})
export class SiGlyphKnifeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLadderPoolIcon],svg[si-glyph-ladder-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3.168 9.982c-.89 0-1.607-.338-1.968-.624a.437.437 0 0 1-.059-.634a.49.49 0 0 1 .66-.059c.053.041 1.26.946 2.87-.032c2.147-1.308 4.494-.063 4.593-.011c.018.009 1.94 1.013 3.676.007c2.269-1.32 3.867-.011 3.933.047a.436.436 0 0 1 .041.634a.486.486 0 0 1-.665.039c-.041-.035-1.154-.919-2.82.048c-2.213 1.284-4.53.06-4.629.008c-.02-.012-1.957-1.031-3.625-.013c-.711.434-1.4.59-2.007.59m.007 3.012c-1.148 0-1.91-.566-1.957-.604a.472.472 0 0 1 .566-.756c.057.042 1.279.919 2.903-.031c2.132-1.246 4.462-.062 4.56-.011c.018.009 1.958.984 3.709.007c2.254-1.258 3.833-.009 3.9.045a.476.476 0 0 1 .071.666a.47.47 0 0 1-.662.072c-.043-.034-1.17-.892-2.853.045c-2.195 1.225-4.498.058-4.597.007c-.018-.009-1.973-.998-3.655-.011c-.731.427-1.407.571-1.985.571m8.042 2.992a5.4 5.4 0 0 1-2.417-.584c-.02-.01-1.957-1.037-3.623-.011c-1.763 1.082-3.373.452-3.977-.034a.44.44 0 0 1-.059-.639a.48.48 0 0 1 .66-.059c.053.041 1.26.954 2.87-.033c2.147-1.32 4.494-.065 4.593-.011c.02.009 1.941 1.022 3.676.007c2.269-1.331 3.867-.009 3.933.046a.444.444 0 0 1 .041.641a.486.486 0 0 1-.665.04c-.041-.037-1.154-.926-2.82.047a4.3 4.3 0 0 1-2.212.59M10.31 4.972H4.665c-.276 0-.5-.21-.5-.469s.224-.469.5-.469h5.645c.276 0 .5.21.5.469s-.224.469-.5.469m0 2.028H4.665a.5.5 0 0 1 0-1h5.645a.5.5 0 0 1 0 1"></svg:path><svg:path d="M4.485 9.708c-.276 0-.454-.224-.454-.5V2.281c-.033-.048-.379-.344-.888-.344h-.251c-.51 0-.81.296-.849.373a.485.485 0 0 1-.497.485a.51.51 0 0 1-.498-.515c0-.704.793-1.234 1.844-1.234h.251c1.05 0 1.842.53 1.842 1.234v6.927a.5.5 0 0 1-.5.501m6.015.021a.5.5 0 0 1-.5-.5V2.248c-.033-.048-.256-.311-.766-.311h-.252c-.509 0-.886.263-.925.34a.485.485 0 0 1-.497.485a.51.51 0 0 1-.497-.515c0-.704.792-1.234 1.843-1.234h.251c1.051 0 1.843.53 1.843 1.234v6.981a.5.5 0 0 1-.5.501"></svg:path></svg:g>`,
})
export class SiGlyphLadderPoolIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLampIcon],svg[si-glyph-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.655.029H7.312c-.765 0-3.272 6.932-3.272 6.932h10.941S12.379.029 11.655.029m-7.634 8v.929h4.981v5.084H6.396c-1.333 0-1.333 1.925-1.333 1.925h8.896s0-1.925-1.333-1.925H9.959V8.958h2.084v2h.875v-2h2.041v-.929z"></svg:path>`,
})
export class SiGlyphLampIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLampDeskIcon],svg[si-glyph-lamp-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.521 7.989c-.258 0-.497.072-.708.19l-1.541-2.593l.376-.341l-1.579-1.743l-1.007 1.805l1.135 1.254l.358-.325l1.607 2.66a1.5 1.5 0 0 0 .243 1.569l-1.229 3.929a6.6 6.6 0 0 0-2.137-.361c-2.72 0-5.038-.375-5.974 1.916h11.946c-.544-1.33-1.562-.423-2.843-1.116l1.19-3.859c.053.006.104.017.16.017c.21 0 .409-.046.59-.126c.303-.134.548-.37.704-.662c.115-.212.186-.452.186-.711a1.49 1.49 0 0 0-1.477-1.503m-3.388-6.023L8.346-.009L3.113 2.266L7.354 6.95z"></svg:path><svg:path d="M4.473 5.323c.999 1.104 1.882.47 1.882.47L4.177 3.386s-.706.833.296 1.937"></svg:path></svg:g>`,
})
export class SiGlyphLampDeskIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLavaboIcon],svg[si-glyph-lavabo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.969 5.021H4.031c0 1.643 2.489 3.646 4.866 3.893l-.849 5.697c0 .738.548 1.386 1.286 1.386h3.299c.738 0 1.336-.598 1.336-1.336z"></svg:path><svg:path d="M12.062 5.027V1.523c0-.396-.219-.537-.607-.537h-1.09l-.412.967l-.911-.284l.653-1.328a.49.49 0 0 1 .448-.296h1.499c.789 0 1.299.459 1.299 1.168v3.814z"></svg:path><svg:path d="M11 3h1.223v.937H11z"></svg:path></svg:g>`,
})
export class SiGlyphLavaboIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLawHammerIcon],svg[si-glyph-law-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.44 7.389L9.662 2.61l.57-.569l-.917-.919l-4.247 4.245l.92.918l.53-.53l1.955 1.954l-8.535 8.535l.83.829l8.533-8.534l1.994 1.993l-.529.531l.918.917l4.254-4.253l-.917-.918z"></svg:path>`,
})
export class SiGlyphLawHammerIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout1Icon],svg[si-glyph-layout-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 16H1V0h16zM2 15h14V1H2z"></svg:path><svg:path d="M3 2h6v12H3zm7 0h5v6h-5zm0 7h5v5h-5z"></svg:path></svg:g>`,
})
export class SiGlyphLayout1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout2Icon],svg[si-glyph-layout-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 16H1.021V.042H17zm-1.042-.957V1h-14v14.043z"></svg:path><svg:path d="M3 2h5v12H3zm7 0h5v12h-5z"></svg:path></svg:g>`,
})
export class SiGlyphLayout2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout3Icon],svg[si-glyph-layout-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17.021 16.979h-16V1h16zM2 16h14V2H2z"></svg:path><svg:path d="M3 10v4.953h4.977V10zm7 0v4.992h5.002V10zM3 3v4.96h5.01V3zm7 0v4.963h5V3z"></svg:path></svg:g>`,
})
export class SiGlyphLayout3Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout4Icon],svg[si-glyph-layout-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.956 6.326c0 .35-.299.632-.669.632H1.689c-.371 0-.67-.282-.67-.632V.633c0-.35.299-.633.67-.633h8.598c.37 0 .669.283.669.633zM17 15.333a.67.67 0 0 1-.671.667H7.714a.67.67 0 0 1-.671-.667V8.666c0-.368.3-.666.671-.666h8.615c.37 0 .671.298.671.666zm-11.024 0c0 .369-.3.667-.668.667H1.691a.67.67 0 0 1-.671-.667V8.666c0-.368.299-.666.671-.666h3.617c.368 0 .668.298.668.666zM17 6.345c0 .351-.324.634-.726.634h-3.528c-.398 0-.723-.283-.723-.634V.635c0-.352.324-.635.723-.635h3.528c.401 0 .726.283.726.635z"></svg:path>`,
})
export class SiGlyphLayout4Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLeafIcon],svg[si-glyph-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.295 14.201a5 5 0 0 0 .381-.354c-1.989-.903-3.498-1.999-4.858-3.108c-1.624-.004-3.298-.418-4.155-1.477c1.277.643 2.621.646 3.074.585c-3.839-3.466-4.902-6.855-4.902-6.855c1.314 2.06 2.701 3.652 4.059 4.916c-.569-1.088-.236-3.1-.236-3.1c1.107 3.898 1.237 3.96 1.164 3.994c.9.729 1.875 1.414 2.687 1.937c-.292-.68-.499-1.671-.472-3.369c0 0 .722 3.562 1.856 4.439c.903.521 1.698.925 2.314 1.232c.976-1.456.981-5.338-1.411-6.897C9.218 4.462 4.871 4.398.474.096c-1.315-1.287 1.129 10.036 4.67 13.193c2.176 1.945 5.008 2.701 7.151.912"></svg:path><svg:path d="M11.266 14.064s1.18.613 2.534 1.211s2.003.477 2.079.625c.078.15.039-1.642.039-1.642s-1.828.433-3.863-.696z"></svg:path></svg:g>`,
})
export class SiGlyphLeafIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLeftJustifyIcon],svg[si-glyph-left-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 2.938c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 2h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 5h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98A.938.938 0 0 1 1.98 8h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h14.082c.518 0 .938.42.938.938m-5 3c0 .518-.42.938-.938.938H1.98a.938.938 0 0 1 0-1.876h9.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphLeftJustifyIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLeftwardsArrowToBarIcon],svg[si-glyph-leftwards-arrow-to-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.994 1c0-.553-.442-1-.989-1H3.026a.994.994 0 0 0-.99 1v14c0 .553.443 1 .99 1h1.979a.994.994 0 0 0 .989-1zm1.444 8.052a1.49 1.49 0 0 1 0-2.104L13.882.506c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path>`,
})
export class SiGlyphLeftwardsArrowToBarIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLightAlarmIcon],svg[si-glyph-light-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12h11v2H2zm10-1H3V9.667C3 7.826 3.75 5 7.5 5S12 7.826 12 9.667zM7 2h1v2H7zM2.597 3.44l.707-.708l1.414 1.414l-.707.707zm10.413-.293l.707.707l-1.414 1.414l-.707-.707zM13 8h2v1h-2zM0 8h1.75v1H0z"></svg:path>`,
})
export class SiGlyphLightAlarmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLightBulbIcon],svg[si-glyph-light-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 3.991C13 1.422 10.729.015 8 .015S3 1.421 3 3.991c0 3.299 2.087 4.197 3.312 6.278c.264.449-.49.227-.235.683h3.818c.252-.452-.595-.229-.333-.676C10.782 8.192 13 7.375 13 3.991M6 12h3.953v.922H6zm3.969 2.968c0 .561-.434 1.017-.971 1.017H7.014c-.538 0-.972-.456-.972-1.017v-.947h3.927z"></svg:path>`,
})
export class SiGlyphLightBulbIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLightHouseIcon],svg[si-glyph-light-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.042 0S4.073 1.93 4.073 3h7.938c0-1.07-3.969-3-3.969-3M12 5v.982L16 7V4zM3.958 5L0 4v3l3.958-1zM5 9.969h6V9h1V8H4v1h1zM5 14h6v2H5zm0-3h6v2H5zm0-7h.968v3H5zm5 0h.968v3H10zM7 4h1.984v3H7z"></svg:path>`,
})
export class SiGlyphLightHouseIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLikeIcon],svg[si-glyph-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.811 13.958H2.194a1.135 1.135 0 0 1-1.146-1.122V7.128c0-.62.515-1.123 1.146-1.123h2.617c.634 0 1.148.503 1.148 1.123v5.708c0 .62-.515 1.122-1.148 1.122m10.127-3.009v1.084h1.514c-.076 1.146-.658 1.897-1.74 1.897h-4.426c-.688 0-1.029-1.312-2.699-1.312l-.558.019V6.681s1.063-.166 1.419-1.291c0 0 1.451-3.961 2.57-4.356c.658 0 1.191-.047 1.191 1.125l-.595 1.814s-.353 2.032 2.14 2.032h2.145c.688 0 1.06.424 1.06 1.049c0 0 .014.357.007.896h-2.027v1.084h1.99a17 17 0 0 1-.218 1.916h-1.773z"></svg:path>`,
})
export class SiGlyphLikeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLikeUnlikeIcon],svg[si-glyph-like-unlike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.811 2.035H2.194c-.632 0-1.146.502-1.146 1.123v5.707c0 .621.515 1.123 1.146 1.123h2.617c.634 0 1.148-.502 1.148-1.123V3.158c0-.621-.515-1.123-1.148-1.123m10.127 3.01V3.961h1.514c-.076-1.146-.658-1.898-1.74-1.898h-4.426c-.688 0-1.029 1.312-2.699 1.312l-.558-.018v5.955s1.063.166 1.419 1.291c0 0 1.451 3.961 2.57 4.357c.658 0 1.191.047 1.191-1.125l-.595-1.814s-.353-2.033 2.14-2.033h2.145c.688 0 1.06-.424 1.06-1.049c0 0 .014-.357.007-.895h-2.027V6.96h1.99a17 17 0 0 0-.218-1.916z"></svg:path>`,
})
export class SiGlyphLikeUnlikeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLineTwoAnglePointIcon],svg[si-glyph-line-two-angle-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.938.938h1.084v1.125H7.938zm1.083 14.124H7.937v-1.125h.073v.011h.917v-.011h.094zm.938-2.021H8.928V3h1.031V.041H7V3h1.011v10.041H7V16h2.959z"></svg:path>`,
})
export class SiGlyphLineTwoAnglePointIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLink1Icon],svg[si-glyph-link-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5 7h6.979v.959H5z"></svg:path><svg:path d="M14.604 5h-4.219c-.743 0-1.35.591-1.35 1.318v2.344c0 .726.606 1.317 1.35 1.317h4.219c.744 0 1.348-.592 1.348-1.317V6.318C15.951 5.591 15.348 5 14.604 5m.42 3.679c0 .192-.171.348-.381.348h-4.318c-.21 0-.38-.155-.38-.348V6.302c0-.192.17-.349.38-.349h4.318c.21 0 .381.156.381.349zM6.621 5H2.377c-.749 0-1.357.591-1.357 1.318v2.344c0 .726.608 1.317 1.357 1.317h4.244c.748 0 1.356-.592 1.356-1.317V6.318C7.978 5.591 7.369 5 6.621 5m.428 3.662c0 .189-.172.343-.381.343H2.35c-.209 0-.381-.153-.381-.343V6.318c0-.189.172-.344.381-.344h4.318c.209 0 .381.154.381.344z"></svg:path></svg:g>`,
})
export class SiGlyphLink1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLink2Icon],svg[si-glyph-link-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1.711 15.919a1.707 1.707 0 0 1-.529-3.332l.32-.107l-.096-.321c-.281-.949-.081-1.882.534-2.494l.63-.627l.912.906l-.425.422c-.714.711-.655 1.583.159 2.396q.653.646 1.31.648c.389 0 .743-.165 1.086-.504l3.889-3.872l.914.909l-4.098 4.076c-.422.42-.989.642-1.645.642q-.443 0-.894-.138l-.324-.099l-.11.319q-.136.396-.408.669a1.72 1.72 0 0 1-1.225.507m10.836-9.892l.195-.195c.24-.237.429-.66.481-1.078c.071-.562-.099-1.078-.479-1.457c-.333-.334-.777-.51-1.279-.51s-1.043.189-1.315.463L6.485 6.895l-.93-.925l4.076-4.055c.428-.424 1.004-.648 1.665-.648q.454 0 .915.142l.328.101l.107-.323q.133-.4.412-.678a1.73 1.73 0 0 1 2.438-.008a1.71 1.71 0 0 1-.008 2.426a1.7 1.7 0 0 1-.674.407l-.324.108l.102.327c.315.991.125 1.956-.502 2.582l-.609.605z"></svg:path><svg:path d="M1.93 6.23c-.607-.605-.815-1.521-.554-2.452l.087-.313l-.308-.108A1.696 1.696 0 0 1 .529.537A1.727 1.727 0 0 1 2.967.529q.261.26.393.626l.111.31l.316-.091q.426-.125.85-.126c.655 0 1.227.224 1.652.646l.689.688l-.903.9l-.381-.381c-.161-.159-.6-.53-1.222-.53c-.467 0-.911.208-1.322.618c-.605.602-.652 1.169-.584 1.538c.08.431.334.758.533.956l3.803 3.783l-.86.854zm12.318 9.683c-.459 0-.889-.178-1.213-.498a1.7 1.7 0 0 1-.414-.698l-.102-.325l-.328.094a3 3 0 0 1-.801.113c-.66 0-1.266-.241-1.705-.678l-.58-.579l.857-.852l.216.216c.249.247.76.412 1.269.412c.494 0 .928-.158 1.217-.447c.305-.303.473-.765.473-1.302c0-.509-.152-.988-.389-1.221l-3.667-3.65l.901-.897l4.035 4.013c.617.615.816 1.56.53 2.523l-.097.33l.33.103a1.68 1.68 0 0 1 1.203 1.617c0 .461-.184.894-.511 1.221a1.73 1.73 0 0 1-1.224.505"></svg:path></svg:g>`,
})
export class SiGlyphLink2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLink3Icon],svg[si-glyph-link-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.969 2c0-1.104-.894-2-1.996-2s-1.959.896-1.959 2c0 .723.408 1.332.986 1.683v3.338h-3.312C10.345 6.42 9.722 6 8.982 6c-.741 0-1.364.42-1.708 1.021H3a1 1 0 0 0-1 1v4.269c-.588.353-1.006.981-1.006 1.711a2 2 0 0 0 1.996 2a2 2 0 0 0 1.998-2c0-.719-.412-1.326-.988-1.678V8.938h3.252C7.59 9.562 8.225 10 8.982 10s1.391-.438 1.729-1.062H15a1 1 0 0 0 1-1V3.684c.574-.351.969-.961.969-1.684"></svg:path>`,
})
export class SiGlyphLink3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLoadIcon],svg[si-glyph-load-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.968 1.866c0 1.012-.437 4.061-.976 4.061c-.537 0-.977-3.049-.977-4.061c0-1.014.439-1.835.977-1.835c.539 0 .976.822.976 1.835M8.016 14.088c0-1.006.438-4.031.977-4.031s.975 3.025.975 4.031c0 1.004-.437 1.818-.975 1.818c-.54 0-.977-.814-.977-1.818M2.859 7.03c1.025 0 4.113.431 4.113.961s-3.088.959-4.113.961C1.832 8.95 1 8.521 1 7.991s.832-.96 1.859-.961m12.264 1.952c-1.021 0-4.092-.44-4.092-.983s3.07-.983 4.092-.983c1.019-.002 1.846.44 1.846.983s-.827.983-1.846.983m-.941-4.789c-.715.715-3.18 2.562-3.561 2.182c-.38-.381 1.465-2.848 2.18-3.562c.717-.717 1.609-.986 1.989-.607c.382.382.108 1.271-.608 1.987M3.816 11.846c.711-.712 3.16-2.542 3.541-2.16c.381.38-1.45 2.828-2.162 3.539c-.709.71-1.594.977-1.975.597c-.38-.383-.114-1.267.596-1.976m1.36-9.028c.726.725 2.604 3.213 2.229 3.588S4.544 4.9 3.817 4.177c-.726-.728-1.011-1.619-.636-1.994s1.268-.091 1.995.635m7.636 10.38c-.723-.722-2.582-3.205-2.198-3.589c.384-.385 2.867 1.476 3.588 2.198c.723.719.994 1.616.61 2.001c-.384.383-1.281.11-2-.61"></svg:path>`,
})
export class SiGlyphLoadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLockIcon],svg[si-glyph-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 4.017C13 1.802 11.252 0 9.104 0H7.927C5.779 0 4.031 1.802 4.031 4.017V7.33a5.456 5.456 0 0 0 4.448 8.615a5.46 5.46 0 0 0 5.458-5.46A5.4 5.4 0 0 0 13 7.464zM9.104 2C10.15 2 11 2.904 11 4.017v1.646a5.4 5.4 0 0 0-2.521-.636c-.919 0-1.782.229-2.542.63V4.016C5.938 2.904 6.881 2 7.927 2zm-.625 9.846c.363 0 .693-.147.937-.379l2.578-.753a3.53 3.53 0 0 1-3.515 3.312a3.539 3.539 0 1 1 0-7.076A3.53 3.53 0 0 1 12 10.299l-2.573-.781a1.35 1.35 0 0 0-.947-.388a1.358 1.358 0 0 0-.001 2.716"></svg:path>`,
})
export class SiGlyphLockIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLockUnlockIcon],svg[si-glyph-lock-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.927 0c-2.148 0-3.896 1.802-3.896 4.017v1.662a5.4 5.4 0 0 0-2.552-.651a5.457 5.457 0 0 0-5.458 5.458a5.458 5.458 0 1 0 10.916 0a5.4 5.4 0 0 0-1-3.106V4.018c0-1.112.943-2.017 1.989-2.017h.177c1.046 0 1.896.904 1.896 2.017v2.883h2V4.018C17 1.802 15.252 0 13.104 0zM7.416 11.467l2.578-.753a3.53 3.53 0 0 1-3.515 3.312a3.539 3.539 0 1 1 0-7.076A3.53 3.53 0 0 1 10 10.299l-2.573-.781a1.35 1.35 0 0 0-.947-.388a1.358 1.358 0 0 0-.001 2.716c.363 0 .693-.147.937-.379"></svg:path>`,
})
export class SiGlyphLockUnlockIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLouder2Icon],svg[si-glyph-louder-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(4)"><svg:ellipse cx="4.962" cy="10.954" rx="1.962" ry="1.954"></svg:ellipse><svg:path d="M8.547.014H1.465C.675.014.031.612.031 1.351v13.295c0 .737.644 1.337 1.434 1.337h7.082c.789 0 1.433-.6 1.433-1.337V1.351C9.979.611 9.336.014 8.547.014M4.986 1.948c1.144 0 2.066.927 2.066 2.069a2.066 2.066 0 1 1-4.131 0c0-1.142.926-2.069 2.065-2.069m.006 12.083a3.04 3.04 0 0 1-3.047-3.033a3.04 3.04 0 0 1 3.047-3.031a3.04 3.04 0 0 1 3.047 3.031a3.04 3.04 0 0 1-3.047 3.033"></svg:path><svg:ellipse cx="4.991" cy="3.978" rx=".991" ry=".978"></svg:ellipse></svg:g>`,
})
export class SiGlyphLouder2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphLouderSpeakerIcon],svg[si-glyph-louder-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.031 4.571V7.25C.031 8.118.697 9 1.521 9h6.447V3H1.521c-.824 0-1.49.703-1.49 1.571m7.032 11.367H4.025L2.062 9.062H5.1zM13 0L9 2.76v5.981L13 12zm0 3.989V8c1.086 0 1.969-.897 1.969-2.006c0-1.107-.883-2.005-1.969-2.005"></svg:path>`,
})
export class SiGlyphLouderSpeakerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMagnetIcon],svg[si-glyph-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0h3v2.953H1zm13 0h3v2.953h-3zM9.016 15.917c-4.334 0-7.982-3.344-7.982-7.454V4.031H3.97v3.886c0 2.908 2.23 5.13 5.047 5.13c2.826 0 5.016-2.315 5.016-5.13V4.031h2.936v4.432c-.002 4.04-3.576 7.454-7.953 7.454"></svg:path>`,
})
export class SiGlyphMagnetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMagnifierIcon],svg[si-glyph-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 5.954C17 2.665 14.317 0 11.009 0C7.698 0 5.016 2.665 5.016 5.954c0 3.287 2.683 5.952 5.993 5.952c3.308 0 5.991-2.665 5.991-5.952m-11.066.065A5.08 5.08 0 0 1 11.026.943a5.08 5.08 0 0 1 5.088 5.076a5.08 5.08 0 0 1-5.088 5.075c-2.813 0-5.092-2.272-5.092-5.075m-3.112 9.945L1 14.142l4.037-4.038s.096.765.58 1.247c.482.484 1.242.576 1.242.576z"></svg:path><svg:path d="M14.398 5.073c0 .572.44.356.44-.439c0-1.37-1.109-2.48-2.479-2.48c-.797 0-1.012.439-.439.439a2.48 2.48 0 0 1 2.478 2.48"></svg:path></svg:g>`,
})
export class SiGlyphMagnifierIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMagnifier2Icon],svg[si-glyph-magnifier-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.025 7.5c0-4.143-3.356-7.5-7.499-7.5a7.5 7.5 0 0 0-7.499 7.5a7.5 7.5 0 0 0 7.5 7.5c2.219 0 7.5-.052 7.5-.052zm-7.553 5.529a5.506 5.506 0 1 1 .002-11.012a5.506 5.506 0 0 1-.002 11.012m6.487.929h-1v-1h1z"></svg:path><svg:path d="M7.844 3.044c-2.119 0-3.839 1.616-3.839 3.608c0 .25.026.496.077.73c.186.84.529.691.529-.158c0-1.998 1.719-3.609 3.84-3.609c.905 0 .608-.571-.607-.571"></svg:path></svg:g>`,
})
export class SiGlyphMagnifier2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailIcon],svg[si-glyph-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.304 3.059H1.701a.65.65 0 0 0-.648.648v8.617a.65.65 0 0 0 .648.648h14.603a.65.65 0 0 0 .649-.648V3.707a.65.65 0 0 0-.649-.648m-1.398 8.987l-2.884-3.403l-3.009 2.545L5.955 8.57l-2.862 3.477H1.847l3.189-4.353l-3.07-2.6l-.029-1.281l7.076 5.531l7.049-5.62v1.37l-3.017 2.6l3.124 4.338z"></svg:path>`,
})
export class SiGlyphMailIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailBoxIcon],svg[si-glyph-mail-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.51.053a1.47 1.47 0 0 0-1.498 1.442q-.001.174.035.336L12.99 2.893C12.941.986 11.521.025 9.969.025c-1.283 0-2.926 1.128-2.926 3.133c0 .812.041 3.78.041 3.78h.988v3.567L4.578 6.938h1.379l-.039-3.864C5.918 1.153 6.834.025 8 .025H4c-1.906 0-3 1.034-3 3.038v3.875h2.41l4.662 4.732V16h1.846V6.938H13V4.184l1.535-1.541c.248.211.562.348.914.354a1.47 1.47 0 0 0 1.498-1.441A1.47 1.47 0 0 0 15.51.053m-4.467 3.114H8.918V2.001h2.125z"></svg:path>`,
})
export class SiGlyphMailBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailEmptyIcon],svg[si-glyph-mail-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.263 5.806L8.996.063L1.689 5.806c-.358 0-.648.3-.648.667v8.857c0 .367.29.667.648.667h14.573c.358 0 .648-.3.648-.667V6.473a.656.656 0 0 0-.647-.667m-1.279 9.225l-2.826-3.945l-3.162 2.622l-3.134-2.607l-2.878 3.931h-.995L5 10.207L2.045 7.156l.014-.669l6.938-5.228L15.95 6.52v.636L13.014 10.2l3.002 4.817z"></svg:path>`,
})
export class SiGlyphMailEmptyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
