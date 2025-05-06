import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageVideoQuestionMarkFillIcon],svg[mage-video-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.925 8.32a2.1 2.1 0 0 0-.86-.76a2.11 2.11 0 0 0-2.2.24l-2.52 2v-.9a4.37 4.37 0 0 0-2.68-4a4.4 4.4 0 0 0-1.67-.33h-5.9a4.3 4.3 0 0 0-1.67.33a4.38 4.38 0 0 0-2.35 2.36a4.3 4.3 0 0 0-.33 1.66v6.17a4.34 4.34 0 0 0 4.35 4.34h5.83a4.37 4.37 0 0 0 4.017-2.677a4.3 4.3 0 0 0 .333-1.663v-.9l2.52 2c.324.256.718.41 1.13.44h.25a2 2 0 0 0 .9-.21a2.09 2.09 0 0 0 1.18-1.88V9.39a2.2 2.2 0 0 0-.33-1.07m-13 7.42a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m2.17-4.52c-.116.274-.29.52-.51.72a1.86 1.86 0 0 1-.75.45a.3.3 0 0 0-.09.08a.3.3 0 0 0 0 .13v.35a.75.75 0 0 1-1.5 0v-.32a1.74 1.74 0 0 1 1.12-1.6a.8.8 0 0 0 .24-.13a.6.6 0 0 0 .14-.21a.5.5 0 0 0 .05-.24a.54.54 0 0 0-.06-.25a.7.7 0 0 0-.23-.25a.91.91 0 0 0-.91-.06a.84.84 0 0 0-.37.4a.76.76 0 0 1-1.24.198a.75.75 0 0 1-.13-.828a2.36 2.36 0 0 1 1.05-1.11a2.4 2.4 0 0 1 1.51-.23c.36.053.703.19 1 .4c.29.212.528.485.7.8c.13.276.201.575.21.88a2.1 2.1 0 0 1-.23.82"></svg:path>`,
})
export class MageVideoQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoUploadIcon],svg[mage-video-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M9.047 9.5v5"></svg:path><svg:path stroke-linejoin="round" d="M11.34 11.605L9.373 9.638a.46.46 0 0 0-.651 0l-1.968 1.967"></svg:path><svg:path stroke-linejoin="round" d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181"></svg:path></svg:g>`,
})
export class MageVideoUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoUploadFillIcon],svg[mage-video-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.93 8.33a2.06 2.06 0 0 0-.86-.77a2.11 2.11 0 0 0-2.2.24l-2.52 2v-.9a4.37 4.37 0 0 0-2.68-4A4.4 4.4 0 0 0 12 4.57H6.1a4.3 4.3 0 0 0-1.67.33a4.38 4.38 0 0 0-2.35 2.36a4.3 4.3 0 0 0-.33 1.66v6.17a4.34 4.34 0 0 0 4.35 4.34h5.83a4.37 4.37 0 0 0 4.017-2.677a4.3 4.3 0 0 0 .333-1.663v-.9l2.52 2c.289.23.634.378 1 .43h.25a2 2 0 0 0 .9-.21a2.13 2.13 0 0 0 .98-.78a2.05 2.05 0 0 0 .32-1.11V9.37a2.1 2.1 0 0 0-.32-1.04m-10.06 3.78a.75.75 0 0 1-1.06 0l-1-1v3.38a.75.75 0 1 1-1.5 0v-3.38l-1 1a.74.74 0 0 1-1.06 0a.75.75 0 0 1 0-1.06l2-2a1.4 1.4 0 0 1 .39-.27q.227-.09.47-.09a1.15 1.15 0 0 1 .85.36l2 2a.75.75 0 0 1-.13 1.06z"></svg:path>`,
})
export class MageVideoUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVisaIcon],svg[mage-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.689 8.87L22 15.129h-1.502c-.06-.262-.107-.536-.167-.798s0-.131-.155-.131h-1.823a.143.143 0 0 0-.167.13c-.084.24-.167.478-.262.704c-.096.226-.084.107-.12.107h-1.608v-.143q1.192-2.825 2.383-5.661a.69.69 0 0 1 .62-.453c.524-.024 1.001-.012 1.49-.012m-1.12 1.753l-.847 2.277h1.335zM6.112 13.126v-.143c.477-1.323.965-2.646 1.43-3.969c0-.107.096-.155.215-.155h1.585v.155l-2.467 5.96a.203.203 0 0 1-.227.154H5.266c-.12 0-.167 0-.203-.155c-.44-1.716-.894-3.432-1.335-5.16a.35.35 0 0 0-.155-.215A7 7 0 0 0 2.12 8.99s-.084-.06-.12-.083a.3.3 0 0 1 .155 0h2.384a.715.715 0 0 1 .822.68l.68 3.491a.3.3 0 0 0 0 .084zm5.554 1.764l.239-1.395l.167.096a3 3 0 0 0 1.978.274a.62.62 0 0 0 .548-.465a.58.58 0 0 0-.357-.596c-.239-.155-.5-.274-.727-.429a4 4 0 0 1-.81-.596a1.645 1.645 0 0 1 0-2.11a2.63 2.63 0 0 1 1.346-.786a4.1 4.1 0 0 1 2.384.119h.06l-.227 1.287a7 7 0 0 0-.918-.214a6 6 0 0 0-.93 0a.6.6 0 0 0-.297.155a.36.36 0 0 0 0 .548q.214.197.464.346c.31.19.632.345.93.548a1.715 1.715 0 0 1 .048 2.896a3.13 3.13 0 0 1-1.645.644a4.6 4.6 0 0 1-2.253-.322m-2.646.238l1.025-6.257h1.633l-1.025 6.257z"></svg:path>`,
})
export class MageVisaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVisaSquareIcon],svg[mage-visa-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.35 10.85l-.7 1.92h1.12c-.15-.66-.29-1.29-.42-1.92m0 0l-.7 1.92h1.12c-.15-.66-.29-1.29-.42-1.92M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M7.51 14.64H6.35c-.1 0-.14 0-.16-.13c-.38-1.44-.75-2.89-1.13-4.33a.24.24 0 0 0-.13-.18a6 6 0 0 0-1.21-.51l-.11-.08a1 1 0 0 1 .13 0h2a.61.61 0 0 1 .69.58L7 12.87v.07l.05-.12l1.2-3.33a.15.15 0 0 1 .17-.12h1.34c0 .05 0 .09-.05.13l-2.07 5a.18.18 0 0 1-.13.14m2 0c.28-1.76.57-3.51.85-5.25h1.37a505 505 0 0 0-.85 5.25zm5.49-.49c-.4.31-.877.5-1.38.55a4 4 0 0 1-1.92-.27c.07-.39.14-.78.2-1.17l.15.08a2.48 2.48 0 0 0 1.65.22c.22-.05.42-.14.46-.39a.49.49 0 0 0-.3-.5c-.2-.13-.41-.22-.61-.35a3.5 3.5 0 0 1-.67-.51a1.36 1.36 0 0 1 0-1.76c.3-.335.7-.566 1.14-.66a3.26 3.26 0 0 1 2 .1h.06c-.07.37-.13.74-.19 1.08a8 8 0 0 0-.78-.18a4 4 0 0 0-.78 0a.5.5 0 0 0-.25.13a.3.3 0 0 0 0 .46q.18.163.39.28c.26.16.53.3.78.47a1.43 1.43 0 0 1 .05 2.42m4.11.48c0-.23-.09-.45-.13-.67s-.05-.11-.13-.11h-1.52a.13.13 0 0 0-.14.1c-.07.2-.14.4-.22.6a.14.14 0 0 1-.1.08h-1.35l.05-.12l2-4.74a.57.57 0 0 1 .52-.39h1.21c.37 1.75.73 3.5 1.1 5.25zm-.8-3.79l-.7 1.92h1.12c-.13-.65-.27-1.28-.4-1.91z"></svg:path>`,
})
export class MageVisaSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVoicemailIcon],svg[mage-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.644 15.894a3.894 3.894 0 1 0 0-7.788a3.894 3.894 0 0 0 0 7.788m10.712 0a3.894 3.894 0 1 0 0-7.788a3.894 3.894 0 0 0 0 7.788m-10.712 0h10.712"></svg:path>`,
})
export class MageVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVoicemailFillIcon],svg[mage-voicemail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.985 12a4.65 4.65 0 0 1-4.64 4.65H6.655a4.65 4.65 0 1 1 3.41-1.5h3.88a4.64 4.64 0 1 1 8.06-3.15z"></svg:path>`,
})
export class MageVoicemailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeDownIcon],svg[mage-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.603 14.088V9.912c0-.416.143-.814.396-1.108c.253-.293.596-.458.954-.458h1.89c.237-.001.47-.073.675-.21l3.97-2.63c.205-.135.437-.205.672-.204s.467.074.671.212c.204.137.373.334.491.57c.118.237.18.506.182.78v10.273a1.8 1.8 0 0 1-.182.778a1.5 1.5 0 0 1-.49.571c-.205.137-.436.21-.672.212a1.2 1.2 0 0 1-.672-.204l-3.97-2.631a1.23 1.23 0 0 0-.675-.209h-1.89c-.358 0-.701-.165-.954-.459a1.7 1.7 0 0 1-.396-1.107"></svg:path><svg:path stroke-miterlimit="10" d="M17.831 15.715a5.344 5.344 0 0 0 0-7.559"></svg:path></svg:g>`,
})
export class MageVolumeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeDownFillIcon],svg[mage-volume-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.26 6.86v10.28c0 .385-.09.765-.26 1.11a2.2 2.2 0 0 1-.74.86a2 2 0 0 1-1.09.34a1.93 1.93 0 0 1-1.08-.33l-4-2.63a.5.5 0 0 0-.26-.08H5.94a2 2 0 0 1-1.52-.72a2.47 2.47 0 0 1-.58-1.6V9.91a2.45 2.45 0 0 1 .58-1.59a2 2 0 0 1 1.52-.72h1.93a.43.43 0 0 0 .26-.09l4-2.63a2.7 2.7 0 0 1 1.09-.33a2 2 0 0 1 1.09.34c.316.217.572.514.74.86c.153.35.224.729.21 1.11m2.61 9.715a.8.8 0 0 1-.53-.22a.75.75 0 0 1 0-1.06a4.59 4.59 0 0 0 0-6.5a.75.75 0 1 1 1.03-1.06a6.08 6.08 0 0 1 0 8.62a.8.8 0 0 1-.5.22"></svg:path>`,
})
export class MageVolumeDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeMuteIcon],svg[mage-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m20.951 9.554l-4.902 4.902m0-4.902l4.902 4.902"></svg:path><svg:path stroke-linejoin="round" d="M3.049 14.088V9.912c0-.416.142-.814.395-1.108c.253-.293.597-.458.955-.458h1.89c.236-.001.469-.073.675-.21l3.969-2.63c.205-.135.437-.205.672-.204s.467.074.671.212c.204.137.374.334.492.57c.118.237.18.506.18.78v10.273c0 .273-.062.542-.18.778a1.5 1.5 0 0 1-.492.571c-.203.137-.435.21-.67.212a1.2 1.2 0 0 1-.673-.204l-3.97-2.631a1.23 1.23 0 0 0-.674-.209h-1.89c-.358 0-.702-.165-.955-.459a1.7 1.7 0 0 1-.395-1.107"></svg:path></svg:g>`,
})
export class MageVolumeMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeMuteFillIcon],svg[mage-volume-mute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.495 13.93a.75.75 0 0 1-1.06 1.06l-1.92-1.92l-1.93 1.92a.7.7 0 0 1-.53.22a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l1.92-1.92l-1.92-1.92a.75.75 0 0 1 0-1.06a.74.74 0 0 1 1.06 0l1.93 1.92l1.92-1.92a.74.74 0 0 1 1.06 0a.75.75 0 0 1 0 1.06l-1.92 1.92zm-7.79-7.07v10.28c.002.385-.087.766-.26 1.11a2.2 2.2 0 0 1-.74.86a2 2 0 0 1-1.09.34a1.9 1.9 0 0 1-1.07-.33l-4-2.63a.56.56 0 0 0-.27-.08h-1.89a2 2 0 0 1-1.52-.72a2.47 2.47 0 0 1-.58-1.6V9.91a2.45 2.45 0 0 1 .58-1.59a2 2 0 0 1 1.52-.72h1.89a.5.5 0 0 0 .27-.09l4-2.63a2 2 0 0 1 1.08-.33a2 2 0 0 1 1.08.34c.318.217.573.514.74.86c.172.345.261.725.26 1.11"></svg:path>`,
})
export class MageVolumeMuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeUpIcon],svg[mage-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M3 14.088V9.912c0-.416.142-.814.395-1.108c.254-.293.597-.458.955-.458h1.89c.237-.001.47-.073.675-.21l3.97-2.63c.204-.135.436-.205.672-.204s.467.074.67.212c.205.137.374.334.492.57c.118.237.18.506.181.78v10.273c0 .273-.063.542-.181.778a1.5 1.5 0 0 1-.491.571c-.204.137-.435.21-.671.212a1.2 1.2 0 0 1-.673-.204l-3.969-2.631a1.23 1.23 0 0 0-.675-.209H4.35c-.358 0-.701-.165-.955-.459A1.7 1.7 0 0 1 3 14.089"></svg:path><svg:path stroke-miterlimit="10" d="M16.228 15.715a5.344 5.344 0 0 0 0-7.559m2.267 9.884a8.55 8.55 0 0 0 0-12.093"></svg:path></svg:g>`,
})
export class MageVolumeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeUpFillIcon],svg[mage-volume-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.65 6.86v10.28c.001.385-.088.765-.26 1.11a2.14 2.14 0 0 1-.74.86a2 2 0 0 1-1.09.34a1.93 1.93 0 0 1-1.08-.33l-4-2.63a.5.5 0 0 0-.26-.08H4.35a2 2 0 0 1-1.52-.72a2.45 2.45 0 0 1-.58-1.6V9.91a2.45 2.45 0 0 1 .58-1.59a2 2 0 0 1 1.52-.72h1.9a.5.5 0 0 0 .27-.09l4-2.63a2 2 0 0 1 1.08-.33a2 2 0 0 1 1.09.34c.318.217.573.514.74.86c.158.348.233.728.22 1.11m2.6 9.68a.8.8 0 0 1-.53-.22a.75.75 0 0 1 0-1.06a4.59 4.59 0 0 0 0-6.5a.75.75 0 1 1 1.06-1.06a6.08 6.08 0 0 1 0 8.62a.8.8 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M18.5 18.78a.73.73 0 0 1-.53-.22a.74.74 0 0 1 0-1.06a7.81 7.81 0 0 0 0-11a.74.74 0 0 1 0-1.06a.75.75 0 0 1 1.06 0a9.31 9.31 0 0 1 0 13.15a.74.74 0 0 1-.53.19"></svg:path>`,
})
export class MageVolumeUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeZeroIcon],svg[mage-volume-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.05 14.088V9.912c0-.416.142-.814.395-1.108c.253-.293.597-.458.955-.458h1.89c.237-.001.47-.073.675-.21l3.97-2.63c.204-.135.436-.205.672-.204s.467.074.67.212c.205.137.374.334.492.57c.118.237.18.506.181.78v10.273c0 .273-.063.542-.181.778a1.5 1.5 0 0 1-.491.571c-.204.137-.435.21-.671.212a1.2 1.2 0 0 1-.673-.204l-3.969-2.631a1.23 1.23 0 0 0-.675-.209H8.4c-.358 0-.702-.165-.955-.459a1.7 1.7 0 0 1-.395-1.107"></svg:path>`,
})
export class MageVolumeZeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVolumeZeroFillIcon],svg[mage-volume-zero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.679 6.845v10.28a2.5 2.5 0 0 1-.26 1.11a2.15 2.15 0 0 1-.75.86a1.9 1.9 0 0 1-1.08.34a1.93 1.93 0 0 1-1.08-.33l-4-2.63a.5.5 0 0 0-.26-.08h-1.83a2 2 0 0 1-1.52-.72a2.42 2.42 0 0 1-.58-1.6v-4.18a2.4 2.4 0 0 1 .58-1.59a2 2 0 0 1 1.52-.69h1.89a.43.43 0 0 0 .26-.09l4-2.63a2.1 2.1 0 0 1 1.09-.33a2 2 0 0 1 1.09.34c.317.217.572.514.74.86c.142.342.207.71.19 1.08"></svg:path>`,
})
export class MageVolumeZeroFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWaterDropIcon],svg[mage-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 13.277c0-4.525-4.59-8.481-6.81-10.136a2 2 0 0 0-2.38 0C8.59 4.796 4 8.752 4 13.277c0 5.98 5 7.973 8 7.973s8-1.993 8-7.973"></svg:path><svg:path d="M7 13.277c0 1.322.527 2.59 1.464 3.524A5 5 0 0 0 12 18.26"></svg:path></svg:g>`,
})
export class MageWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWaterDropFillIcon],svg[mage-water-drop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.631 2.523a2.82 2.82 0 0 0-3.273 0c-2.662 2.002-7.116 6.005-7.116 10.74C3.242 19.667 8.477 22 12 22s8.758-2.332 8.758-8.738c0-4.724-4.464-8.757-7.127-10.74M12 19.268a6 6 0 0 1-4.254-1.762a5.93 5.93 0 0 1-1.751-4.234a1 1 0 1 1 2.001 0a3.92 3.92 0 0 0 1.171 2.823A4 4 0 0 0 12 17.265a1 1 0 0 1 0 2.003"></svg:path>`,
})
export class MageWaterDropFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWaterGlassIcon],svg[mage-water-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.206 3H4.804a1.04 1.04 0 0 0-.788.354a1.06 1.06 0 0 0-.258.832L5.4 18.194c.09.777.46 1.492 1.04 2.01a3.12 3.12 0 0 0 2.1.796h6.97a3.12 3.12 0 0 0 2.1-.796c.58-.518.95-1.233 1.04-2.01l1.591-14.008a1.07 1.07 0 0 0-.254-.828A1.05 1.05 0 0 0 19.206 3"></svg:path><svg:path d="M4.375 9.353c2.837-1.059 5.85-2.001 8.206-.138c2.355 1.864 4.616 1.546 6.96 1.06M7.819 14.573l.24 1.705c.067.418.274.8.587 1.081a1.8 1.8 0 0 0 1.13.464l1.047.053"></svg:path></svg:g>`,
})
export class MageWaterGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWaterGlassFillIcon],svg[mage-water-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.935 3.521a1.8 1.8 0 0 0-.98-1.11a1.7 1.7 0 0 0-.74-.16H4.825a1.5 1.5 0 0 0-.74.15a1.8 1.8 0 0 0-.62.46a1.8 1.8 0 0 0-.37.66a1.75 1.75 0 0 0-.07.75l1.64 14c.11.958.57 1.84 1.29 2.48a3.85 3.85 0 0 0 2.57 1h7a3.87 3.87 0 0 0 2.58-1a4 4 0 0 0 1.28-2.48l.89-7.87v-.12l.69-6a2 2 0 0 0-.03-.76m-10.1 15.35h-1a2.88 2.88 0 0 1-1.75-.72a2.82 2.82 0 0 1-.9-1.67l-.24-1.72a1.01 1.01 0 0 1 2-.28l.24 1.7a.8.8 0 0 0 .26.48a.8.8 0 0 0 .51.21h1a1 1 0 1 1 0 2zm8-9.23c-2.11.41-3.91.49-5.82-1c-2.37-1.87-5.24-1.27-8-.29l-.5-4.24a.3.3 0 0 1 0-.13a.26.26 0 0 1 .07-.11a.2.2 0 0 1 .1-.08a.2.2 0 0 1 .12 0h14.52a.4.4 0 0 1 .1.08q.045.047.06.11a.22.22 0 0 1 0 .14z"></svg:path>`,
})
export class MageWaterGlassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWeChatIcon],svg[mage-we-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.278 8.12a7.21 7.21 0 0 0-6.991-4.454C5.27 3.666 2 6.467 2 9.914a5.88 5.88 0 0 0 2.571 4.759L3.707 16.4a.427.427 0 0 0 .59.548l2.189-1.259a8.4 8.4 0 0 0 1.849.416c.853 0 .219-1.094.317-1.608c0-3.217 3.184-5.832 7.09-5.832a.438.438 0 0 0 .536-.547m-9.727.524a1.247 1.247 0 0 1-1.247-1.247A1.247 1.247 0 0 1 7.8 7.42a1.247 1.247 0 0 1-1.25 1.224m5 0a1.247 1.247 0 1 1 .033 0z"></svg:path><svg:path fill="currentColor" d="M22 14.498c0-2.757-2.8-5-6.247-5s-6.258 2.188-6.258 5s2.811 5 6.258 5a7.5 7.5 0 0 0 1.914-.24l2.068 1.039a.416.416 0 0 0 .57-.537l-.559-1.411A4.7 4.7 0 0 0 22 14.498m-8.337-.832a.831.831 0 1 1 0-1.663a.843.843 0 0 1 .842.832a.84.84 0 0 1-.842.831m4.168 0a.832.832 0 1 1 0-1.663a.832.832 0 0 1 0 1.663"></svg:path>`,
})
export class MageWeChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWhatsappIcon],svg[mage-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.794 2.642c4.68.9 7.86 4.954 7.7 9.773c-.147 4.444-3.742 8.318-8.27 8.873a9.55 9.55 0 0 1-5.318-.86a1.37 1.37 0 0 0-.84-.082c-1.356.325-2.701.694-4.05 1.045c-.148.038-.3.064-.516.109c.405-1.482.783-2.904 1.187-4.32c.103-.358.074-.644-.091-.995c-1.575-3.345-1.438-6.627.708-9.66c2.151-3.042 5.187-4.34 8.92-3.96c.176.017.351.042.57.077m5.914 11.004c.268-1.096.3-2.207.038-3.298c-.788-3.288-2.834-5.419-6.16-6.093c-3.263-.66-6.003.44-7.936 3.138c-1.936 2.702-1.978 5.6-.38 8.503c.205.373.26.68.135 1.078c-.228.728-.405 1.472-.628 2.298c.925-.24 1.736-.47 2.558-.65c.233-.051.538-.024.742.088c4.696 2.585 10.277.2 11.63-5.064"></svg:path><svg:path fill="currentColor" d="M9.745 8.158c.179.427.3.84.51 1.203c.3.518.209.953-.205 1.318c-.445.392-.379.725-.06 1.175c.735 1.036 1.658 1.813 2.823 2.322c.32.14.563.164.77-.157c.086-.132.206-.24.306-.364c.583-.726.4-.72 1.324-.319c.291.127.582.262.851.428c.27.165.68.335.732.57c.118.52-.048 1.048-.482 1.434c-.8.712-1.72.83-2.725.552c-2.174-.6-3.846-1.904-5.127-3.71c-.452-.637-.856-1.344-1.11-2.078c-.308-.894-.09-1.756.546-2.513c.375-.445.83-.545 1.325-.426c.199.048.338.344.522.565"></svg:path>`,
})
export class MageWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWhatsappFilledIcon],svg[mage-whatsapp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageWhatsappFilled0)"><svg:path fill="currentColor" d="m13.79 2.64l-.57-.08a9.13 9.13 0 0 0-8.92 4a9.1 9.1 0 0 0-.71 9.66a1.3 1.3 0 0 1 .1 1c-.41 1.41-.79 2.83-1.19 4.32l.5-.15c1.35-.36 2.7-.72 4.05-1.05a1.45 1.45 0 0 1 .85.08a9.45 9.45 0 1 0 5.89-17.78m2.52 13.12a2.76 2.76 0 0 1-2.72.56a9.2 9.2 0 0 1-5.13-3.71a8.5 8.5 0 0 1-1.11-2.08a2.49 2.49 0 0 1 .55-2.52a1.23 1.23 0 0 1 1.32-.42c.2.05.34.34.52.56q.22.62.51 1.21a.94.94 0 0 1-.2 1.31c-.45.4-.38.73-.06 1.18a6.7 6.7 0 0 0 2.82 2.32c.32.14.56.17.77-.16c.09-.13.21-.24.31-.36c.58-.73.4-.72 1.32-.32q.44.185.85.43c.27.16.68.33.74.57a1.45 1.45 0 0 1-.49 1.43"></svg:path></svg:g><svg:defs><svg:clippath id="mageWhatsappFilled0"><svg:path fill="#fff" d="M2.5 2.5h19v19h-19z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageWhatsappFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWifiIcon],svg[mage-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.308 17.886a1.308 1.308 0 1 1-2.616 0a1.308 1.308 0 0 1 2.616 0m-5.011-3.702a5.234 5.234 0 0 1 7.406 0M5.524 11.41a9.16 9.16 0 0 1 12.952 0"></svg:path><svg:path d="M2.75 8.636a13.083 13.083 0 0 1 18.5 0"></svg:path></svg:g>`,
})
export class MageWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWrenchIcon],svg[mage-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.252 14.407a6.82 6.82 0 0 1-6.532 1.776a2.02 2.02 0 0 0-1.95.487l-4.28 4.294a.974.974 0 0 1-1.385 0l-2.067-2.069a.976.976 0 0 1 0-1.385l4.28-4.284a1.95 1.95 0 0 0 .488-1.951a6.84 6.84 0 0 1 1.912-6.65a6.82 6.82 0 0 1 6.736-1.566l-2.925 2.927c-.75.752-1.112 2.342-.341 3.103l1.715 1.727c.76.761 2.35.41 3.11-.351l2.925-2.927a6.84 6.84 0 0 1-1.686 6.869"></svg:path>`,
})
export class MageWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageWrenchFillIcon],svg[mage-wrench-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.763 11.382a7.57 7.57 0 0 1-3.47 4.693a7.56 7.56 0 0 1-5.772.827a1.27 1.27 0 0 0-.67 0a1.2 1.2 0 0 0-.57.31l-4.266 4.29a1.9 1.9 0 0 1-.56.37a1.7 1.7 0 0 1-.669.13a1.65 1.65 0 0 1-.659-.13a1.8 1.8 0 0 1-.56-.37L2.5 19.432a1.6 1.6 0 0 1-.37-.56a1.77 1.77 0 0 1 0-1.33a1.6 1.6 0 0 1 .37-.56l4.277-4.28a1.17 1.17 0 0 0 .32-.56c.06-.209.06-.43 0-.64a7.59 7.59 0 0 1 2.117-7.42a7.5 7.5 0 0 1 3.497-1.88a7.43 7.43 0 0 1 3.997.15a.74.74 0 0 1 .31 1.24L14.1 6.522a2.13 2.13 0 0 0-.56 1.41a.9.9 0 0 0 .21.63l1.719 1.73a1.1 1.1 0 0 0 .91.18a2.13 2.13 0 0 0 1.138-.53l2.918-2.93a.78.78 0 0 1 .71-.2a.75.75 0 0 1 .539.51a7.6 7.6 0 0 1 .08 4.06"></svg:path>`,
})
export class MageWrenchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageXIcon],svg[mage-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21h-3.07l7.167-8.155L2 3h6.328l4.37 5.752zm-1.076 16.172h1.7L7.404 4.732H5.58z"></svg:path>`,
})
export class MageXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageXSquareIcon],svg[mage-x-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.78 6.91l7.68 10.11h-1.19L7.51 6.91z"></svg:path><svg:path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-2.32 16.3l-3.38-4.4l-3.88 4.4H5.28l5-5.71L5 5.7h4.43l3.06 4l3.51-4h2.14L13.48 11L19 18.3z"></svg:path>`,
})
export class MageXSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageYoutubeIcon],svg[mage-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.939a26.5 26.5 0 0 0-.41-4.801a2.5 2.5 0 0 0-1.803-1.714a61 61 0 0 0-7.81-.41c-2.609-.03-5.217.11-7.808.42a2.52 2.52 0 0 0-1.76 1.76a26.4 26.4 0 0 0-.408 4.8c-.01 1.61.127 3.216.409 4.8a2.56 2.56 0 0 0 1.78 1.782c2.592.303 5.2.44 7.81.409a59 59 0 0 0 7.787-.41a2.52 2.52 0 0 0 1.759-1.758c.307-1.608.46-3.242.454-4.878m-7.411.582l-4.005 2.271a.53.53 0 0 1-.785-.464V9.616a.52.52 0 0 1 .785-.454l4.137 2.378a.52.52 0 0 1-.022.908z"></svg:path>`,
})
export class MageYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZapIcon],svg[mage-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.058 2.577l-7.941 10.74a.61.61 0 0 0-.068.597a.54.54 0 0 0 .188.235a.47.47 0 0 0 .273.084h5.986l-.907 7.023a.24.24 0 0 0 .027.135a.2.2 0 0 0 .094.09q.061.03.125.013a.2.2 0 0 0 .107-.07l7.941-10.741a.61.61 0 0 0 .068-.597a.54.54 0 0 0-.188-.234a.47.47 0 0 0-.273-.085h-5.986l.907-7.023a.24.24 0 0 0-.027-.135a.2.2 0 0 0-.094-.09a.2.2 0 0 0-.125-.013a.2.2 0 0 0-.107.07"></svg:path>`,
})
export class MageZapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZapCircleIcon],svg[mage-zap-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.196 20.731a9.511 9.511 0 0 1 0-17.424m7.609 17.424a9.511 9.511 0 0 0 0-17.424"></svg:path><svg:path d="m12.859 4.333l-6.476 8.76a.6.6 0 0 0-.098.228a.5.5 0 0 0 0 .253a.47.47 0 0 0 .155.196a.4.4 0 0 0 .22.065h4.894l-.742 5.71a.17.17 0 0 0 0 .105a.16.16 0 0 0 .073.074a.14.14 0 0 0 .098 0a.13.13 0 0 0 .09-.057l6.475-8.76a.6.6 0 0 0 .098-.236a.5.5 0 0 0-.195-.44a.4.4 0 0 0-.22-.066h-4.894l.742-5.71a.17.17 0 0 0 0-.105a.16.16 0 0 0-.074-.074a.14.14 0 0 0-.097 0a.13.13 0 0 0-.05.057"></svg:path></svg:g>`,
})
export class MageZapCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZapCircleFillIcon],svg[mage-zap-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.279 21.234q-.152 0-.293-.058a10.023 10.023 0 0 1 0-18.35a.734.734 0 1 1 .586 1.347a8.55 8.55 0 0 0 0 15.617a.74.74 0 0 1 .38.976a.72.72 0 0 1-.673.468m7.428-.029a.722.722 0 0 1-.293-1.396a8.55 8.55 0 0 0 0-15.616a.735.735 0 0 1 .585-1.347a10.014 10.014 0 0 1 0 18.35a.8.8 0 0 1-.293.01"></svg:path><svg:path fill="currentColor" d="M18.234 10.764c-.026.216-.106.42-.234.596l-6.354 8.54q-.098.122-.224.215a.9.9 0 0 1-.352.126h-.146a1 1 0 0 1-.312 0a.98.98 0 0 1-.46-.429a.4.4 0 0 1 0-.107a.8.8 0 0 1 0-.46l.616-4.704H6.864a1.14 1.14 0 0 1-1.045-.702a.5.5 0 0 1 0-.108a1.3 1.3 0 0 1 0-.605c.038-.17.112-.329.215-.468l6.325-8.56a.8.8 0 0 1 .38-.303a.98.98 0 0 1 .615 0a.98.98 0 0 1 .459.42a.6.6 0 0 1 0 .117a.8.8 0 0 1 0 .45l-.605 4.713h3.904c.214 0 .424.061.605.176c.193.129.343.312.43.527c.075.179.105.373.087.566"></svg:path>`,
})
export class MageZapCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZapFillIcon],svg[mage-zap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.745 10.5a1.4 1.4 0 0 1-.26.66l-7.94 10.73a.94.94 0 0 1-.53.35a.8.8 0 0 1-.22 0a1.1 1.1 0 0 1-.4-.08a1 1 0 0 1-.55-1l.8-6.21h-5.13a1.4 1.4 0 0 1-.7-.22a1.33 1.33 0 0 1-.46-.56a1.45 1.45 0 0 1-.1-.69c.03-.236.12-.46.26-.65l7.94-10.71a.93.93 0 0 1 .51-.34a1 1 0 0 1 .63.06a.94.94 0 0 1 .44.42a1 1 0 0 1 .11.55l-.8 6.21h5.14a1.16 1.16 0 0 1 .7.22c.194.141.35.33.45.55c.096.223.134.467.11.71"></svg:path>`,
})
export class MageZapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZapSquareIcon],svg[mage-zap-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 7.889V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083V16.11m-18.5.001v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833V7.89m10.109-3.557l-6.476 8.76a.6.6 0 0 0-.098.228a.5.5 0 0 0 0 .253a.47.47 0 0 0 .155.196a.4.4 0 0 0 .22.065h4.894l-.742 5.71a.17.17 0 0 0 0 .105a.16.16 0 0 0 .073.074a.14.14 0 0 0 .098 0a.13.13 0 0 0 .09-.057l6.475-8.76a.6.6 0 0 0 .098-.236a.5.5 0 0 0-.195-.44a.4.4 0 0 0-.22-.066h-4.894l.742-5.71a.17.17 0 0 0 0-.105a.16.16 0 0 0-.074-.074a.14.14 0 0 0-.097 0a.13.13 0 0 0-.05.057"></svg:path>`,
})
export class MageZapSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZapSquareFillIcon],svg[mage-zap-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 8.632a.74.74 0 0 1-.75-.752V5.875a2.37 2.37 0 0 0-.691-1.653a2.36 2.36 0 0 0-1.649-.693h-3.08a.75.75 0 0 1-.75-.752a.753.753 0 0 1 .75-.752h3.08a3.82 3.82 0 0 1 2.71 1.133A3.78 3.78 0 0 1 22 5.875V7.88a.753.753 0 0 1-.75.752m-3.09 13.393h-3.08a.75.75 0 0 1-.75-.752a.753.753 0 0 1 .75-.752h3.08c.619 0 1.213-.245 1.651-.683a2.35 2.35 0 0 0 .689-1.653V16.11a.753.753 0 0 1 .75-.752a.75.75 0 0 1 .75.752v2.065a3.8 3.8 0 0 1-1.13 2.717a3.86 3.86 0 0 1-2.71 1.133m-9.25 0H5.83a3.86 3.86 0 0 1-2.71-1.123A3.8 3.8 0 0 1 2 18.185V16.11a.753.753 0 0 1 .75-.752a.75.75 0 0 1 .75.752v2.065a2.33 2.33 0 0 0 .68 1.654c.44.436 1.032.681 1.65.682h3.08a.75.75 0 0 1 .75.752a.753.753 0 0 1-.75.752zM2.75 8.632A.74.74 0 0 1 2 7.88V5.875a3.78 3.78 0 0 1 1.12-2.717a3.83 3.83 0 0 1 2.71-1.133h3.08a.75.75 0 0 1 .75.752a.753.753 0 0 1-.75.752H5.83a2.34 2.34 0 0 0-1.648.69A2.35 2.35 0 0 0 3.5 5.875V7.88a.753.753 0 0 1-.75.752m15.64 2.105a1.3 1.3 0 0 1-.24.611l-6.51 8.772a1.2 1.2 0 0 1-.23.22a.9.9 0 0 1-.36.131h-.15a1 1 0 0 1-.32 0a1 1 0 0 1-.47-.44a.4.4 0 0 1 0-.111a.84.84 0 0 1 0-.471l.63-4.833h-4a1.17 1.17 0 0 1-1.07-.721a.5.5 0 0 1 0-.11a1.3 1.3 0 0 1 0-.622c.039-.174.114-.338.22-.481l6.48-8.792a.8.8 0 0 1 .39-.311a1 1 0 0 1 .63 0a1 1 0 0 1 .47.431q.006.06 0 .12a.8.8 0 0 1 0 .461l-.62 4.843h4c.22 0 .435.062.62.18c.198.132.351.32.44.541c.077.184.108.384.09.582"></svg:path>`,
})
export class MageZapSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZoomInIcon],svg[mage-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.244 17.738a7.494 7.494 0 1 0 0-14.988a7.494 7.494 0 0 0 0 14.988m5.318-2.176l5.688 5.688M10.244 6.245v7.998m3.999-3.999H6.245"></svg:path>`,
})
export class MageZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZoomInFillIcon],svg[mage-zoom-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.857 20.437l-5.23-5.22a8.27 8.27 0 1 0-1.41 1.41l5.22 5.23a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42m-7.72-9.29h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageZoomInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZoomOutIcon],svg[mage-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.244 17.738a7.494 7.494 0 1 0 0-14.988a7.494 7.494 0 0 0 0 14.988m5.318-2.176l5.688 5.688m-7.007-11.006H6.245"></svg:path>`,
})
export class MageZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageZoomOutFillIcon],svg[mage-zoom-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.785 20.35l-5.22-5.22a8.18 8.18 0 1 0-1.41 1.42l5.22 5.22a1 1 0 1 0 1.41-1.42m-15.71-9.29a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageZoomOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlignCenterIcon],svg[mage-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.286 12h11.428m-8 5.714h4.572M4 6.286h16"></svg:path>`,
})
export class MageAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlignLeftIcon],svg[mage-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.5 12h8m-8 6.25h15m-15-12.5h15"></svg:path>`,
})
export class MageAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlignRightIcon],svg[mage-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.5 12h-8m8-6.25h-15m15 12.5h-15"></svg:path>`,
})
export class MageAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAdobeIcon],svg[mage-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.443 3.104L2 20.897V3.104zm2.564 6.566l4.715 11.227h-3.084l-1.398-3.55H8.744zM22 3.104v17.793L14.653 3.104z"></svg:path>`,
})
export class MageAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
