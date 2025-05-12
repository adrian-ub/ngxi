import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrescriptionDocumentNegativeIcon],svg[healthicons-prescription-document-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPrescriptionDocumentNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27 4v11a1 1 0 0 0 1 1h11v27a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 .586V14h9.414zM18 18a1 1 0 0 0-1 1v14h2v-7h1.586l5 5l-3.293 3.293l1.414 1.414L27 32.414l3.293 3.293l1.414-1.414L28.414 31l3.293-3.293l-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18zm1 6h4a2 2 0 1 0 0-4h-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPrescriptionDocumentNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPrescriptionDocumentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrisonerIcon],svg[healthicons-prisoner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 7c.918 0 2.006-.2 3.301-.437l.253-.047C20.915 6.267 22.453 6 24 6c1.6 0 3.17.266 4.541.516l.374.069C30.162 6.814 31.177 7 32 7a1 1 0 0 1 1 1v10a9 9 0 1 1-18 0V8a1 1 0 0 1 1-1m8 18a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.871.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7m4.604-12.884c.819.135 1.637.269 2.396.34v1.371c-.618-.066-1.316-.18-2.102-.308l-.376-.062C27.152 13.235 25.59 13 24 13c-1.536 0-3.065.236-4.427.457l-.257.042c-.855.14-1.624.265-2.316.334V12.46c.831-.072 1.715-.217 2.586-.36l.308-.05c1.37-.222 2.751-.431 4.106-.431c1.412 0 2.832.21 4.201.432zM23.47 29.005C31.077 28.87 42 31.642 42 36.04V42H6v-5.96c0-4.398 10.258-6.908 17.47-7.035M37.95 34c-.807-.453-1.817-.888-2.995-1.28c-3.454-1.15-7.86-1.779-11.45-1.716c-3.433.061-7.588.694-10.823 1.808c-1.068.368-1.982.77-2.717 1.188zM40 38v2H8v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPrisonerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrisonerNegativeIcon],svg[healthicons-prisoner-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPrisonerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm42 40v-3.96c0-4.398-10.924-7.17-18.53-7.035C16.259 29.132 6 31.642 6 36.04V42h36zm-2-2v2H8v-2zm-2.05-4H9.966c.735-.419 1.649-.82 2.717-1.188c3.235-1.114 7.39-1.747 10.824-1.808c3.59-.063 7.995.566 11.45 1.716c1.177.392 2.187.827 2.995 1.28M33 8a1 1 0 0 0-1-1c-.823 0-1.838-.186-3.085-.415l-.374-.069C27.171 6.266 25.601 6 24 6c-1.547 0-3.085.267-4.446.516l-.253.047C18.006 6.8 16.918 7 16 7a1 1 0 0 0-1 1v10a9 9 0 1 0 18 0zm-9 17a7 7 0 0 0 7-7v-2.163c-.759-.071-1.578-.205-2.396-.34l-.403-.066C26.831 15.21 25.412 15 24 15c-1.355 0-2.736.209-4.106.431l-.308.05c-.872.143-1.755.288-2.586.36V18a7 7 0 0 0 7 7m4.898-11.481c.786.128 1.484.242 2.102.308v-1.371c-.759-.071-1.578-.205-2.396-.34l-.403-.065c-1.37-.223-2.789-.432-4.201-.432c-1.355 0-2.736.209-4.106.431l-.308.05c-.872.143-1.755.288-2.586.36v1.373c.692-.069 1.461-.194 2.316-.334l.257-.042C20.935 13.236 22.463 13 24 13c1.59 0 3.151.235 4.522.457z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPrisonerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPrisonerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProperRoofIcon],svg[healthicons-proper-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.707 6.293a1 1 0 0 0-1.414 0l-4.357 4.356C19.222 11.41 20.017 12 21 12s1.779-.591 2.064-1.35a1 1 0 0 1 1.872 0c.285.759 1.08 1.35 2.064 1.35s1.779-.591 2.064-1.35zm5.835 5.835C29.794 13.266 28.473 14 27 14a4.27 4.27 0 0 1-3-1.213A4.27 4.27 0 0 1 21 14c-1.473 0-2.794-.734-3.542-1.873l-5.989 5.99q.121.063.226.164c.44.426 1.112.719 1.892.719c1.507 0 2.471-1.027 2.471-2a1 1 0 1 1 2 0c0 .973.965 2 2.471 2S23 17.973 23 17a1 1 0 1 1 2 0c0 .973.964 2 2.471 2c1.506 0 2.47-1.027 2.47-2a1 1 0 1 1 2 0c0 .973.965 2 2.472 2c.78 0 1.451-.293 1.892-.72q.105-.099.226-.163zM7.293 22.293l2.824-2.824q.072.136.188.25c.83.802 2.007 1.281 3.282 1.281c1.344 0 2.627-.553 3.471-1.472c.844.919 2.127 1.472 3.471 1.472s2.627-.553 3.471-1.472c.844.919 2.127 1.472 3.471 1.472s2.627-.553 3.47-1.472c.845.919 2.128 1.472 3.472 1.472c1.276 0 2.452-.48 3.282-1.28a1 1 0 0 0 .188-.25l2.824 2.823A1 1 0 0 1 41 23c0 1.55-1.453 3-3.5 3c-1.11 0-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663s-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663s-2.018-.254-2.617-.663c-.562-.385-.883-.919-.883-1.67a1 1 0 1 0-2 0c0 .751-.321 1.285-.883 1.67c-.599.41-1.507.663-2.617.663C8.453 26 7 24.55 7 23a1 1 0 0 1 .293-.707M10.5 39.566V28c1.376 0 2.717-.308 3.747-1.013q.42-.287.753-.654q.333.368.753.654C16.783 27.692 18.124 28 19.5 28s2.717-.308 3.747-1.013q.42-.287.753-.654q.333.367.753.654C25.783 27.692 27.124 28 28.5 28s2.717-.308 3.747-1.013q.42-.287.753-.654q.333.367.753.654C34.783 27.692 36.124 28 37.5 28v11.566c0 .732-.543 1.15-.857 1.334c-.354.21-.795.355-1.226.464c-.878.223-2.007.362-3.083.453a61 61 0 0 1-4.233.182l-.074.001h-.026L28 41v-5.737c0-1.912-1.596-3.763-4-3.763s-4 1.85-4 3.763V42h-.101l-.276-.003a61 61 0 0 1-3.957-.18c-1.076-.09-2.205-.23-3.083-.453c-.431-.109-.872-.254-1.226-.464c-.314-.185-.857-.602-.857-1.334M28 41v1z"></svg:path>`,
})
export class HealthiconsProperRoofIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProperRoofNegativeIcon],svg[healthicons-proper-roof-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsProperRoofNegative0)"><svg:path d="M28 41v1z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm23.293 6.293a1 1 0 0 1 1.414 0l4.357 4.356C28.779 11.41 27.984 12 27 12s-1.779-.591-2.064-1.35a1 1 0 0 0-1.872 0C22.779 11.408 21.984 12 21 12s-1.779-.591-2.064-1.35zM27 14c1.473 0 2.794-.734 3.542-1.873l5.989 5.99q-.121.063-.226.164c-.44.426-1.112.719-1.892.719c-1.507 0-2.471-1.027-2.471-2a1 1 0 1 0-2 0c0 .973-.965 2-2.471 2S25 17.973 25 17a1 1 0 1 0-2 0c0 .973-.964 2-2.471 2c-1.506 0-2.47-1.027-2.47-2a1 1 0 1 0-2 0c0 .973-.965 2-2.472 2c-.78 0-1.451-.293-1.892-.72a1 1 0 0 0-.226-.163l5.99-5.99C18.205 13.268 19.526 14 21 14a4.27 4.27 0 0 0 3-1.213A4.27 4.27 0 0 0 27 14m-16.883 5.47l-2.824 2.823A1 1 0 0 0 7 23c0 1.55 1.453 3 3.5 3c1.11 0 2.018-.254 2.617-.663c.562-.385.883-.919.883-1.67a1 1 0 1 1 2 0c0 .751.321 1.285.883 1.67c.599.41 1.507.663 2.617.663s2.018-.254 2.617-.663c.562-.385.883-.919.883-1.67a1 1 0 1 1 2 0c0 .751.321 1.285.883 1.67c.599.41 1.507.663 2.617.663s2.018-.254 2.617-.663c.562-.385.883-.919.883-1.67a1 1 0 1 1 2 0c0 .751.321 1.285.883 1.67c.599.41 1.507.663 2.617.663c2.047 0 3.5-1.45 3.5-3a1 1 0 0 0-.293-.707l-2.824-2.824a1 1 0 0 1-.188.25c-.83.802-2.007 1.281-3.282 1.281c-1.344 0-2.627-.553-3.471-1.472c-.844.919-2.127 1.472-3.471 1.472s-2.627-.553-3.471-1.472c-.844.919-2.127 1.472-3.471 1.472s-2.627-.553-3.47-1.472C16.213 20.447 14.93 21 13.586 21c-1.275 0-2.452-.48-3.282-1.28a1 1 0 0 1-.188-.25M10.5 28v11.566c0 .732.543 1.15.857 1.334c.354.21.795.355 1.226.464c.878.223 2.007.362 3.083.453a61 61 0 0 0 4.233.182l.074.001H20v-6.737c0-1.912 1.596-3.763 4-3.763s4 1.85 4 3.763V42h.101l.276-.003a61 61 0 0 0 3.957-.18c1.076-.09 2.205-.23 3.083-.453c.431-.109.872-.254 1.226-.464c.314-.185.857-.602.857-1.334V28c-1.376 0-2.717-.308-3.747-1.013a4.3 4.3 0 0 1-.753-.654a4.3 4.3 0 0 1-.753.654C31.217 27.692 29.876 28 28.5 28s-2.717-.308-3.747-1.013a4.3 4.3 0 0 1-.753-.654a4.3 4.3 0 0 1-.753.654C22.217 27.692 20.876 28 19.5 28s-2.717-.308-3.747-1.013a4.3 4.3 0 0 1-.753-.654a4.3 4.3 0 0 1-.753.654C13.217 27.692 11.876 28 10.5 28" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsProperRoofNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsProperRoofNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateIcon],svg[healthicons-prostate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 6c0 5.169 5.544 11.027 14.09 11.803l.91.083V31.5c-.003 2.059-.032 4.286-.357 6.047c-.174.945-.468 1.977-1.047 2.815c-.646.935-1.668 1.638-3.033 1.638c-1.136 0-2.285-.495-3.238-1.082c-1.005-.62-2.026-1.485-2.94-2.523C10.575 36.338 9 33.39 9 30.007c0-2.965.516-5.746 1.43-7.86c.456-1.053 1.05-2.032 1.811-2.777c.729-.713 1.702-1.29 2.878-1.35C9.59 15.504 6 10.787 6 6z"></svg:path><svg:path fill-rule="evenodd" d="M25.91 17.803C34.456 17.027 40 11.169 40 6h2c0 4.787-3.59 9.504-9.119 12.02c1.176.06 2.15.637 2.878 1.35c.761.745 1.355 1.724 1.81 2.778c.915 2.113 1.431 4.894 1.431 7.86c0 3.381-1.574 6.33-3.385 8.387c-.914 1.038-1.934 1.903-2.94 2.523c-.953.587-2.102 1.082-3.238 1.082c-1.365 0-2.387-.703-3.033-1.638c-.579-.838-.873-1.87-1.047-2.815c-.325-1.761-.354-3.988-.357-6.047V17.886zM37 30.008" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsProstateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProstateCancerIcon],svg[healthicons-prostate-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6c0 5.169 5.544 11.027 14.09 11.803l.91.083V31.5c-.003 2.059-.032 4.286-.357 6.047c-.174.945-.468 1.977-1.047 2.815c-.646.935-1.668 1.638-3.033 1.638c-1.136 0-2.285-.495-3.238-1.082c-1.005-.62-2.026-1.485-2.94-2.523C10.575 36.338 9 33.39 9 30.007c0-2.965.516-5.746 1.43-7.86c.456-1.053 1.05-2.032 1.811-2.777c.729-.713 1.702-1.29 2.878-1.35C9.59 15.504 6 10.787 6 6zm17.91 11.803C34.456 17.027 40 11.169 40 6h2c0 4.787-3.59 9.504-9.119 12.02c1.176.06 2.15.637 2.878 1.35c.761.745 1.355 1.724 1.81 2.778c.915 2.113 1.431 4.894 1.431 7.86c0 3.381-1.574 6.33-3.385 8.387c-.914 1.038-1.934 1.903-2.94 2.522c-.953.587-2.102 1.083-3.238 1.083c-1.365 0-2.387-.703-3.033-1.638c-.579-.838-.873-1.87-1.047-2.815c-.325-1.761-.354-3.988-.357-6.047V17.886zM27 31c0 4.492.05 9 2.437 9c.482 0 1.076-.182 1.719-.518a2.78 2.78 0 0 1-1.602-1.169c-.627-.982-.423-2.12.43-2.678a5.3 5.3 0 0 1-.082-1.62c-.918-.726-1.24-1.913-.707-2.785c.533-.871 1.735-1.127 2.8-.642a5.3 5.3 0 0 1 1.48-.665c.106-1.015 1.026-1.716 2.185-1.606c.479.045.93.221 1.309.486c-.257-4.95-2.08-8.788-4.29-8.788h-.052c-1.608 0-5.627-.001-5.627 1.977z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProstateCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstIcon],svg[healthicons-provider-fst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm25 25a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm-.609-3.023l-3.184-3.184l-1.414 1.414l3.184 3.184zm-8.714-8.714l3.977 3.977l-1.414 1.415l-3.977-3.978v4.218h-2v-7.632h7.632v2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsProviderFstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFstNegativeIcon],svg[healthicons-provider-fst-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsProviderFstNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm25 25a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-4.793-5.207l3.184 3.184l-1.414 1.414l-3.184-3.184zm-1.553-1.553l-3.977-3.977h4.218v-2h-7.632v7.632h2v-4.218l3.977 3.977z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsProviderFstNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsProviderFstNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPsychologyIcon],svg[healthicons-psychology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h5.389V30.762C11.345 28.487 9 25.422 9 21.45c0-3.302 1.378-6.469 3.83-8.803S18.61 9 22.08 9a18.9 18.9 0 0 1 7.669 1.607a12 12 0 0 1 4.815 3.509a9.85 9.85 0 0 1 1.843 5.478c.01.45.004.876-.002 1.288c-.022 1.457-.04 2.74.691 4.256c0 0 2.164 1.947 1.88 3.509c-.286 1.562-3.104 1.992-3.104 1.992c0 8.409-10.7 4.9-10.7 4.9V42H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M26.27 22.455c.643 0 .439-.19.971-.543a3.27 3.27 0 0 0 1.828.53l2.066-.731a3.2 3.2 0 0 0 1.132-1.834c.15-.72.042-1.468-.306-2.119a3.26 3.26 0 0 0-1.609-1.459a3.1 3.1 0 0 0-1.128-1.765l-2.017-.687h-.227a3.24 3.24 0 0 0-1.893-1.277l-3.49-.237a3.26 3.26 0 0 0-1.925.829a3.28 3.28 0 0 0-2.507.418c-.52.33-.93.798-1.182 1.35l-1.644 1.132a3.07 3.07 0 0 0-.627 1.862c-.004.28.034.559.113.828a3.07 3.07 0 0 0 .216 4.044c.045.57.25 1.118.592 1.584a3.2 3.2 0 0 0 1.35 1.057c.622.38 1.15.89 1.542 1.495c.393.604.555 1.286.642 1.996h3.43v-3.314c-.001-.589.168-1.166.487-1.666s.498-.903 1.04-1.163a3.6 3.6 0 0 0 1.34-.873a3.26 3.26 0 0 0 1.805.543m6.064 2.795a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M21.5 32.333h-3.333v-2H21.5zm0 3.334h-3.333v-2H21.5zm0 3.333h-3.333v-2H21.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPsychologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPsychologyNegativeIcon],svg[healthicons-psychology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsPsychologyNegative0)" clip-rule="evenodd"><svg:path d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M36.404 20.882c-.022 1.457-.04 2.74.691 4.256c0 0 2.164 1.947 1.88 3.509c-.286 1.562-3.104 1.992-3.104 1.992c0 8.409-10.7 4.9-10.7 4.9V42.5h-4.757c-1.168.093-2 .072-3.188.041c-.747-.018-1.636-.041-2.837-.041V30.762C11.345 28.487 9 25.422 9 21.45c0-3.302 1.378-6.469 3.83-8.803S18.61 9 22.08 9a18.9 18.9 0 0 1 7.669 1.607a12 12 0 0 1 4.815 3.509a9.85 9.85 0 0 1 1.843 5.478c.01.45.004.876-.002 1.288m-9.53 1.351c-.13.146-.197.222-.605.222a3.26 3.26 0 0 1-1.805-.543a3.6 3.6 0 0 1-1.34.873c-.46.22-.659.544-.903.942l-.137.221c-.32.5-.488 1.077-.487 1.665v3.315h-3.43c-.087-.71-.249-1.392-.642-1.996a4.85 4.85 0 0 0-1.543-1.495a3.2 3.2 0 0 1-1.349-1.057a3.1 3.1 0 0 1-.592-1.584a3.07 3.07 0 0 1-.216-4.044a2.8 2.8 0 0 1-.113-.828a3.07 3.07 0 0 1 .627-1.862l1.643-1.133a3.15 3.15 0 0 1 1.183-1.35a3.28 3.28 0 0 1 2.508-.418a3.26 3.26 0 0 1 1.924-.828l3.49.237a3.24 3.24 0 0 1 1.893 1.277h.227l2.017.687c.572.446.97 1.069 1.128 1.765c.692.293 1.26.808 1.609 1.459c.348.651.457 1.4.306 2.119a3.2 3.2 0 0 1-1.132 1.834l-2.066.732a3.3 3.3 0 0 1-1.828-.53a1.7 1.7 0 0 0-.366.32m5.46 3.017a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-14.167 7.083H21.5v-2h-3.333zm3.333 3.334h-3.333v-2H21.5zM18.167 39H21.5v-2h-3.333z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPsychologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPsychologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterIcon],svg[healthicons-pulse-oximeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M26.447 21.066h6.51c-.084.319-.19.747-.3 1.262H29.09a2.525 2.525 0 0 0 0 5.05h2.998q-.005.622.028 1.262h-1.763a2.525 2.525 0 0 0 0 5.048h2.886q.285.65.662 1.263h-1.024a2.524 2.524 0 1 0 0 5.049H44l.013-27.344l-8.43-3.467a2.518 2.518 0 1 0-1.842 4.688l4.871 1.826c.183.069.329.18.435.314H26.774c.148.636.226 1.3.226 1.983a8.7 8.7 0 0 1-.553 3.066m-1.713-4.94a2.526 2.526 0 0 0-.355 4.694a6.72 6.72 0 0 0 .355-4.695"></svg:path><svg:path d="M4 12.5c0-.828.705-1.5 1.575-1.5H17.65c4.06 0 7.35 3.134 7.35 7s-3.29 7-7.35 7H5.575C4.705 25 4 24.328 4 23.5v-2.074a2 2 0 0 1 .41-1.213l.23-.3a2 2 0 0 0 .41-1.214V17.3a2 2 0 0 0-.41-1.213l-.23-.3A2 2 0 0 1 4 14.574zM22 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-12-2h4v4h-4zm-2-2h8v8H8z"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterAltIcon],svg[healthicons-pulse-oximeter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 10a3 3 0 0 0-3 3v4.85a2 2 0 0 0 .383 1.176l1.234 1.698A2 2 0 0 1 6 21.9v4.2a2 2 0 0 1-.383 1.176l-1.234 1.698A2 2 0 0 0 4 30.15V35a3 3 0 0 0 3 3h23c7.732 0 14-6.268 14-14s-6.268-14-14-14zm5 6h18a8 8 0 1 1 0 16H12a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1m-3 1a3 3 0 0 1 3-3h18c5.523 0 10 4.477 10 10s-4.477 10-10 10H12a3 3 0 0 1-3-3zm27 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-21-6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></svg:path><svg:path d="M14 23a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7.172 3.853c.062.055.078.109.078.147c0 .04-.018.1-.092.159l-.022.017l-2.625 2.255A.75.75 0 0 0 23 28.75h3a.75.75 0 0 0 0-1.5h-.976l1.08-.928A1.7 1.7 0 0 0 26.75 25c0-1.047-.925-1.75-1.875-1.75h-.75c-.764 0-1.478.436-1.758 1.14a.75.75 0 0 0 1.394.554c.029-.073.148-.194.364-.194h.75c.131 0 .234.047.297.103"></svg:path></svg:g>`,
})
export class HealthiconsPulseOximeterAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterAltNegativeIcon],svg[healthicons-pulse-oximeter-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPulseOximeterAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM4 13a3 3 0 0 1 3-3h23c7.732 0 14 6.268 14 14s-6.268 14-14 14H7a3 3 0 0 1-3-3v-4.85a2 2 0 0 1 .383-1.176l1.234-1.698A2 2 0 0 0 6 26.1v-4.2a2 2 0 0 0-.383-1.176l-1.234-1.698A2 2 0 0 1 4 17.85zm26 3H12a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a8 8 0 1 0 0-16m-18-2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18c5.523 0 10-4.477 10-10s-4.477-10-10-10zm21 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-20-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2zm1 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7.25 4c0-.038-.016-.091-.078-.146a.45.45 0 0 0-.297-.104h-.75c-.216 0-.335.12-.364.194a.75.75 0 1 1-1.394-.554c.28-.704.994-1.14 1.758-1.14h.75c.95 0 1.875.703 1.875 1.75a1.7 1.7 0 0 1-.646 1.322l-1.08.928H26a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.489-1.319l2.625-2.255l.022-.017c.074-.06.092-.119.092-.159" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPulseOximeterAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPulseOximeterAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPulseOximeterNegativeIcon],svg[healthicons-pulse-oximeter-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPulseOximeterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm26.447 21.066h6.51c-.084.319-.19.747-.3 1.262H29.09a2.524 2.524 0 1 0 0 5.05h2.998q-.005.622.028 1.262h-1.764a2.524 2.524 0 1 0 0 5.048h2.887q.285.65.662 1.263h-1.024a2.524 2.524 0 1 0 0 5.049H44l.013-27.344l-8.43-3.467a2.518 2.518 0 1 0-1.842 4.688l4.87 1.826c.184.069.33.18.436.314H26.774c.148.636.226 1.3.226 1.983a8.7 8.7 0 0 1-.553 3.066m-2.068-.246C23.24 23.282 20.656 25 17.65 25H5.575C4.705 25 4 24.328 4 23.5v-2.074a2 2 0 0 1 .41-1.213l.23-.3a2 2 0 0 0 .41-1.214V17.3a2 2 0 0 0-.41-1.213l-.23-.3A2 2 0 0 1 4 14.574V12.5c0-.828.705-1.5 1.575-1.5H17.65c3.378 0 6.223 2.17 7.084 5.125c.173.597.266 1.226.266 1.875a6.7 6.7 0 0 1-.621 2.82M20 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6-4h-4v4h4zm-6-2v8h8v-8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPulseOximeterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPulseOximeterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPwidIcon],svg[healthicons-pwid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m33 14.414l1.293 1.293l1.414-1.414l-4-4l-1.414 1.414L31.586 13L28.5 16.086l-2.793-2.793l-1.414 1.414L25.586 16l-5.879 5.879a3 3 0 0 0-.529 3.529l-1.31 1.31l-2.164-2.454l-7.377 7.765l4.124 2.886A6 6 0 0 0 15.89 36H31a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5v6h-3a3 3 0 0 1-3-3v-1.5h2V31a1 1 0 0 0 1 1h1v-4a2 2 0 0 0-2-2H34l-3 2h-9.464l-4 4h-2.122l5.179-5.178a3 3 0 0 0 3.528-.53L30 20.415l1.293 1.293l1.414-1.414l-2.793-2.793zm-9.021 6.022L27 17.414L28.586 19l-3.022 3.021zM16.475 33.06l-.06-.061h.12z" clip-rule="evenodd"></svg:path><svg:path d="m4 11l10.375 11.759l-7.705 8.11L4 29z"></svg:path></svg:g>`,
})
export class HealthiconsPwidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsPwidNegativeIcon],svg[healthicons-pwid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPwidNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27.707 15.293L27 14.586l-1.293-1.293l-1.414 1.414L25.586 16l-5.879 5.879a3 3 0 0 0-.529 3.529l-1.31 1.31l-2.164-2.454l-7.377 7.765l4.124 2.886A6 6 0 0 0 15.89 36H31a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5v6h-3a3 3 0 0 1-3-3v-1.5h2V31a1 1 0 0 0 1 1h1v-4a2 2 0 0 0-2-2H34l-3 2h-9.464l-4 4h-2.122l5.179-5.178a3 3 0 0 0 3.528-.53L30 20.415l1.293 1.293l1.414-1.414L31.414 19l-.707-.707l-.793-.793L33 14.414l1.293 1.293l1.414-1.414l-4-4l-1.414 1.414L31.586 13L28.5 16.086zm-3.728 5.143L27 17.414L28.586 19l-3.022 3.021zM16.475 33.06l-.06-.061h.12zM4 11l10.375 11.759l-7.705 8.11L4 29z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPwidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPwidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQIcon],svg[healthicons-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 24c0-7.732 6.268-14 14-14s14 6.268 14 14c0 3.145-1.037 6.047-2.787 8.384l2.201 2.202a2 2 0 1 1-2.828 2.828l-2.202-2.201A13.94 13.94 0 0 1 24 38c-7.732 0-14-6.268-14-14m22.343 5.515l-2.929-2.93a2 2 0 1 0-2.828 2.83l2.929 2.928A9.95 9.95 0 0 1 24 34c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10c0 2.038-.61 3.934-1.657 5.515" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQNegativeIcon],svg[healthicons-q-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsQNegative0)"><svg:path d="m29.414 26.586l2.93 2.929A9.95 9.95 0 0 0 34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10c2.038 0 3.934-.61 5.515-1.657l-2.93-2.929a2 2 0 1 1 2.83-2.828"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14c3.145 0 6.047-1.037 8.384-2.787l2.202 2.201a2 2 0 1 0 2.828-2.828l-2.201-2.202A13.94 13.94 0 0 0 38 24c0-7.732-6.268-14-14-14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQrCodeIcon],svg[healthicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 9a3 3 0 0 1 3-3h6v2H9a1 1 0 0 0-1 1v6H6zm7 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1 13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M15 23a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M20 24a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M25 27a1 1 0 1 0-2 0a1 1 0 1 0-1 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2a1 1 0 0 0 1-1a1 1 0 1 0 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path d="M24 20a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-2a1 1 0 1 0-1-1a1 1 0 0 0-1-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2a1 1 0 1 0 1 1a1 1 0 0 0 1 1"></svg:path><svg:path d="M24 18a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M23 33a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m2-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M32 24a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M31 33a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M30 30a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M31 29a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-4-14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM6 39a3 3 0 0 0 3 3h6v-2H9a1 1 0 0 1-1-1v-6H6zM42 9a3 3 0 0 0-3-3h-6v2h6a1 1 0 0 1 1 1v6h2zm0 30a3 3 0 0 1-3 3h-6v-2h6a1 1 0 0 0 1-1v-6h2z"></svg:path></svg:g>`,
})
export class HealthiconsQrCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionIcon],svg[healthicons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37.5 16.845c0-3.974-1.532-7.09-4.005-9.2c-2.41-2.057-5.533-3.013-8.572-3.132c-5.822-.228-12.885 2.725-14.363 9.328a2.5 2.5 0 1 0 4.88 1.091c.722-3.23 4.66-5.604 9.287-5.423c2.186.086 4.15.769 5.522 1.94c1.308 1.115 2.251 2.815 2.251 5.396c0 2.549-1.272 4.226-3.128 5.41c-1.946 1.242-4.388 1.813-6.046 1.929A2.5 2.5 0 0 0 21 26.678V31a2.5 2.5 0 1 0 5 0v-2.151c1.91-.388 4.102-1.128 6.062-2.378c2.916-1.861 5.438-4.964 5.438-9.626M24 36a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:path fill-rule="evenodd" d="M24 28.849a2 2 0 0 1 1.602-1.96c1.735-.353 3.68-1.017 5.384-2.104c2.495-1.593 4.514-4.126 4.514-7.94c0-3.418-1.297-5.966-3.303-7.679c-1.995-1.702-4.654-2.549-7.352-2.654c-2.574-.101-5.417.508-7.738 1.838c-2.295 1.315-4.003 3.28-4.595 5.927a.5.5 0 1 0 .976.219c1.02-4.558 6.182-7.187 11.317-6.985c2.529.099 4.956.892 6.742 2.416c1.774 1.513 2.953 3.779 2.953 6.918c0 3.388-1.766 5.638-4.052 7.097c-2.298 1.466-5.086 2.105-6.983 2.237a.5.5 0 0 0-.465.499V31a.5.5 0 1 0 1 0zM24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m9.495-30.355c2.473 2.11 4.005 5.226 4.005 9.2c0 4.662-2.522 7.765-5.438 9.626c-1.96 1.25-4.151 1.99-6.062 2.378V31a2.5 2.5 0 0 1-5 0v-4.322a2.5 2.5 0 0 1 2.326-2.494c1.658-.116 4.1-.687 6.046-1.928c1.856-1.185 3.128-2.862 3.128-5.411c0-2.581-.943-4.28-2.25-5.397c-1.372-1.17-3.337-1.853-5.523-1.939c-4.628-.181-8.565 2.193-9.287 5.423a2.5 2.5 0 1 1-4.88-1.091c1.478-6.603 8.54-9.556 14.363-9.328c3.039.12 6.162 1.075 8.572 3.132M20 40a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsQuestionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleIcon],svg[healthicons-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m7.663-31.697C33.69 13.868 35 16.23 35 19.29c0 3.52-1.954 5.954-4.19 7.445c-1.527 1.02-3.258 1.66-4.81 1.994V30a2 2 0 1 1-4 0v-3a2 2 0 0 1 1.874-1.996c1.302-.082 3.2-.584 4.716-1.596C30.054 22.431 31 21.11 31 19.29c0-1.794-.714-2.997-1.782-3.822c-1.133-.875-2.776-1.396-4.614-1.461c-1.83-.065-3.673.33-5.103 1.08c-1.43.751-2.286 1.756-2.56 2.863a2 2 0 1 1-3.883-.96c.627-2.535 2.472-4.336 4.585-5.444c2.114-1.11 4.659-1.623 7.103-1.537c2.437.087 4.956.78 6.917 2.294M22 36a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleNegativeIcon],svg[healthicons-question-circle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionCircleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-4 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9-4.71c0-3.06-1.31-5.422-3.337-6.987c-1.96-1.515-4.48-2.207-6.917-2.294c-2.444-.086-4.99.428-7.103 1.537s-3.958 2.91-4.585 5.444a2 2 0 0 0 3.884.96c.273-1.107 1.128-2.112 2.559-2.862c1.43-.75 3.272-1.146 5.103-1.081c1.838.065 3.481.586 4.614 1.461C30.286 16.293 31 17.496 31 19.29c0 1.82-.946 3.14-2.41 4.118c-1.516 1.012-3.414 1.514-4.716 1.596A2 2 0 0 0 22 27v3a2 2 0 1 0 4 0v-1.27c1.552-.335 3.283-.975 4.81-1.995c2.236-1.49 4.19-3.923 4.19-7.445M24 34a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionCircleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionCircleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionMarkIcon],svg[healthicons-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 14c2.222.017 4 1.811 4 4c0 2.2-1.795 4-4.032 4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-4.25C29.43 24.865 32 21.738 32 18c0-4.386-3.537-7.931-7.904-7.999L24.032 10h-.064l-.064.001C19.537 10.069 16 13.614 16 18a2 2 0 0 0 4 0c0-2.189 1.778-3.983 4-4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionMarkNegativeIcon],svg[healthicons-question-mark-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionMarkNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 14c2.222.017 4 1.811 4 4c0 2.2-1.795 4-4.032 4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-4.25C29.43 24.865 32 21.738 32 18c0-4.386-3.537-7.931-7.904-7.999L24.032 10h-.064l-.064.001C19.537 10.069 16 13.614 16 18a2 2 0 1 0 4 0c0-2.189 1.778-3.983 4-4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionMarkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionMarkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionNegativeIcon],svg[healthicons-question-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM33.495 7.645c2.473 2.11 4.005 5.226 4.005 9.2c0 4.662-2.522 7.765-5.438 9.626c-1.96 1.25-4.151 1.99-6.062 2.378v2.15a2.5 2.5 0 1 1-5 0v-4.321a2.5 2.5 0 0 1 2.326-2.494c1.658-.116 4.1-.687 6.046-1.928c1.856-1.185 3.128-2.862 3.128-5.411c0-2.581-.943-4.28-2.25-5.397c-1.372-1.17-3.337-1.853-5.523-1.939c-4.628-.181-8.565 2.193-9.287 5.423a2.5 2.5 0 1 1-4.88-1.091c1.478-6.603 8.54-9.556 14.363-9.328c3.039.12 6.162 1.075 8.572 3.132M20 40a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleIcon],svg[healthicons-question-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.402 42H7.598a1 1 0 0 1-.899-1.437zm4.591 15.133c1.03.684 1.807 1.793 1.807 3.28c0 1.578-.637 2.738-1.668 3.448a4.5 4.5 0 0 1-1.33.614V30.5a1.5 1.5 0 0 1-3 0v-2.441a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.228-.322a.7.7 0 0 0 .24-.272c.06-.12.13-.334.13-.707c0-.312-.123-.552-.468-.782c-.392-.26-1.022-.453-1.779-.476c-.748-.024-1.475.122-2.01.381c-.536.26-.732.552-.788.767a1.5 1.5 0 1 1-2.905-.746c.344-1.341 1.347-2.218 2.385-2.72c1.04-.505 2.263-.718 3.413-.681c1.143.036 2.363.324 3.345.977M25 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsQuestionTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionTriangleNegativeIcon],svg[healthicons-question-triangle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionTriangleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.9 6.849a1 1 0 0 0-1.8 0L6.7 40.563A1 1 0 0 0 7.598 42H40.4a1 1 0 0 0 .9-1.437zm4.598 18.412c0-1.486-.777-2.595-1.807-3.28c-.982-.653-2.201-.94-3.344-.977c-1.151-.037-2.374.176-3.414.68c-1.038.503-2.04 1.38-2.385 2.721a1.5 1.5 0 0 0 2.905.746c.056-.215.252-.507.789-.767c.534-.259 1.26-.405 2.01-.381c.756.023 1.386.216 1.778.476c.345.23.468.47.468.782c0 .373-.07.588-.13.707a.7.7 0 0 1-.24.272c-.254.175-.674.285-1.228.322a1.5 1.5 0 0 0-1.4 1.497V30.5a1.5 1.5 0 0 0 3 0v-1.176a4.5 4.5 0 0 0 1.33-.614c1.03-.71 1.668-1.87 1.668-3.449M27 36a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionTriangleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionTriangleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRIcon],svg[healthicons-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h10a8 8 0 0 1 2.954 15.437l4.835 9.669a2 2 0 0 1-3.578 1.788L24.764 26H18v10a2 2 0 1 1-4 0zm4 10h8a4 4 0 0 0 0-8h-8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRNegativeIcon],svg[healthicons-r-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRNegative0)"><svg:path d="M26 22h-8v-8h8a4 4 0 0 1 0 8"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 0 0-2 2v24a2 2 0 1 0 4 0V26h6.764l5.447 10.894a2 2 0 0 0 3.578-1.788l-4.835-9.67A8.003 8.003 0 0 0 26 10z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRadiologyIcon],svg[healthicons-radiology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm22.5 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M13 22a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-5c0-.597-.273-1.14-.57-1.556a5.7 5.7 0 0 0-1.18-1.189c-.629-.48-1.425-.914-2.25-1.123v-2.985h1.4c.99 0 2.237.395 3.312.848a19 19 0 0 1 1.76.855l.022.013l.005.002L32 32c.501-.865.501-.865.5-.866l-.003-.002l-.01-.005l-.032-.018a13 13 0 0 0-.535-.288a21 21 0 0 0-1.432-.67c-1.125-.473-2.679-1.005-4.088-1.005H25V27h.8c.749 0 1.685.215 2.485.457a17 17 0 0 1 1.311.458l.016.007l.004.001L30 27l.384-.923l-.003-.002l-.007-.003l-.025-.01l-.088-.035q-.114-.046-.317-.121c-.267-.1-.643-.23-1.079-.363c-.85-.258-2.014-.543-3.065-.543H25v-2h-2v2h-1.1c-1.2 0-2.292.284-3.069.556a11 11 0 0 0-1.206.511l-.076.04l-.023.012l-.007.004l-.003.002s-.002 0 .484.875l.485.874l.007-.003l.046-.024q.065-.034.198-.097c.177-.082.437-.194.758-.306C20.142 27.216 21 27 21.9 27H23v2.146h-1.8c-1.61 0-3.065.53-4.088 1.028a12 12 0 0 0-1.584.932l-.097.07l-.028.022l-.009.006l-.003.003h-.001c0 .001-.001.002.61.793s.611.792.61.792l.014-.01l.065-.047a10 10 0 0 1 1.3-.763c.876-.428 2.02-.825 3.211-.825H23v3.017a6.9 6.9 0 0 0-2.273 1.134a5.5 5.5 0 0 0-1.166 1.162c-.297.413-.561.947-.561 1.54h-5a1 1 0 0 1-1-1zm13.97 15.899A.4.4 0 0 1 27 38h-6a.4.4 0 0 1 .028-.1c.028-.07.077-.162.158-.274c.163-.227.416-.483.744-.73c.658-.495 1.46-.84 2.104-.896c.553.013 1.325.328 2.002.845c.332.253.595.521.766.761c.085.119.138.218.168.293" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRadiologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRadiologyNegativeIcon],svg[healthicons-radiology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRadiologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm15 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-10 2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5c0-.593.264-1.127.56-1.54a5.5 5.5 0 0 1 1.167-1.162A6.9 6.9 0 0 1 23 34.164v-3.018h-1.8c-1.19 0-2.335.398-3.212.826a10 10 0 0 0-1.299.763l-.065.047l-.013.01L16 32a66 66 0 0 1-.61-.792l.001-.001l.003-.003l.009-.006l.028-.021q.035-.028.097-.07q.124-.091.348-.236c.295-.191.718-.444 1.236-.697c1.023-.499 2.479-1.027 4.088-1.027H23V27h-1.1c-.9 0-1.758.216-2.406.444a8 8 0 0 0-1.002.427l-.007.003L18 27l-.485-.874l.001-.001l.003-.002l.008-.004l.022-.012a5 5 0 0 1 .343-.17c.227-.105.547-.243.94-.38C19.607 25.283 20.7 25 21.9 25H23v-2h2v2h.8c1.051 0 2.215.285 3.065.543a19 19 0 0 1 1.484.52l.025.01l.007.002l.003.002L30 27l-.384.923l-.004-.001l-.016-.007l-.013-.005l-.057-.023l-.276-.105a17 17 0 0 0-.965-.325c-.8-.242-1.736-.457-2.485-.457H25v2.146h1.4c1.41 0 2.963.532 4.088 1.006a21 21 0 0 1 1.968.957l.031.018l.012.007h.002L32 32l-.501.865l-.005-.002l-.023-.013l-.095-.053a19 19 0 0 0-1.664-.802c-1.075-.453-2.321-.849-3.312-.849H25v2.986c.825.21 1.621.643 2.25 1.123a5.8 5.8 0 0 1 1.18 1.189c.297.416.57.959.57 1.556h5a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1zm13 17a.4.4 0 0 0-.03-.101a1.5 1.5 0 0 0-.168-.293a3.8 3.8 0 0 0-.766-.761c-.677-.517-1.449-.832-2.002-.845c-.644.056-1.446.4-2.104.896a3.6 3.6 0 0 0-.744.73c-.08.112-.13.205-.158.275A.3.3 0 0 0 21 38z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRadiologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRadiologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultIcon],svg[healthicons-rdt-result-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 14v-2a2 2 0 1 0-4 0v2zm0 2h-4v9a2 2 0 1 0 4 0z"></svg:path><svg:path fill-rule="evenodd" d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm10 32a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0-23a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m13.593.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 30 9.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 28 9.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1m2 12a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 27zm0 9a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm6.873-10.428A1 1 0 0 1 38 26.5v5a1 1 0 1 1-2 0v-2.958a1 1 0 0 1-.721-1.692l1-1.043a1 1 0 0 1 1.094-.235" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultInvalidIcon],svg[healthicons-rdt-result-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 12v13a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm6 36a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm17.593-3.974a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 30 9.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 28 9.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1m2 12a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 27zm0 9a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm6.873-10.428A1 1 0 0 1 38 26.5v5a1 1 0 1 1-2 0v-2.958a1 1 0 0 1-.721-1.692l1-1.043a1 1 0 0 1 1.094-.235" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultInvalidNegativeIcon],svg[healthicons-rdt-result-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultInvalidNegative0)"><svg:path d="M18 40a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill-rule="evenodd" d="M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm6 0v13a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm18.85 4.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedIcon],svg[healthicons-rdt-result-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M11 23h2v2h-2a1 1 0 1 1 0-2m11 2h-2v-2h2zm-7-2h3v2h-3zm9 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m36 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidIcon],svg[healthicons-rdt-result-mixed-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M22 23h-2v2h2zm-11 0h7v2h-7a1 1 0 1 1 0-2m13 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidNegativeIcon],svg[healthicons-rdt-result-mixed-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultMixedInvalidNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-6 2h2v2h-2zm-2 2h-7a1 1 0 1 1 0-2h7zm8 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidRectangularIcon],svg[healthicons-rdt-result-mixed-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M20 23h2v2h-2zm-2 0h-7a1 1 0 1 0 0 2h7zm8 2h-2v-2h2a1 1 0 1 1 0 2m-15 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6z"></svg:path><svg:path d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm4.231.335A5 5 0 0 0 29.001 20H38a4 4 0 0 0-3.091 1.461A3.5 3.5 0 0 0 32.5 20.5c-.866 0-1.658.314-2.269.835M34 24a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-3.769 2.665A5 5 0 0 1 29.001 28h8.996a4 4 0 0 1-3.088-1.461a3.5 3.5 0 0 1-2.409.961a3.5 3.5 0 0 1-2.269-.835M42 24v-4h-4a4 4 0 0 1 4 4m0 0v4h-3.997A4 4 0 0 0 42 24M8 20a5 5 0 0 0-2 4v-4zm0 8H6v-4a4.99 4.99 0 0 0 2 4m12-5h2v2h-2zm-2 2h-7a1 1 0 1 1 0-2h7zm6-2h2a1 1 0 1 1 0 2h-2zM6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zm12-25a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H29zm-6.5 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39"></svg:path><svg:path d="M36 13v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-mixed-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultMixedInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M20 23h2v2h-2zm-2 2h-7a1 1 0 1 1 0-2h7zm8-4a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-2 2h2a1 1 0 1 1 0 2h-2zM10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedNegativeIcon],svg[healthicons-rdt-result-mixed-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultMixedNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-13 2h-2a1 1 0 1 0 0 2h2zm5 0h-3v2h3zm2 0h2v2h-2zm6 2h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm.85-18.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedRectangularIcon],svg[healthicons-rdt-result-mixed-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm13 2h-2v-2h2a1 1 0 1 1 0 2m-6-2h2v2h-2zm-2 2h-3v-2h3z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedRectangularNegativeIcon],svg[healthicons-rdt-result-mixed-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultMixedRectangularNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-13 2h-2a1 1 0 1 0 0 2h2zm5 0h-3v2h3zm2 0h2v2h-2zm6 2h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm4.85-18.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegIcon],svg[healthicons-rdt-result-neg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M11 23h2v2h-2a1 1 0 1 1 0-2m15 2H15v-2h11a1 1 0 1 1 0 2"></svg:path><svg:path fill-rule="evenodd" d="M4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m36 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidIcon],svg[healthicons-rdt-result-neg-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M26 23H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidNegativeIcon],svg[healthicons-rdt-result-neg-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNegInvalidNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h15a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidRectangularIcon],svg[healthicons-rdt-result-neg-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M26 23H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m6 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 2a.5.5 0 0 1 0 1H15v-1zM27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm3.5 2a.5.5 0 0 0 0-1H29v1z" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 0 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 0 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-neg-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultNegInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 23h15a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2m0 4a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-.15-15.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegNegativeIcon],svg[healthicons-rdt-result-neg-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNegNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-13 2h-2a1 1 0 1 0 0 2h2zm2 2h11a1 1 0 1 0 0-2H15z" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm.85-18.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegRectangularIcon],svg[healthicons-rdt-result-neg-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm2 2h11a1 1 0 1 0 0-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegRectangularNegativeIcon],svg[healthicons-rdt-result-neg-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultNegRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-18-1h-2a1 1 0 1 0 0 2h2zm2 2h11a1 1 0 1 0 0-2H15zm-7-1a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m2.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegativeIcon],svg[healthicons-rdt-result-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNegative0)"><svg:path d="M20 38a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill-rule="evenodd" d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m2 6v-2a2 2 0 1 0-4 0v2zm0 2h-4v9a2 2 0 1 0 4 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm20.85 2.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegativeNegativeIcon],svg[healthicons-rdt-result-negative-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0v48h48V0zM12.485 3a2 2 0 0 0-2 2v38a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-12zm19.709 31.68c1.4 0 2.383-.723 2.383-2.013v-.018c0-1.132-.742-1.606-2.059-1.949c-1.122-.288-1.4-.427-1.4-.854v-.018c0-.316.287-.566.834-.566c.446 0 .89.158 1.364.436a.685.685 0 0 0 .362.102a.657.657 0 0 0 .668-.659a.651.651 0 0 0-.316-.566c-.584-.37-1.27-.575-2.06-.575c-1.325 0-2.272.78-2.272 1.958v.018c0 1.29.845 1.652 2.152 1.986c1.086.278 1.308.464 1.308.826v.018c0 .38-.352.613-.937.613c-.63 0-1.168-.223-1.66-.585a.686.686 0 0 0-.408-.13a.657.657 0 0 0-.668.659c0 .223.111.427.269.538a4.19 4.19 0 0 0 2.44.78zm4.814-.313a.519.519 0 0 1-.506-.53v-3.38l-.36.097a.803.803 0 0 1-.18.028a.46.46 0 0 1-.447-.46c0-.217.133-.399.34-.462l.66-.202c.193-.056.34-.09.48-.09h.013c.28 0 .507.237.507.53v3.939c0 .293-.227.53-.507.53zm-4.815 8.993c1.401 0 2.384-.723 2.384-2.013v-.019c0-1.132-.742-1.605-2.059-1.948c-1.122-.288-1.4-.427-1.4-.854v-.018c0-.316.287-.566.834-.566c.446 0 .89.157 1.364.436a.685.685 0 0 0 .362.102a.657.657 0 0 0 .668-.659a.651.651 0 0 0-.316-.566c-.584-.371-1.27-.575-2.06-.575c-1.325 0-2.272.78-2.272 1.958v.018c0 1.29.845 1.652 2.152 1.986c1.086.278 1.308.464 1.308.825v.019c0 .38-.352.612-.937.612c-.63 0-1.168-.222-1.66-.584a.687.687 0 0 0-.408-.13a.657.657 0 0 0-.668.659c0 .222.111.426.269.538a4.19 4.19 0 0 0 2.44.78zm.038-19.239a.709.709 0 0 1-.715-.714v-4.52h-1.372a.661.661 0 0 1-.659-.658c0-.362.297-.659.659-.659h4.174c.361 0 .658.297.658.66a.661.661 0 0 1-.658.658h-1.373v4.519a.709.709 0 0 1-.714.714zm.584-8.55c1.039 0 1.725-.306 2.31-.816a.672.672 0 0 0 .24-.51a.67.67 0 0 0-.667-.66a.668.668 0 0 0-.427.158c-.408.325-.807.51-1.41.51c-1.113 0-1.883-.927-1.883-2.04v-.02c0-1.113.789-2.022 1.883-2.022c.51 0 .928.167 1.327.464a.75.75 0 0 0 .426.14c.39 0 .705-.307.705-.697c0-.25-.13-.454-.278-.566c-.538-.399-1.196-.658-2.17-.658c-1.995 0-3.386 1.512-3.386 3.358v.019c0 1.865 1.42 3.34 3.33 3.34zM20.485 11v2h-4v-2a2 2 0 0 1 4 0zm2 4v-4a4 4 0 1 0-8 0v14a4 4 0 0 0 8 0V15zm-6 10V15h4v10a2 2 0 1 1-4 0zm0 7.113a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm5 5.907a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegativeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNoTestIcon],svg[healthicons-rdt-result-no-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40 24a6 6 0 0 1-6 6h-1.434l-4.803-5.055A2 2 0 0 0 26 22h-1.035l-3.8-4H34a6 6 0 0 1 6 6m-4 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-5.248-.75a.751.751 0 1 1 .002 1.502a.751.751 0 0 1-.002-1.502" clip-rule="evenodd"></svg:path><svg:path d="M12 24a2 2 0 0 1 2-2h2.688l-3.716-3.912A6.002 6.002 0 0 0 14 30h10.29l-3.801-4H14a2 2 0 0 1-2-2"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2 0c0 5.108-2.128 9.72-5.546 12.996L11.657 10.898A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18M24 42c4.113 0 7.903-1.38 10.934-3.7L10.278 12.35A17.93 17.93 0 0 0 6 24c0 9.941 8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNoTestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNoTestNegativeIcon],svg[healthicons-rdt-result-no-test-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNoTestNegative0)"><svg:path d="M34.5 22.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M31.504 24a.751.751 0 1 0-1.502.002a.751.751 0 0 0 1.502-.002"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 5.108-2.128 9.72-5.546 12.996L11.657 10.898A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18m-14.237.945L32.566 30H34a6 6 0 0 0 0-12H21.164l3.8 4H26a2 2 0 0 1 1.763 2.945M10.278 12.35L34.934 38.3A17.92 17.92 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.443 1.61-8.51 4.278-11.65m2.694 5.738L16.688 22H14a2 2 0 1 0 0 4h6.489l3.8 4H14a6 6 0 0 1-1.028-11.912" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNoTestNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNoTestNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutStockIcon],svg[healthicons-rdt-result-out-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 6.293a1 1 0 0 1 0 1.414L25.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L24 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.415L22.586 10l-2.293-2.293a1 1 0 1 1 1.415-1.414L24 8.586l2.293-2.293a1 1 0 0 1 1.414 0m-8.509 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504z"></svg:path><svg:path fill-rule="evenodd" d="m37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996zm-3.684-2.051a1 1 0 0 0-.632-1.898l-4.5 1.5a1 1 0 0 0 .632 1.898zm-8.989-20.394a1 1 0 0 0-.654 0l-12.998 4.5l-.023.007a1 1 0 0 0-.442.325l-3.99 4.988a1 1 0 0 0 .464 1.574l13.5 4.5a1 1 0 0 0 1.135-.376L24 26.743l2.68 3.83a1 1 0 0 0 1.136.376l13.5-4.5a1 1 0 0 0 .465-1.574l-3.99-4.988a1 1 0 0 0-.466-.333zM24 23.942l9.943-3.442L24 17.058L14.057 20.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultOutStockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutStockNegativeIcon],svg[healthicons-rdt-result-out-stock-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultOutStockNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21.708 6.293a1 1 0 1 0-1.415 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L24 8.586zm-2.51 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504zM37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996zm-3.184-2.051a1 1 0 0 0-.632-1.898l-4.5 1.5a1 1 0 0 0 .632 1.898zm-9.489-20.394a1 1 0 0 0-.654 0l-12.682 4.39a1 1 0 0 0-.93.397l-3.744 5.056a1 1 0 0 0 .482 1.542l13.474 4.564a1 1 0 0 0 1.153-.393L24 26.75l2.574 3.861a1 1 0 0 0 1.153.393l13.474-4.564a1 1 0 0 0 .483-1.542l-3.745-5.056a1 1 0 0 0-.93-.397zM24 23.975l-9.936-3.478L24 17.059l9.936 3.44z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultOutStockNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultOutStockNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfIcon],svg[healthicons-rdt-result-pf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm2 2h7v-2h-7zm11 0h-2v-2h2a1 1 0 1 1 0 2"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidIcon],svg[healthicons-rdt-result-pf-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M22 23H11a1 1 0 1 0 0 2h11zm2 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m6 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5M27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H29v1h1.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidNegativeIcon],svg[healthicons-rdt-result-pf-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPfInvalidNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h11v2H11a1 1 0 1 1 0-2m13 2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path d="M17 34.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5M30.5 11a.5.5 0 0 1 0 1H29v-1z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m10 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-4.564 29.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidRectangularIcon],svg[healthicons-rdt-result-pf-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M22 23H11a1 1 0 1 0 0 2h11zm2 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-pf-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPfInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-9-1H11a1 1 0 1 0 0 2h11zm2 2h2a1 1 0 1 0 0-2h-2zM8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m2.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfNegativeIcon],svg[healthicons-rdt-result-pf-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPfNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h2v2h-2a1 1 0 1 1 0-2m11 2h-7v-2h7zm2 0h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfRectangularIcon],svg[healthicons-rdt-result-pf-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M10 24a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m14 1h2a1 1 0 1 0 0-2h-2zm-9-2h7v2h-7z"></svg:path><svg:path fill-rule="evenodd" d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfRectangularNegativeIcon],svg[healthicons-rdt-result-pf-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPfRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 23h2v2h-2a1 1 0 1 1 0-2m4 0h7v2h-7zm9 2h2a1 1 0 1 0 0-2h-2zm-13 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-.15-15.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPositiveIcon],svg[healthicons-rdt-result-positive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 14v-2a2 2 0 1 0-4 0v2zm-4 2v5h4v-5zm0 9v-2h4v2a2 2 0 1 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm10 32a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0-23a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPositiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPositiveNegativeIcon],svg[healthicons-rdt-result-positive-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPositiveNegative0)"><svg:path d="M18 40a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill-rule="evenodd" d="M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm6 0v2h-4v-2a2 2 0 1 1 4 0m-4 9v-5h4v5zm0 2v2a2 2 0 1 0 4 0v-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm18.85 4.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPositiveNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPositiveNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvIcon],svg[healthicons-rdt-result-pv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm2 2h3v-2h-3zm11 0h-6v-2h6a1 1 0 1 1 0 2"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidIcon],svg[healthicons-rdt-result-pv-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39"></svg:path><svg:path fill-rule="evenodd" d="M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H15v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1m-22 7h-2a1 1 0 1 0 0 2h2zm2 0v2h7v-2zm9 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm30-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidNegativeIcon],svg[healthicons-rdt-result-pv-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPvInvalidNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M29 24a3 3 0 0 0-3-3H11a3 3 0 1 0 0 6h15a3 3 0 0 0 3-3m-18-1h2v2h-2a1 1 0 1 1 0-2m4 2v-2h7v2zm11 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M16.5 35H15v-1h1.5a.5.5 0 0 1 0 1m14-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m7.593-12.974a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm13-22a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm-3.564 28.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 0 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidRectangularIcon],svg[healthicons-rdt-result-pv-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M18 23h-7a1 1 0 1 0 0 2h7zm2 2h6a1 1 0 1 0 0-2h-6z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-pv-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPvInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 .001h48v48H0zM6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-13-1h-7a1 1 0 1 0 0 2h7zm2 2h6a1 1 0 1 0 0-2h-6zM8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m2.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvNegativeIcon],svg[healthicons-rdt-result-pv-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPvNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 21a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6zm0 2h2v2h-2a1 1 0 1 1 0-2m7 0h-3v2h3zm2 2h6a1 1 0 1 0 0-2h-6z" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvRectangularIcon],svg[healthicons-rdt-result-pv-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M11 23h2v2h-2a1 1 0 1 1 0-2m9 2h6a1 1 0 0 0 .996-1.09l-.001-.012A1 1 0 0 0 26 23h-6zm-5 0h3v-2h-3z"></svg:path><svg:path fill-rule="evenodd" d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 0 1 2.988 3.269l-.003.038A3 3 0 0 1 26 27zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvRectangularNegativeIcon],svg[healthicons-rdt-result-pv-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPvRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 23h2v2h-2a1 1 0 1 1 0-2m7 2h-3v-2h3zm2 0h6a1 1 0 1 0 0-2h-6zm-9 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-.15-15.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsReferralIcon],svg[healthicons-referral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 6a2 2 0 0 0-2 2v1H6v19h22V9h-5V8a2 2 0 0 0-2-2zm8 12a2 2 0 0 0 2-2v-1h3v11h-5v-6h-8v6H8V15h3v1a2 2 0 0 0 2 2zM8 11h3v2H8zm18 2h-3v-2h3zm-7 9v4h-4v-4zM16 8v3h-3v2h3v3h2v-3h3v-2h-3V8z" clip-rule="evenodd"></svg:path><svg:path d="M30 27a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4m4 6c-2.67 0-8 1.462-8 4.364V40h-9c-.729 0-1.202-.263-1.503-.602C15.18 39.041 15 38.537 15 38v-3.586l3.293 3.293l1.414-1.414L14 30.586l-5.707 5.707l1.414 1.414L13 34.414V38c0 .963.32 1.959 1.003 2.727C14.702 41.513 15.729 42 17 42h25v-4.636C42 34.462 36.67 33 34 33"></svg:path></svg:g>`,
})
export class HealthiconsReferralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsReferralNegativeIcon],svg[healthicons-referral-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsReferralNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM34 31c1.934 0 3.5-1.566 3.5-3.5S35.934 24 34 24a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5m-8 6.364C26 34.462 31.33 33 34 33s8 1.462 8 4.364V42H17c-1.271 0-2.298-.487-2.997-1.273C13.32 39.959 13 38.963 13 38v-3.586l-3.293 3.293l-1.414-1.414l5-5l.707-.707l.707.707l5 5l-1.414 1.414L15 34.414V38c0 .537.18 1.041.497 1.398c.301.339.774.602 1.503.602h9zM13 6a2 2 0 0 0-2 2v1H6v19h22V9h-5V8a2 2 0 0 0-2-2zm-5 5h3v2H8zm0 4h3v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h3v11h-5v-6h-8v6H8zm18-2h-3v-2h3zm-7 9v4h-4v-4zM16 8v3h-3v2h3v3h2v-3h3v-2h-3V8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsReferralNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsReferralNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedIcon],svg[healthicons-refused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 9v16.731c0 .987 1.277 1.377 1.829.56l2.724-4.036a2.552 2.552 0 0 1 4.36 2.642l-6.938 12.816A12 12 0 0 1 22.422 44H21c-6.627 0-12-5.373-12-12V15a2 2 0 1 1 4 0v10.111h2V9a2 2 0 1 1 4 0v14h2V6a2 2 0 1 1 4 0v17h2V9a2 2 0 1 1 4 0"></svg:path>`,
})
export class HealthiconsRefusedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedNegativeIcon],svg[healthicons-refused-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRefusedNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM31 25.731V9a2 2 0 1 0-4 0v14h-2V6a2 2 0 1 0-4 0v17h-2V9a2 2 0 1 0-4 0v16.111h-2V15a2 2 0 1 0-4 0v17c0 6.627 5.373 12 12 12h1.422a12 12 0 0 0 10.553-6.287l6.938-12.816a2.552 2.552 0 0 0-4.36-2.642L32.83 26.29c-.552.817-1.829.427-1.829-.56" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRefusedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRefusedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegisterBookIcon],svg[healthicons-register-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M36.99 29.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM34.5 16v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3zM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612-2.077c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612-5.923c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3z"></svg:path><svg:path fill-rule="evenodd" d="M42 10.984q.609.134 1.243.287a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.237a.99.99 0 0 1 .757-.966q.634-.153 1.243-.287v-.46c0-.885.589-1.694 1.484-1.92c6.15-1.546 10.628.092 15.757 2.477q.375.077.759.16q.384-.083.76-.16c5.128-2.385 9.606-4.023 15.756-2.476A1.97 1.97 0 0 1 42 10.524zm-2 22.984V10.537c-5.658-1.415-9.683.135-15 2.64v23.242l.003.002l.002.001l.009.003h.003l.006-.002c4.909-2.222 9.191-3.483 14.923-2.437a.06.06 0 0 0 .047-.011zm-17.003 2.453l.003-.002V13.177c-5.317-2.504-9.342-4.055-15-2.64v23.431l.007.007a.06.06 0 0 0 .048.012c5.73-1.047 10.013.214 14.922 2.435l.008.003h.001z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRegisterBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegisterBookNegativeIcon],svg[healthicons-register-book-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRegisterBookNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25 13.177V36.42l.003.002l.01.004h.002l.008-.002c4.909-2.223 9.191-3.483 14.923-2.437a.06.06 0 0 0 .047-.011l.007-.007V10.537c-5.658-1.415-9.683.136-15 2.64m17-2.193v-.46c0-.885-.589-1.694-1.484-1.92c-6.15-1.546-10.628.092-15.757 2.477q-.375.077-.759.16q-.384-.083-.76-.16c-5.128-2.385-9.606-4.023-15.756-2.476A1.97 1.97 0 0 0 6 10.524v.46q-.609.134-1.243.287a.99.99 0 0 0-.757.965v25.539c0 .633.583 1.105 1.204.987c6.213-1.185 10.4-1.268 16.122-.4a3 3 0 0 0 5.348 0c5.721-.868 9.91-.785 16.122.4A1.012 1.012 0 0 0 44 37.775V12.236a.99.99 0 0 0-.757-.965A64 64 0 0 0 42 10.984m-19 2.193c-5.317-2.504-9.342-4.055-15-2.64v23.431l.002.002l.001.002l.004.003a.06.06 0 0 0 .048.012c5.73-1.047 10.013.213 14.922 2.435l.008.003h.001l.011-.004l.003-.002zM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612-2.077c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612-5.923c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3zm16.49 11.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM34.5 16v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRegisterBookNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRegisterBookNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegularPatientIcon],svg[healthicons-regular-patient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M34 16c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10m-10 8c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8" clip-rule="evenodd"></svg:path><svg:path d="M24 28c-6.007 0-18 3.035-18 8v6h18zm4 1h-2v5h5v-2h-1.45l.25-.25q.9-.9 1.962-1.325A5.8 5.8 0 0 1 33.95 30q1.925 0 3.487 1.1A5.93 5.93 0 0 1 39.65 34h2.1q-.7-2.675-2.862-4.337Q36.725 28 33.95 28q-1.5 0-2.975.525T28.35 30.35l-.35.4zm.35 7h-2.1q.7 2.675 2.863 4.337Q31.275 42 34.05 42q1.5 0 2.938-.562q1.437-.563 2.662-1.788l.35-.4V41h2v-5h-5v2h1.45l-.25.25q-.9.9-1.963 1.325A5.8 5.8 0 0 1 34.05 40a5.9 5.9 0 0 1-3.487-1.1A5.93 5.93 0 0 1 28.35 36"></svg:path></svg:g>`,
})
export class HealthiconsRegularPatientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsResilientAndMigrationSensitiveHealthSystemIcon],svg[healthicons-resilient-and-migration-sensitive-health-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 34.512v-6.104c.274-.03.641-.079 1.038-.15a10 10 0 0 0 1.311-.32c.415-.136.893-.336 1.263-.647s.65-.746.857-1.13c.215-.402.397-.84.542-1.234c.27-.735.437-1.381.461-1.478a1 1 0 0 0-1.036-1.25h-.004l-.007.001l-.027.002l-.095.008c-.08.007-.195.017-.335.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.31.32c-.415.136-.893.336-1.264.648q-.171.145-.318.318v-2.275c.274-.03.641-.079 1.038-.15a10 10 0 0 0 1.311-.32c.415-.136.893-.336 1.263-.647s.65-.746.857-1.13c.215-.402.397-.84.542-1.234c.27-.735.437-1.381.461-1.478a1 1 0 0 0-1.036-1.25h-.004l-.007.001l-.027.002l-.095.008c-.08.007-.195.017-.335.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.31.32c-.415.136-.893.336-1.264.647c-.37.311-.65.746-.856 1.13a8 8 0 0 0-.246.504a16 16 0 0 0-.378-1.166a10 10 0 0 0-.541-1.233c-.206-.384-.486-.818-.856-1.129c-.371-.31-.849-.511-1.264-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.506-.194l-.027-.002h-.011a1 1 0 0 0-1.036 1.25c.024.096.19.742.461 1.477c.145.393.327.832.542 1.234c.206.384.486.819.856 1.13c.371.31.849.511 1.264.647a10 10 0 0 0 1.31.32a16 16 0 0 0 1.28.175v2.568a3 3 0 0 0-.56-.636c-.37-.312-.848-.512-1.263-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.411-.187l-.095-.008l-.027-.002h-.011a1 1 0 0 0-1.036 1.25c.024.096.19.742.461 1.478c.145.393.327.83.542 1.233c.206.384.486.819.856 1.13c.371.31.849.511 1.264.647c.434.143.898.246 1.31.32a16 16 0 0 0 1.28.175v7.962a323 323 0 0 0-1.554-1.268l-.005-.004C15.33 28.264 7.749 22.102 8.006 14.304c.096-2.76 1.488-5.405 3.743-6.963c4.222-2.922 9.436-.604 12.25 2.74c2.815-3.344 8.03-5.679 12.251-2.74c2.255 1.558 3.647 4.204 3.743 6.963c.28 7.89-7.534 14.19-13.707 19.168q-.658.53-1.286 1.04"></svg:path><svg:path d="M20.053 16.322a7 7 0 0 1-.367-.818c.303.06.604.132.868.219c.333.11.523.214.601.28c.078.065.213.233.379.541c.131.246.256.53.367.819a7 7 0 0 1-.868-.22c-.333-.109-.523-.213-.601-.279c-.078-.065-.213-.233-.379-.542m5.805 2.935a8 8 0 0 0 .867-.219c.334-.11.524-.214.602-.28c.078-.065.213-.233.379-.542c.131-.245.255-.529.367-.818a8 8 0 0 0-.868.219c-.334.11-.523.214-.601.28c-.078.065-.214.233-.38.542c-.13.245-.255.529-.366.818m0 7a8 8 0 0 0 .867-.219c.334-.11.524-.214.602-.28c.078-.065.213-.233.379-.542c.131-.245.255-.529.367-.818a8 8 0 0 0-.868.219c-.334.11-.523.214-.601.28c-.078.065-.214.233-.38.542c-.13.245-.255.529-.366.818m-5.805-2.935a7 7 0 0 1-.367-.818c.303.06.604.132.868.22c.333.109.523.213.601.279c.078.065.213.233.379.542c.131.245.256.529.367.818a8 8 0 0 1-.868-.219c-.333-.11-.523-.214-.601-.28c-.078-.065-.213-.233-.379-.542m-9.876 12.685c-.389-.533-.803-.95-1.22-1.372l-1.616-1.95q-.194-.314-.385-.607c-.457-.705-.862-1.33-.938-1.97c-.096-.817.203-5.717.468-6.459c.266-.741 1.796-1.157 2.325.503c.26.819.343 1.872.418 2.828c.076.98.145 1.858.39 2.272c.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862c.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823zM16 41a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm21.774-4.993c.387-.533.8-.95 1.216-1.372c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.607c.456-.705.86-1.33.934-1.97c.096-.817.156-5.717-.108-6.459c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773zM32 41a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"></svg:path></svg:g>`,
})
export class HealthiconsResilientAndMigrationSensitiveHealthSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorIcon],svg[healthicons-respirator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 19a7 7 0 1 1 14 0v4.73a34 34 0 0 0-1.106-2.245c-.757-1.395-1.622-2.704-2.575-3.679c-.937-.958-2.09-1.724-3.416-1.724s-2.48.766-3.416 1.724c-.954.975-1.818 2.284-2.575 3.679c-.32.588-.624 1.2-.912 1.82zm16-4a9 9 0 1 0-18 0v13.402a9 9 0 0 0-.835-.71c-.573-.43-1.18-.762-1.787-.92c-.612-.16-1.29-.156-1.895.194l-3.22 1.86c-.605.349-.948.933-1.115 1.543c-.167.605-.182 1.297-.098 2.007c.17 1.425.766 3.11 1.711 4.748s2.108 2.996 3.256 3.855c.573.429 1.18.761 1.787.92c.613.16 1.29.155 1.895-.195l.008-.004l3.212-1.855c.606-.35.948-.933 1.116-1.544q.091-.337.125-.705q.047.005.095.005h9.295q.048 0 .095-.005q.034.368.126.705c.168.61.51 1.194 1.116 1.544l3.22 1.859c.605.35 1.282.353 1.895.194c.607-.159 1.214-.491 1.786-.92c1.15-.86 2.31-2.217 3.256-3.855c.946-1.639 1.542-3.323 1.711-4.748c.085-.71.07-1.402-.097-2.007c-.168-.61-.51-1.194-1.116-1.544l-.045-.025l-3.175-1.833c-.605-.35-1.282-.354-1.895-.195c-.607.159-1.214.491-1.786.92q-.321.24-.641.53zM10.945 29.55a7 7 0 0 0-.56-.38l1.028-.594c.06-.035.201-.082.496-.006c.3.079.69.271 1.143.61c.902.675 1.908 1.823 2.759 3.296c.85 1.474 1.342 2.919 1.475 4.038c.067.562.039.995-.044 1.294c-.08.294-.191.392-.253.427l-1.028.594a7 7 0 0 0-.049-.676c-.17-1.424-.765-3.109-1.711-4.747c-.946-1.639-2.107-2.996-3.256-3.856m26.476-.38l-1.028-.594c-.061-.036-.202-.083-.496-.006c-.3.079-.69.27-1.143.61c-.903.675-1.908 1.822-2.76 3.296c-.85 1.474-1.34 2.918-1.474 4.038c-.067.562-.039.995.043 1.294c.081.294.192.392.253.427l1.029.594q.007-.334.049-.677c.17-1.424.765-3.109 1.71-4.747c.947-1.638 2.108-2.996 3.257-3.856q.275-.206.56-.38M24 10a8.98 8.98 0 0 1 6.711 3.003a7.003 7.003 0 0 0-13.422 0A8.98 8.98 0 0 1 24 10m.832 18.236a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m0 3.718a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m.93-.93a.93.93 0 1 0 0-1.859a.93.93 0 0 0 0 1.86m-2.789-.93a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m.93-11.224c-.71 0-1.297.36-1.74.774c-.448.418-.844.977-1.194 1.587a1 1 0 0 0 1.734.996c.301-.524.58-.894.825-1.122c.248-.231.369-.235.375-.235s.127.004.375.235c.244.228.523.598.825 1.122a1 1 0 0 0 1.734-.996c-.35-.61-.747-1.17-1.194-1.587c-.444-.414-1.03-.773-1.74-.773m4.647 11.225a4.647 4.647 0 1 1-9.295 0a4.647 4.647 0 0 1 9.295 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRespiratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorNegativeIcon],svg[healthicons-respirator-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRespiratorNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 19v4.304c.288-.62.593-1.231.912-1.82c.757-1.394 1.621-2.703 2.575-3.678c.936-.958 2.09-1.724 3.416-1.724s2.48.766 3.416 1.724c.953.975 1.818 2.284 2.575 3.679c.392.722.762 1.48 1.106 2.245V19a7 7 0 1 0-14 0m16 0v9.22q.32-.29.64-.529c.573-.428 1.18-.761 1.787-.92c.613-.16 1.29-.155 1.895.195l3.175 1.833l.045.025c.606.35.948.934 1.116 1.544c.167.605.182 1.297.097 2.007c-.17 1.425-.765 3.11-1.71 4.748c-.947 1.638-2.108 2.996-3.257 3.855c-.572.429-1.18.761-1.786.92c-.613.16-1.29.155-1.895-.195l-3.22-1.858c-.606-.35-.948-.934-1.116-1.544a4 4 0 0 1-.126-.705a1 1 0 0 1-.095.005h-9.295q-.048 0-.095-.005q-.034.368-.125.705c-.168.61-.51 1.195-1.116 1.544L14.707 41.7l-.008.004c-.605.35-1.282.354-1.895.195c-.607-.159-1.214-.491-1.787-.92c-1.148-.86-2.31-2.217-3.256-3.855c-.945-1.639-1.54-3.323-1.71-4.748c-.085-.71-.07-1.402.097-2.007c.167-.61.51-1.194 1.115-1.544l3.22-1.859c.606-.35 1.283-.354 1.895-.194c.607.158 1.214.49 1.787.92q.419.313.835.71V15a9 9 0 1 1 18 0zM10.384 29.17q.285.174.561.38c1.149.86 2.31 2.217 3.256 3.856s1.541 3.323 1.711 4.747q.041.343.049.676l1.028-.594c.062-.035.173-.133.253-.427c.083-.299.111-.732.044-1.294c-.134-1.12-.624-2.564-1.475-4.038c-.85-1.473-1.857-2.62-2.76-3.296c-.452-.339-.842-.531-1.142-.61c-.295-.076-.435-.03-.496.006zm26.009-.594l1.028.593q-.285.173-.56.38c-1.15.86-2.31 2.218-3.256 3.856s-1.541 3.323-1.711 4.747a7 7 0 0 0-.05.677l-1.028-.594c-.061-.035-.172-.133-.253-.427c-.082-.299-.11-.732-.043-1.294c.133-1.12.624-2.564 1.475-4.038c.85-1.474 1.856-2.621 2.76-3.296c.452-.34.842-.531 1.142-.61c.294-.077.435-.03.496.006m-5.682-15.573A8.98 8.98 0 0 0 24 10a8.98 8.98 0 0 0-6.711 3.003a7.003 7.003 0 0 1 13.422 0m-6.808 16.162a.93.93 0 1 0 0-1.859a.93.93 0 0 0 0 1.86m0 3.718a.93.93 0 1 0 0-1.859a.93.93 0 0 0 0 1.86m2.788-2.788a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m-4.647.93a.93.93 0 1 0 0-1.86a.93.93 0 0 0 0 1.86m.119-11.381c.443-.414 1.03-.773 1.74-.773s1.297.359 1.74.773c.447.418.843.977 1.194 1.587a1 1 0 1 1-1.735.996c-.3-.524-.58-.894-.824-1.122c-.248-.231-.37-.235-.375-.235s-.127.004-.375.235c-.244.228-.524.598-.825 1.122a1 1 0 1 1-1.734-.996c.35-.61.746-1.17 1.194-1.587m1.74 15.098a4.647 4.647 0 1 0 0-9.295a4.647 4.647 0 0 0 0 9.295" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRespiratorNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRespiratorNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirologyIcon],svg[healthicons-respirology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.968 6h.047l-.004 5.935l-.005 7.575c0 .786.282 1.03.417 1.123a.9.9 0 0 0 .35.137l.008.001h-.015l-.004-.001h-.003c-.001 0-.002 0-.044.999l-.043.999h-.01l-.014-.001l-.036-.003l-.102-.011a2.87 2.87 0 0 1-1.518-.708q-.148.134-.306.241a2.9 2.9 0 0 1-1.315.478l-.036.003h-.023l-.002.001l-.043-1l-.043-.998h-.014l-.008.001h.007a.9.9 0 0 0 .35-.137c.136-.093.418-.338.417-1.124l-.005-7.575L22.968 6h.047H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm-7.262 8.24c3.83-.003 3.783 4.837 3.758 7.323l-.003.525c0 .507.023 1.106.048 1.76c.115 3.038.276 7.27-1.539 9.082c-2.247 2.245-6.744 3.37-8.995 1.503s1.483-20.188 6.73-20.193m8.784 7.32c-.029-2.485-.084-7.325 3.746-7.328c5.248-.005 9.012 18.31 6.764 20.181c-2.247 1.871-6.747.753-8.997-1.488c-1.818-1.81-1.664-6.041-1.554-9.079c.024-.654.046-1.253.045-1.76q0-.24-.004-.526" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRespirologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirologyNegativeIcon],svg[healthicons-respirology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRespirologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.015 6h-.047H39a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h14.015h-.047l.003 5.935l.005 7.575c0 .786-.281 1.03-.417 1.123a.9.9 0 0 1-.35.137l-.008.001h.015l.005-.001h.003l.043.999l.043.999h.01l.015-.001l.036-.003l.102-.011a2.87 2.87 0 0 0 1.518-.708q.147.134.306.241a2.9 2.9 0 0 0 1.315.478l.036.003h.02l.004.001l.043-1l.043-.998h.015l.007.001h-.006a.9.9 0 0 1-.35-.137c-.136-.093-.418-.338-.418-1.124l.005-7.575zm-3.55 15.563c.024-2.486.072-7.326-3.76-7.323c-5.247.005-8.98 18.326-6.73 20.193s6.748.742 8.995-1.503c1.815-1.812 1.654-6.044 1.539-9.081c-.025-.654-.048-1.254-.048-1.761zm8.771-7.331c-3.83.003-3.775 4.843-3.746 7.328q.004.286.004.525c0 .508-.021 1.107-.045 1.761c-.11 3.038-.264 7.27 1.554 9.08c2.25 2.24 6.75 3.358 8.997 1.487c2.248-1.87-1.516-20.186-6.764-20.181" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRespirologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRespirologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyIcon],svg[healthicons-rheumatology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27 6h-6v9.682c0 .842-.342 1.649-.948 2.234l-.421.406a2.53 2.53 0 0 0 2.89 4.084l.205-.102a2.85 2.85 0 0 1 2.548 0l.206.102a2.53 2.53 0 0 0 2.89-4.084l-.422-.406A3.1 3.1 0 0 1 27 15.68zm-8 0H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h10v-4.92c-5.263-2.012-9-7.11-9-13.08s3.737-11.068 9-13.08zm2 36h6v-9.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234zm8 0h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H29v4.92c5.263 2.012 9 7.11 9 13.08s-3.737 11.068-9 13.08z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRheumatologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyNegativeIcon],svg[healthicons-rheumatology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRheumatologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21 6h6v9.682c0 .842.342 1.649.948 2.234l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.1 3.1 0 0 0 21 15.68zM9 6h10v4.92c-5.263 2.012-9 7.11-9 13.08s3.737 11.068 9 13.08V42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m18 36h-6v-9.682c0-.842-.342-1.649-.948-2.234l-.421-.406a2.53 2.53 0 0 1 2.89-4.085l.205.103a2.85 2.85 0 0 0 2.548 0l.206-.103a2.53 2.53 0 0 1 2.89 4.085l-.422.406A3.1 3.1 0 0 0 27 32.318zm12 0H29v-4.92c5.263-2.012 9-7.11 9-13.08s-3.737-11.068-9-13.08V6h10a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRheumatologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRheumatologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonIcon],svg[healthicons-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M26.924 4c.967 0 1.866.217 2.667.675c.685.39 1.462.93 2.037 1.734l-.012.01l.01.014l2.332 3.022l.822 1.095a9.414 9.414 0 0 1-.002 11.34l-2.927 3.778l-.092-.118l-4.793-6.06l-1.21-1.563l3.018-3.9c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004l4.792 6.058l7.43 9.563a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385l-9.777-12.402l-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002l.811-1.082l2.337-3.029l.108-.141C18.007 4.85 19.852 4 21.677 4zm-8.207 8.215a6.1 6.1 0 0 1 2.869-.706h5.247c1.132 0 2.243.353 3.177.923a4.03 4.03 0 0 0 .022-4.792l-.1-.13l.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015l-.116.149a3.9 3.9 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367q.184-.116.373-.218" clip-rule="evenodd"></svg:path><svg:path d="m16.568 29.728l4.887 6.204l.005.006l1.16 1.48l-4.255 5.425a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826z"></svg:path></svg:g>`,
})
export class HealthiconsRibbonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonNegativeIcon],svg[healthicons-ribbon-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRibbonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm26.924 4c.967 0 1.866.217 2.667.675c.685.39 1.462.93 2.037 1.734l-.012.01l.01.014l2.332 3.023l.009.01l.813 1.084a9.414 9.414 0 0 1-.002 11.34l-.007.008l-2.604 3.362l-.004-.005l-.01-.013l-.011-.014l-4.782-6.046l-1.289-1.664l2.703-3.491c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004l4.792 6.058l.005.007l7.425 9.556a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385l-.001-.001l-4.703-5.97l-5.067-6.424l-.006-.007l-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002l.811-1.082l.008-.01l2.329-3.019l.108-.141C18.007 4.85 19.852 4 21.677 4zm-8.58 8.433c.974-.623 2.12-.924 3.242-.924h5.247c1.132 0 2.243.353 3.177.923a4.03 4.03 0 0 0 .022-4.792l-.1-.13l.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015l-.012.014l-.104.135a3.9 3.9 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367m3.324 24.58l.635.81l-3.938 5.02a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l5.414-6.926l.112.142l.001.001l4.698 5.963l.005.007zl-4.089 5.214a1 1 0 0 1-1.39.18L11.81 39.09l4.379 3.317a1 1 0 0 0 1.39-.18z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRibbonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRibbonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysisIcon],svg[healthicons-risk-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.134 10.5a1 1 0 0 1 1.732 0l5.02 8.703a8.935 8.935 0 0 0 7.012 12.157l2.965 5.142a1 1 0 0 1-.867 1.5H5.003a1 1 0 0 1-.866-1.5zm-.385 22.05v-2.5h2.502v2.5zM20 20.045c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 0 0 2.502 0v-5.5c0-.69-.56-1.25-1.251-1.25"></svg:path><svg:path d="M27.25 22.465q.003-.41.053-.805A6.935 6.935 0 1 1 40 26.294l4.004 4.004l-1.508 1.509l-3.922-3.922a6.9 6.9 0 0 1-4.39 1.567a6.9 6.9 0 0 1-2.702-.546a6.96 6.96 0 0 1-3.751-3.845a6.9 6.9 0 0 1-.481-2.542zm6.933 4.854a4.8 4.8 0 1 0 0-9.6a4.8 4.8 0 0 0 0 9.6"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRmnhIcon],svg[healthicons-rmnh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M33.14 13.68a3.84 3.84 0 1 0 0-7.68a3.84 3.84 0 0 0 0 7.68m3.641.933a1.5 1.5 0 0 1 1.471.613l3.472 4.908a1.5 1.5 0 0 1-.068 1.822l-3.472 4.2a1.5 1.5 0 0 1-2.312-1.912l1.173-1.418a2 2 0 0 0-.448-.913a1.944 1.944 0 1 0-1.85-.875l-1.794-.604v-1.202a1 1 0 0 0-2 0v1.92a1 1 0 0 0 .681.948l.728.245l-2.061 1.03a2 2 0 0 0-.667.538l1.802 2.276a1.5 1.5 0 0 1-2.353 1.862l-3.6-4.548a1.5 1.5 0 0 1-.165-1.602l2.364-4.728a2.5 2.5 0 0 1 1.825-1.348z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M28.087 29.134a2.397 2.397 0 0 0 4.569-1.014h.003a4.3 4.3 0 0 0 2.286-.653a2.395 2.395 0 0 0 3.612.537c.763 3.073 1.512 5.314 1.976 6.583c.224.615-.166 1.301-.816 1.38c-3.977.478-8.579.489-12.544-.01a.984.984 0 0 1-.801-1.29c.42-1.286 1.124-3.48 1.715-5.533M28 38.014V40.5a1.5 1.5 0 0 0 2.948.39l.674-2.496a40 40 0 0 1-3.622-.38m7.376.372l.676 2.505A1.5 1.5 0 0 0 39 40.5V38a42 42 0 0 1-3.624.386m-12.523-9.237a1.5 1.5 0 1 0-.706-2.916c-2.86.692-5.018 1.003-7.142.995c-2.127-.008-4.29-.336-7.168-.999a1.5 1.5 0 1 0-.674 2.924c1.706.392 3.223.685 4.668.865v4.334a2 2 0 0 0-.022.127l-.733 5.834a1.5 1.5 0 0 0 2.962.465l1.093-5.794l1.092 5.794a1.5 1.5 0 0 0 2.963-.465l-.734-5.834a2 2 0 0 0-.022-.127v-4.35c1.37-.178 2.812-.463 4.423-.853" clip-rule="evenodd"></svg:path><svg:path d="M18 23a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HealthiconsRmnhIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRmnhNegativeIcon],svg[healthicons-rmnh-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRmnhNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36.98 9.84a3.84 3.84 0 1 1-7.68 0a3.84 3.84 0 0 1 7.68 0m1.272 5.386a1.5 1.5 0 0 0-1.471-.614l-7.274 1.213a2.5 2.5 0 0 0-1.825 1.348L25.318 21.9a1.5 1.5 0 0 0 .165 1.602l3.6 4.548a1.5 1.5 0 0 0 2.353-1.862l-1.802-2.276c.175-.219.4-.404.667-.538l2.06-1.03l-.726-.245a1 1 0 0 1-.682-.948v-1.92a1 1 0 1 1 2 0v1.202l1.795.604a1.944 1.944 0 1 1 1.85.875a2 2 0 0 1 .447.913l-1.174 1.418a1.5 1.5 0 1 0 2.313 1.912l3.472-4.2a1.5 1.5 0 0 0 .069-1.822zM28.087 29.134a2.397 2.397 0 0 0 4.569-1.014h.003a4.3 4.3 0 0 0 2.286-.653a2.395 2.395 0 0 0 3.612.537c.763 3.073 1.512 5.314 1.976 6.583c.224.615-.166 1.301-.816 1.38c-3.977.478-8.579.489-12.544-.01a.984.984 0 0 1-.801-1.29c.42-1.286 1.124-3.48 1.715-5.533M28 40.5v-2.486c1.275.19 2.464.316 3.622.38l-.674 2.497A1.5 1.5 0 0 1 28 40.5m8.052.39l-.676-2.504A42 42 0 0 0 39 38v2.5a1.5 1.5 0 0 1-2.948.39m-13.2-11.741a1.5 1.5 0 1 0-.705-2.916c-2.86.692-5.018 1.003-7.142.995c-2.127-.008-4.29-.336-7.168-.999a1.5 1.5 0 0 0-.674 2.924c1.706.392 3.223.685 4.668.865v4.334a2 2 0 0 0-.022.127l-.733 5.834a1.5 1.5 0 0 0 2.962.465l1.093-5.795l1.092 5.795a1.5 1.5 0 0 0 2.963-.465l-.734-5.834a2 2 0 0 0-.022-.127v-4.35c1.37-.178 2.812-.464 4.423-.853M15 26a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRmnhNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRmnhNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningIcon],svg[healthicons-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-9.04 4.282c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a54 54 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49 49 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918a2 2 0 0 1 .403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037l-.084-.172l-4.242-5.52a2 2 0 0 1-.282-1.934z"></svg:path><svg:path d="m18.432 29.007l-1.472 3.96l-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028z"></svg:path></svg:g>`,
})
export class HealthiconsRunningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningNegativeIcon],svg[healthicons-running-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23.337 31.652l-4.242-5.521a2 2 0 0 1-.282-1.934l2.647-6.915c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a54 54 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49 49 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918c.225.294.364.644.403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037zm-6.377 1.316l1.472-3.96l2.876 3.742l-1.125 3.028a2 2 0 0 1-2.033 1.297l-7.308-.581a2 2 0 0 1 .317-3.988zM35 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterIcon],svg[healthicons-running-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 23v19h2V23h1V12H9V6H7v6H6v11zM25 7a1 1 0 0 1-1 1h-5v3h6v13H12V11h5V8h-5a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1m5 4c5.523 0 10 4.477 10 10v3h2v6H28v-6h2v-1a2 2 0 0 0-2-2h-1V11zm5.5 31c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42"></svg:path><svg:path fill-rule="evenodd" d="M9 6H7v6H6v11h1v19h2V23h1V12H9zm26.5 28.988q-.07.09-.137.183c-.81 1.105-1.363 2.26-1.363 3.193c0 .976.743 1.636 1.5 1.636s1.5-.66 1.5-1.636c0-.932-.552-2.087-1.363-3.193zM29.732 22c.17.294.268.636.268 1v1h-2v6h14v-6h-2v-3c0-5.523-4.477-10-10-10h-3v10h1a2 2 0 0 1 1.732 1M29 19.126c1.725.444 3 2.01 3 3.874v3h-2v2h10v-2h-2v-5a8 8 0 0 0-8-8h-1zM14 13v9h9v-9zm11-2v13H12V11h5V8h-5a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2h-5v3zm14 27.364C39 40.372 37.433 42 35.5 42S32 40.372 32 38.364C32 35.182 35.5 32 35.5 32s3.5 3.182 3.5 6.364" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRunningWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterAltIcon],svg[healthicons-running-water-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26 12a2 2 0 1 0-4 0v12h4zm2 8v-8a4 4 0 0 0-8 0v8h-6v-1h4v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5h4v1H7a2 2 0 0 0-2 2v3H4v2h15v3h10v-3h15v-2h-1v-3a2 2 0 0 0-2-2h-4v-1h4v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5h4v1zm-1 6h-6v2h6zm1 12a4 4 0 0 1-8 0c0-3.5 4-7 4-7s4 3.5 4 7M13 17h-1v-2h-2v2H9v-3h7v3h-1v-2h-2zm22 0h1v-2h2v2h1v-3h-7v3h1v-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRunningWaterAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterAltNegativeIcon],svg[healthicons-running-water-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningWaterAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0L0-.04l-.04 48l48 .04zM23.992 9.98a2 2 0 0 1 1.998 2.002l-.006 8l-.004 4l-4-.003l.004-4l.006-8a2 2 0 0 1 2.002-1.999m3.998 2.004l-.006 8l6 .004v-1l-2-.001l-2-.002l.002-2l.002-3a2 2 0 0 1 2.002-1.998l7 .006a2 2 0 0 1 1.999 2.001l-.003 3l-.002 2l-2-.001l-2-.002v1l4 .003a2 2 0 0 1 1.998 2.002l-.002 3h1l-.002 2h-1l-14-.012v1l-.003 2l-2-.001l-6-.005l-2-.002l.002-2v-1l-14-.011l-1-.001l.003-2h1l.002-3a2 2 0 0 1 2.002-1.998l4 .004v-1l-2-.002l-2-.002l.002-2l.003-3a2 2 0 0 1 2.001-1.998l7 .006a2 2 0 0 1 1.998 2.001l-.002 3l-.002 2l-2-.001l-2-.002v1l6 .005l.006-8a4 4 0 1 1 8 .007m-1.01 13.999l-.001 1v1l-6-.005v-2h1l4 .004zM23.966 41.98a4 4 0 0 0 4.003-3.996c.003-3.5-3.994-7.004-3.994-7.004s-4.003 3.497-4.006 6.997a4 4 0 0 0 3.997 4.003m-11.98-25.01l1 .001l.002-2l2 .002l-.002 2h1l.002-3l-7-.005l-.002 3h1l.002-2l2 .002zm24 .02h-1l.002-2l-2-.002l-.002 2l-1-.001l.002-3l7 .006l-.002 3l-1-.001l.002-2l-2-.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningWaterAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningWaterAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterNegativeIcon],svg[healthicons-running-water-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningWaterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm7 42V23H6V12h1V6h2v6h1v11H9v19zM19 8h5a1 1 0 1 0 0-2H12a1 1 0 1 0 0 2h5v3h-5v13h13V11h-6zm9 16v6h14v-6h-2v-3c0-5.523-4.477-10-10-10h-3v10h1a2 2 0 0 1 2 2v1zm7.5 18c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningWaterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningWaterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeIcon],svg[healthicons-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4h-3.07a8 8 0 0 1 .818 2H30a2 2 0 1 1 0 4h-2.252a8.01 8.01 0 0 1-6.121 5.834l6.037 9.057a2 2 0 1 1-3.328 2.218l-8-12A2 2 0 0 1 18 22h2c1.48 0 2.773-.804 3.465-2H18a2 2 0 1 1 0-4h5.465A4 4 0 0 0 20 14h-2a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRupeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeNegativeIcon],svg[healthicons-rupee-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRupeeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 10a2 2 0 1 0 0 4h2c1.48 0 2.773.804 3.465 2H18a2 2 0 1 0 0 4h5.465A4 4 0 0 1 20 22h-2a2 2 0 0 0-1.664 3.11l8 12a2 2 0 1 0 3.328-2.22l-6.037-9.056A8.01 8.01 0 0 0 27.748 20H30a2 2 0 1 0 0-4h-2.252a8 8 0 0 0-.818-2H30a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRupeeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRupeeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostIcon],svg[healthicons-rural-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M25 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm9 3h-2v-2h-2v2h-2v2h2v2h2v-2h2z" clip-rule="evenodd"></svg:path><svg:path d="M5 12h18v6H8v19h21V25h8v12h3V18h-1v-6h4v2h-1v23h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1V14H5z"></svg:path><svg:path d="M27 34H10v-2h1v-7h15v7h1z"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltIcon],svg[healthicons-rural-post-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.172 21.102A4.86 4.86 0 0 0 8 26.081V42h4V29h8v13h20V26.077a4.86 4.86 0 0 0 1.823-4.976l-1.113-4.875a1.52 1.52 0 0 0-1.479-1.179H31v-5a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v5H8.764c-.707 0-1.321.49-1.479 1.18zm1.95.445l1.027-4.499h4.627v5.137a2.863 2.863 0 1 1-5.654-.637m7.827-4.499h1.177c.444 1.725 2.01 3 3.874 3h1.911v1.52a3.481 3.481 0 0 1-6.962 0zm9.05-7.5a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2H23v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 1 0 0-2H25zm.085 12.02v-1.52H27a4 4 0 0 0 3.874-3h1.172v4.52a3.481 3.481 0 0 1-6.962 0m9.135-4.52h4.627l1.028 4.5a2.863 2.863 0 1 1-5.655.637zm-10.22 12h13v10H24zm11 2h-9v6h9z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRuralPostAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltNegativeIcon],svg[healthicons-rural-post-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRuralPostAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6.172 21.102A4.86 4.86 0 0 0 8 26.081V42h4V29h8v13h20V26.077a4.86 4.86 0 0 0 1.824-4.976l-1.114-4.875a1.52 1.52 0 0 0-1.479-1.179H31v-5a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v5H8.764c-.707 0-1.321.49-1.479 1.18zm10.954-4.054h-1.177v4.52a3.481 3.481 0 0 0 6.962 0v-1.52H21a4 4 0 0 1-3.874-3m7.958 3v1.52a3.481 3.481 0 0 0 6.962 0v-4.52h-1.172a4 4 0 0 1-3.874 3zm.916 11h9v6h-9zm-2-2h13v10H24zm-14.85-12l-1.028 4.5a2.863 2.863 0 1 0 5.654.637v-5.137zm29.696 0H34.22v5.137a2.863 2.863 0 1 0 5.655-.637zM24 8.548a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H25v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H23v-2.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRuralPostAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRuralPostAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostNegativeIcon],svg[healthicons-rural-post-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRuralPostNegative0)"><svg:path d="M32 12h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm23 11H5v2h1v23H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-1V13h1v-2h-4v6h1v19h-3V24h-8v12H8V17h15zm3 13H11v7h-1v2h17v-2h-1zm1-15h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRuralPostNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRuralPostNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxIcon],svg[healthicons-rx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m12-10a1 1 0 0 1 1-1h6a5 5 0 0 1 .398 9.984L28 27.586l4.293-4.293l1.414 1.414L29.414 29l4.293 4.293l-1.414 1.414L28 30.414l-4.293 4.293l-1.414-1.414L26.586 29l-6-6H18v7h-2zm7 7h-5v-6h5a3 3 0 1 1 0 6" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxNegativeIcon],svg[healthicons-rx-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRxNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-7 9a1 1 0 0 0-1 1v16h2v-7h2.586l6 6l-4.293 4.293l1.414 1.414L28 30.414l4.293 4.293l1.414-1.414L29.414 29l4.293-4.293l-1.414-1.414L28 27.586l-4.602-4.602A5 5 0 0 0 23 13zm1 8h5a3 3 0 1 0 0-6h-5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRxNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRxNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSIcon],svg[healthicons-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 14a4 4 0 0 0 0 8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-7.544-5.334a2 2 0 0 1 3.771-1.332A4 4 0 0 0 22 34h4a4 4 0 0 0 0-8h-4a8 8 0 1 1 0-16h4a8 8 0 0 1 7.544 5.334a2 2 0 0 1-3.771 1.332A4 4 0 0 0 26 14z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSNegativeIcon],svg[healthicons-s-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 18a4 4 0 0 1 4-4h4a4 4 0 0 1 3.773 2.666a2 2 0 0 0 3.771-1.332A8 8 0 0 0 26 10h-4a8 8 0 1 0 0 16h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-3.773-2.666a2 2 0 0 0-3.771 1.332A8 8 0 0 0 22 38h4a8 8 0 1 0 0-16h-4a4 4 0 0 1-4-4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadIcon],svg[healthicons-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.743 20.35c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.666c.504-.763.711-1.692.48-2.381a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076-.001c.119.738-.382 1.445-1.065 1.883c-.714.457-1.731.707-2.93.53a3.8 3.8 0 0 1-2.653-1.666c-.504-.763-.712-1.692-.48-2.381a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39M33.258 31c-1.72-3.562-5.22-6-9.258-6s-7.538 2.438-9.258 6c-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2"></svg:path><svg:path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0-2c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadNegativeIcon],svg[healthicons-sad-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsSadNegative0)" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0-15c4.038 0 7.538 2.438 9.258 6c.469.97-.316 2-1.394 2H16.136c-1.078 0-1.863-1.03-1.394-2c1.72-3.562 5.22-6 9.258-6m-9.304-2.762c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m17.947 0c.682-.438 1.183-1.145 1.064-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.8 3.8 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53"></svg:path><svg:path d="M0 0h48v48H0zm24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSadNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSadNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressIcon],svg[healthicons-sayana-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 4l-2 2v5h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2zm0 7h-2v8h-1v1a1 1 0 0 0 1 1v3h2v-3a1 1 0 0 0 1-1v-1h-1zm-1 25a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-1 2v2h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressNegativeIcon],svg[healthicons-sayana-press-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSayanaPressNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23 6l2-2v7h-2zm-1 13h1v-8h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2v8h1v1a1 1 0 0 1-1 1v3h-2v-3a1 1 0 0 1-1-1zm2 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-1 2v2h2v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSayanaPressNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSayanaPressNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationIcon],svg[healthicons-secure-communication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 20.5C4 12.492 10.492 6 18.5 6h11C37.508 6 44 12.492 44 20.5S37.508 35 29.5 35H28v7l-2.5-.5C9 37.5 4 28.508 4 20.5M27.333 18H29v9H19v-9h1.667v-2.77c0-1.554 1.492-2.813 3.333-2.813s3.333 1.259 3.333 2.812zM24 14.417c.47 0 .841.161 1.067.352c.222.187.266.357.266.46v2.688h-2.666v-2.688c0-.103.044-.273.266-.46c.226-.19.597-.352 1.067-.352" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSecureCommunicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationNegativeIcon],svg[healthicons-secure-communication-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM18.5 6C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6z" clip-rule="evenodd"></svg:path><svg:path d="M19 18h10v9H19z"></svg:path><svg:path fill-rule="evenodd" d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46M24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecureCommunicationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecurityWorkerIcon],svg[healthicons-security-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12 .403a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.314 7.78c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0M24 20c2.721 0 4.624-.314 5.952-.766q.047.376.048.766a6 6 0 1 1-11.952-.766c1.329.452 3.23.766 5.952.766m1.5 10a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224l.577 2.885l4.24-6.36q.436 0 .804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.714-6.325 11.118-7.558c-.019.004.184.007.555.01l4.284 6.425l.543-2.935l-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1zm9.5 5.333s-1.333-.666-2-1.333c-.667.667-2 1.333-2 1.333S31.698 38 33 38s2-2.667 2-2.667" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSecurityWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecurityWorkerNegativeIcon],svg[healthicons-security-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSecurityWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.118 30c-.019.004.184.007.555.01l4.284 6.425l.543-2.935l-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224l.577 2.885l4.24-6.36q.436 0 .804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.714-6.325 11.118-7.558M33 34c.667.667 2 1.333 2 1.333S34.302 38 33 38s-2-2.667-2-2.667s1.333-.666 2-1.333m-1.186-15.72c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0M24.096 20c2.67-.007 4.543-.32 5.856-.766q.047.376.048.766a6 6 0 1 1-11.952-.766c1.313.447 3.186.759 5.856.766zM13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12 .403a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSecurityWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSecurityWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthIcon],svg[healthicons-sexual-reproductive-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 1 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863"></svg:path><svg:path d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0"></svg:path><svg:path d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.902-18.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 0 1 .791-1.837a7 7 0 1 0 4.673-13.165"></svg:path><svg:path d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 1 1-.026-2l6.026-.076l-.076 6.026a1 1 0 0 1-1.013.987"></svg:path></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthNegativeIcon],svg[healthicons-sexual-reproductive-health-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSexualReproductiveHealthNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 0 1 1.977-.304A9 9 0 0 1 16 30.944V33h2a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0v-4h-2a1 1 0 1 1 0-2h2v-2q0-.028.002-.055a9 9 0 0 1-6.024-3.316a9 9 0 0 1 10.295-14.013a1 1 0 1 1-.727 1.863m6.86.018a7 7 0 1 1-.177 12.93a1 1 0 1 0-.791 1.837a9 9 0 0 0 11.018-13.306l5.513-5.514l-.032 2.542a1 1 0 1 0 2 .026l.076-6.026l-6.026.076a1 1 0 1 0 .026 2l2.542-.032l-5.401 5.401a9 9 0 0 0-13.89 1.967a9 9 0 0 0-1.201 5.662a1 1 0 0 0 1.986-.236a7 7 0 0 1 4.357-7.327" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSexualReproductiveHealthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoIcon],svg[healthicons-simple-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.089 29.344c0 8.033 6.472 14.546 14.455 14.546C32.528 43.89 39 37.377 39 29.344C39 18.435 24.544 3.89 24.544 3.89S10.09 18.435 10.09 29.344m20.286 4.114a1.755 1.755 0 0 1 2.471-.325a1.78 1.78 0 0 1 .323 2.486l-.242.318c-4.233 5.537-12.532 5.537-16.765 0l-.242-.318a1.78 1.78 0 0 1 .322-2.486a1.755 1.755 0 0 1 2.472.325l.242.318c2.822 3.691 8.355 3.691 11.177 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSimpleLogoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoNegativeIcon],svg[healthicons-simple-logo-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSimpleLogoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.544 44c-7.983 0-14.455-6.512-14.455-14.545C10.089 18.545 24.544 4 24.544 4S39 18.546 39 29.455C39 37.488 32.528 44 24.544 44m8.302-10.756a1.755 1.755 0 0 0-2.47.325l-.244.317c-2.821 3.692-8.354 3.692-11.176 0l-.243-.317a1.755 1.755 0 0 0-2.47-.325a1.78 1.78 0 0 0-.324 2.486l.243.317c4.233 5.538 12.532 5.538 16.764 0l.243-.317a1.78 1.78 0 0 0-.323-2.486" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSimpleLogoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSimpleLogoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonIcon],svg[healthicons-skeleton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M16.615 17.348c0 2.035 1.385 2.487 1.847 2.487s.615 1.356.615 2.26c0 .776 1.921.887 3.923.902V24.5h-6.5c-2.892 0-4.268 2.146-4.882 3.923a11.7 11.7 0 0 0-.541 2.447a12 12 0 0 0-.077 1.1V32a1 1 0 0 0 2 0v-.05l.008-.18c.007-.16.023-.391.056-.671a9.7 9.7 0 0 1 .444-2.022c.51-1.474 1.384-2.577 2.992-2.577H23v1.209c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27v1.997c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27V36h-4c-1.108 0-1.939.527-2.513 1.24c-.549.68-.876 1.538-1.08 2.32C15 41.122 15 42.723 15 42.996V43a1 1 0 1 0 2 0c0-.241.002-1.63.343-2.935c.17-.656.406-1.204.701-1.57c.27-.335.564-.495.956-.495h10c.392 0 .686.16.956.495c.295.366.53.914.701 1.57c.34 1.305.343 2.694.343 2.935a1 1 0 1 0 2 0v-.004c0-.273 0-1.874-.407-3.436c-.204-.782-.531-1.64-1.08-2.32C30.939 36.527 30.108 36 29 36h-4v-2.287c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33v-1.996c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33V26.5h6.5c1.608 0 2.482 1.104 2.992 2.577a9.7 9.7 0 0 1 .444 2.022a10 10 0 0 1 .064.893v.009A1 1 0 0 0 37 32h-1c1 0 1-.002 1-.002v-.028l-.001-.051v-.015l-.009-.233c-.01-.196-.029-.472-.067-.801a11.7 11.7 0 0 0-.54-2.447c-.615-1.776-1.99-3.923-4.883-3.923H25v-1.503c2.002-.015 3.923-.126 3.923-.901c0-.905.577-2.261.616-2.261c.038 0 1.846-.453 1.846-2.487c0-.805.252-1.186.558-1.646C32.41 15 33 14.112 33 11.243c0-9.657-18-9.657-18 0c0 2.87.59 3.757 1.057 4.46c.306.46.558.84.558 1.645m2.08.498l-.01-.021c-.023-.054-.07-.198-.07-.477c0-1.484-.657-2.43-.968-2.877q-.078-.112-.12-.181c-.174-.292-.527-.931-.527-3.047c0-1.701.756-2.933 1.976-3.806C20.256 6.522 22.074 6 24 6s3.745.522 5.024 1.437C30.244 8.31 31 9.542 31 11.243c0 2.116-.353 2.755-.526 3.047q-.043.07-.121.18c-.31.447-.968 1.394-.968 2.878c0 .2-.042.293-.06.327a.4.4 0 0 1-.103.12a.7.7 0 0 1-.16.096l-.006.003a2 2 0 0 0-1.042.644a2 2 0 0 0-.301.461a5 5 0 0 0-.13.286a10 10 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096c-1.146 0-2.201-.003-2.99-.087a8 8 0 0 0-.111-.703a4 4 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkeletonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonNegativeIcon],svg[healthicons-skeleton-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSkeletonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.462 19.835c-.462 0-1.847-.453-1.847-2.487c0-.805-.252-1.186-.558-1.646C15.59 15 15 14.112 15 11.243c0-9.657 18-9.657 18 0c0 2.87-.59 3.757-1.057 4.46c-.306.46-.558.84-.558 1.645c0 2.035-1.808 2.487-1.847 2.487s-.615 1.356-.615 2.26c0 .776-1.921.887-3.923.902V24.5h6.5c2.892 0 4.268 2.146 4.883 3.923c.312.904.465 1.793.54 2.447A12 12 0 0 1 37 31.904v.066l.001.02v.008S37 32 36 32h1a1 1 0 0 1-2 .001v-.009a5 5 0 0 0-.008-.222a10 10 0 0 0-.056-.671a9.7 9.7 0 0 0-.444-2.022c-.51-1.474-1.384-2.577-2.992-2.577H25v1.209c.834.047 1.65.156 2.365.33c.5.121.98.282 1.392.495c.401.206.82.502 1.091.936a1 1 0 0 1-1.696 1.06s-.015-.023-.066-.065a1.4 1.4 0 0 0-.244-.153a4.4 4.4 0 0 0-.95-.33a11.3 11.3 0 0 0-1.892-.27v1.997c.834.047 1.65.156 2.365.33c.5.121.98.282 1.392.495c.401.206.82.502 1.091.936a1 1 0 0 1-1.696 1.06s-.015-.023-.066-.065a1.4 1.4 0 0 0-.244-.153a4.4 4.4 0 0 0-.95-.33a11.3 11.3 0 0 0-1.892-.27V36h4c1.108 0 1.939.527 2.513 1.24c.549.68.876 1.538 1.08 2.32c.407 1.562.407 3.163.407 3.436V43a1 1 0 1 1-2 0c0-.241-.002-1.63-.343-2.935c-.17-.656-.406-1.204-.701-1.57c-.27-.335-.564-.495-.956-.495H19c-.392 0-.686.16-.956.495c-.295.366-.53.914-.701 1.57C17.003 41.37 17 42.759 17 43a1 1 0 1 1-2 0v-.004c0-.273 0-1.874.407-3.436c.204-.782.531-1.64 1.08-2.32C17.061 36.527 17.892 36 19 36h4v-2.287c-.692.044-1.344.136-1.892.27a4.4 4.4 0 0 0-.95.33q-.168.087-.244.152c-.05.042-.066.065-.066.065a1 1 0 1 1-1.696-1.06c.271-.434.69-.73 1.09-.936a6.4 6.4 0 0 1 1.393-.495c.716-.174 1.53-.283 2.365-.33v-1.996c-.692.044-1.344.136-1.892.27a4.4 4.4 0 0 0-.95.33q-.168.087-.244.152c-.05.042-.066.065-.066.065a1 1 0 1 1-1.696-1.06c.271-.434.69-.73 1.09-.936a6.4 6.4 0 0 1 1.393-.495c.716-.174 1.53-.283 2.365-.33V26.5h-6.5c-1.608 0-2.482 1.104-2.992 2.577a9.7 9.7 0 0 0-.444 2.022a10 10 0 0 0-.063.851v.043L13 32a1 1 0 0 1-2 0v-.03l.001-.066q.002-.084.009-.233c.01-.196.029-.472.067-.801c.075-.654.228-1.544.54-2.447c.615-1.776 1.99-3.923 4.883-3.923H23v-1.503c-2.002-.015-3.923-.126-3.923-.901c0-.905-.154-2.261-.616-2.261m.223-2.01l.01.02c1.08.107 1.63.93 1.801 1.237c.225.4.339.828.403 1.128c.048.228.085.466.112.703c.788.084 1.843.087 2.989.087c1.184 0 2.27-.003 3.066-.096a10 10 0 0 1 .516-1.62a5 5 0 0 1 .13-.285a2.1 2.1 0 0 1 .611-.754c.074-.056.333-.252.733-.351l.006-.003a.7.7 0 0 0 .16-.095a.4.4 0 0 0 .103-.12c.018-.035.06-.128.06-.328c0-1.484.657-2.43.968-2.878q.078-.11.12-.18c.174-.292.527-.931.527-3.047c0-1.701-.756-2.933-1.976-3.806C27.744 6.522 25.926 6 24 6s-3.745.522-5.024 1.437C17.756 8.31 17 9.542 17 11.243c0 2.116.353 2.755.526 3.047q.043.07.121.18c.31.447.968 1.394.968 2.878c0 .28.047.423.07.477M23 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSkeletonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSkeletonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkinCancerIcon],svg[healthicons-skin-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M30.141 11.114c-.579-.452-.725-.863-.77-1.14V6H19.6v2.279c.832.089 1.505.414 2.013.891c.718.675 1.016 1.57 1.027 2.226a2.63 2.63 0 0 1-1.601 2.475q-.11.226-.24.442a2.64 2.64 0 0 1-1.208 2.7c-.388.229-.79.344-.944.373a2.65 2.65 0 0 1-2.664-1.293a5 5 0 0 1-.468-.185a2.64 2.64 0 0 1-2.82-.868c-.365-.45-.68-1.185-.668-2.024c-1.03.338-2.162.87-3.168 1.686C7.249 16.008 6 18.014 6 20.94v11.076h5.533V20.152a1.1 1.1 0 0 1 0-.347v-.048l.025-.07a1.125 1.125 0 0 1 2.128-.136a.7.7 0 0 1 .085.35v10.82q.2-.06.4-.101c.489-.1 1.266-.177 1.897.205c.819.494 1.226 1.41 1.052 2.297q.053.094.101.19c.82.373 1.422 1.19 1.34 2.193c-.081.994-.8 1.718-1.662 1.983q-.073.105-.153.208c.033.905-.524 1.743-1.378 2.124c-.416.185-.837.165-1.155.1a3 3 0 0 1-.442-.13v2.154h17.381L34.2 42v-9.682q-.201.105-.412.2c-.42.185-.891.34-1.365.406c-.464.065-1.013.055-1.523-.18c-1.261-.578-2.07-1.834-1.846-3.144a6 6 0 0 1-.505-.69c-1.328-.338-2.497-1.471-2.549-2.94c.052-1.47 1.22-2.561 2.549-2.9q.229-.36.505-.69c-.225-1.309.585-2.565 1.846-3.144c.51-.235 1.06-.244 1.523-.18c.474.067.944.221 1.365.407q.22.098.43.209a.5.5 0 0 1 .099-.192a1.125 1.125 0 0 1 2.056.09a.6.6 0 0 1 .094.187v12.258H42V20.94c0-2.925-1.249-4.93-2.859-6.237c-1.573-1.275-3.453-1.858-4.77-2.086c-2.329-.404-3.573-.99-4.23-1.502m-4.14 2.874a1 1 0 1 1-2-.002a1 1 0 0 1 2 .002m-2 2.995a1 1 0 1 1-2-.001a1 1 0 0 1 2 .001M19.25 32.709a1 1 0 1 0 .002-1.999a1 1 0 0 0-.002 1.999m1.5 2.77a1 1 0 1 0 .002-1.998a1 1 0 0 0-.002 1.998m7.108-3.34a.999.999 0 1 1-.366 1.963a.998.998 0 1 1 .366-1.964m-.709-1.656a1 1 0 0 0-1.966-.365a1 1 0 0 0 1.966.365" clip-rule="evenodd"></svg:path><svg:path d="m34.2 22.076l-.027.019c-.03-.044-.148-.174-.39-.348a4.6 4.6 0 0 0-.805-.458a3.2 3.2 0 0 0-.831-.255c-.252-.034-.374 0-.411.016c-.713.327-.793.866-.653 1.177l.285.63l-.49.488c-.334.334-.606.7-.808 1.085l-.247.47l-.528.06c-.87.096-1.282.654-1.295 1.03c.014.377.426.935 1.295 1.032l.528.058l.247.47c.202.386.474.752.809 1.086l.49.488l-.286.63c-.14.31-.06.85.653 1.177c.037.017.16.05.41.015c.242-.034.53-.121.832-.254c.298-.132.58-.296.806-.459c.241-.174.359-.303.389-.347l.027.019zM13.771 37.484l.04-.021l-.003-.005l-.001-.002s.033.045.124.125c.099.087.225.177.36.25c.136.076.25.117.323.132a.3.3 0 0 0 .114-.123a.15.15 0 0 0 .01-.116l-.21-.593l.446-.445a2.5 2.5 0 0 0 .421-.562l.26-.484l.549-.04a.47.47 0 0 0 .28-.113c.062-.056.08-.108.083-.145c.003-.034-.005-.074-.044-.12a.4.4 0 0 0-.23-.123l-.566-.107l-.192-.543a2.2 2.2 0 0 0-.316-.587l-.385-.51l.303-.563a.15.15 0 0 0 .016-.118a.24.24 0 0 0-.1-.125l-.082-.01a1.7 1.7 0 0 0-.399.04a2.6 2.6 0 0 0-.8.3zm.379-24.964c-.07.146-.102.278-.115.39c-.047.399.111.745.214.872c.212.26.557.305.795.165l.5-.294l.503.287c.277.158.576.277.887.351l.55.132l.17.537c.098.304.392.545.704.45a.5.5 0 0 0 .182-.096c.264-.193.371-.5.25-.797l-.215-.52l.336-.454c.19-.256.342-.54.453-.838l.202-.543l.572-.096a.625.625 0 0 0 .502-.636c-.003-.163-.104-.53-.397-.805c-.162-.152-.426-.317-.867-.363a2.5 2.5 0 0 1-.562.571c-.71.546-2.076 1.191-4.665 1.688"></svg:path></svg:g>`,
})
export class HealthiconsSkinCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullIcon],svg[healthicons-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.97 7.557C10.361 9.822 9 12.98 9 16.5c0 3.431.799 5.584 1.606 7.197c.183.367.366.705.531 1.01l.035.063c.177.327.328.608.455.877c.252.531.373.939.373 1.353v4a1 1 0 0 0 1 1h.016c.014.543.04 1.27.089 2.086c.103 1.719.313 3.902.75 5.57a2.6 2.6 0 0 0 1.12 1.536C16.265 42.019 19.778 44 24 44s7.736-1.981 9.025-2.808a2.6 2.6 0 0 0 1.12-1.537c.437-1.667.647-3.85.75-5.569c.05-.816.075-1.543.09-2.086H35a1 1 0 0 0 1-1v-4c0-.414.12-.822.373-1.353c.127-.269.278-.55.455-.877l.034-.064c.166-.304.349-.642.532-1.009C38.201 22.084 39 19.931 39 16.5c0-3.52-1.362-6.678-3.97-8.943C32.434 5.302 28.682 4 24 4s-8.433 1.302-11.03 3.557m20.004 24.785a2.3 2.3 0 0 0-.358.196a1.7 1.7 0 0 0-.711 1.029c-.112.425-.108.896-.06 1.33c.024.213.056.404.086.57l.008.044c.011.065.024.134.033.193c.009.055.028.175.028.296c0 .855-.724 1.611-1.85 2.104c-1.18.516-3.087.896-6.15.896s-4.97-.38-6.15-.896C16.723 37.61 16 36.854 16 36c0-.12.02-.24.028-.296l.033-.193l.008-.044a9 9 0 0 0 .086-.57c.048-.434.052-.905-.06-1.33a1.7 1.7 0 0 0-.711-1.029a2.3 2.3 0 0 0-.358-.196c.015.463.039 1.019.075 1.624c.102 1.699.304 3.716.69 5.18a.6.6 0 0 0 .264.362C17.234 40.265 20.352 42 24 42s6.766-1.736 7.945-2.492a.6.6 0 0 0 .265-.361c.385-1.465.587-3.482.689-5.18c.036-.606.06-1.162.075-1.625m-3.625 3.93C28.53 36.63 26.937 37 24 37s-4.53-.37-5.35-.729c-.378-.165-.55-.305-.625-.381l.013-.074c.032-.176.073-.418.104-.698c.061-.55.088-1.298-.112-2.06c-.207-.784-.656-1.586-1.523-2.174c-.65-.442-1.48-.725-2.507-.834V27c0-.836-.254-1.553-.565-2.21a20 20 0 0 0-.505-.974l-.032-.058a34 34 0 0 1-.504-.955C11.701 21.416 11 19.569 11 16.5c0-2.98 1.138-5.572 3.28-7.432C16.434 7.198 19.682 6 24 6s7.567 1.198 9.72 3.068C35.861 10.928 37 13.52 37 16.5c0 3.069-.701 4.916-1.394 6.303c-.169.336-.337.647-.504.955l-.032.058c-.174.322-.351.65-.505.975c-.31.656-.565 1.373-.565 2.209v3.05c-1.028.109-1.857.392-2.507.834c-.867.588-1.316 1.39-1.523 2.174c-.2.762-.173 1.51-.112 2.06c.03.28.072.522.104.698l.013.074c-.075.076-.247.216-.626.381M19 29c-2.21 0-4-2.239-4-5s1.79-5 4-5s4 2.239 4 5s-1.79 5-4 5m14-5c0 2.761-1.79 5-4 5s-4-2.239-4-5s1.79-5 4-5s4 2.239 4 5m-9 5l-.018.008c-.25.117-2.982 1.44-2.982 3.268c0 .83.58 1.604 1.4 1.711q.095.013.194.013c.639 0 1.113-.372 1.406-.9c.293.528.767.9 1.406.9q.099 0 .195-.013c.82-.107 1.399-.88 1.399-1.711c0-1.907-2.982-3.268-2.982-3.268z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSkullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullNegativeIcon],svg[healthicons-skull-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSkullNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 16.5c0-3.52 1.362-6.678 3.97-8.943C15.566 5.302 19.318 4 24 4s8.433 1.302 11.03 3.557C37.639 9.822 39 12.98 39 16.5c0 3.431-.799 5.584-1.606 7.197c-.183.367-.366.705-.531 1.01l-.035.063c-.177.327-.328.608-.456.877c-.251.531-.372.939-.372 1.353v4a1 1 0 0 1-1 1h-.016c-.014.543-.04 1.27-.089 2.086c-.103 1.719-.313 3.902-.75 5.57a2.6 2.6 0 0 1-1.12 1.536C31.735 42.019 28.222 44 24 44s-7.736-1.981-9.025-2.808a2.6 2.6 0 0 1-1.12-1.537c-.437-1.667-.647-3.85-.75-5.569a61 61 0 0 1-.09-2.086H13a1 1 0 0 1-1-1v-4c0-.414-.12-.822-.373-1.353c-.127-.269-.278-.55-.455-.877l-.035-.064a33 33 0 0 1-.531-1.009C9.799 22.084 9 19.931 9 16.5m23.616 16.038q.15-.102.358-.196a58 58 0 0 1-.075 1.624c-.102 1.699-.304 3.716-.69 5.18a.6.6 0 0 1-.264.362C30.766 40.265 27.648 42 24 42s-6.766-1.736-7.945-2.492a.6.6 0 0 1-.265-.361c-.385-1.465-.587-3.482-.689-5.18a58 58 0 0 1-.075-1.625q.208.093.358.196c.398.271.605.626.711 1.029c.112.425.108.896.06 1.33a9 9 0 0 1-.086.57l-.008.044c-.011.065-.024.134-.033.193A2 2 0 0 0 16 36c0 .855.724 1.611 1.85 2.104c1.18.516 3.087.896 6.15.896s4.97-.38 6.15-.896C31.277 37.61 32 36.854 32 36c0-.12-.02-.24-.028-.296l-.033-.193l-.008-.044a9 9 0 0 1-.086-.57c-.048-.434-.052-.905.06-1.33c.106-.404.313-.758.711-1.029M24 37c2.937 0 4.53-.37 5.35-.729c.378-.165.55-.305.625-.381l-.013-.074a11 11 0 0 1-.104-.698c-.061-.55-.088-1.298.112-2.06c.207-.784.656-1.586 1.523-2.174c.65-.442 1.48-.725 2.507-.834V27c0-.836.254-1.553.565-2.21c.154-.325.33-.652.505-.974l.032-.058c.167-.308.336-.619.504-.955C36.299 21.416 37 19.569 37 16.5c0-2.98-1.138-5.572-3.28-7.432C31.566 7.198 28.318 6 24 6s-7.567 1.198-9.72 3.068C12.139 10.928 11 13.52 11 16.5c0 3.069.701 4.916 1.394 6.303c.168.336.337.646.504.955l.032.058c.174.322.351.65.505.975c.31.656.565 1.373.565 2.209v3.05c1.027.109 1.857.392 2.507.834c.867.588 1.316 1.39 1.523 2.174c.2.762.173 1.51.112 2.06c-.03.28-.072.522-.104.698l-.013.074c.075.076.247.216.626.381c.82.359 2.412.729 5.349.729m-9-13c0 2.761 1.79 5 4 5s4-2.239 4-5s-1.79-5-4-5s-4 2.239-4 5m14 5c2.21 0 4-2.239 4-5s-1.79-5-4-5s-4 2.239-4 5s1.79 5 4 5m-5.018.008L24 29l.018.008S27 30.369 27 32.276c0 .83-.58 1.604-1.4 1.711a2 2 0 0 1-.194.013c-.639 0-1.113-.372-1.406-.9c-.293.528-.767.9-1.406.9q-.099 0-.195-.013c-.82-.107-1.399-.88-1.399-1.711c0-1.827 2.732-3.15 2.982-3.268" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSkullNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSkullNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyIcon],svg[healthicons-sleepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 24c0-9.941 8.059-18 18-18v2C15.163 8 8 15.163 8 24s7.163 16 16 16s16-7.163 16-16c0-1.599-.234-3.142-.67-4.599l1.915-.575A18 18 0 0 1 42 24c0 9.941-8.059 18-18 18S6 33.941 6 24"></svg:path><svg:path d="M18.53 13.952a1 1 0 0 0 1 1.732l.936-.541l-.451 3.75a1 1 0 0 0 1.492.986l3.002-1.733a1 1 0 1 0-1-1.732l-1.27.733l.452-3.75a1 1 0 0 0-1.492-.986zm7.287-4.658a1 1 0 0 1 .707-1.225l3.864-1.035a1 1 0 0 1 1.187 1.338l-2.049 5.105l2.415-.647a1 1 0 0 1 .518 1.931l-4.347 1.165a1 1 0 0 1-1.187-1.338l2.049-5.104l-1.932.517a1 1 0 0 1-1.225-.707M36.556 6a1 1 0 1 0 0 2h2.64l-4.044 6.47A1 1 0 0 0 36 16h5a1 1 0 1 0 0-2h-3.196l4.044-6.47A1 1 0 0 0 41 6zM12.888 27.106c.076.743.743 1.297 1.516 1.543c.808.256 1.855.235 2.967-.247a3.8 3.8 0 0 0 2.132-2.295c.29-.868.25-1.82-.152-2.425a.5.5 0 0 0-.843.016c-1.294 2.111-3.144 3.04-5.075 2.86a.5.5 0 0 0-.545.548M32.28 21.91c.306.681.006 1.494-.54 2.094c-.572.626-1.49 1.13-2.693 1.27a3.8 3.8 0 0 1-2.995-.922c-.684-.607-1.125-1.45-1.08-2.176a.5.5 0 0 1 .738-.408c2.176 1.182 4.243 1.061 5.825-.061a.5.5 0 0 1 .745.203m.168 9.945c-2.251-3.084-5.587-4.715-8.707-3.879c-3.12.837-5.194 3.916-5.601 7.713c-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.319"></svg:path></svg:g>`,
})
export class HealthiconsSleepyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyNegativeIcon],svg[healthicons-sleepy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSleepyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18a18 18 0 0 0-.755-5.174l-1.916.575c.437 1.457.671 3 .671 4.599c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8zm-5.47 7.952a1 1 0 0 0 1 1.732l.936-.541l-.451 3.75a1 1 0 0 0 1.492.986l3.002-1.733a1 1 0 1 0-1-1.732l-1.27.733l.452-3.75a1 1 0 0 0-1.492-.986zm7.287-4.658a1 1 0 0 1 .707-1.225l3.864-1.035a1 1 0 0 1 1.187 1.338l-2.049 5.105l2.415-.647a1 1 0 0 1 .518 1.931l-4.347 1.165a1 1 0 0 1-1.187-1.338l2.049-5.104l-1.932.517a1 1 0 0 1-1.225-.707M36.556 6a1 1 0 1 0 0 2h2.64l-4.044 6.47A1 1 0 0 0 36 16h5a1 1 0 1 0 0-2h-3.196l4.044-6.47A1 1 0 0 0 41 6zm-4.108 25.855c-2.251-3.084-5.587-4.715-8.707-3.879c-3.12.837-5.194 3.916-5.601 7.713c-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.319m-.168-9.945c.306.681.006 1.494-.54 2.094c-.572.626-1.49 1.13-2.693 1.27a3.8 3.8 0 0 1-2.995-.922c-.684-.607-1.125-1.45-1.08-2.176a.5.5 0 0 1 .738-.408c2.176 1.182 4.243 1.061 5.825-.061a.5.5 0 0 1 .745.203m-19.392 5.196c.076.743.743 1.297 1.516 1.543c.808.256 1.855.235 2.967-.247a3.8 3.8 0 0 0 2.132-2.295c.29-.868.25-1.82-.152-2.425a.5.5 0 0 0-.843.016c-1.294 2.111-3.144 3.04-5.075 2.86a.5.5 0 0 0-.545.548" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSleepyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSleepyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingIcon],svg[healthicons-sling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0M16.212 31.011a2 2 0 0 0-2.117 2.601zm8.583 4.236A3.501 3.501 0 0 1 24 41.965V42h-8a9 9 0 1 1 0-18h16a9 9 0 1 1 0 18h-4.257a5.502 5.502 0 0 0-2.175-8.598zM23.035 26h3.462l-5.86 14H16a6.97 6.97 0 0 1-3.677-1.042l9.647-11.852zM34 33a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingNegativeIcon],svg[healthicons-sling-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSlingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-8 9h.014l-1.954 2.487A2.002 2.002 0 0 1 16 31m11 7.5c0-1.6-1.073-2.948-2.538-3.366l.756-1.86A5.502 5.502 0 0 1 27.743 42H32a9 9 0 1 0 0-18H16a9 9 0 1 0 0 18h8v-.035a3.5 3.5 0 0 0 3-3.465M23.036 26l-2.969 3.078l-7.756 9.872A6.97 6.97 0 0 0 16 40h4.327l5.687-14zM32 35a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSlingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSlingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmallPlaneIcon],svg[healthicons-small-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.806 14.129l-3.484 3.484c-1.16 1.161-2.322 0-1.16-1.162l9.29-9.29c1.16-1.161 2.322 0 1.16 1.161l-3.483 3.484s2.323 0 4.645 2.323l2.323 2.323l9.037-9.038a2 2 0 0 1 2.828 0l1.151 1.15a2 2 0 0 1 .453 2.133l-5.34 13.884l6.968 9.29l4.03-2.015a.954.954 0 0 1 1.101 1.529l-7.94 7.94a.954.954 0 0 1-1.53-1.102l2.016-4.03l-9.29-6.967l-13.884 5.34a2 2 0 0 1-2.132-.453l-1.15-1.15a2 2 0 0 1 0-2.829l9.036-9.037l-2.322-2.323c-2.323-2.323-2.323-4.645-2.323-4.645"></svg:path>`,
})
export class HealthiconsSmallPlaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmallPlaneNegativeIcon],svg[healthicons-small-plane-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSmallPlaneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8.323 17.613l3.483-3.484s0 2.323 2.323 4.645l2.323 2.323l-9.038 9.037a2 2 0 0 0 0 2.829l1.15 1.15a2 2 0 0 0 2.133.453l13.884-5.34l9.29 6.968l-2.015 4.03a.954.954 0 0 0 1.529 1.101l7.94-7.94a.954.954 0 0 0-1.102-1.529l-4.03 2.015l-6.967-9.29l5.34-13.884a2 2 0 0 0-.453-2.132l-1.15-1.15a2 2 0 0 0-2.829 0l-9.037 9.037l-2.323-2.323c-2.322-2.322-4.645-2.323-4.645-2.323l3.484-3.483c1.161-1.162 0-2.323-1.161-1.162l-9.29 9.29c-1.162 1.162 0 2.323 1.16 1.162" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSmallPlaneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSmallPlaneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingIcon],svg[healthicons-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37 11a1 1 0 0 1 1-1a5 5 0 0 1 5 5v1.59a4.4 4.4 0 0 1-1.644 3.436A6 6 0 0 1 44 25v3a1 1 0 1 1-2 0v-3a4 4 0 0 0-4-4a1 1 0 1 1 0-2h.59A2.41 2.41 0 0 0 41 16.59V15a3 3 0 0 0-3-3a1 1 0 0 1-1-1"></svg:path><svg:path d="M34 17a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2M7 31a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm33 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationIcon],svg[healthicons-smoking-cessation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8.586L39.414 38L38 39.414L8.586 10zM7 37h21.727c.87 0 1.325-1.034.737-1.676l-3.37-3.675A2 2 0 0 0 24.62 31H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2m33-5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2"></svg:path><svg:path d="M38 19a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19zm6 13a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationAltIcon],svg[healthicons-smoking-cessation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.22 3.22 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0a2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864z"></svg:path><svg:path d="M28.852 15.383a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.153v1.891a1 1 0 1 0 2 0v-1.892a4.14 4.14 0 0 0-1.466-3.166a3.14 3.14 0 0 0 .835-2.136v-1.003a3.52 3.52 0 0 0-3.522-3.522a1 1 0 1 0 0 2c.84 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102M33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m13.416-7.999A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l12.442 12.443a1 1 0 0 1 .16.207H26a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10.086L10.823 11.737A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18c4.61 0 8.817-1.734 12.001-4.584l-5.208-5.209a1 1 0 0 1 1.414-1.414z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationAltNegativeIcon],svg[healthicons-smoking-cessation-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSmokingCessationAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36.001 37.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263L22.086 23H12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1.086L12.265 10.35A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-5.209-5.208a1 1 0 0 0-1.414 1.414zM44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-14-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.22 3.22 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0a2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864zm2.852.161a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.153v1.891a1 1 0 0 0 2 0v-1.892a4.14 4.14 0 0 0-1.466-3.166a3.14 3.14 0 0 0 .836-2.136v-1.003a3.52 3.52 0 0 0-3.523-3.522a1 1 0 1 0 0 2c.841 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102M33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSmokingCessationAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSmokingCessationAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationNegativeIcon],svg[healthicons-smoking-cessation-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSmokingCessationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM28.727 37H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h17.62a2 2 0 0 1 1.474.649l3.37 3.675c.588.642.133 1.676-.737 1.676M10 8.586l.707.707l28 28l.707.707L38 39.414l-.707-.707l-28-28L8.586 10zM40 32a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2m3 3a1 1 0 0 0 1 1a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19H38a1 1 0 0 0-1 1m7 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSmokingCessationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSmokingCessationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingNegativeIcon],svg[healthicons-smoking-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm5 33a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm35-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2m4 2a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19zm6 13a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSmokingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingIcon],svg[healthicons-social-distancing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36.463 15.95a1 1 0 0 0 1.414 1.414l2.121-2.121a2 2 0 0 0 0-2.829l-2.12-2.121a1 1 0 1 0-1.415 1.414L37.756 13H10.244l1.293-1.293a1 1 0 0 0-1.414-1.414l-2.121 2.121a2 2 0 0 0 0 2.829l2.12 2.121a1 1 0 0 0 1.415-1.414l-.95-.95h26.826zM15 25.5c0 1.934-1.566 3.5-3.5 3.5A3.5 3.5 0 0 1 8 25.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M4 34.267C4 31.429 8.997 30 11.5 30s7.5 1.43 7.5 4.267V38H4zM36.5 29c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5M29 34.267C29 31.429 33.997 30 36.5 30s7.5 1.43 7.5 4.267V38H29z"></svg:path>`,
})
export class HealthiconsSocialDistancingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingAltIcon],svg[healthicons-social-distancing-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-.967 8.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144"></svg:path><svg:path d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111M8 22v-3h6v-2H8v-3H6v8zm34 0v-8h-2v3h-6v2h6v3z"></svg:path></svg:g>`,
})
export class HealthiconsSocialDistancingAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingAltNegativeIcon],svg[healthicons-social-distancing-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialDistancingAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-.967 8.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144M8 22v-3h6v-2H8v-3H6v8zm34 0v-8h-2v3h-6v2h6v3zm-28.505 7.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialDistancingAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialDistancingAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingNegativeIcon],svg[healthicons-social-distancing-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialDistancingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM11.537 11.707L10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.12 2.121a1 1 0 0 1-1.415-1.414l.95-.95H10.587l.95.95a1 1 0 0 1-1.414 1.414l-2.121-2.121a2 2 0 0 1 0-2.829l2.12-2.121a1 1 0 0 1 1.415 1.414M11.5 29c1.934 0 3.5-1.566 3.5-3.5S13.434 22 11.5 22A3.5 3.5 0 0 0 8 25.5c0 1.934 1.566 3.5 3.5 3.5m0 1C8.997 30 4 31.43 4 34.267V38h15v-3.733C19 31.429 14.003 30 11.5 30m25-1c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5m0 1c-2.503 0-7.5 1.43-7.5 4.267V38h15v-3.733C44 31.429 39.003 30 36.5 30" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialDistancingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialDistancingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialWorkIcon],svg[healthicons-social-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm24.99 28.635c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.607c.456-.705.86-1.33.934-1.97c.096-.817.156-5.717-.108-6.459c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773v-.993c.388-.533.801-.95 1.217-1.372m-19.813 1.372c-.389-.533-.803-.95-1.22-1.372c-.55-.555-1.104-1.115-1.616-1.95c-.128-.21-.259-.411-.385-.607c-.457-.705-.862-1.33-.937-1.97c-.097-.817.202-5.717.467-6.459c.266-.741 1.796-1.157 2.325.503c.26.819.343 1.872.418 2.828c.076.98.145 1.858.39 2.272c.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862c.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823zM19.781 11C17.018 11 15 13.986 15 17.207C15 24.397 24 29 24 29s9-4.9 9-11.793C33 13.987 30.982 11 28.219 11c-1.918 0-3.34 1.34-4.219 3.24c-.878-1.9-2.301-3.24-4.219-3.24" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSocialWorkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialWorkNegativeIcon],svg[healthicons-social-work-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialWorkNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-6v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h-7v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H9a3 3 0 0 1-3-3zm29.6 23.685c-.51.835-1.063 1.395-1.61 1.95c-.416.421-.829.84-1.217 1.372V37H27v-.993c.052-.41.217-.994.362-1.51c.13-.457.243-.86.25-1.043c.02-.544.786-1.537.786-1.537l2.348-2.828s.664-.67 1.045-1.414s1.19.192 1.297.861c.107.67-.097 1.022-.097 1.022l-1.342 2.547s1.555-2.035 2.038-2.853c.245-.414.313-1.292.39-2.272c.074-.956.156-2.009.416-2.828c.527-1.66 2.052-1.244 2.317-.503c.264.742.204 5.642.108 6.458c-.075.64-.478 1.266-.934 1.971q-.19.293-.384.607m-22.643 1.95c.417.421.831.84 1.22 1.372V37H20v-.993c-.098-.773-.27-2.166-.285-2.553c-.021-.544-.789-1.537-.789-1.537l-2.355-2.828s-.667-.67-1.049-1.414s-1.193.192-1.301.861c-.108.67.097 1.022.097 1.022l1.346 2.547s-1.56-2.035-2.045-2.853c-.245-.414-.314-1.292-.39-2.272c-.075-.956-.157-2.009-.418-2.828c-.529-1.66-2.06-1.244-2.325-.503c-.265.742-.564 5.642-.468 6.458c.076.64.48 1.266.938 1.971q.191.293.385.607c.512.835 1.067 1.395 1.616 1.95M15 17.207C15 13.987 17.018 11 19.781 11c1.918 0 3.34 1.34 4.219 3.24c.878-1.9 2.301-3.24 4.219-3.24C30.982 11 33 13.987 33 17.207C33 24.1 24 29 24 29s-9-4.603-9-11.793" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialWorkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialWorkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSodiumFreeIcon],svg[healthicons-sodium-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 13a5 5 0 0 0-5 5v.143c0 .473.384.857.857.857h8.286a.857.857 0 0 0 .857-.857V18a5 5 0 0 0-5-5m3-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-7.126-7.125l-.475-6.109A3 3 0 0 0 26.825 20h-5.65a3 3 0 0 0-2.99 2.767l-.934 12A3 3 0 0 0 20.242 38h7.516a3 3 0 0 0 2.99-3.233l-.22-2.824zM22 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSodiumFreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSodiumFreeNegativeIcon],svg[healthicons-sodium-free-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsSodiumFreeNegative0)"><svg:path fill-rule="evenodd" d="M37.416 36.001A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l3.942 3.943a1 1 0 0 1-1.414 1.414l-3.97-3.97A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18c4.61 0 8.817-1.734 12.001-4.584l-5.472-5.473l.22 2.824A3 3 0 0 1 27.758 38h-7.516a3 3 0 0 1-2.99-3.233l.933-12A3 3 0 0 1 21.175 20h5.65a3 3 0 0 1 2.99 2.767l.475 6.11zM24 13a5 5 0 0 0-5 5v.143c0 .473.384.857.857.857h8.286a.857.857 0 0 0 .857-.857V18a5 5 0 0 0-5-5m3-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path d="M22 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSodiumFreeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSodiumFreeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonogramIcon],svg[healthicons-sonogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.368 29.95c-.404 1.05.139 2.232 1.215 2.562a49 49 0 0 0 14.416 2.16a49 49 0 0 0 14.418-2.16c1.076-.33 1.618-1.512 1.215-2.563l-6.409-16.687c-.371-.968-1.419-1.484-2.43-1.258a31.2 31.2 0 0 1-6.794.745c-2.331 0-4.604-.257-6.792-.745c-1.012-.226-2.06.29-2.43 1.258zm25.838-7.796c0 2.48-2.067 4.491-4.617 4.491q-.292 0-.573-.034c-.174.234-.36.552-.573.918c-.92 1.575-2.357 4.038-5.577 4.498c-2.514.363-4.252-1.755-5.407-4.01c-.145-.283-.286-.557-.418-.81l-.607.272c-.529.237-1.048.47-1.294.566c-1.053.41-2.247-.089-2.667-1.113s.091-2.185 1.144-2.595c.15-.058.472-.203.894-.393c.285-.128.616-.277.97-.433c.402-.177.82-.358 1.161-.492a8 8 0 0 1 .53-.189a3 3 0 0 1 .372-.09c.077-.013.205-.032.362-.034a2.2 2.2 0 0 1 .836.15a2.1 2.1 0 0 1 .801.563c.08.09.14.172.171.217c.069.097.13.197.179.277c.1.167.219.38.343.608c.15.276.595 1.166.81 1.597a.184.184 0 0 0 .34-.135l-.655-2.159a240 240 0 0 0-.495-1.635a43 43 0 0 0-.25-.782c-.426-1.022.08-2.186 1.13-2.6c1.051-.415 2.248.078 2.673 1.1l.993 3.37a.17.17 0 0 0 .185.12a.16.16 0 0 0 .13-.197a4.4 4.4 0 0 1-.125-1.046c0-1.928.885-3.219 2.758-3.973c1.192-.48 2.56-.644 3.74-.131c1.612.7 2.736 2.274 2.736 4.104M41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2zm-34 0h2a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 0 5 11v2.5a1 1 0 1 0 2 0zm34 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2zm-34 0h2a1 1 0 1 1 0 2H6.5A1.5 1.5 0 0 1 5 37v-2.5a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSonogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonogramNegativeIcon],svg[healthicons-sonogram-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsSonogramNegative0)"><svg:path d="M29.589 26.645c2.55 0 4.617-2.01 4.617-4.492c0-1.829-1.124-3.403-2.737-4.103c-1.18-.513-2.547-.35-3.74.13c-1.872.755-2.757 2.046-2.757 3.973q0 .541.126 1.047a.16.16 0 0 1-.13.197a.17.17 0 0 1-.186-.12l-.993-3.37c-.425-1.022-1.622-1.515-2.672-1.1s-1.557 1.578-1.131 2.6l-.003-.006l.005.014a42 42 0 0 1 .248.774a231 231 0 0 1 .495 1.635l.656 2.159a.184.184 0 0 1-.341.135c-.215-.43-.66-1.32-.81-1.597a17 17 0 0 0-.344-.608a4 4 0 0 0-.178-.277a2.2 2.2 0 0 0-.375-.418a2.1 2.1 0 0 0-.597-.362a2.2 2.2 0 0 0-.836-.15a2.4 2.4 0 0 0-.362.034a3 3 0 0 0-.372.09a7 7 0 0 0-.53.189c-.341.134-.76.314-1.16.492c-.355.156-.686.305-.971.433c-.422.19-.744.335-.894.393c-1.053.41-1.565 1.571-1.144 2.595c.42 1.024 1.614 1.522 2.667 1.113c.246-.096.765-.329 1.294-.566l.607-.272c.132.253.273.527.418.81c1.155 2.255 2.893 4.373 5.407 4.01c3.22-.46 4.657-2.923 5.577-4.498c.213-.366.4-.684.573-.918q.282.034.573.034"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM9.583 32.512c-1.077-.33-1.619-1.512-1.215-2.563l6.408-16.687c.372-.968 1.42-1.484 2.431-1.258c2.188.488 4.46.745 6.792.745s4.605-.258 6.794-.746c1.011-.225 2.059.291 2.43 1.259l6.409 16.687c.403 1.051-.139 2.232-1.215 2.562a49 49 0 0 1-14.418 2.16a49 49 0 0 1-14.416-2.16M41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2zm-32 0H7v2a1 1 0 1 1-2 0V11a1.5 1.5 0 0 1 1.5-1.5H9a1 1 0 1 1 0 2m32 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2zm-32 0H7v-2a1 1 0 1 0-2 0V37a1.5 1.5 0 0 0 1.5 1.5H9a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSonogramNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSonogramNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonographyIcon],svg[healthicons-sonography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm2 5h2a1 1 0 1 0 0-2h-2.5A1.5 1.5 0 0 0 9 10.5V13a1 1 0 1 0 2 0zm26 2v-2h-2a1 1 0 1 1 0-2h2.5a1.5 1.5 0 0 1 1.5 1.5V13a1 1 0 1 1-2 0M11.519 30.998c-1.078-.324-1.62-1.506-1.217-2.557l5.487-14.287c.371-.967 1.419-1.483 2.432-1.265c1.865.4 3.798.611 5.779.611s3.915-.21 5.779-.611c1.013-.218 2.06.298 2.432 1.265l5.487 14.287c.404 1.051-.139 2.233-1.217 2.557A43.3 43.3 0 0 1 24 32.832c-4.33 0-8.518-.642-12.481-1.834m15.75-12.57c1.14-.495 2.444-.635 3.515-.119c1.308.632 2.202 1.942 2.202 3.45c0 2.12-1.768 3.85-3.963 3.85q-.251 0-.493-.03l-.145-.017l-1.383 1.864c-.84 1.13-1.83 2.344-3.63 2.579h-.003c-2.164.313-4.176-1.02-5.194-3.008c-.132-.26-.261-.51-.382-.741l-.109-.209l-.214.096l-.555.248a33 33 0 0 1-1.17.512c-.838.326-1.782-.073-2.112-.877c-.329-.8.069-1.716.903-2.04c.144-.056.44-.19.815-.358l.013-.006c.26-.117.562-.253.885-.395c.365-.162.743-.325 1.05-.445c.148-.059.313-.12.464-.166c.072-.021.183-.053.31-.075a1.74 1.74 0 0 1 .958.092a1.66 1.66 0 0 1 .637.448c.064.072.112.138.139.176c.057.08.11.166.152.236c.089.148.195.339.308.547a78 78 0 0 1 .735 1.45a.418.418 0 0 0 .774-.309l-.598-1.969c-.16-.531-.32-1.066-.453-1.494v-.002l-.231-.725l-.005-.01c-.332-.799.06-1.715.893-2.044c.832-.328 1.773.061 2.112.856l.902 3.063a.404.404 0 0 0 .443.286a.395.395 0 0 0 .328-.487a3.8 3.8 0 0 1-.108-.896c0-.814.18-1.48.538-2.02s.905-.977 1.673-1.31M37 35v2h-2a1 1 0 1 0 0 2h2.5a1.5 1.5 0 0 0 1.5-1.5V35a1 1 0 1 0-2 0m-26 2h2a1 1 0 1 1 0 2h-2.5A1.5 1.5 0 0 1 9 37.5V35a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSonographyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonographyNegativeIcon],svg[healthicons-sonography-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSonographyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9.5a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm7 2h-2v2a1 1 0 1 1-2 0V11a1.5 1.5 0 0 1 1.5-1.5H13a1 1 0 1 1 0 2m24 0v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H35a1 1 0 1 0 0 2zM10.302 28.941c-.403 1.051.139 2.233 1.217 2.557A43.3 43.3 0 0 0 24 33.332c4.33 0 8.518-.642 12.481-1.834c1.078-.324 1.62-1.506 1.217-2.557L32.21 14.654c-.371-.967-1.419-1.483-2.432-1.265c-1.864.4-3.798.611-5.779.611s-3.914-.21-5.779-.611c-1.013-.218-2.06.298-2.432 1.265zM30.784 18.81c-1.07-.517-2.375-.377-3.514.118c-.768.334-1.315.77-1.673 1.31c-.357.542-.538 1.207-.538 2.021q0 .465.108.896a.395.395 0 0 1-.328.487a.404.404 0 0 1-.443-.286l-.902-3.063c-.339-.795-1.28-1.184-2.111-.856c-.833.329-1.226 1.245-.894 2.045l.005.01l.231.726c.133.428.293.962.453 1.494l.598 1.97a.418.418 0 0 1-.774.308a81 81 0 0 0-.735-1.45a15 15 0 0 0-.308-.546a4 4 0 0 0-.152-.237a1.7 1.7 0 0 0-.302-.337a1.7 1.7 0 0 0-.474-.287a1.7 1.7 0 0 0-.666-.12c-.126.002-.23.017-.292.028a3 3 0 0 0-.31.075a6 6 0 0 0-.465.166c-.306.12-.684.283-1.05.445c-.322.142-.623.278-.884.395l-.013.006c-.375.168-.671.302-.815.357c-.834.325-1.232 1.24-.903 2.04c.33.805 1.274 1.204 2.112.878a33 33 0 0 0 1.17-.512c.188-.084.377-.17.555-.248l.214-.096l.109.209c.12.232.25.482.382.741c1.018 1.988 3.03 3.321 5.194 3.008h.003c1.8-.235 2.79-1.448 3.63-2.579l1.383-1.864l.145.017q.242.03.493.03c2.195 0 3.963-1.73 3.963-3.85c0-1.508-.894-2.818-2.202-3.45M37 37.5v-2a1 1 0 1 1 2 0V38a1.5 1.5 0 0 1-1.5 1.5H35a1 1 0 1 1 0-2zm-24 0h-2v-2a1 1 0 1 0-2 0V38a1.5 1.5 0 0 0 1.5 1.5H13a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSonographyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSonographyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpeechLanguageTherapyIcon],svg[healthicons-speech-language-therapy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm5.434 1q-.392 0-.776.032a.713.713 0 0 0-.658.708v27.55c0 .392.32.71.717.71h2.15a.714.714 0 0 0 .717-.71v-5.186l2.937 1.247c.375.16.832.328 1.309.39c.485.063 1.036.022 1.548-.288a2.84 2.84 0 0 0 1.375-2.427v-2.131a.714.714 0 0 0-.717-.71l-2.206-.711c0-.722.59-.717 1.3-.712l.19.001h.716a.714.714 0 0 0 .717-.71v-1.421h.81c1.146 0 1.829-1.265 1.194-2.21l-2.004-2.98v-1.205c0-5.101-4.172-9.237-9.32-9.237m7.168 11.013a1.07 1.07 0 0 1-1.075 1.066a1.07 1.07 0 0 1-1.075-1.066a1.07 1.07 0 0 1 1.075-1.066a1.07 1.07 0 0 1 1.075 1.066M26.684 28c0 .893-.479 1.67-1.189 2.084l1.01 1.727A4.41 4.41 0 0 0 28.685 28a4.41 4.41 0 0 0-2.18-3.81l-1.01 1.726A2.41 2.41 0 0 1 26.686 28m4.21 0c0-2.067-.899-3.786-2.112-4.663l1.173-1.62c1.807 1.307 2.94 3.672 2.94 6.283c0 2.61-1.133 4.976-2.94 6.284l-1.173-1.62c1.213-.878 2.113-2.597 2.113-4.664m4.211 0c0 3.181-1.264 5.848-2.99 7.217l1.243 1.566c2.302-1.825 3.747-5.128 3.747-8.783s-1.445-6.958-3.747-8.783l-1.242 1.567c1.725 1.368 2.99 4.035 2.99 7.216" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpeechLanguageTherapyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpeechLanguageTherapyNegativeIcon],svg[healthicons-speech-language-therapy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpeechLanguageTherapyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1.658 4.032q.384-.032.776-.032c5.147 0 9.319 4.136 9.319 9.237v1.206l2.004 2.98c.635.944-.048 2.209-1.193 2.209h-.811v1.42a.714.714 0 0 1-.717.711h-.907c-.71-.006-1.3-.01-1.3.71l2.207.711c.396 0 .717.318.717.71v2.132a2.84 2.84 0 0 1-1.375 2.427c-.512.31-1.063.351-1.548.288c-.477-.062-.933-.23-1.309-.39l-2.937-1.247v5.185c0 .393-.32.711-.717.711h-2.15a.714.714 0 0 1-.717-.71V10.74c0-.37.286-.678.658-.708m6.869 12.047a1.07 1.07 0 0 0 1.075-1.066a1.07 1.07 0 0 0-1.075-1.066a1.07 1.07 0 0 0-1.075 1.066a1.07 1.07 0 0 0 1.075 1.066m7.968 8.005A2.41 2.41 0 0 0 26.686 28c0-.893-.48-1.67-1.19-2.084l1.01-1.727A4.41 4.41 0 0 1 28.685 28a4.41 4.41 0 0 1-2.18 3.81zm3.287-6.747c1.213.877 2.113 2.596 2.113 4.663s-.9 3.786-2.113 4.663l1.173 1.62c1.807-1.307 2.94-3.672 2.94-6.283c0-2.61-1.133-4.976-2.94-6.284zm3.333 11.88c1.726-1.369 2.99-4.036 2.99-7.217s-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783c0 3.656-1.445 6.958-3.747 8.783z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpeechLanguageTherapyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpeechLanguageTherapyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermIcon],svg[healthicons-sperm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M29.587 16.464c.305-.305.369-.77.235-1.18c-.704-2.149.038-4.903 2.08-6.945c2.687-2.687 6.609-3.123 8.76-.973s1.713 6.072-.974 8.76c-2.018 2.017-4.73 2.766-6.868 2.104c-.406-.126-.862-.057-1.163.244l-.24.241a3.55 3.55 0 0 1-2.719 1.14l-3.224-.12c-2.464-.091-4.308 2.39-3.49 4.699l.273.774c1.29 3.647-1.644 7.562-5.534 7.38l-1.964-.09c-.969-.045-1.748.852-1.566 1.803l.31 1.628c.487 2.549-1.34 5.046-3.934 5.378l-1.46.188a1.467 1.467 0 1 1-.373-2.911l1.57-.202c.865-.11 1.474-.943 1.312-1.792l-.31-1.629c-.545-2.853 1.792-5.544 4.697-5.41l1.965.092c1.768.082 3.102-1.698 2.515-3.355l-.274-.774c-1.517-4.287 1.908-8.896 6.483-8.726l3.224.12a.5.5 0 0 0 .389-.162z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpermIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermNegativeIcon],svg[healthicons-sperm-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpermNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM29.822 15.284c.134.41.07.874-.235 1.18l-.28.282a.5.5 0 0 1-.389.163l-3.224-.12c-4.575-.172-8 4.438-6.483 8.725l.274.774c.587 1.657-.747 3.437-2.515 3.355l-1.965-.091c-2.905-.135-5.242 2.556-4.698 5.409l.311 1.629c.162.849-.447 1.681-1.311 1.792l-1.571.202a1.467 1.467 0 1 0 .373 2.91l1.46-.187c2.594-.332 4.421-2.83 3.935-5.378l-.311-1.628c-.182-.951.598-1.848 1.566-1.803l1.964.09c3.89.181 6.825-3.733 5.534-7.38l-.274-.774c-.817-2.309 1.027-4.79 3.49-4.699l3.225.12a3.55 3.55 0 0 0 2.72-1.14l.24-.24c.3-.302.756-.37 1.162-.245c2.137.662 4.85-.087 6.868-2.105c2.687-2.687 3.123-6.609.973-8.76s-6.072-1.713-8.76.974c-2.041 2.042-2.784 4.796-2.08 6.945" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpermNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpermNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineIcon],svg[healthicons-spine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.206 6.242A1.01 1.01 0 0 0 15 7.229v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.005a.99.99 0 0 0 .744-.962v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V9.887a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 10a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2.794 8.242a1.01 1.01 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.006a.99.99 0 0 0 .744-.963v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 22a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2.794 8.242a1.01 1.01 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.005a.99.99 0 0 0 .744-.962v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 34a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineNegativeIcon],svg[healthicons-spine-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpineNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15 7.229c0-.634.583-1.107 1.206-.987c5.903 1.138 9.682 1.152 15.586.003A1.012 1.012 0 0 1 33 7.232v.655a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.848a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.12a.99.99 0 0 1-.744.961c-6.18 1.58-10.036 1.58-16.502-.005a.99.99 0 0 1-.754-.966v-1.11a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V9.887a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1zM18 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1.794 9.242a1.01 1.01 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.006a.99.99 0 0 0 .744-.963v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 22a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-4 9.229c0-.634.583-1.107 1.206-.987c5.903 1.138 9.682 1.152 15.586.003a1.012 1.012 0 0 1 1.208.987v.655a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.848a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.12c0 .452-.305.85-.744.962c-6.18 1.579-10.036 1.578-16.502-.006a.99.99 0 0 1-.754-.966v-1.11a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1.848a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1zM18 33a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpineNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpineNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenIcon],svg[healthicons-spleen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.657 24.15q.102-.048.203-.093l.044-.013c.306-.094.61-.051.995.161c.419.23.852.613 1.364 1.104l.232.226c.421.408.899.872 1.382 1.227c.582.428 1.338.83 2.225.748c.541-.05.935-.543.879-1.1c-.057-.558-.541-.97-1.083-.92c-.19.018-.46-.055-.89-.371c-.361-.267-.719-.613-1.141-1.022l-.27-.26c-.17-.164-.352-.336-.544-.507c.597-.02 1.229.017 1.906.11a.975.975 0 0 0 1.095-.873a1.026 1.026 0 0 0-.864-1.138c-2.53-.344-4.624-.015-6.653 1.01q-.354.18-.703.385q.796.613 1.636 1.191zl-.23.113c-1.692.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017a1.034 1.034 0 0 1-.004-1.434c1.888-1.923 3.569-3.432 5.303-4.451c-6.341-4.876-10.272-11.197-2.627-15.9C29.023-2.802 44.11 26.834 33.396 40.29c-1.242 1.559-6.038 6.898-12.14 3.719c-6.988-3.64-5.063-7.908-3.29-11.836c1.362-3.021 2.635-5.842-.309-8.023m9.733-.998c-1.182-4.076-4.029-7.874-8.05-11.4l1.32-1.504c4.18 3.666 7.324 7.77 8.65 12.347c1.338 4.614.794 9.591-2.187 14.895l-1.744-.98c2.75-4.892 3.181-9.318 2.01-13.358" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpleenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenNegativeIcon],svg[healthicons-spleen-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpleenNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.657 24.15q.102-.048.203-.093l.044-.013c.306-.094.61-.051.995.161c.419.23.852.613 1.364 1.104l.232.225c.421.409.899.873 1.382 1.228c.582.428 1.338.83 2.225.748c.541-.05.935-.543.878-1.1c-.056-.558-.54-.97-1.082-.92c-.19.018-.46-.056-.89-.371c-.361-.267-.719-.613-1.141-1.022l-.27-.26c-.17-.164-.352-.336-.544-.507c.597-.02 1.229.017 1.906.11a.975.975 0 0 0 1.095-.873a1.026 1.026 0 0 0-.864-1.138c-2.53-.344-4.624-.015-6.653 1.01q-.354.18-.703.385q.796.613 1.636 1.191zl-.23.113c-1.692.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017a1.034 1.034 0 0 1-.004-1.434c1.888-1.923 3.569-3.432 5.303-4.451c-6.341-4.876-10.273-11.197-2.627-15.9C29.023-2.802 44.11 26.834 33.396 40.29c-1.242 1.559-6.038 6.898-12.141 3.719c-6.987-3.64-5.062-7.908-3.29-11.836c1.363-3.021 2.636-5.842-.308-8.023m1.684-12.398c4.02 3.526 6.867 7.324 8.049 11.4c1.17 4.04.739 8.466-2.01 13.358l1.743.98c2.98-5.304 3.524-10.281 2.188-14.895c-1.327-4.577-4.47-8.68-8.652-12.347z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpleenNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpleenNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSprayingIcon],svg[healthicons-spraying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24.767 17.736c.376.17.794.264 1.233.264h4v-6h2v-2h-3.341a6 6 0 1 0-3.892 7.736M23 8c-1.48 0-2.773.804-3.465 2h6.93A4 4 0 0 0 23 8m3 8a1 1 0 0 1-1-1v-3h3v4z" clip-rule="evenodd"></svg:path><svg:path d="M10 20a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.552 0 8.76-1.833 10.172-6.007a2.001 2.001 0 0 0 1.845-3.084l3.788-2.062l-.956-1.756l-4.856 2.643l-5.004-1.877h-.002A1 1 0 0 1 25 28.92V26a2 2 0 1 0-4 0v5a2 2 0 0 0 1.298 1.873l6.636 2.488C27.897 38.388 24.771 40 20.66 40c-2.487 0-4.671-.707-6.21-1.921c-1.313-1.035-2.184-2.456-2.398-4.218A4 4 0 0 0 15 30v-6a4 4 0 0 0-4-4h1.5a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zm31.848 5.53l-1.696-1.06L36.696 30H42v-2h-1.696z"></svg:path><svg:path d="M18 20a2 2 0 0 0-2 2v9.5a5.5 5.5 0 0 0 8.758 4.431l-3.162-1.186A4 4 0 0 1 19 31v-5a4 4 0 0 1 8 0v-3a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class HealthiconsSprayingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSprayingNegativeIcon],svg[healthicons-spraying-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSprayingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10 20a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.552 0 8.76-1.833 10.172-6.007a2.001 2.001 0 0 0 1.845-3.084l3.788-2.062l-.956-1.756l-4.856 2.643L27 30.364l-1.351-.507h-.002A1 1 0 0 1 25 28.92V26a2 2 0 1 0-4 0v5a2 2 0 0 0 1.298 1.873l3.913 1.467l2.723 1.021C27.897 38.388 24.771 40 20.66 40c-2.487 0-4.671-.707-6.21-1.921c-1.313-1.035-2.184-2.456-2.398-4.218A4 4 0 0 0 15 30v-6a4 4 0 0 0-4-4h1.5a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zm16.465-10A4 4 0 0 0 23 8c-1.48 0-2.773.804-3.465 2zM25 15v-3h3v4h-2a1 1 0 0 1-1-1m5 2v-5h2v-2h-3.341a6 6 0 1 0-3.892 7.736c.376.17.794.264 1.233.264h4zm10.152 7.47l-2.5 4l-.956 1.53H42v-2h-1.696l1.544-2.47zM18 20a2 2 0 0 0-2 2v9.5a5.5 5.5 0 0 0 8.758 4.431l-3.162-1.186A4 4 0 0 1 19 31v-5a4 4 0 0 1 8 0v-3a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSprayingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSprayingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsIcon],svg[healthicons-spreadsheets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 20v3h16v-3zm0 8v-3h4v3zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3zm0-2v-3h4v3zm-2 0h-4v-3h4z"></svg:path><svg:path fill-rule="evenodd" d="M30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1zM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M37.414 10H32V4.586z"></svg:path></svg:g>`,
})
export class HealthiconsSpreadsheetsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsNegativeIcon],svg[healthicons-spreadsheets-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpreadsheetsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1zM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm2 1v3h16v-3zm0 8v-3h4v3zm0 5v-3h4v3zm6-3v3h4v-3zm6 3v-3h4v3zm0-5v-3h4v3zm-6 0h4v-3h-4zm10-18h5.414L32 4.586z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpreadsheetsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpreadsheetsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareLargeIcon],svg[healthicons-square-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareLargeNegativeIcon],svg[healthicons-square-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSquareLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm7 6a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSquareLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSquareLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumIcon],svg[healthicons-square-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumNegativeIcon],svg[healthicons-square-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSquareMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm10 9a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSquareMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSquareMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareSmallIcon],svg[healthicons-square-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareSmallNegativeIcon],svg[healthicons-square-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSquareSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm13 12a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSquareSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSquareSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesIcon],svg[healthicons-staples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39v5h2v-5h5v1h2v-4h-2v1h-5v-7h5v1h2v-4h-2v1h-5v-8h5v1h2v-4h-2v1h-5v-7h5v1h2V8h-2v1h-5V4h-2v5h-5V8h-2v4h2v-1h5v7h-5v-1h-2v4h2v-1h5v8h-5v-1h-2v4h2v-1h5v7h-5v-1h-2v4h2v-1z"></svg:path>`,
})
export class HealthiconsStaplesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarLargeIcon],svg[healthicons-star-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.097 7.064a1.005 1.005 0 0 1 1.806 0l4.782 9.736c.147.298.43.505.759.553l10.693 1.561c.826.121 1.155 1.141.558 1.726l-7.738 7.579a1.01 1.01 0 0 0-.29.895l1.827 10.7c.141.827-.722 1.458-1.461 1.068l-9.564-5.053a1 1 0 0 0-.938 0l-9.564 5.053c-.739.39-1.602-.24-1.461-1.067l1.826-10.7a1.01 1.01 0 0 0-.29-.896L6.306 20.64c-.598-.585-.268-1.605.558-1.726l10.694-1.56c.328-.049.611-.256.758-.554z"></svg:path>`,
})
export class HealthiconsStarLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarLargeNegativeIcon],svg[healthicons-star-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.903 7.064a1.005 1.005 0 0 0-1.806 0L18.315 16.8c-.147.298-.43.505-.759.553L6.864 18.914c-.826.121-1.156 1.141-.558 1.726l7.738 7.579c.237.232.346.567.29.895l-1.827 10.7c-.141.827.722 1.458 1.461 1.068l9.564-5.053c.294-.155.644-.155.938 0l9.564 5.053c.739.39 1.602-.24 1.461-1.067l-1.827-10.7a1.01 1.01 0 0 1 .29-.896l7.738-7.579c.597-.585.268-1.605-.558-1.726l-10.693-1.56a1.01 1.01 0 0 1-.759-.554z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumIcon],svg[healthicons-star-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.108 11.06a.99.99 0 0 1 1.784 0l3.556 7.278a1 1 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665a1.01 1.01 0 0 0-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.99.99 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06l1.358-7.998a1.01 1.01 0 0 0-.286-.89l-5.752-5.665c-.591-.581-.265-1.594.551-1.714l7.95-1.167a1 1 0 0 0 .75-.55z"></svg:path><svg:path fill-rule="evenodd" d="m16.34 28.324l1.972.335l-1.018 5.998l5.305-2.817a2.99 2.99 0 0 1 2.802 0l5.305 2.817l-1.018-5.998a3.01 3.01 0 0 1 .855-2.65l4.332-4.266l-5.969-.876a3 3 0 0 1-2.255-1.651l1.797-.878a1 1 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665a1.01 1.01 0 0 0-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.99.99 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06zm-6.038-6.555c-.591-.581-.265-1.594.551-1.714l7.95-1.167a1 1 0 0 0 .75-.55l1.796.878a3 3 0 0 1-2.256 1.65l-5.968.877l4.333 4.266a3.01 3.01 0 0 1 .854 2.65l-1.972-.335a1.01 1.01 0 0 0-.286-.89zM24 13.79l2.65 5.426l1.798-.878l-3.556-7.278a.99.99 0 0 0-1.784 0l-3.556 7.278l1.797.878z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStarMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumNegativeIcon],svg[healthicons-star-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.892 11.06a.99.99 0 0 0-1.784 0l-3.556 7.278a1 1 0 0 1-.749.55l-7.95 1.167c-.816.12-1.142 1.133-.551 1.714l5.752 5.665c.235.231.342.564.286.89l-1.358 7.999c-.139.82.714 1.447 1.444 1.06l7.11-3.777a.99.99 0 0 1 .927 0l7.11 3.776c.73.388 1.584-.238 1.445-1.06l-1.358-7.998a1.01 1.01 0 0 1 .286-.89l5.752-5.665c.591-.581.265-1.594-.551-1.714l-7.95-1.167a1 1 0 0 1-.75-.55z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallIcon],svg[healthicons-star-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.083 14.568a1.025 1.025 0 0 1 1.834 0l2.452 4.951c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854a1.02 1.02 0 0 0-.294.902l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557z"></svg:path><svg:path fill-rule="evenodd" d="m24 17.222l-1.577 3.185l-1.792-.888l2.452-4.95a1.025 1.025 0 0 1 1.834 0l2.452 4.95l-1.792.888zm6.222 9.24a1.02 1.02 0 0 0-.294.903l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557l1.793.888a3.02 3.02 0 0 1-2.276 1.649l-3.512.508l2.536 2.464l-1.31 1.349l1.31-1.35a3.02 3.02 0 0 1 .872 2.677l-.6 3.488l3.153-1.652a3.03 3.03 0 0 1 2.808 0l3.153 1.652l-.6-3.488a3.02 3.02 0 0 1 .872-2.676zm1.143-3.898l-3.512-.508a3.02 3.02 0 0 1-2.276-1.65l1.792-.887c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854l-1.393-1.435z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStarSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallNegativeIcon],svg[healthicons-star-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.917 14.568a1.025 1.025 0 0 0-1.834 0L20.63 19.52c-.15.3-.437.51-.77.558l-5.484.793a1.018 1.018 0 0 0-.567 1.739l3.968 3.854c.24.234.35.571.294.902l-.937 5.441c-.143.833.734 1.468 1.484 1.075l4.905-2.57c.298-.156.654-.156.952 0l4.905 2.57c.75.393 1.627-.242 1.484-1.075l-.937-5.441c-.057-.33.053-.668.294-.902l3.968-3.854a1.018 1.018 0 0 0-.567-1.739l-5.483-.794a1.02 1.02 0 0 1-.77-.557z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStentIcon],svg[healthicons-stent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M27.623 7.12a21 21 0 0 0-7.246 0L17 7.71v2.191a9.3 9.3 0 0 1-.903 4l-.42.882A17.3 17.3 0 0 0 14 22.212v.074c0 3.213.716 6.386 2.097 9.288l.323.678c.382.803.58 1.68.58 2.57v3.467l1.652.29c3.538.62 7.158.62 10.696 0l1.652-.29v-2.716c0-1.383.308-2.75.903-4A21.6 21.6 0 0 0 34 22.287v-.074c0-2.57-.573-5.108-1.677-7.429l-.743-1.56a6 6 0 0 1-.58-2.57V7.71zm-3.61 9.41l-2.546-3.887l-3.799 5.585l3.03 4.546l-3.03 4.454l3.79 5.687l2.573-3.928l2.617 3.928l3.698-5.643l-2.95-4.5l2.95-4.5l-3.689-5.628zm1.875 6.245l-1.857-2.787l-1.825 2.784l1.808 2.758zm-4.456-6.419l-1.28 1.882l1.29 1.934l1.245-1.9zm3.91 1.882l1.28-1.882l1.256 1.916l-1.246 1.9zm-3.91 7.118l-1.28 1.882l1.29 1.934l1.245-1.9zm3.91 1.882l1.28-1.882l1.255 1.916l-1.245 1.9z"></svg:path><svg:path d="M34 4a1 1 0 0 1 1 1v5.653c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 38 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4V42.5a1 1 0 1 1-2 0v-6.927c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 36 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43V5a1 1 0 0 1 1-1M14 4a1 1 0 0 0-1 1v5.653c0 .889-.198 1.767-.58 2.57l-.743 1.56A17.3 17.3 0 0 0 10 22.212v.074c0 3.213.716 6.386 2.097 9.288a9.3 9.3 0 0 1 .903 4V43a1 1 0 1 0 2 0v-7.427c0-1.68-.375-3.34-1.097-4.859A19.6 19.6 0 0 1 12 22.286v-.074c0-2.273.507-4.517 1.483-6.57l.743-1.56a8 8 0 0 0 .774-3.43V5a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class HealthiconsStentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStentNegativeIcon],svg[healthicons-stent-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m13.998 41.52l-.194-.04l.392-1.96l.194.038a49 49 0 0 0 19.22 0l.194-.039l.392 1.962l-.194.038a51 51 0 0 1-20.004 0M20.377 7.12a21 21 0 0 1 7.246 0L31 7.71v2.943c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 34 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4v2.715l-1.652.29c-3.538.62-7.158.62-10.696 0L17 38.289v-3.467a6 6 0 0 0-.58-2.57l-.323-.678A21.6 21.6 0 0 1 14 22.286v-.074c0-2.57.573-5.108 1.677-7.429l.42-.882a9.3 9.3 0 0 0 .903-4v-2.19zm6.9 1.97a19 19 0 0 0-6.555 0L19 9.39v.511c0 1.681-.375 3.341-1.097 4.86l-.42.881A15.3 15.3 0 0 0 16 22.212v.074c0 2.916.65 5.795 1.903 8.428l.323.679A8 8 0 0 1 19 34.822v1.787c3.308.58 6.692.58 10 0v-1.036c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 32 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43v-1.26z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.45 14.5l2.47 3.772l-2.47 3.772l-2.54-3.811z"></svg:path><svg:path d="m21.467 12.644l3.688 5.628l-3.698 5.643l-3.789-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m26.64 14.5l2.471 3.772l-2.471 3.772l-2.54-3.811z"></svg:path><svg:path d="m26.657 12.644l3.688 5.628l-3.697 5.643l-3.79-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.45 23.5l2.47 3.772l-2.47 3.772l-2.54-3.811z"></svg:path><svg:path d="m21.467 21.644l3.688 5.628l-3.698 5.643l-3.789-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m26.64 23.5l2.471 3.772l-2.471 3.772l-2.54-3.811z"></svg:path><svg:path d="m26.657 21.644l3.688 5.628l-3.697 5.643l-3.79-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901zM34 4a1 1 0 0 1 1 1v5.653c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 38 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4V43a1 1 0 1 1-2 0v-7.427c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 36 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43V5a1 1 0 0 1 1-1M14 4a1 1 0 0 0-1 1v5.653c0 .889-.198 1.767-.58 2.57l-.743 1.56A17.3 17.3 0 0 0 10 22.212v.074c0 3.213.716 6.386 2.097 9.288a9.3 9.3 0 0 1 .903 4V43a1 1 0 1 0 2 0v-7.427c0-1.68-.375-3.34-1.097-4.859A19.6 19.6 0 0 1 12 22.286v-.074c0-2.273.507-4.517 1.483-6.57l.743-1.56a8 8 0 0 0 .774-3.43V5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeIcon],svg[healthicons-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 1 0-1.732-3H10a3 3 0 0 0-3 3v9c-.552 0-1.005.449-.955.999A11 11 0 0 0 14 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0 0 14.5-.08v-4a3.75 3.75 0 1 1 7.5 0v2.42a3.001 3.001 0 1 0 2 0v-2.42a5.75 5.75 0 0 0-11.5 0v4a5.25 5.25 0 0 1-10.5.08A3 3 0 0 0 20 32v-2.417a11 11 0 0 0 7.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 0 0-3-3h-.268A2 2 0 0 0 20 8a2 2 0 0 0 3.732 1H24a1 1 0 0 1 1 1v9h.21c-.553 0-.993.45-1.07.997a7.21 7.21 0 0 1-14.28 0C9.783 19.45 9.343 19 8.79 19H9v-9a1 1 0 0 1 1-1h.268A2 2 0 0 0 12 10"></svg:path>`,
})
export class HealthiconsStethoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeNegativeIcon],svg[healthicons-stethoscope-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStethoscopeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm27 19c.552 0 1.005.449.955.999A11 11 0 0 1 20 29.583V32a3 3 0 0 1-2 2.83a5.25 5.25 0 0 0 10.5-.08v-4a5.75 5.75 0 0 1 11.5 0v2.42a3.001 3.001 0 1 1-2 0v-2.42a3.75 3.75 0 1 0-7.5 0v4a7.25 7.25 0 0 1-14.5.08A3 3 0 0 1 14 32v-2.417a11 11 0 0 1-7.955-9.584c-.05-.55.403-.999.955-.999v-9a3 3 0 0 1 3-3h.268A2 2 0 0 1 14 8a2 2 0 0 1-3.732 1H10a1 1 0 0 0-1 1v9h-.21c.553 0 .993.45 1.07.997a7.21 7.21 0 0 0 14.28 0c.077-.547.517-.997 1.07-.997H25v-9a1 1 0 0 0-1-1h-.268A2 2 0 0 1 20 8a2 2 0 0 1 3.732-1H24a3 3 0 0 1 3 3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStethoscopeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStethoscopeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStiIcon],svg[healthicons-sti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M14.826 15.077A2 2 0 0 1 16.6 14h12.418c2.122 0 3.892.742 5.136 2.001A6.46 6.46 0 0 1 36 20.481c.015 1.61-.564 3.26-1.793 4.513c-1.054 1.075-2.492 1.764-4.207 1.953V42a2 2 0 0 1-3.994.153l-.87-11.316a4.002 4.002 0 1 0-2.771-7.489c-.195-.575-.565-1.118-1.114-1.585A133 133 0 0 0 18 19.08V18h-.186l-1.168 2.246l-.151.194l.016.012l.05.04a120 120 0 0 1 .92.736c.619.502 1.485 1.215 2.473 2.057c.506.43.608.852.568 1.199c-.045.392-.293.838-.745 1.198c-.729.58-1.839.822-2.908.174l-4.118-3.294a2 2 0 0 1-.525-2.485zm5.259 12.746a4.54 4.54 0 0 1-2.085.415V42a2 2 0 0 0 3.994.153l.87-11.316a4.01 4.01 0 0 1-2.78-3.014M24 29a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6-10.892V22.9c.64-.143 1.07-.42 1.35-.707A2.34 2.34 0 0 0 32 20.52a2.46 2.46 0 0 0-.693-1.708c-.287-.29-.706-.56-1.307-.703" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStiNegativeIcon],svg[healthicons-sti-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStiNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-11.4 6a2 2 0 0 0-1.774 1.077l-2.6 5a2 2 0 0 0 .525 2.485l4.118 3.294c1.07.648 2.18.406 2.908-.174c.452-.36.7-.806.745-1.198c.04-.347-.062-.768-.568-1.2a131 131 0 0 0-3.394-2.793l-.05-.039l-.012-.01l-.003-.002l.151-.194L17.815 18H18v1.08c.174.139.426.34.74.595c.63.51 1.509 1.233 2.511 2.087c.549.468.919 1.01 1.114 1.586a4 4 0 1 1 2.77 7.488l.87 11.317A2 2 0 0 0 30 42V26.947c1.715-.19 3.153-.878 4.207-1.953c1.229-1.253 1.808-2.903 1.793-4.513A6.46 6.46 0 0 0 34.154 16c-1.244-1.259-3.014-2-5.135-2zM18 28.238a4.54 4.54 0 0 0 2.085-.415a4.01 4.01 0 0 0 2.78 3.014l-.87 11.316A2 2 0 0 1 18 42V28.239M26 27a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-4.1v-4.792c.601.143 1.02.413 1.307.703A2.46 2.46 0 0 1 32 20.519c.006.64-.223 1.24-.65 1.674c-.28.287-.71.564-1.35.707" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStiNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStiNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesIcon],svg[healthicons-stitches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39.979V44h2v-4.019c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796v-7c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V20.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V11.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V4h-2v5.976c-1.37-.068-2.346-.276-3.105-.544A7 7 0 0 1 19 9.048V9a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 18a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v7.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 28a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 37a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66"></svg:path>`,
})
export class HealthiconsStitchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStockOutIcon],svg[healthicons-stock-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 6.293a1 1 0 0 1 0 1.414L25.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L24 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.415L22.586 10l-2.293-2.293a1 1 0 1 1 1.415-1.414L24 8.586l2.293-2.293a1 1 0 0 1 1.414 0m-8.509 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504z"></svg:path><svg:path fill-rule="evenodd" d="m37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996zM24.327 15.055a1 1 0 0 0-.654 0l-12.998 4.5l-.023.007a1 1 0 0 0-.442.325l-3.99 4.988a1 1 0 0 0 .464 1.574l13.5 4.5a1 1 0 0 0 1.135-.376L24 26.743l2.68 3.83a1 1 0 0 0 1.136.376l13.5-4.5a1 1 0 0 0 .465-1.574l-3.99-4.988a1 1 0 0 0-.466-.333zM24 23.942l9.943-3.442L24 17.058L14.057 20.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStockOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStockOutNegativeIcon],svg[healthicons-stock-out-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStockOutNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21.708 6.293a1 1 0 1 0-1.415 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L24 8.586zm-2.51 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504zM25 42.023L37 37.5v-7.504l-8.198 2.732A3.5 3.5 0 0 1 25 31.64zm-.673-26.968a1 1 0 0 0-.654 0l-12.682 4.39a1 1 0 0 0-.93.397l-3.744 5.056a1 1 0 0 0 .482 1.542l13.474 4.564a1 1 0 0 0 1.153-.393L24 26.75l2.574 3.861a1 1 0 0 0 1.153.393l13.474-4.564a1 1 0 0 0 .483-1.542l-3.745-5.056a1 1 0 0 0-.93-.397zM24 23.975l-9.936-3.478L24 17.059l9.936 3.44z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStockOutNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStockOutNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachIcon],svg[healthicons-stomach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.48 10.133h-1.638c-.713 0-1.397.278-1.898.771c-1.112 1.095-2.955 1.013-3.96-.176l-.376-.445a3.06 3.06 0 0 1-.727-1.96L21.875 7h-4.784v2.002c0 1.664.452 3.3 1.31 4.74l.053.09a9 9 0 0 0 2.078 2.39l2.358 1.901c1.877 1.514 2.44 4.08 1.36 6.205a5.23 5.23 0 0 1-3.241 2.646l-.536.153a6.8 6.8 0 0 1-2.452.23c-2.962-.266-5.776 1.393-6.875 4.078l-.535 1.306A8.2 8.2 0 0 0 10 35.842V41h4.773v-5.427c0-.86.337-1.687.944-2.314a3.55 3.55 0 0 1 4.106-.7l2.019.994c.91.448 1.917.682 2.938.682h3.416c1.402 0 2.791-.26 4.093-.764a10.96 10.96 0 0 0 5.4-4.482l.62-1.012A11.44 11.44 0 0 0 40 22c0-1.96-.507-3.889-1.474-5.608l-.984-1.749a8.75 8.75 0 0 0-2.55-2.83l-.617-.44a6.7 6.7 0 0 0-3.895-1.24"></svg:path><svg:path fill-rule="evenodd" d="M16.076 6h6.833c.006 1.136-.303 2.7.494 3.643c1.748 2.07 4.656-.515 7.065-.515c4.33 0 7.006 3.353 8.929 6.774c2.195 3.903 2.102 8.784-.235 12.604c-1.6 2.616-3.577 4.768-6.514 5.907c-4.353 1.688-9.213 1.052-13.271-.946c-1.549-.762-3.55.318-3.55 2.087V42H9v-6.178a9.2 9.2 0 0 1 .687-3.484c2.143-5.24 5.636-4.814 10.511-6.205c3.178-.906 5.069-4.763 2.047-7.2c-1.74-1.403-3.554-2.693-4.718-4.649c-1.544-2.593-1.451-5.387-1.451-8.284" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStomachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachCancerIcon],svg[healthicons-stomach-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.91 6h-6.834v.464c-.006 2.732-.01 5.365 1.45 7.82c1.016 1.707 2.527 2.906 4.05 4.115q.336.265.67.534c3.02 2.437 1.13 6.294-2.048 7.2c-.983.28-1.911.488-2.783.682c-3.447.768-6.017 1.34-7.728 5.523A9.2 9.2 0 0 0 9 35.822V42h6.827v-6.446c0-1.769 2.001-2.85 3.55-2.087c4.058 1.998 8.918 2.634 13.27.946c2.938-1.139 4.914-3.291 6.515-5.907c2.337-3.82 2.43-8.701.235-12.604c-1.923-3.421-4.598-6.774-8.929-6.774c-.872 0-1.81.34-2.735.673c-1.628.59-3.215 1.163-4.33-.158c-.627-.741-.57-1.866-.52-2.865c.014-.272.027-.535.026-.778m14.248 17.82c1.171.735 1.76 2.203 1.427 3.424c1.147 1.428-5.024 4.782-8.44 6.639c-.82.445-1.482.804-1.845 1.03a9 9 0 0 1-.518-.957c-1.242-.242-2.298-1.42-2.438-2.796s.683-2.474 1.887-2.61a6.3 6.3 0 0 1 .777-1.762c-.586-1.26-.293-2.69.738-3.33s2.442-.27 3.312.813a6.3 6.3 0 0 1 1.924.084c.655-1.019 2.005-1.271 3.176-.536"></svg:path><svg:path d="M39.162 28.506c2.337-3.82 2.43-8.701.235-12.604c-1.923-3.421-4.598-6.774-8.929-6.774c-.872 0-1.81.34-2.735.673c-1.628.59-3.215 1.163-4.33-.158c-.377-.446-.507-1.03-.54-1.643c-.02-.406 0-.824.02-1.222A16 16 0 0 0 22.91 6h-6.833v.464q-.002.462 0 .92q0 .309.006.616c.039 2.184.26 4.293 1.445 6.284c1.015 1.707 2.526 2.906 4.05 4.115q.335.265.668.534c3.021 2.437 1.13 6.294-2.047 7.2c-.983.28-1.911.488-2.783.682c-3.447.768-6.017 1.34-7.728 5.523A9.2 9.2 0 0 0 9 35.822V42h6.827v-6.446c0-1.769 2.001-2.85 3.55-2.087c4.058 1.998 8.918 2.634 13.27.946c2.938-1.139 4.914-3.291 6.515-5.907M13.827 40v-4.446c0-3.44 3.73-5.212 6.433-3.881c3.675 1.809 7.945 2.318 11.665.876c2.377-.922 4.057-2.678 5.53-5.087c1.96-3.203 2.038-7.31.199-10.58c-1.898-3.376-4.063-5.754-7.186-5.754c-.275 0-.662.078-1.25.272c-.257.084-.516.178-.807.283l-.097.035c-.317.115-.673.242-1.033.354c-.69.215-1.596.44-2.55.357c-1.055-.093-2.06-.553-2.856-1.495c-.825-.977-.982-2.14-1.013-2.934h-2.776c.04 2.058.233 3.705 1.16 5.261c.814 1.37 2.013 2.325 3.56 3.56q.336.266.695.555c2.187 1.765 2.7 4.238 1.93 6.402c-.723 2.027-2.512 3.659-4.684 4.278c-1.046.299-2.044.521-2.919.716l-.585.13c-1.04.237-1.856.448-2.562.739c-1.235.51-2.265 1.307-3.143 3.454A7.2 7.2 0 0 0 11 35.822V40z"></svg:path></svg:g>`,
})
export class HealthiconsStomachCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachNegativeIcon],svg[healthicons-stomach-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStomachNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23.542 17.038c-3.653-.078-5.647-.63-6.827-1.916c-.641-.7-1.12-1.7-1.434-3.187c-.315-1.493-.45-3.412-.45-5.887h-2c0 2.525.136 4.606.493 6.3c.36 1.7.954 3.075 1.918 4.126c1.774 1.934 4.535 2.487 8.254 2.564c-.115 6.76-1.42 9.456-2.927 10.585c-.787.59-1.739.841-2.893.928c-.785.058-1.567.04-2.413.02a54 54 0 0 0-1.432-.023c-2.163 0-3.8.669-5 1.737c-1.182 1.051-1.866 2.423-2.263 3.72c-.398 1.3-.527 2.58-.559 3.524a15 15 0 0 0 .024 1.487l.007.093l.003.027v.013l.996-.101l.995-.101v-.001l-.002-.014l-.005-.066a13 13 0 0 1-.02-1.269c.03-.837.143-1.93.473-3.006c.33-1.078.86-2.082 1.68-2.812c.79-.704 1.924-1.218 3.607-1.23c3.432.465 5.846 2.548 8.437 4.784l.112.097c2.573 2.22 5.386 4.618 9.427 4.618c3.952 0 6.592-1.668 8.19-4.22C41.488 35.35 42 32.13 42 29.049v-11c0-3.242-1.121-5.76-2.881-7.468c-1.748-1.696-4.067-2.532-6.367-2.532s-4.618.836-6.366 2.532c-1.573 1.526-2.636 3.699-2.844 6.458m1.438 7.905c3.338-1.804 5.869-.52 8.252.69c2.208 1.122 4.289 2.179 6.768.656v-8.241c0-2.758-.94-4.74-2.274-6.032c-1.344-1.305-3.15-1.968-4.974-1.968s-3.63.663-4.974 1.968c-1.333 1.293-2.273 3.274-2.273 6.032c0 2.769-.179 5.04-.525 6.895" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStomachNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStomachNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStopIcon],svg[healthicons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 25.14V12.5a1.5 1.5 0 1 0-3 0V23h-2V9.5a1.5 1.5 0 1 0-3 0V23h-2V12.5a1.5 1.5 0 1 0-3 0V25h-2v-8.5a1.5 1.5 0 1 0-3 0v13.238C12 35.405 16.595 40 22.263 40c3.794 0 7.279-2.094 9.06-5.444l5.907-11.107a1.812 1.812 0 0 0-3.184-1.731l-2.172 3.909c-.5.902-1.874.546-1.874-.486"></svg:path><svg:path fill-rule="evenodd" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m18.095 20c0-9.994-8.101-18.095-18.095-18.095S5.905 14.006 5.905 24S14.006 42.095 24 42.095S42.095 33.994 42.095 24" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStopNegativeIcon],svg[healthicons-stop-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStopNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 5.905c9.994 0 18.095 8.101 18.095 18.095S33.994 42.095 24 42.095S5.905 33.994 5.905 24S14.006 5.905 24 5.905M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20s20-8.954 20-20m-14 1.14V12.5a1.5 1.5 0 0 0-3 0V23h-2V9.5a1.5 1.5 0 0 0-3 0V23h-2V12.5a1.5 1.5 0 0 0-3 0V25h-2v-8.5a1.5 1.5 0 0 0-3 0v13.238C12 35.405 16.595 40 22.263 40c3.794 0 7.279-2.094 9.06-5.444l5.907-11.107a1.812 1.812 0 0 0-3.184-1.731l-2.172 3.909c-.501.902-1.874.546-1.874-.486" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStopNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStopNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarIcon],svg[healthicons-sugar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M34.459 10.048a1 1 0 0 1 .973.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.961-.254l-4.56-4.5a1 1 0 1 1 1.406-1.424l4.15 4.098l9.447-2.532l2.099-9.62l-7.374-6.606l-9.556 3.073l-1.018 3.11a1 1 0 1 1-1.901-.622l1.176-3.595a1 1 0 0 1 .645-.64z"></svg:path><svg:path d="M32.722 20.025a1 1 0 0 1 .753 1.197l-2.5 11a1 1 0 0 1-1.95-.444l2.5-11a1 1 0 0 1 1.197-.753"></svg:path><svg:path d="M23.738 13.853a1 1 0 0 1 1.409-.116l7.265 6.16l6.825-1.862a1 1 0 1 1 .526 1.93l-7.333 2a1 1 0 0 1-.91-.202l-7.666-6.5a1 1 0 0 1-.116-1.41m-12.996 1.424a1 1 0 0 1 .965-.239l8.27 2.361a1 1 0 0 1 .695.714l2.297 8.972a1 1 0 0 1-.308.999L16.23 33.75a1 1 0 0 1-.936.212L7.023 31.6a1 1 0 0 1-.69-.7l-2.298-8.5a1 1 0 0 1 .275-.984zm.967 1.842L6.12 22.452l1.994 7.38l7.202 2.056l5.563-4.9l-2.003-7.823z"></svg:path><svg:path d="M17.707 20.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-.974.256l-8-2.222a1 1 0 1 1 .535-1.927l7.438 2.066l3.587-3.587a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M12.758 24.03a1 1 0 0 1 1.212.727l2 8a1 1 0 0 1-1.94.486l-2-8a1 1 0 0 1 .728-1.213"></svg:path></svg:g>`,
})
export class HealthiconsSugarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltIcon],svg[healthicons-sugar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.014A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.628c5.825-7.017 12.914-8.012 21.255-8.993a1 1 0 0 1 1.11.876M20.006 28H6.517c.221.431.507.923.863 1.412C8.383 30.793 9.82 32 11.795 32c.617 0 1.155.016 1.623.03h.018c.479.014.868.025 1.217.018c.678-.013 1.127-.094 1.58-.317c.478-.236 1.04-.669 1.856-1.527c.536-.562 1.157-1.28 1.917-2.204" clip-rule="evenodd"></svg:path><svg:path d="m8 31.5l-2.5-4l16-.5l-4 5.5l-4.5.5zM5 22h2v2H5zm8 0h2v2h-2zm-3-.414L11.414 23L10 24.414L8.586 23zm8 0L19.414 23L18 24.414L16.586 23zM11 18h2v2h-2zm-3-.414L9.414 19L8 20.414L6.586 19zm4-4L13.414 15L12 16.414L10.586 15zm4 4L17.414 19L16 20.414L14.586 19z"></svg:path></svg:g>`,
})
export class HealthiconsSugarAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltNegativeIcon],svg[healthicons-sugar-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSugarAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.013A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.627c5.826-7.017 12.915-8.012 21.256-8.993a1 1 0 0 1 1.11.876M5 22h2v2H5zm10 0h-2v2h2zm-5-.414L11.414 23L10 24.414L8.586 23zM19.414 23L18 21.586L16.586 23L18 24.414zM11 18h2v2h-2zm-1.586 1L8 17.586L6.586 19L8 20.414zM12 13.586L13.414 15L12 16.414L10.586 15zM17.414 19L16 17.586L14.586 19L16 20.414z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSugarAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSugarAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarFreeIcon],svg[healthicons-sugar-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M31.184 15.551a1 1 0 0 1 .988.21l5.5 5a1 1 0 0 1 .308.935l-1.5 7.5a1 1 0 0 1-.723.77l-7.5 2a1 1 0 0 1-.882-.185l-2.5-2a1 1 0 1 1 1.25-1.562l1.236.99l1.04-4.856l-3.938-3.58l-.015.043a1 1 0 1 1-1.897-.632l.5-1.5a1 1 0 0 1 .633-.633zm-5.248 3.858l3.824 3.477l2.965-.848a1 1 0 0 1 .55 1.924l-2.923.835l-1.032 4.816l5.321-1.419l1.267-6.335l-4.648-4.225zm-10.643-.116a1 1 0 0 1 .97-.258l5.5 1.5a1 1 0 0 1 .707.723l1.5 6a1 1 0 0 1-.306.99l-4.5 4a1 1 0 0 1-.927.217l-5.5-1.5a1 1 0 0 1-.702-.702l-1.5-5.5a1 1 0 0 1 .258-.97zm1.004 1.825l-2.871 2.87l3.277.895l2.871-2.872zm4.661 2.338l-2.84 2.84l.923 3.386l2.842-2.527zm-3.883 6.619l-.89-3.26l-3.26-.89l.89 3.26z"></svg:path><svg:path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2 0c0 4.654-1.766 8.895-4.664 12.09l-3.91-3.91a1 1 0 0 0-1.413 1.415l3.9 3.9A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.568 1.702-8.739 4.506-11.913l3.844 3.845a1 1 0 0 0 1.415-1.414l-3.854-3.854A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18"></svg:path></svg:g>`,
})
export class HealthiconsSugarFreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarNegativeIcon],svg[healthicons-sugar-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSugarNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm34.459 10.048a1 1 0 0 1 .973.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.285.034a1 1 0 0 1-.909-.518l-4.326-4.27a1 1 0 1 1 1.405-1.424l3.231 3.19l1.902-8.37l-6.626-5.619l-.76 2.322a1 1 0 0 1-1.9-.622l1.176-3.595a1 1 0 0 1 .644-.64zm-3.12 20.574l2.025-8.912l6.4-1.745a1 1 0 0 0-.527-1.93l-6.825 1.862l-6.062-5.14l8.175-2.63l7.374 6.607l-2.1 9.62zM11.707 15.038a1 1 0 0 0-.965.239L4.31 21.416a1 1 0 0 0-.275.984l.016.062l-.015.048a1 1 0 0 0 .304 1.02l1.992 7.37a1 1 0 0 0 .69.7l7.23 2.064a1 1 0 0 0 1.032.295l.009.003a1 1 0 0 0 .936-.212l6.432-5.666a1 1 0 0 0 .308-.999l-2.297-8.972a1 1 0 0 0-.695-.713zm3.967 16.535l5.205-4.585l-2.003-7.823l-7.167-2.046l-5.263 5.023l6.26 1.738l3.587-3.587a1 1 0 0 1 1.414 1.414l-3.6 3.6zm-2.108-.184l-1.395-5.581l-5.561-1.545l1.505 5.57z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSugarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSugarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurgicalSterilizationIcon],svg[healthicons-surgical-sterilization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M26.185 36.649A4 4 0 1 0 28 40.03l.224-4.018h1.553L30 40.03a4 4 0 1 0 1.815-3.381L29.998 4L29 4.056L28.002 4zm3.48-2.637L29 22.056l-.665 11.956zM30 18.036a1 1 0 1 1-1.999-.001a1 1 0 0 1 1.999.001M22 40a2 2 0 1 1 4 0a2 2 0 0 1-4 0m12-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="M15 15V4s-3.478 2.26-3.948 10.998C10.993 16.101 11.896 17 13 17a2 2 0 0 0 2-2m-3 5.5a1.5 1.5 0 1 1 3 0v.086l-3 3zm0 5.914v1.672l3-3v-1.672zm0 6.172v-1.672l3-3v1.672zm0 2.828V42.5a1.5 1.5 0 1 0 3 0V32.414z"></svg:path></svg:g>`,
})
export class HealthiconsSurgicalSterilizationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurgicalSterilizationNegativeIcon],svg[healthicons-surgical-sterilization-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSurgicalSterilizationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 36a4 4 0 0 1 2.185.649L28.002 4l.998.056l.999-.056l1.816 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.552L28 40.03A4 4 0 1 1 24 36m5-13.944l.665 11.956h-1.33zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0M15 15V4s-3.478 2.26-3.948 10.998C10.993 16.101 11.895 17 13 17a2 2 0 0 0 2-2m-1.5 4a1.5 1.5 0 0 0-1.5 1.5v3.086l3-3V20.5a1.5 1.5 0 0 0-1.5-1.5M12 28.086v-1.672l3-3v1.672zm0 2.828v1.672l3-3v-1.672zM12 42.5v-7.086l3-3V42.5a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSurgicalSterilizationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSurgicalSterilizationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurveilanceOfficerIcon],svg[healthicons-surveilance-officer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M23.959 26c5.51 0 9.977-4.477 9.977-10S29.469 6 23.959 6s-9.977 4.477-9.977 10s4.466 10 9.977 10m0-2c4.408 0 7.981-3.582 7.981-8s-3.573-8-7.981-8s-7.982 3.582-7.982 8s3.573 8 7.982 8" clip-rule="evenodd"></svg:path><svg:path d="M14.413 33.442A3 3 0 0 0 12.983 36c0 1.657 1.341 3 2.994 3a2.997 2.997 0 0 0 2.993-3a3 3 0 0 0-2.602-2.975a9 9 0 0 1-.101-.404a20 20 0 0 1-.32-1.87a17 17 0 0 1-.14-1.914q-.002-.304.015-.527q.576-.166 1.153-.297c.44-.1.7.42.912.842l.085.169h9.978V42H6v-5.43c0-3.032 3.602-5.92 7.813-7.577c.011.622.07 1.325.155 2.006c.091.735.216 1.466.353 2.068q.044.194.092.374"></svg:path><svg:path d="M15.977 37.015c.537 0 .998-.44.998-1.015c0-.574-.46-1.015-.998-1.015c-.537 0-.998.44-.998 1.015c0 .574.46 1.015.998 1.015"></svg:path><svg:path fill-rule="evenodd" d="M39.174 26a.999.999 0 1 0-1.996 0v.24h-2.245V26a.999.999 0 1 0-1.995 0v.24h-1.123c-1.033 0-1.87.839-1.87 1.875v12.01c0 1.035.837 1.875 1.87 1.875h8.314C41.163 42 42 41.16 42 40.125v-12.01a1.873 1.873 0 0 0-1.87-1.875h-.957zm-.722 5.402a.8.8 0 0 0 .075-1.129a.797.797 0 0 0-1.126-.075l-2.309 2.025l-.612-.572a.797.797 0 0 0-1.129.04c-.3.324-.282.83.04 1.13l1.135 1.059c.303.282.77.29 1.082.016zm0 4.25a.8.8 0 0 0 .075-1.129a.797.797 0 0 0-1.126-.075l-2.309 2.024l-.613-.571a.797.797 0 0 0-1.128.04c-.3.323-.282.83.04 1.13l1.134 1.058a.807.807 0 0 0 1.083.017z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSurveilanceOfficerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingIcon],svg[healthicons-sweating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M34.767 35.835A15.94 15.94 0 0 1 24 40c-3.166 0-6.117-.92-8.6-2.506a5.7 5.7 0 0 1-1.195 1.61A17.9 17.9 0 0 0 24 42c5.06 0 9.633-2.088 12.903-5.45a5.35 5.35 0 0 1-2.136-.715m7.048-9.242Q41.999 25.322 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 1.897.293 3.725.837 5.442a21 21 0 0 1 1.51-2.114A16 16 0 0 1 8 24c0-8.837 7.163-16 16-16c8.758 0 15.873 7.037 15.998 15.765a18.6 18.6 0 0 1 1.817 2.828"></svg:path><svg:path d="M13.743 20.35c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076-.001c.119.738-.382 1.445-1.065 1.883c-.714.457-1.731.707-2.93.53a3.8 3.8 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39M41 30.727C41 32.535 39.433 34 37.5 34S34 32.535 34 30.727C34 27.864 37.5 25 37.5 25s3.5 2.864 3.5 5.727M10.5 38c1.933 0 3.5-1.465 3.5-3.273C14 31.864 10.5 29 10.5 29S7 31.864 7 34.727C7 36.535 8.567 38 10.5 38m20.907-5C30.03 29.438 27.23 27 24 27s-6.03 2.438-7.407 6c-.387 1.003.42 2 1.495 2h11.824c1.075 0 1.882-.997 1.495-2"></svg:path></svg:g>`,
})
export class HealthiconsSweatingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingNegativeIcon],svg[healthicons-sweating-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSweatingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm34.767 35.835A15.94 15.94 0 0 1 24 40c-3.166 0-6.117-.92-8.6-2.506a5.7 5.7 0 0 1-1.195 1.61A17.9 17.9 0 0 0 24 42c5.06 0 9.633-2.088 12.903-5.45a5.35 5.35 0 0 1-2.136-.715m7.048-9.242Q41.999 25.322 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 1.897.293 3.725.837 5.442a21 21 0 0 1 1.51-2.114A16 16 0 0 1 8 24c0-8.837 7.163-16 16-16c8.758 0 15.873 7.037 15.998 15.765a18.6 18.6 0 0 1 1.817 2.828M37.5 34c1.933 0 3.5-1.465 3.5-3.273C41 27.864 37.5 25 37.5 25S34 27.864 34 30.727C34 32.535 35.567 34 37.5 34m-23.5.727C14 36.535 12.433 38 10.5 38S7 36.535 7 34.727C7 31.864 10.5 29 10.5 29s3.5 2.864 3.5 5.727M24 27c3.23 0 6.03 2.438 7.407 6c.387 1.003-.42 2-1.495 2H18.088c-1.075 0-1.882-.997-1.495-2c1.376-3.562 4.177-6 7.407-6m-9.304-4.762c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m17.947 0c.682-.438 1.183-1.145 1.064-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.8 3.8 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSweatingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSweatingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSwimIcon],svg[healthicons-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.35 27.606a.51.51 0 0 1-.23.681l-.672.336a3.57 3.57 0 0 1-3.193 0l-1.343-.672a2.55 2.55 0 0 0-2.281 0l-1.343.672a3.57 3.57 0 0 1-3.194 0l-2.555-1.277l-4.929.985a.51.51 0 0 1-.246-.989l6.955-2.09l-.045-.053c-1.453-1.757-2.083-3.646-2.183-5.448c-.166-2.999 1.203-5.645 1.741-6.685l.008-.015c.061-.12.108-.21.142-.28c.754-1.55 2.646-2.198 4.222-1.477c1.584.725 2.279 2.572 1.521 4.131q-.106.217-.215.435c-.58 1.166-1.141 2.318-1.073 3.558c.032.576.215 1.203.785 1.893c.602.728 1.745 1.652 3.903 2.564c1.871.791 3.37 1.991 4.224 3.731m5.663-10.996a5.1 5.1 0 1 1 0 10.2a5.1 5.1 0 0 1 0-10.2"></svg:path><svg:path fill-rule="evenodd" d="M4.222 37.379a1.044 1.044 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.08a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.756 3.015-.018c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.474 3.933-1.565 5.557-.208l1.434 1.198c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.738-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405m0-6a1.044 1.044 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.08a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.756 3.015-.018c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.474 3.933-1.565 5.557-.208l1.434 1.198c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.738-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSwimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSwimNegativeIcon],svg[healthicons-swim-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSwimNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm27.448 28.902c.484-.238.688-.833.456-1.33c-.858-1.838-2.358-3.09-4.183-3.902c-1.96-.872-2.95-1.734-3.448-2.368c-.464-.591-.601-1.107-.626-1.576c-.056-1.07.402-2.086.952-3.25l.002-.003q.102-.214.2-.428c.818-1.77.074-3.876-1.652-4.707c-1.723-.83-3.782-.079-4.598 1.687c-.028.062-.07.145-.127.264l-.013.026c-.506 1.029-1.828 3.72-1.667 6.79a9.76 9.76 0 0 0 1.757 5.106l-5.816 1.84a1 1 0 0 0-.642 1.245a.967.967 0 0 0 1.214.66l7.2-2.277a.99.99 0 0 0 .653-.699a1.01 1.01 0 0 0-.234-.938a10 10 0 0 1-.48-.565c-1.152-1.465-1.636-3.01-1.713-4.48c-.131-2.511.974-4.79 1.474-5.81l.005-.01c.053-.107.104-.211.144-.298a1.503 1.503 0 0 1 2.018-.737a1.553 1.553 0 0 1 .723 2.049l-.195.415l-.037.077c-.507 1.073-1.193 2.522-1.107 4.15c.045.865.32 1.786 1.053 2.72c.748.952 2.028 1.985 4.187 2.946c1.51.672 2.597 1.632 3.205 2.935a.96.96 0 0 0 1.295.468M38 21a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2 0a6 6 0 1 1-12 0a6 6 0 0 1 12 0M4.222 37.379a1.043 1.043 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405m1.44-6.163a1.043 1.043 0 0 0-1.44.163a.983.983 0 0 0 .167 1.405l1.622 1.253a4.46 4.46 0 0 0 5.706-.225l.09-.08a2.237 2.237 0 0 1 2.995 0a4.327 4.327 0 0 0 5.795 0a2.237 2.237 0 0 1 2.996 0c1.64 1.49 4.19 1.46 5.815-.018c.83-.755 2.124-.759 2.938-.017l.07.063c1.613 1.467 4.127 1.425 5.686-.095a2.08 2.08 0 0 1 2.771-.104l1.434 1.198c.43.36 1.077.311 1.446-.108a.983.983 0 0 0-.111-1.41l-1.434-1.199c-1.623-1.356-4.044-1.266-5.556.209a2.08 2.08 0 0 1-2.836.047l-.07-.064c-1.618-1.472-4.136-1.44-5.738.018c-.851.774-2.18.778-3.015.017a4.327 4.327 0 0 0-5.795 0a2.237 2.237 0 0 1-2.996 0a4.327 4.327 0 0 0-5.796 0l-.089.081a2.37 2.37 0 0 1-3.032.12z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSwimNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSwimNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomIcon],svg[healthicons-symptom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35.084 38.183A17.97 17.97 0 0 0 42 24c0-7.857-5.034-14.538-12.052-16.994l.66-1.888C38.408 7.847 44 15.27 44 24c0 6.413-3.018 12.121-7.712 15.781zm-6.618 3.259A18 18 0 0 1 24 42a18 18 0 0 1-4.372-.535l-.475 1.944c1.552.386 3.175.591 4.847.591c1.706 0 3.361-.214 4.942-.615zM6 24c0 5.789 2.733 10.94 6.979 14.232l-1.204 1.598C7.045 36.172 4 30.442 4 24C4 15.27 9.593 7.847 17.391 5.118l.661 1.888C11.034 9.462 6 16.143 6 24M28.5 8.5A4.5 4.5 0 1 1 23.99 4h.02a4.5 4.5 0 0 1 4.49 4.5"></svg:path><svg:path fill-rule="evenodd" d="M16 22c.729 0 1.412-.195 2-.535V29v-.003v.001l-.002.011c-.007.046-.032.22-.125.57a22 22 0 0 1-.466 1.485l-.11.316a4 4 0 0 0-2.015 5.098a192 192 0 0 1-1.557 3.593l-.049.108a2 2 0 0 0 3.456 1.977l2.248-3.174a4 4 0 0 0 3.503-4.945L24 32.46l6.868 9.696a2 2 0 0 0 3.456-1.977l-.049-.108a126 126 0 0 1-.645-1.463c-.418-.96-.974-2.258-1.529-3.615a81 81 0 0 1-1.508-3.929a22 22 0 0 1-.466-1.486c-.093-.35-.118-.523-.125-.569l-.001-.01q0-.005-.001.001v-2.535A3.998 3.998 0 0 0 30.646 20H36a2 2 0 1 0 0-4H19.465A4 4 0 0 0 16 14c-1.48 0-2.773.804-3.465 2H12a2 2 0 1 0 0 4h.535A4 4 0 0 0 16 22m2-4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSymptomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomNegativeIcon],svg[healthicons-symptom-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSymptomNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4m2 9.985v-4.52A4 4 0 0 1 12.535 20H12a2 2 0 1 1 0-4h.535A4 4 0 0 1 16 14c1.48 0 2.773.804 3.465 2H36a2 2 0 1 1 0 4h-5.354A3.998 3.998 0 0 1 30 26.465V29q0-.01.002.01c.007.045.032.219.125.568c.105.398.264.901.466 1.486a81 81 0 0 0 1.508 3.929a179 179 0 0 0 2.174 5.078l.037.082l.01.02l.001.005v.001a2 2 0 0 1-3.455 1.977l-1.5-2.118L24 32.46l-1.117 1.577Q23 34.5 23 35a4 4 0 0 1-3.62 3.982l-2.248 3.174a2 2 0 0 1-3.456-1.977l.049-.108a118 118 0 0 0 .644-1.463c.262-.6.578-1.333.913-2.13a4 4 0 0 1 2.014-5.098q.057-.16.11-.316a22 22 0 0 0 .467-1.486c.093-.35.118-.523.125-.569Q18 28.99 18 29zM28 25a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4-12a4.5 4.5 0 0 0 .01-9h-.019A4.5 4.5 0 0 0 24 13m18 11c0 5.76-2.706 10.889-6.916 14.183l1.204 1.598C40.982 36.121 44 30.413 44 24c0-8.73-5.593-16.153-13.391-18.882l-.661 1.888C36.966 9.462 42 16.143 42 24M24 42c1.542 0 3.038-.194 4.466-.558l.476 1.943c-1.58.401-3.236.615-4.942.615c-1.672 0-3.295-.205-4.847-.592l.475-1.943c1.4.35 2.864.535 4.372.535m-11.021-3.768C8.733 34.94 6 29.79 6 24c0-7.857 5.034-14.538 12.052-16.994l-.66-1.888C9.592 7.847 4 15.27 4 24c0 6.442 3.045 12.172 7.775 15.83zM19 37a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSymptomNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSymptomNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSynergistInsecticideBioassaysIcon],svg[healthicons-synergist-insecticide-bioassays-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 26a4 4 0 0 1 3.446 6.032l-5.478-5.478A4 4 0 0 1 14 26m-3.446 1.968a4 4 0 0 0 5.478 5.478z"></svg:path><svg:path fill-rule="evenodd" d="M11 6a1 1 0 0 0-1 1v3.333a1 1 0 0 0 1 1h2V13H9.5a1.5 1.5 0 0 0-.018 3a1 1 0 0 1-.051.159l-3.263 7.458a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V24.418a2 2 0 0 0-.168-.801l-3.263-7.459a1 1 0 0 1-.05-.158a1.5 1.5 0 0 0-.019-3H15v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm3 4a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10m0 14a6 6 0 1 1 0 12a6 6 0 0 1 0-12" clip-rule="evenodd"></svg:path><svg:path d="M42 40c0 1.105-.625 2-5 2c-3.495 0-4.597-.571-4.899-1.364c-.363.517-1.042.949-1.876 1.13c-.709.155-1.392.098-1.917-.118c-.819.447-1.875.515-2.778-.069C24.528 40.931 24 39.667 24 38a1 1 0 1 1 2 0c0 1.3.404 1.762.617 1.9c.215.14.523.144.814-.058l.04-.026c.3-.627 1.06-1.176 2.026-1.387c1.333-.29 2.574.167 2.842 1.026c.223-.206.55-.423.957-.625l-2.066-2.392h-1.146a1.25 1.25 0 0 1-1.09-.637l-1.865-3.31a1 1 0 0 1 1.742-.982l1.65 2.928h.938c.436 0 .85.19 1.135.52l2.225 2.577c.17.197.25.442.243.683q.211-.047.432-.086l.134-2.222l-1.435-.828a1.5 1.5 0 0 1-.586-1.982l1.289-2.523a1 1 0 1 1 1.78.91l-1.072 2.1l1.291.745a1.5 1.5 0 0 1 .747 1.39l-.137 2.294l.181.012l1.853-1.711l-.943-1.587a1.25 1.25 0 0 1-.015-1.252l1.422-2.529a1 1 0 0 1 1.744.98l-1.21 2.152l.928 1.562a1.5 1.5 0 0 1-.271 1.868l-1.13 1.043C41.242 39 42 39.613 42 40"></svg:path><svg:path fill-rule="evenodd" d="M41 19.8c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69zm-6-7.644c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSynergistInsecticideBioassaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSynergistInsecticideBioassaysNegativeIcon],svg[healthicons-synergist-insecticide-bioassays-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsSynergistInsecticideBioassaysNegative0)"><svg:path d="M14 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10"></svg:path><svg:path fill-rule="evenodd" d="M14 24a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2a4 4 0 0 1 3.446 6.032l-5.478-5.478A4 4 0 0 1 14 26m-3.446 1.968a4 4 0 0 0 5.478 5.478z" clip-rule="evenodd"></svg:path><svg:path d="M35 12.156c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM10 10.333a1 1 0 0 0 1 1h2V13H9.5a1.5 1.5 0 0 0-.018 3a1 1 0 0 1-.051.159l-3.263 7.458a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V24.418a2 2 0 0 0-.168-.801l-3.263-7.459a1 1 0 0 1-.05-.158a1.5 1.5 0 0 0-.019-3H15v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zM42 40c0 1.105-.625 2-5 2c-3.495 0-4.597-.571-4.899-1.364c-.363.517-1.042.949-1.876 1.13c-.709.155-1.392.098-1.917-.118c-.819.447-1.875.515-2.778-.069C24.528 40.931 24 39.667 24 38a1 1 0 1 1 2 0c0 1.3.404 1.762.617 1.9c.215.14.523.144.814-.058l.04-.026c.3-.627 1.06-1.176 2.026-1.387c1.333-.29 2.574.167 2.842 1.026c.223-.206.55-.423.957-.625l-2.066-2.392h-1.146a1.25 1.25 0 0 1-1.09-.637l-1.865-3.31a1 1 0 0 1 1.742-.982l1.65 2.928h.938c.436 0 .85.19 1.135.52l2.225 2.577c.17.197.25.442.243.683q.211-.047.432-.086l.134-2.222l-1.435-.828a1.5 1.5 0 0 1-.586-1.982l1.289-2.523a1 1 0 0 1 1.78.91l-1.072 2.1l1.291.745a1.5 1.5 0 0 1 .747 1.39l-.137 2.294l.181.012l1.853-1.711l-.943-1.587a1.25 1.25 0 0 1-.015-1.252l1.422-2.529a1 1 0 0 1 1.744.98l-1.21 2.152l.928 1.562a1.5 1.5 0 0 1-.271 1.868l-1.13 1.043C41.242 39 42 39.613 42 40m-1-20.2c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSynergistInsecticideBioassaysNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSynergistInsecticideBioassaysNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyphilisAltIcon],svg[healthicons-syphilis-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.548 3.75L5.942 8.77a38 38 0 0 0-1.584 15.702l2.148 19.691l1.988-.217l-2.148-19.691a36 36 0 0 1 1.5-14.876l1.607-5.02zm32.904 0l1.606 5.02a38 38 0 0 1 1.584 15.702l-2.148 19.691l-1.988-.217l2.148-19.691a36 36 0 0 0-1.5-14.876l-1.607-5.02z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.055c0 5.035 3.383 9.28 8 10.586v9.414h2V35.01a11 11 0 0 0 2 0v9.045h2V34.64c4.617-1.306 8-5.551 8-10.586c0-6.075-4.925-11-11-11s-11 4.925-11 11m3.511 2.453a1 1 0 0 1 1.114-.872l.794.097a.543.543 0 0 0 .562-.76l-.074-.165a2.416 2.416 0 0 1 2.04-3.391c.12-.009.261-.073.4-.262c.143-.197.236-.476.238-.75c.004-.612.119-1.356.554-2.01c.46-.689 1.195-1.16 2.197-1.327a1 1 0 0 1 .328 1.973c-.525.088-.745.29-.86.463c-.138.208-.217.515-.22.913a3.33 3.33 0 0 1-.622 1.917c-.408.558-1.047 1.02-1.876 1.078a.416.416 0 0 0-.351.584l.073.165c.803 1.806-.67 3.796-2.63 3.557l-.795-.096a1 1 0 0 1-.872-1.114m14.23-6.88a1 1 0 0 1-.59 1.285l-1.679.62a.45.45 0 0 0-.131.768c1.685 1.398.829 4.136-1.353 4.325l-1.432.124a.465.465 0 0 0-.263.816c1.437 1.235 1.001 3.563-.786 4.194l-.674.238a1 1 0 0 1-.666-1.886l.674-.238a.465.465 0 0 0 .148-.791c-1.655-1.423-.78-4.137 1.394-4.325l1.433-.124a.45.45 0 0 0 .248-.794c-1.451-1.204-1.054-3.528.715-4.182l1.678-.62a1 1 0 0 1 1.285.59" clip-rule="evenodd"></svg:path><svg:path d="M25.15 6.055a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSyphilisAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeIcon],svg[healthicons-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.818 13.364A1.157 1.157 0 0 0 8.455 15l.818-.818l4.09 4.09l-3.272 3.273a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l13.91 13.91a5.79 5.79 0 0 0 6.204 1.296l1.16 1.159a2.31 2.31 0 0 0 2.235.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.636l-2.674-2.674a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.295-6.205l-13.91-13.91l1.637-1.636a1.157 1.157 0 1 0-1.637-1.637l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm10.04 1.413l-4.09-4.09l-2.08 2.08l4.09 4.09zm3.273 0l-5.354 5.354l4.406 4.406l5.354-5.353zm.689 11.397l2.454 2.454l1.637 1.637l1.636 1.636l1.636 1.636l.504.504a3.79 3.79 0 0 0 4.062.847l2.139-2.139a3.79 3.79 0 0 0-.848-4.062l-7.867-7.867zm15.702 9.909l-.027-.032l-.824-.824a6 6 0 0 1-.445.444l.824.825q.015.015.032.027a1.16 1.16 0 0 1 .44-.44"></svg:path><svg:path d="M6.818 13.364A1.157 1.157 0 1 0 8.455 15l.818-.819l4.09 4.09l-3.272 3.274a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l3.923 3.923q.278.277.581.509l-.036.036l4.03 4.03l3.272-3.274a1.157 1.157 0 1 1 1.636 1.637l-3.272 3.273l1.636 1.636l3.273-3.273a1.157 1.157 0 1 1 1.636 1.636l-3.273 3.273l.504.504a5.79 5.79 0 0 0 6.205 1.296l1.158 1.159a2.31 2.31 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 0 0 1.637-1.637l-2.674-2.673a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.296-6.205l-9.441-9.442l-.036.036a6 6 0 0 0-.51-.581l-3.922-3.923l1.637-1.637a1.157 1.157 0 1 0-1.637-1.636l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm10.04 1.413l-4.09-4.09l-2.08 2.08l4.09 4.09zm3.273 0l3.922 3.923a4 4 0 0 1 .49.6l-5.242 5.243a4 4 0 0 1-.601-.49l-3.923-3.922z"></svg:path></svg:g>`,
})
export class HealthiconsSyringeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeNegativeIcon],svg[healthicons-syringe-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSyringeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15 19.908l-.223.223l3.923 3.922q.281.28.6.49l5.243-5.242a4 4 0 0 0-.49-.601l-3.922-3.923l-.222.222l-1.414 1.414l-2.08 2.081zm6.545-6.545l3.923 3.923q.276.278.509.581l.036-.036l9.441 9.442a5.79 5.79 0 0 1 1.296 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296l-9.442-9.442l.036-.036a6 6 0 0 1-.581-.51l-3.923-3.922l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 1 1-1.636-1.636l.819-.819L9.05 11.13l2.08-2.08l1.415-1.415l.818-.817A1.157 1.157 0 1 1 15 8.455l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 0 1 1.637 1.636zm-4.687 1.414l-4.09-4.09l-2.08 2.08l4.09 4.09zM24.01 29.53a1.157 1.157 0 0 1 0-1.637l1.124-1.124a1.157 1.157 0 1 1 1.636 1.637l-1.123 1.124a1.157 1.157 0 0 1-1.637 0m3.366 1.542a1.157 1.157 0 1 0 1.637 1.637l1.03-1.03a1.157 1.157 0 1 0-1.637-1.637z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSyringeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSyringeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeVaccineIcon],svg[healthicons-syringe-vaccine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.818 12.864A1.157 1.157 0 1 0 8.455 14.5l.818-.819l4.09 4.09l-3.272 3.274a1.157 1.157 0 0 0 1.636 1.636l1.636-1.636L16.318 24H8.374c-.63 0-1.233.253-1.679.703A2.4 2.4 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69A12.12 12.12 0 0 0 15.5 42a12.12 12.12 0 0 0 6.84-4.31a12.3 12.3 0 0 0 2.422-5.246l2.51 2.51a5.79 5.79 0 0 0 6.206 1.297l1.158 1.159a2.31 2.31 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.8 5.8 0 0 0 .352-2.85a5.76 5.76 0 0 0-1.647-3.355l-13.91-13.91l1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 0 0-1.636-1.637zM26.547 31.4l5.353-5.353l-11.77-11.77l-5.353 5.354L19.147 24h3.479c.63 0 1.233.253 1.678.703c.446.45.696 1.06.696 1.697v3.454zm-9.689-17.123l-4.09-4.09l-2.08 2.08l4.09 4.09zm18.813 20.45a6 6 0 0 1-.445.444l.824.824a.314.314 0 1 0 .445-.444zm-2.135-7.044l.504.504a3.77 3.77 0 0 1 1.095 3.008a3.8 3.8 0 0 1-.247 1.054l-2.14 2.139a3.79 3.79 0 0 1-4.061-.847l-.504-.504zM17 29a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSyringeVaccineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeVaccineNegativeIcon],svg[healthicons-syringe-vaccine-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSyringeVaccineNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24.762 32.444a12.3 12.3 0 0 1-2.422 5.245A12.12 12.12 0 0 1 15.5 42a12.12 12.12 0 0 1-6.84-4.311A12.35 12.35 0 0 1 6 29.999v-3.6c0-.636.25-1.246.695-1.696A2.36 2.36 0 0 1 8.375 24h7.943l-2.955-2.955l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 1 1-1.636-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 0 1 1.637 1.636l-1.637 1.637l13.91 13.91a5.79 5.79 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296zM20.13 14.277l11.77 11.77l-5.354 5.353L25 29.854V26.4c0-.637-.25-1.247-.695-1.697a2.36 2.36 0 0 0-1.68-.703h-3.479l-4.369-4.37zm-3.273 0l-4.09-4.09l-2.08 2.08l4.09 4.09zm18.03 17.972l-2.14 2.139a3.79 3.79 0 0 1-4.061-.847l-.504-.504l5.353-5.354l.504.504a3.79 3.79 0 0 1 .848 4.062m.338 2.922l.824.824a.314.314 0 1 0 .445-.444l-.824-.824a6 6 0 0 1-.445.444M16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSyringeVaccineNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSyringeVaccineNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTIcon],svg[healthicons-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4h-6v22a2 2 0 1 1-4 0V14h-6a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTNegativeIcon],svg[healthicons-t-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 1 0 0 4h6v22a2 2 0 1 0 4 0V14h6a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTacIcon],svg[healthicons-tac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 25a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill-rule="evenodd" d="M7 23c0 3.942 1.342 7.571 3.594 10.455L9.33 36.444C8.217 39.08 10.153 42 13.016 42h21.968c2.863 0 4.799-2.92 3.685-5.556l-1.263-2.99A16.93 16.93 0 0 0 41 23c0-9.389-7.611-17-17-17S7 13.611 7 23m22 9l1.6 8h4.384a2 2 0 0 0 1.843-2.778L32.1 26.032a2 2 0 0 0-1.843-1.222h-1.621a6 6 0 0 0 1.086-2h.535c.804 0 1.57.24 2.212.667q.109-.671.11-1.372a8.526 8.526 0 1 0-16.953 1.31a4 4 0 0 1 2.117-.605h.535a6 6 0 0 0 1.086 2h-1.621a2 2 0 0 0-1.842 1.221l-4.727 11.19A2 2 0 0 0 13.016 40H17.4l1.6-8h-.585l-1.992 5.974a1.5 1.5 0 1 1-2.846-.948l2.544-7.633A3.5 3.5 0 0 1 19.441 27h9.118a3.5 3.5 0 0 1 3.32 2.393l2.544 7.633a1.5 1.5 0 1 1-2.846.948L29.585 32zm-9.184-20.33a11.26 11.26 0 0 1 8.62.06l.778-1.842a13.26 13.26 0 0 0-10.15-.072z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTacNegativeIcon],svg[healthicons-tac-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTacNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10.594 33.455A16.93 16.93 0 0 1 7 23c0-9.389 7.611-17 17-17s17 7.611 17 17c0 3.942-1.342 7.571-3.594 10.455l1.263 2.989C39.783 39.08 37.847 42 34.984 42H13.016c-2.863 0-4.799-2.92-3.685-5.556zM34.984 40h-4.826l-1.6-8h1.027l1.992 5.974a1.5 1.5 0 1 0 2.846-.948l-2.544-7.633A3.5 3.5 0 0 0 28.559 27h-9.117a3.5 3.5 0 0 0-3.32 2.393l-2.545 7.633a1.5 1.5 0 1 0 2.846.948L18.415 32H19.6l-.8 4l-.8 4h-4.984a2 2 0 0 1-1.842-2.778l4.727-11.19a2 2 0 0 1 1.842-1.222h1.621a6 6 0 0 1-1.086-2h-.535c-.765 0-1.495.218-2.117.606a8.526 8.526 0 1 1 16.843.061a4 4 0 0 0-2.212-.667h-.535a6 6 0 0 1-1.086 2h1.621a2 2 0 0 1 1.843 1.22l4.728 11.19A2 2 0 0 1 34.984 40M24.132 10.842c-1.48-.01-2.946.271-4.316.827l-.753-1.853a13.26 13.26 0 0 1 10.151.072l-.778 1.842a11.3 11.3 0 0 0-4.304-.888M28 21a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTacNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTacNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTallyIcon],svg[healthicons-tally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.157 44c11.046 0 20-8.954 20-20s-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20M17 14a1 1 0 0 0-1 1v.723l-2.468-2.107l-1.299 1.522L16 18.353V33a1 1 0 1 0 2 0V20.06l3 2.56V33a1 1 0 1 0 2 0v-8.673l3 2.56V33a1 1 0 1 0 2 0v-4.405l3 2.56V33a1 1 0 1 0 2 0v-.138l1.82 1.554l1.3-1.52L33 30.232V15a1 1 0 1 0-2 0v13.526l-3-2.56V15a1 1 0 1 0-2 0v9.258l-3-2.56V15a1 1 0 1 0-2 0v4.99l-3-2.56V15a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTallyNegativeIcon],svg[healthicons-tally-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTallyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 .048H0v48h48zM44.157 24c0 11.046-8.954 20-20 20s-20-8.954-20-20s8.954-20 20-20s20 8.954 20 20M16 15a1 1 0 1 1 2 0v2.43l3 2.56V15a1 1 0 1 1 2 0v6.698l3 2.56V15a1 1 0 1 1 2 0v10.965l3 2.56V15a1 1 0 1 1 2 0v15.233l3.12 2.662l-1.3 1.521L33 32.863V33a1 1 0 1 1-2 0v-1.845l-3-2.56V33a1 1 0 1 1-2 0v-6.112l-3-2.56V33a1 1 0 1 1-2 0V22.62l-3-2.56V33a1 1 0 1 1-2 0V18.353l-3.767-3.215l1.299-1.521L16 15.723z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTallyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTallyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbIcon],svg[healthicons-tb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 20.5V6h2v14.5c0 1.398.564 1.942 1.004 2.199q.073.042.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4c7.45 0 12.773 26.007 9.58 28.66c-3.193 2.654-9.58 1.062-12.773-2.123c-2.578-2.57-2.355-8.578-2.195-12.891q.016-.395.028-.769a4.3 4.3 0 0 1-1.119-.45a3.8 3.8 0 0 1-.996-.835c-.297.352-.64.626-.996.834c-.4.234-.794.37-1.12.451l.029.769c.16 4.313.383 10.32-2.195 12.891c-3.193 3.185-9.58 4.777-12.773 2.123S9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4l-.004.377q.075-.036.148-.078c.44-.257 1.004-.801 1.004-2.199m9-1.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbNegativeIcon],svg[healthicons-tb-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTbNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm16.525 12c5.439 0 5.365 6.872 5.327 10.4l-.004.377q.076-.036.148-.078c.44-.257 1.004-.801 1.004-2.199V6h2v14.5c0 1.398.564 1.942 1.004 2.199q.073.042.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4c7.45 0 12.773 26.007 9.58 28.66c-3.193 2.654-9.58 1.062-12.773-2.123c-2.578-2.57-2.355-8.578-2.195-12.891q.016-.395.028-.769a4.3 4.3 0 0 1-1.119-.45a3.8 3.8 0 0 1-.996-.835c-.297.352-.64.626-.996.834c-.4.234-.794.37-1.12.451l.029.767v.002c.16 4.313.383 10.32-2.195 12.891c-3.193 3.185-9.58 4.777-12.773 2.123S9.075 12 16.525 12M32 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTbNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTbNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTelemedicineIcon],svg[healthicons-telemedicine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm31 28V10H9v24h3v-2.62c0-2.022 2.407-4.622 5.22-5.726c.008.414.047 1.558.104 2.012c.061.49.145.978.236 1.379q.03.13.062.25A1.999 1.999 0 0 0 18.667 33a2 2 0 0 0 .26-3.983a6 6 0 0 1-.067-.27c-.08-.349-.156-.791-.213-1.246c-.094-.754-.141-1.543-.084-2.303q.386-.11.77-.198c.259-.059.434.39.562.718c.04.1.074.189.105.248c1.305 0 2.653.008 4 .017c1.347.008 2.695.017 4 .017c.038-.073.078-.177.122-.291c.13-.34.294-.766.545-.709q.537.122 1.072.289q0 .387.009.788c.017.968.034 1.977-.204 2.923h-.877a.67.67 0 0 0-.597.369l-.666 1.333a.7.7 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.7.7 0 0 0-.07-.298l-.667-1.334a.67.67 0 0 0-.597-.368h-.423c.212-1.06.226-2.126.225-3.202C33.793 26.922 36 29.444 36 31.38V34zm-20.333-2.323a.67.67 0 0 0 .666-.677a.67.67 0 0 0-.666-.677A.67.67 0 0 0 18 31c0 .383.308.677.667.677M24 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path d="M30 18a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path></svg:g>`,
})
export class HealthiconsTelemedicineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTelemedicineNegativeIcon],svg[healthicons-telemedicine-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTelemedicineNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm31 28V10H9v24h3v-2.62c0-2.022 2.407-4.622 5.22-5.726c.008.414.047 1.558.104 2.012c.061.49.145.978.236 1.379q.03.13.062.25A1.999 1.999 0 0 0 18.667 33a2 2 0 0 0 .26-3.983a6 6 0 0 1-.067-.27c-.08-.349-.156-.791-.213-1.246c-.094-.754-.141-1.543-.084-2.303q.386-.11.77-.198c.259-.059.434.39.562.718c.04.1.074.189.105.248c1.305 0 2.653.008 4 .017c1.347.008 2.695.017 4 .017c.038-.073.078-.177.122-.291c.13-.34.294-.766.545-.709q.537.122 1.072.289q0 .387.009.788c.017.968.034 1.977-.204 2.923h-.877a.67.67 0 0 0-.597.369l-.666 1.333a.7.7 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.7.7 0 0 0-.07-.298l-.667-1.334a.67.67 0 0 0-.597-.368h-.423c.212-1.06.226-2.126.225-3.202C33.793 26.922 36 29.444 36 31.38V34zm-20.333-2.323a.67.67 0 0 0 .666-.677a.67.67 0 0 0-.666-.677A.67.67 0 0 0 18 31c0 .383.308.677.667.677M24 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTelemedicineNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTelemedicineNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleIcon],svg[healthicons-temple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 10.762c0 3.572 3 3.286 3 3.286v4s-3.2 7-6 3.889c0 3.11 2.8 3.11 2.8 3.11H15v4s-2.4 7-6 3.89c0 1.67 1.039 2.444 2 2.802v8.309h26v-8.309c.962-.358 2-1.131 2-2.802c-2.749 2.375-5.06-1.145-6-2.942v-4.947h1.2s2.8 0 2.8-3.111c-2.272 2.524-5.038-1.608-6-3.257v-4.632s3 .286 3-3.286c-4 4.286-10-6.714-10-6.714s-6 11-10 6.714m-1 31.286v-6h2v6zm4 0h2v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h2v-6H17zm16-6v6h2v-6zm-4-22v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-4zm-12 15v-4h14v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltIcon],svg[healthicons-temple-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M36 11.048a1 1 0 0 0-1-1h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1zm-22 1h7v2h-7zm7 4h-5v2h5zm2 2v-2h2v2zm-2 2h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm0-4h7v-2h-7zm-2-2v2h-2v-2zM35 36v-3.952H13V36h7v-1.952h8V36zm-7 2v2h11v-2zm-8 0v2H9v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltNegativeIcon],svg[healthicons-temple-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTempleAltNegative0)"><svg:path d="M14 12.048h7v2h-7zm7 4h-5v2h5zm2 2v-2h2v2zm-2 2h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm0-4h7v-2h-7zm-2-2v2h-2v-2zM35 36v-3.952H13V36h7v-1.952h8V36zm-7 2v2h11v-2zm-8 0v2H9v-2z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM35 10.048h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTempleAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTempleAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleNegativeIcon],svg[healthicons-temple-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTempleNegative0)"><svg:path d="M13 36.048v6h2v-6zm6 6h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2zm14 0v-6h2v6zm-6-24h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0zm-10 7v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM17 14.048s-3 .286-3-3.286c4 4.286 10-6.714 10-6.714s6 11 10 6.714c0 3.572-3 3.286-3 3.286v4.632c.962 1.649 3.728 5.781 6 3.257c0 3.11-2.8 3.11-2.8 3.11H33v4.948c.94 1.797 3.251 5.317 6 2.942c0 1.67-1.038 2.444-2 2.802v8.309H11v-8.309c-.961-.358-2-1.131-2-2.802c3.6 3.11 6-3.89 6-3.89v-4h-1.2s-2.8 0-2.8-3.11c2.8 3.11 6-3.89 6-3.89z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTempleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTempleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesIcon],svg[healthicons-test-tubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31 10a1 1 0 1 0 0 2v7h-3v-7a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2v7h-3v-7a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2v7H7v-3H5v3H4v2h1v13H4v2h1v2h2v-2h34v2h2v-2h1v-2h-1V21h1v-2h-1v-3h-2v3h-2v-7a1 1 0 1 0 0-2zm6 9v-7h-4v7zm-4 2h4v5h-4zm-2 0v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8zm-5-2v-7h-4v7zm-11 0v-7h-4v7zm-4 2h4v2h-4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTestTubesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesNegativeIcon],svg[healthicons-test-tubes-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTestTubesNegative0)"><svg:path d="M15 23v-2h-4v2z"></svg:path><svg:path d="M17 29v-8h3v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0m5-10h4v-7h-4z"></svg:path><svg:path d="M33 26v-5h4v5zm0-7h4v-7h-4zm-22-7v7h4v-7z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm17 19h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-9h8v9h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTestTubesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTestTubesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTesticlesIcon],svg[healthicons-testicles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.087 6.846c1.1-.674 2.354-.846 3.47-.846H33v9a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0v-5a5 5 0 0 0-3-4.584V6h4a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTesticlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTesticlesNegativeIcon],svg[healthicons-testicles-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTesticlesNegative0)"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM13.087 6.846c1.1-.674 2.354-.846 3.47-.846H39a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153" clip-rule="evenodd"></svg:path><svg:path d="M28 20a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0z"></svg:path><svg:path fill-rule="evenodd" d="M35 6v10h-2V6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTesticlesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTesticlesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerIcon],svg[healthicons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.983 29.739l-.002-1.779l-.005-6.211l-.01-12.407c-.002-2.96 2.234-5.36 4.996-5.362c2.761-.002 5.002 2.395 5.004 5.353l.01 12.408l.005 6.212l.002 1.778a8 8 0 1 1-10 .008m3.975-8.337c1.196.31 2.562.662 4.019.637l-.002-2.085l-2 .001a1 1 0 0 1-.002-2l2-.001l-.001-2l-2 .001a1 1 0 1 1-.002-2l2-.001l-.002-2l-2 .001a1 1 0 0 1-.001-2l2-.001v-.62c-.002-1.774-1.347-3.212-3.003-3.21c-1.657 0-3 1.44-2.998 3.216l.01 11.641c.585.06 1.252.233 1.982.421" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalIcon],svg[healthicons-thermometer-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.535 7.38l-1.523-2.383l-.009.005a2 2 0 0 0-.098-.172l-.028-.044a2 2 0 0 0-2.762-.61L10.8 6.934a2 2 0 0 0-.609 2.762l.029.044q.054.085.115.162l-.009.005l1.523 2.384zm-6.61 6.596l5.75 9c.614.96 1.123 1.37 1.791 1.907c.306.246.645.519 1.043.883c.174.16.39.327.658.535c1.488 1.156 4.553 3.537 10.543 12.356q.06-.053.128-.098l1.708-1.09q.066-.043.137-.074c-5.48-9.139-6.35-12.923-6.773-14.76c-.076-.331-.138-.6-.21-.824a20 20 0 0 1-.362-1.317c-.207-.833-.364-1.466-.978-2.427l-5.749-9zm22.788 25.113q.661 1.07 1.402 2.232l.646 1.01a1.108 1.108 0 0 1-1.867 1.193l-.596-.933a178 178 0 0 0-1.486-2.289a1 1 0 0 0 .103-.057l1.708-1.091a1 1 0 0 0 .09-.066M19.147 12.422l4.91 7.685l-2.562 1.636l-4.91-7.685z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsThermometerDigitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalNegativeIcon],svg[healthicons-thermometer-digital-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsThermometerDigitalNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.012 4.997l1.523 2.384l-7.686 4.909l-1.522-2.384l.008-.005a2 2 0 0 1-.115-.162l-.028-.044a2 2 0 0 1 .608-2.762l4.314-2.756a2 2 0 0 1 2.763.609l.028.044q.054.085.098.172zm.663 17.979l-5.749-9l7.685-4.91l5.75 9c.613.962.77 1.595.977 2.428c.095.38.2.803.363 1.317c.071.225.133.492.209.823c.422 1.838 1.292 5.622 6.773 14.761a1 1 0 0 0-.137.073l-1.708 1.091a1 1 0 0 0-.128.097c-5.99-8.818-9.055-11.2-10.543-12.355a11 11 0 0 1-.658-.535a20 20 0 0 0-1.043-.883c-.668-.537-1.177-.946-1.79-1.907m18.44 18.344q-.74-1.16-1.401-2.231q-.045.035-.091.065l-1.708 1.09q-.05.033-.103.058q.717 1.085 1.486 2.289l.596.933a1.108 1.108 0 1 0 1.867-1.192zM24.057 20.107l-4.91-7.685l-2.561 1.636l4.909 7.685z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsThermometerDigitalNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsThermometerDigitalNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerNegativeIcon],svg[healthicons-thermometer-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsThermometerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.982 28.205v1.778a8 8 0 1 0 10-.008v-1.778l-.006-6.212l-.01-12.408c-.002-2.958-2.243-5.355-5.004-5.353c-2.762.003-4.998 2.403-4.996 5.362l.01 12.407zm7.995-5.922c-1.457.025-2.823-.328-4.018-.637c-.73-.188-1.397-.36-1.983-.42l-.01-11.642c-.001-1.775 1.34-3.215 2.998-3.217c1.657-.001 3 1.437 3.002 3.212v.619l-2 .002a1 1 0 0 0 .002 2l2-.002l.002 2l-2 .002a1 1 0 0 0 .002 2l2-.002l.001 2l-2 .002a1 1 0 0 0 .002 2l2-.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsThermometerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsThermometerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidIcon],svg[healthicons-thyroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m21.584 10.087l-.006.006l-.013-.234l-.008-.158c-.036-.66-.092-1.66-.498-2.45a2.44 2.44 0 0 0-1.083-1.098c-.515-.256-1.103-.314-1.731-.228c-.557.077-1.05.3-1.44.678c-.382.37-.61.834-.734 1.308c-.243.918-.14 2.016.11 3.073c.507 2.136 1.738 4.6 3.123 6.276c.533.645.696 1.617.696 2.036V21.5l2 .5v-1.315c.883-.328 1.479-.478 2.038-.49c.542-.01 1.12.108 1.962.456V22l2-.5v-2.204c0-.419.164-1.39.696-2.036c1.375-1.665 2.668-4.118 3.24-6.248c.282-1.051.423-2.148.211-3.07c-.109-.476-.323-.949-.702-1.328c-.387-.386-.883-.612-1.44-.689c-.628-.086-1.217-.028-1.731.228c-.52.26-.863.668-1.084 1.098c-.406.79-.461 1.79-.497 2.45l-.009.158l-.013.234l-.006-.006c-.477-.425-1.109-.57-1.535-.632a7 7 0 0 0-.88-.065H24v.001a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.632m1.33 1.494l.03-.019l.056-.026V16h2v-4.538q.118.025.204.056a.7.7 0 0 1 .131.063c.423.377.853.695 1.284.84c.232.077.527.126.844.048a1.35 1.35 0 0 0 .753-.496c.285-.37.362-.842.398-1.126c.036-.28.053-.602.068-.895l.008-.142c.04-.746.102-1.3.28-1.645c.07-.138.136-.192.194-.22c.064-.033.224-.086.568-.039c.18.025.258.082.3.123c.049.05.118.151.166.36c.103.45.057 1.17-.194 2.105c-.494 1.843-1.65 4.04-2.85 5.493c-.67.81-.971 1.805-1.089 2.553c-.714-.238-1.378-.358-2.068-.344c-.68.014-1.344.159-2.055.39c-.113-.753-.413-1.772-1.096-2.6c-1.19-1.44-2.283-3.627-2.718-5.463c-.22-.93-.243-1.65-.123-2.102c.056-.212.131-.323.191-.381c.053-.05.14-.109.322-.134c.343-.047.503.006.567.038c.058.029.124.083.195.221c.178.345.24.899.28 1.645l.008.142c.015.293.032.615.067.895c.037.284.113.756.398 1.126c.169.22.418.414.753.496c.318.078.613.029.844-.049c.432-.144.861-.462 1.285-.84M26 35.315c-.883.328-1.479.478-2.038.49c-.542.01-1.12-.108-1.962-.456v-1.682l-2 2.166V38a4 4 0 0 0 8 0v-2.167l-2-2.166zM24 40a2 2 0 0 1-2-2v-.519c.69.224 1.334.337 2.003.323c.662-.014 1.308-.151 1.997-.371V38a2 2 0 0 1-2 2"></svg:path><svg:path d="M12.362 11.456c.991.627 1.807 1.763 2.412 3.269c.154.383.304.796.461 1.228c.519 1.423 1.113 3.055 2.157 4.515c1.294 1.808 3.244 3.27 6.608 3.27s5.314-1.462 6.608-3.27c1.044-1.46 1.638-3.092 2.157-4.515c.157-.432.307-.845.461-1.228c.605-1.506 1.42-2.642 2.412-3.269c1.045-.66 2.228-.706 3.28-.1c.992.57 1.754 1.65 2.266 3.021c.517 1.39.816 3.172.816 5.305v10.187c0 .85-.164 2.816-1.117 4.608C39.893 36.34 38.045 38 34.846 38c-1.595 0-2.786-.45-3.752-1.151c-.865-.626-1.526-1.442-2.1-2.15l-.116-.143c-.63-.774-1.188-1.428-1.917-1.91c-.7-.463-1.607-.796-2.961-.796s-2.261.333-2.96.796c-.73.481-1.288 1.136-1.918 1.91l-.116.144c-.574.707-1.235 1.522-2.1 2.149c-.966.7-2.157 1.151-3.752 1.151c-3.199 0-5.047-1.661-6.037-3.523C6.164 32.685 6 30.718 6 29.87V19.682c0-2.133.299-3.916.816-5.304c.512-1.373 1.274-2.452 2.265-3.022c1.053-.606 2.236-.56 3.28.1M12 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m16-9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-6 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsThyroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidCancerIcon],svg[healthicons-thyroid-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m21.584 10.187l-.006.005l-.012-.233l-.009-.157c-.036-.659-.092-1.656-.498-2.443a2.43 2.43 0 0 0-1.083-1.094c-.515-.255-1.103-.314-1.73-.228c-.558.077-1.051.3-1.441.677c-.382.369-.61.83-.734 1.303c-.242.915-.14 2.01.11 3.063c.507 2.13 1.738 4.586 3.123 6.257c.533.643.696 1.612.696 2.03v2.197l2 .498v-1.31c.883-.328 1.479-.477 2.038-.489c.542-.01 1.12.108 1.962.455v1.344l2-.498v-2.198c0-.417.164-1.386.696-2.029c1.376-1.66 2.668-4.105 3.24-6.228c.282-1.048.423-2.142.212-3.061c-.11-.475-.324-.946-.703-1.323c-.387-.386-.883-.611-1.44-.688c-.628-.086-1.217-.027-1.731.228c-.52.258-.863.666-1.084 1.094c-.406.787-.461 1.784-.497 2.443l-.009.157l-.013.233l-.006-.005c-.477-.424-1.109-.569-1.535-.63a7 7 0 0 0-.88-.066H24a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.63m1.33 1.488l.03-.018l.056-.027v4.45h2v-4.523q.118.024.204.056a.7.7 0 0 1 .131.062c.423.376.853.693 1.284.837c.232.077.527.126.844.049a1.35 1.35 0 0 0 .753-.494c.285-.37.362-.84.398-1.123c.036-.279.053-.6.068-.892l.008-.142c.04-.744.102-1.296.28-1.64c.07-.138.137-.191.194-.22c.064-.032.224-.085.568-.038c.18.025.258.081.3.123c.049.049.118.15.166.36c.103.447.057 1.165-.194 2.097c-.494 1.837-1.65 4.028-2.85 5.475c-.67.809-.971 1.8-1.089 2.546c-.714-.237-1.379-.357-2.068-.343c-.68.014-1.344.159-2.055.389c-.113-.751-.413-1.767-1.096-2.591c-1.19-1.437-2.283-3.617-2.718-5.448c-.22-.926-.243-1.644-.123-2.095c.056-.211.131-.322.191-.38c.053-.05.14-.108.322-.133c.343-.047.503.006.567.038c.058.029.124.082.195.22c.178.344.24.896.28 1.64l.008.142c.015.292.032.613.067.892c.037.283.113.753.398 1.123c.169.218.418.412.753.494c.318.077.613.028.844-.049c.432-.144.861-.46 1.285-.837m1.047 24.15c-.542.01-1.12-.108-1.962-.454v-1.677l-2 2.16v2.16A3.994 3.994 0 0 0 24 42c2.21 0 4-1.785 4-3.987v-2.16l-2-2.16v1.643c-.883.327-1.479.476-2.038.488M24 40.006c-1.105 0-2-.892-2-1.993v-.518c.69.224 1.334.336 2.003.322c.662-.013 1.308-.15 1.997-.37v.565a1.997 1.997 0 0 1-2 1.994" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.774 14.81c-.605-1.501-1.42-2.634-2.412-3.258c-1.045-.658-2.228-.705-3.28-.1c-.992.568-1.754 1.643-2.266 3.011C6.3 15.848 6 17.625 6 19.751v10.156c0 .846.164 2.806 1.117 4.594c.99 1.855 2.838 3.512 6.037 3.512c1.595 0 2.786-.45 3.752-1.148c.865-.625 1.526-1.437 2.1-2.143l.116-.143c.63-.772 1.188-1.424 1.917-1.904c.7-.461 1.607-.793 2.961-.793s2.261.332 2.96.793c.73.48 1.288 1.132 1.918 1.904l.116.143c.313.385.652.801 1.035 1.202a5.8 5.8 0 0 1 .122-1.55c.156-.716.492-1.559 1.11-2.116q.007-.64.117-1.266c-.951-1.33-1.16-3.167-.078-4.49c1.09-1.336 2.914-1.452 4.372-.73a7 7 0 0 1 1.113-.32c.688-1.411 2.308-2.067 3.935-1.643c.421.11.857.296 1.28.554V19.75c0-2.126-.299-3.903-.816-5.288c-.512-1.368-1.274-2.443-2.265-3.012c-1.053-.604-2.236-.557-3.28.1c-.992.625-1.808 1.758-2.413 3.259a39 39 0 0 0-.461 1.224c-.519 1.419-1.113 3.045-2.157 4.5c-1.294 1.804-3.244 3.26-6.608 3.26s-5.314-1.456-6.608-3.26c-1.044-1.455-1.638-3.081-2.157-4.5c-.157-.43-.307-.842-.461-1.224M11 19.072a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m3 2.99a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-3 4.985a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m6 3.987a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-5 .997c.552 0 1-.446 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .447-1 .997s.448.997 1 .997m5-4.984a1 1 0 0 1-2 0a1 1 0 0 1 2 0m3 1.994a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m16-10.966a1 1 0 0 0 2 0a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997m-1 4.984c-.552 0-1-.446-1-.997s.448-.997 1-.997s1 .447 1 .997s-.448.997-1 .997m-8 4.985a1 1 0 0 0 2 0a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997m-3 .997a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997" clip-rule="evenodd"></svg:path><svg:path d="M32.198 36.614c-.128-.29-.193-.707-.175-1.16c.008-.214.035-.437.083-.657c.16-.737.457-1.063.59-1.124l.616-.286l-.04-.677a5.8 5.8 0 0 1 .152-1.734l.129-.517l-.361-.395c-.76-.828-.744-1.81-.341-2.304c.385-.472 1.28-.663 2.194-.051l.468.314l.512-.238a5.3 5.3 0 0 1 1.615-.451l.687-.082l.165-.67c.156-.63.79-1.087 1.721-.844c.569.149 1.264.576 1.787 1.295v2.874c0 .846-.164 2.806-1.117 4.594c-.828 1.553-2.258 2.966-4.578 3.386l-.001-.005c-.796.159-1.769.063-2.609-.231c-.885-.31-1.367-.742-1.497-1.037"></svg:path></svg:g>`,
})
export class HealthiconsThyroidCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissueIcon],svg[healthicons-tissue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M39.989 38h-4.012a1 1 0 0 0-.104-.444l-4.231-8.505L44 29.93V34c0 2.21-1.796 4-4.011 4m-3.17-4.198c.555 0 1.004-.448 1.004-1a1.002 1.002 0 0 0-2.006 0c0 .552.449 1 1.003 1m-3.61-13.775l-1.957 6.991L44 27.926v-8.833l-10.193.905zm2.607 4.775c0 .552-.449 1-1.003 1a1 1 0 0 1-1.003-1a1.002 1.002 0 0 1 2.006 0M18.14 27.876l11.002-.754l1.956-6.99l-14.92.735zm5.643-2.074c.554 0 1.003-.448 1.003-1a1.002 1.002 0 0 0-2.006 0c0 .552.449 1 1.003 1m5.648 3.305l-11.199.767L15.958 38h17.897zM25.606 34c.554 0 1.003-.448 1.003-1a1.002 1.002 0 0 0-2.006 0c0 .552.45 1 1.003 1M14.125 20.969l1.96 7.008L4 27.08v-8.034l9.382 1.96zm-3.217 3.233c0 .553-.449 1-1.003 1a1 1 0 0 1-1.003-1a1.002 1.002 0 0 1 2.006 0m5.211 5.783L4 29.085V34c0 2.21 1.796 4 4.011 4h5.903q0-.134.037-.269zm-4.21 4.382c.553 0 1.002-.448 1.002-1a1.001 1.001 0 0 0-2.005 0c0 .552.449 1 1.002 1M44 17.085l-10.331.917l-.423.021L31.001 10h8.988A4.006 4.006 0 0 1 44 14zm-5.174-2.283c0 .552-.45 1-1.003 1a1 1 0 0 1-1.003-1c0-.552.449-1 1.003-1s1.003.448 1.003 1m-7.634 3.322l-2.198-7.855a1 1 0 0 1-.037-.269h-8.023c0 .15-.033.301-.104.444l-4.177 8.397zm-3.398-3.322c0 .552-.449 1-1.003 1a1 1 0 0 1-1.003-1a1.002 1.002 0 0 1 2.006 0m-13.436 4.153L18.812 10h-10.8A4.006 4.006 0 0 0 4 14v3.006l.091.015l9.45 1.974zm-1.607-3.153c.554 0 1.003-.448 1.003-1s-.449-1-1.003-1s-1.003.448-1.003 1s.45 1 1.003 1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTissueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToiletPaperIcon],svg[healthicons-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.743 11.65c0 1.05-1.666 1.9-3.72 1.9c-2.056 0-3.721-.85-3.721-1.9s1.665-1.9 3.72-1.9s3.72.85 3.72 1.9"></svg:path><svg:path fill-rule="evenodd" d="M21.304 11.65c.012.037.088.221.542.453c.505.258 1.273.447 2.176.447s1.67-.189 2.176-.447c.454-.232.53-.416.542-.453c-.012-.036-.088-.22-.542-.453c-.505-.258-1.273-.447-2.176-.447s-1.67.19-2.176.447c-.454.232-.53.417-.542.453m-.367-2.234c.84-.43 1.933-.666 3.085-.666s2.245.237 3.086.666c.787.402 1.635 1.138 1.635 2.234s-.848 1.832-1.635 2.234c-.841.43-1.934.666-3.086.666s-2.244-.236-3.085-.666c-.788-.402-1.636-1.137-1.636-2.234s.848-1.832 1.636-2.234" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.269 7.838C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838s6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812s-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m-.91-1.78C16.884 4.767 20.302 4 24.022 4s7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593s-1.89 4.332-4.36 5.593c-2.525 1.29-5.942 2.057-9.663 2.057s-7.138-.768-9.663-2.057C11.89 15.982 10 14.058 10 11.65s1.889-4.331 4.36-5.593" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 36.351v-24.7h-2v24.7c0 2.408 1.889 4.331 4.36 5.593c2.524 1.29 5.942 2.057 9.662 2.057c2.546 0 4.951-.36 7.024-1h-7.024v-1c-3.471 0-6.564-.72-8.753-1.838C13.026 39.018 12 37.616 12 36.35m20.846 3.775l.478.975l-.64 1.307q.52-.218 1.001-.464c2.47-1.262 4.36-3.185 4.36-5.593v-24.7h-2v24.7c0 1.251-1.005 2.637-3.199 3.775" clip-rule="evenodd"></svg:path><svg:path d="M15.79 20.3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-11.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M23.022 18.3a1 1 0 0 1 1-1h9.302a1 1 0 0 1 .898 1.44l-.715 1.46l.715 1.461a1 1 0 0 1 0 .88L33.507 24l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.93 1.9a1 1 0 0 1-.898.56h-8.372a1 1 0 0 1 0-2h7.748l.44-.9l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.226-.46h-7.699a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsToiletPaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToiletPaperNegativeIcon],svg[healthicons-toilet-paper-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsToiletPaperNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21.846 12.103c-.454-.232-.53-.416-.542-.453c.012-.036.088-.22.542-.453c.505-.258 1.273-.447 2.176-.447s1.67.19 2.176.447c.454.232.53.417.542.453c-.012.037-.088.221-.542.453c-.505.258-1.273.447-2.176.447s-1.67-.189-2.176-.447m2.176-3.353c-1.152 0-2.244.237-3.085.666c-.788.402-1.636 1.138-1.636 2.234s.848 1.832 1.636 2.234c.84.43 1.933.666 3.085.666s2.245-.236 3.086-.666c.787-.402 1.635-1.137 1.635-2.234s-.848-1.832-1.635-2.234c-.841-.43-1.934-.666-3.086-.666m-8.753-.912C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838s6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812s-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m20.775 7.813v20.7c0 1.073-.738 2.244-2.33 3.273l-.207-.423l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0-.693-1.42l.156-.078c.88-.45 1.686-.982 2.36-1.592m-12.038 3.65h7.715l-.226.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.44.9h-7.754c-3.47 0-6.56-.721-8.747-1.838C13.026 39.018 12 37.616 12 36.35v-20.7c.673.61 1.48 1.143 2.36 1.592c2.52 1.288 5.931 2.055 9.646 2.057m.051 24.7h-.035c-3.72 0-7.138-.768-9.663-2.057C11.89 40.682 10 38.76 10 36.351v-24.7c0-2.409 1.889-4.332 4.36-5.594C16.883 4.768 20.301 4 24.021 4s7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593v24.701c0 2.256-1.659 4.087-3.9 5.347l-.853 1.743a1 1 0 0 1-.898.56zm-8.267-22.7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 8.6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 6.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-10.4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 6.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsToiletPaperNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsToiletPaperNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueIcon],svg[healthicons-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 22c0 2.21-1.12 4-2.5 4S15 24.21 15 22s1.12-4 2.5-4s2.5 1.79 2.5 4m10.5 4c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4"></svg:path><svg:path fill-rule="evenodd" d="M27.874 41.582a18 18 0 0 0 3.276-1.058l.043-.019A18.04 18.04 0 0 0 38 35.316a18 18 0 0 0 2.325-3.721l.001-.004A17.9 17.9 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 7.333 4.385 13.642 10.676 16.447l.131.058c1.058.462 2.168.825 3.32 1.077A5.98 5.98 0 0 0 24 43a5.98 5.98 0 0 0 3.874-1.418M8 24c0 6.84 4.292 12.677 10.33 14.966A6 6 0 0 1 18 37v-2.122c-.92-.452-1.558-.992-2-1.522l-.025-.03C15 32.135 15 31 15 31s-.373-1.493 1.137-1.899l.06-.015c.225-.055.49-.086.803-.086h14.5q.18 0 .336.02l.016.003C33.5 29.243 33.5 31 33.5 31s-.133 1.332-1.5 2.621l-.08.075A7.3 7.3 0 0 1 30 34.929V37c0 .689-.116 1.35-.33 1.966a16.05 16.05 0 0 0 7.162-5.407l.018-.024l.103-.14A15.9 15.9 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24m16 12a1 1 0 0 1-1-1v-4h-3v6a4 4 0 0 0 8 0v-6h-3v4a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTongueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueNegativeIcon],svg[healthicons-tongue-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTongueNegative0)"><svg:path fill-rule="evenodd" d="M40 24c0 6.84-4.292 12.677-10.33 14.966c.214-.616.33-1.277.33-1.966v-1.272c1.158-.655 2.429-2.379 3.4-3.917c.793-1.258-.15-2.811-1.636-2.811H16.236c-1.487 0-2.429 1.553-1.635 2.81c.97 1.54 2.241 3.263 3.399 3.918V37c0 .689.116 1.35.33 1.966C12.292 36.677 8 30.84 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16m-9.5 2c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4M20 22c0 2.21-1.12 4-2.5 4S15 24.21 15 22s1.12-4 2.5-4s2.5 1.79 2.5 4" clip-rule="evenodd"></svg:path><svg:path d="M20 31v6a4 4 0 0 0 8 0v-6h-3v4a1 1 0 1 1-2 0v-4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-6 24c0 8.611-6.047 15.81-14.126 17.582A5.98 5.98 0 0 1 24 43a5.98 5.98 0 0 1-3.874-1.418C12.047 39.81 6 32.612 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTongueNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTongueNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothIcon],svg[healthicons-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.96 9.281c-4.338-2.44-8.18-1.293-11.375 2.585c-3.082 3.742-.98 10.488.53 15.338c.36 1.156.687 2.205.902 3.079c1.115 4.54 2.183 7.37 4.616 9.418c1.205 1.014 2.572-.729 4.014-2.567c1.25-1.594 2.556-3.26 3.863-3.264c1.285-.004 2.571 1.66 3.804 3.254c1.423 1.84 2.775 3.59 3.973 2.577c1.86-1.57 2.703-2.722 3.725-5.956c1.113-3.527 2.912-7.745 4.342-12.607c1.006-3.42 1.126-6.904-1.773-10.265c-4.14-4.8-9.877-2.32-12.548-.733l3.618 3.1a1 1 0 1 1-1.302 1.52z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothNegativeIcon],svg[healthicons-tooth-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9.585 11.866c3.245-3.94 7.159-5.062 11.58-2.466l6.18 5.356a1 1 0 1 0 1.31-1.512l-3.598-3.118c2.68-1.588 8.396-4.039 12.524.747c3.02 3.5 2.763 7.133 1.643 10.69l-3.942 11.293c-1.153 3.927-1.975 5.14-3.995 6.845c-1.198 1.013-2.55-.736-3.973-2.577c-1.233-1.595-2.519-3.258-3.804-3.254c-1.307.004-2.614 1.67-3.864 3.264c-1.441 1.838-2.808 3.581-4.013 2.567c-2.433-2.048-3.5-4.877-4.616-9.418c-.215-.874-.541-1.923-.902-3.079c-1.51-4.85-3.612-11.596-.53-15.338" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTransgenderIcon],svg[healthicons-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 9a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l5.753 5.753a1 1 0 0 0 .365.233A9.96 9.96 0 0 0 14 21c0 5.185 3.947 9.449 9 9.95v5.98h-2a1 1 0 1 0 0 2h2V41a1 1 0 1 0 2 0v-2.07h2a1 1 0 0 0 0-2h-2v-5.98c5.053-.501 9-4.765 9-9.95a9.96 9.96 0 0 0-1.073-4.511l2.104-2.091l1.43 1.43a1 1 0 0 0 1.414-1.415l-1.425-1.425L39 10.454V12a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.626l-2.59 2.574l-1.404-1.404a1 1 0 0 0-1.414 1.415l1.399 1.398l-1.796 1.785A9.98 9.98 0 0 0 24 11a9.98 9.98 0 0 0-7.82 3.766l-.013-.013L10.414 9zm12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTransgenderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTransgenderNegativeIcon],svg[healthicons-transgender-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTransgenderNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm14 21c0 5.185 3.947 9.449 9 9.95v5.98h-2a1 1 0 1 0 0 2h2V41a1 1 0 1 0 2 0v-2.07h2a1 1 0 0 0 0-2h-2v-5.98c5.053-.501 9-4.765 9-9.95a9.96 9.96 0 0 0-1.073-4.511l2.104-2.091l1.43 1.43a1 1 0 0 0 1.414-1.415l-1.425-1.425L39 10.454V12a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h1.626l-2.59 2.574l-1.404-1.404a1 1 0 1 0-1.414 1.415l1.4 1.398l-1.797 1.785A9.98 9.98 0 0 0 24 11a9.98 9.98 0 0 0-7.82 3.766l-.013-.013L10.414 9H12a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.586l5.753 5.753a1 1 0 0 0 .365.233A9.96 9.96 0 0 0 14 21m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTransgenderNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTransgenderNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTraumatismIcon],svg[healthicons-traumatism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m4.057 3.03Q25.544 15 25 15h-8c-.878 0-1.7.076-2.413.286s-1.496.607-2.027 1.376c-.552.8-.61 1.684-.49 2.405c.113.686.4 1.335.709 1.897c.617 1.123 1.598 2.378 2.647 3.642l.48.573l2.84-2.839l-.242-.29c-1.053-1.267-1.806-2.262-2.22-3.014l-.004-.007A8 8 0 0 1 17 19h.893l1.921 2.271zm-6.013 8.84l-2.837 2.837c.575.673 1.165 1.363 1.757 2.073a2 2 0 1 0 3.073-2.56a225 225 0 0 0-1.86-2.194z"></svg:path><svg:path d="M28.548 15.367c2.725.611 4.542 1.92 5.708 3.392a8.6 8.6 0 0 1 1.438 2.695a7.6 7.6 0 0 1 .282 1.22c.026.198.02.174.016.15l-.003-.017l.003.017l.001.01a2 2 0 0 1-3.984.359v-.002l-.014-.086a4 4 0 0 0-.111-.434a4.6 4.6 0 0 0-.765-1.43c-.515-.65-1.432-1.446-3.119-1.892V42a2 2 0 0 1-3.993.166l-1-12A2 2 0 0 1 23 30h-.05a3.5 3.5 0 0 0 .222-4.76l-2.061-2.437zm-12.407 12.4a1 1 0 0 1-.14.1V42a2 2 0 0 0 3.992.166l.933-11.192a3.5 3.5 0 0 1-3.098-1.213z"></svg:path><svg:path d="M33 25a3 3 0 0 0-3 3v.833a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v15a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class HealthiconsTraumatismIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTraumatismNegativeIcon],svg[healthicons-traumatism-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTraumatismNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm30 28a3 3 0 1 1 6 0v15a1 1 0 1 1-2 0V28a1 1 0 1 0-2 0v.833a1 1 0 1 1-2 0zm-13-9h1.547l1.622 1.917L22.086 19l3-3l.97-.97Q25.547 15 25 15h-8c-.878 0-1.7.076-2.413.286s-1.497.607-2.027 1.376c-.552.8-.61 1.684-.49 2.405c.113.686.4 1.335.709 1.897c.617 1.123 1.598 2.378 2.647 3.642l.48.573l2.84-2.839l-.242-.29c-1.053-1.267-1.807-2.262-2.22-3.014l-.004-.007c.194-.018.431-.029.72-.029m6.554 5.916l-2.088-2.467L24.914 19l3-3l.634-.633c2.725.611 4.542 1.92 5.708 3.392a8.6 8.6 0 0 1 1.438 2.695a7.6 7.6 0 0 1 .281 1.22q.008.056.012.098l.004.035l.001.015v.009c.001.002.001.003-1.992.169l1.993-.166a2 2 0 0 1-3.984.359v-.002l-.014-.086a4 4 0 0 0-.111-.434a4.6 4.6 0 0 0-.765-1.43c-.515-.65-1.432-1.446-3.119-1.892V42a2 2 0 0 1-3.993.166l-.965-11.578l.042-.035a4 4 0 0 0 .47-5.637m-2.67 6.566a4 4 0 0 1-3.437-1.398L16 28.374V42a2 2 0 0 0 3.993.166zm-.84-7.612l-2.837 2.837c.575.673 1.165 1.363 1.757 2.073a2 2 0 0 0 3.073-2.56a226 226 0 0 0-1.86-2.194l-.01-.012zM22 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTraumatismNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTraumatismNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelIcon],svg[healthicons-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c2.017.143 5.434.323 9.929.323c2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0q-1.111-.041-2.036-.09a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6"></svg:path><svg:path fill-rule="evenodd" d="m24.288 28.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28q.125 0 .247.031l.008.002zM25 30.341l5 1.488V40h-5zm-7 1.488l5-1.488V40h-5z" clip-rule="evenodd"></svg:path><svg:path d="M37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3zM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class HealthiconsTravelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelAltIcon],svg[healthicons-travel-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill-rule="evenodd" d="M31.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M19 16a2 2 0 1 0 0 4h7v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 36 16zm20 6a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 32a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm4 7v-6h2v6zm7-6v6h2v-6zm-6-5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h-2v-2h-3v2h-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTravelAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelAltNegativeIcon],svg[healthicons-travel-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTravelAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm35 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M17 18a2 2 0 0 1 2-2h17a6 6 0 0 1 1 11.917V40a2 2 0 1 1-4 0v-9h-3v9a2 2 0 1 1-4 0V20h-7a2 2 0 0 1-2-2m20 2a2 2 0 1 1 0 4zM6 32a2 2 0 0 1 2-2h3v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10-2v-2h-3v2zm-6 9v-6h2v6zm7-6v6h2v-6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTravelAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTravelAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelNegativeIcon],svg[healthicons-travel-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTravelNegative0)"><svg:path d="M29.8 17.396c-1.648.06-3.594.104-5.8.104c-2.198 0-4.138-.043-5.783-.104a6 6 0 1 0 11.567 0zM25 30.341l5 1.488V40h-5zM23 40h-5v-8.17l5-1.489z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648q.887.064 2.12.13l-.011-.001a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6m.288 22.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28a1 1 0 0 1 .288.042M37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3zM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTravelNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTravelNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTreatedWaterIcon],svg[healthicons-treated-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25.598 29l.402-.419V25h-2v4h-2v-4h-2v4h-2v-4h-2v3.581l.402.419h-4.688c-.947 0-1.714.767-1.714 1.714v1.475q3.516 2.04 7.032-.975q4.194 3.596 8.389 0q3.29 2.82 6.579 1.216v-1.716c0-.947-.767-1.714-1.714-1.714zM29 40.202V42h2v-1.924c1.725-.444 3-2.01 3-3.874v-3.19h1.506a1 1 0 0 1 1 1v1.696H41v-1.19a6 6 0 0 0-4.898-5.9h3.1v-2h-4.494v1.9h-1.427a3.7 3.7 0 0 0-.901-.872A3.7 3.7 0 0 0 30.286 27s.683-.713 1.463-1.81C32.79 23.726 34 21.582 34 19.53V5.643H8V19.53c0 2.053 1.211 4.197 2.25 5.66A18 18 0 0 0 11.715 27A3.71 3.71 0 0 0 8 30.714v5.488a4 4 0 0 0 3 3.874V42h2v-1.798zm3-25.054V7.643H10V15c8.464 1.397 13.455 1.385 22 .148M39.5 42c.828 0 1.5-.814 1.5-1.818C41 38.59 39.5 37 39.5 37S38 38.59 38 40.182c0 1.004.672 1.818 1.5 1.818" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTreatedWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTreatedWaterNegativeIcon],svg[healthicons-treated-water-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTreatedWaterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26 28.581l-.402.419h4.688c.947 0 1.714.767 1.714 1.714v1.716q-3.29 1.605-6.58-1.216q-4.194 3.596-8.388 0q-3.516 3.014-7.032.975v-1.475c0-.947.768-1.714 1.714-1.714h4.688L16 28.581V25h2v4h2v-4h2v4h2v-4h2zM29 42v-1.798H13V42h-2v-1.924a4 4 0 0 1-3-3.874v-5.488A3.71 3.71 0 0 1 11.714 27s-.683-.713-1.463-1.81C9.21 23.726 8 21.582 8 19.53V5.643h26V19.53c0 2.053-1.211 4.197-2.25 5.66c-.781 1.097-1.464 1.81-1.464 1.81a3.7 3.7 0 0 1 2.995 1.518h1.427v-1.9h4.494v2h-3.1a6 6 0 0 1 4.898 5.9v1.19h-4.494v-1.696a1 1 0 0 0-1-1H34v3.19a4 4 0 0 1-3 3.874V42zm3-34.357v7.505c-8.545 1.237-13.536 1.25-22-.148V7.643zm9 32.539C41 41.186 40.328 42 39.5 42s-1.5-.814-1.5-1.818C38 38.59 39.5 37 39.5 37s1.5 1.59 1.5 3.182" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTreatedWaterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTreatedWaterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedLargeIcon],svg[healthicons-triangle-inverted-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 40c-.379 0-.725-.18-.894-.465l-18-30.316a.73.73 0 0 1 .043-.82C5.332 8.151 5.653 8 6 8h36c.347 0 .668.151.85.4a.73.73 0 0 1 .044.819l-18 30.316c-.169.285-.515.465-.894.465"></svg:path>`,
})
export class HealthiconsTriangleInvertedLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedMediumIcon],svg[healthicons-triangle-inverted-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.106 37.516c.169.297.515.484.894.484s.725-.187.894-.484l15-26.25a.78.78 0 0 0-.043-.851A1.04 1.04 0 0 0 39 10H9c-.347 0-.668.157-.85.415a.78.78 0 0 0-.044.851z"></svg:path>`,
})
export class HealthiconsTriangleInvertedMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedSmallIcon],svg[healthicons-triangle-inverted-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.106 34.532c.169.287.515.468.894.468s.725-.181.894-.468l12-20.307a.735.735 0 0 0-.043-.824c-.183-.25-.504-.401-.851-.401H12c-.347 0-.668.152-.85.401a.735.735 0 0 0-.044.824z"></svg:path>`,
})
export class HealthiconsTriangleInvertedSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeIcon],svg[healthicons-triangle-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 8c.379 0 .725.18.894.466l18 30.315a.73.73 0 0 1-.043.82c-.183.248-.504.399-.851.399H6c-.347 0-.668-.151-.85-.4a.73.73 0 0 1-.044-.819l18-30.315C23.275 8.18 23.62 8 24 8"></svg:path>`,
})
export class HealthiconsTriangleLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeNegativeIcon],svg[healthicons-triangle-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.767 6.474a.857.857 0 0 0-1.534 0L6.09 40.76A.857.857 0 0 0 6.857 42h34.286a.857.857 0 0 0 .767-1.24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumIcon],svg[healthicons-triangle-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.894 10.484C24.725 10.187 24.38 10 24 10s-.725.187-.894.484l-15 26.25a.78.78 0 0 0 .043.851c.183.258.504.415.851.415h30c.347 0 .668-.157.85-.415a.78.78 0 0 0 .044-.851z"></svg:path>`,
})
export class HealthiconsTriangleMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumNegativeIcon],svg[healthicons-triangle-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.79 9.488a.882.882 0 0 0-1.58 0L9.094 37.723A.882.882 0 0 0 9.883 39h28.235a.882.882 0 0 0 .789-1.277z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallIcon],svg[healthicons-triangle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.894 13.468C24.725 13.18 24.38 13 24 13s-.725.181-.894.468l-12 20.307a.735.735 0 0 0 .043.824c.183.25.504.401.851.401h24c.347 0 .668-.152.85-.401a.735.735 0 0 0 .044-.824z"></svg:path>`,
})
export class HealthiconsTriangleSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallNegativeIcon],svg[healthicons-triangle-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.894 11.553a1 1 0 0 0-1.788 0l-12 24A1 1 0 0 0 12 37h24a1 1 0 0 0 .894-1.447z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTruckDriverIcon],svg[healthicons-truck-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2zm-6.462 10.218c-3.33-1.03-2.49-2.87-1.22-4.218H33.46c1.016 1.298 1.561 3.049-1.51 4.097q.05.445.05.903a8 8 0 1 1-15.962-.782m7.69.782c2.642 0 4.69-.14 6.26-.384q.012.19.012.384a6 6 0 1 1-11.992-.315c1.463.202 3.338.315 5.72.315m8.689 14.6A9.99 9.99 0 0 0 24 30a9.99 9.99 0 0 0-8.42 4.602a2.5 2.5 0 0 0-1.447-1.05l-1.932-.517a2.5 2.5 0 0 0-3.062 1.767L8.363 37.7a2.5 2.5 0 0 0 1.768 3.062l1.931.518A2.5 2.5 0 0 0 14 41.006A1 1 0 0 0 16 41v-1q0-.572.078-1.123l5.204 1.395a3 3 0 0 0 5.436 0l5.204-1.395q.077.551.078 1.123v1a1 1 0 0 0 2 .01c.56.336 1.252.453 1.933.27l1.932-.517a2.5 2.5 0 0 0 1.768-3.062l-.777-2.898a2.5 2.5 0 0 0-3.062-1.767l-1.932.517a2.5 2.5 0 0 0-1.445 1.046m-15.814 2.347A8.01 8.01 0 0 1 23 32.062v4.109a3 3 0 0 0-1.88 1.987zm14.794 0A8.01 8.01 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987zM24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTruckDriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTruckDriverNegativeIcon],svg[healthicons-truck-driver-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTruckDriverNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm31.95 19.097c3.071-1.048 2.526-2.8 1.51-4.097H14.819c-1.271 1.349-2.111 3.188 1.219 4.218a8 8 0 1 0 15.912-.12m-1.962.519c-1.57.244-3.618.384-6.26.384c-2.382 0-4.257-.113-5.72-.315Q18 19.842 18 20a6 6 0 1 0 11.988-.384M23 32.062v4.109a3 3 0 0 0-1.88 1.987l-4.517-1.21A8.01 8.01 0 0 1 23 32.061m2 0v4.109c.904.32 1.61 1.06 1.88 1.987l4.517-1.21A8.01 8.01 0 0 0 25 32.061m6.922 6.815l-5.204 1.395a3 3 0 0 1-5.436 0l-5.204-1.395A8 8 0 0 0 16 40v1a1 1 0 1 1-2 0v-.607a2 2 0 0 1-1.808.404l-1.932-.518a2 2 0 0 1-1.414-2.45l.776-2.897a2 2 0 0 1 2.45-1.414l1.932.517a2 2 0 0 1 1.28 1.058A10 10 0 0 1 24 30a10 10 0 0 1 8.713 5.089a2 2 0 0 1 1.279-1.053l1.932-.518a2 2 0 0 1 2.45 1.415l.776 2.897a2 2 0 0 1-1.415 2.45l-1.931.518a2 2 0 0 1-1.804-.4V41a1 1 0 1 1-2 0v-1q0-.572-.078-1.123M24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTruckDriverNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTruckDriverNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTumourIcon],svg[healthicons-tumour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.632 17.525a3.66 3.66 0 0 0 2.18-3.353c0-2.018-1.62-3.654-3.62-3.654h-.029q.03-.226.029-.46c0-2.018-1.621-3.654-3.62-3.654c-.5 0-.976.102-1.41.287c-.213-2.89-2.604-5.167-5.521-5.167c-3.047 0-5.52 2.484-5.538 5.554a4 4 0 0 0-1.281-.207c-2.252 0-4.078 1.842-4.078 4.114a4.12 4.12 0 0 0 1.866 3.457c-.57.4-1.036.943-1.344 1.578a4.03 4.03 0 0 0-2.027-.544c-2.252 0-4.078 1.842-4.078 4.114a4.12 4.12 0 0 0 2.484 3.789A4.81 4.81 0 0 0 2.5 27.903c0 2.657 2.135 4.81 4.768 4.81a4.73 4.73 0 0 0 3.51-1.555a4.8 4.8 0 0 0-.255 1.556c0 2.657 2.135 4.81 4.768 4.81c2.438 0 4.45-1.847 4.733-4.23a5.503 5.503 0 0 0 7.498.756a4.38 4.38 0 0 0 2.953 1.135c2.406 0 4.355-1.916 4.355-4.28q0-.241-.026-.476a4.82 4.82 0 0 0 2.696-4.334c0-2.657-2.135-4.81-4.767-4.81q-.11 0-.22.005q.043-.34.043-.693a5.53 5.53 0 0 0-.924-3.072M19.263 8.49c1 0 1.81-.818 1.81-1.827c0-1.01-.81-1.827-1.81-1.827s-1.81.818-1.81 1.827s.81 1.826 1.81 1.826M9.15 27.892c0 1.009-.81 1.826-1.81 1.826s-1.81-.817-1.81-1.826s.81-1.827 1.81-1.827s1.81.818 1.81 1.827m19.105-5.932c.667 0 1.207-.545 1.207-1.218s-.54-1.218-1.207-1.218c-.666 0-1.207.546-1.207 1.218c0 .673.54 1.218 1.207 1.218m-2.783 8.976c0 .673-.54 1.218-1.207 1.218a1.21 1.21 0 0 1-1.207-1.218c0-.672.54-1.218 1.207-1.218s1.207.546 1.207 1.218M13.338 19.524c.667 0 1.207-.545 1.207-1.218s-.54-1.217-1.207-1.217c-.666 0-1.207.545-1.207 1.218s.54 1.217 1.207 1.217m4.139 6.177l-.753.667l-.123.011c-.856.085-1.736.301-2.324.722c-.58.415-.983 1.08-1.246 1.733a6 6 0 0 0-.322 1.087l-.001.006v.002a1.21 1.21 0 0 1-1.377 1.013a1.216 1.216 0 0 1-1.008-1.39l1.192.186l-1.192-.186v-.003l.001-.004l.002-.012l.005-.032l.02-.106a8.7 8.7 0 0 1 .444-1.477c.346-.86.975-2.01 2.087-2.805c1.104-.789 2.491-1.06 3.481-1.158q.164-.016.317-.027a7 7 0 0 1-.132-1.485a9 9 0 0 1 .125-1.386l.005-.028l.002-.009v-.005l1.185.236l-1.184-.237c.13-.66.765-1.088 1.419-.957c.652.13 1.077.77.95 1.428l-.001.002l-.001.006l-.008.048a7 7 0 0 0-.078.93c-.007.617.082 1.19.291 1.55c.205.35.606.652 1.068.881a4.6 4.6 0 0 0 .742.287l.017.005h.003a1.22 1.22 0 0 1 .89 1.467a1.207 1.207 0 0 1-1.455.902l.28-1.185l-.28 1.185h-.003l-.004-.002l-.009-.002l-.027-.007l-.083-.023a7 7 0 0 1-1.133-.44a5.8 5.8 0 0 1-1.145-.737l-.096-.004h-.016l-.073-.005a10 10 0 0 0-1.205.025zm3.604-.507l-2.032-3.709l2.03 3.709z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTumourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUIcon],svg[healthicons-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 10a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V12a2 2 0 1 1 4 0v16c0 5.523-4.477 10-10 10s-10-4.477-10-10V12a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUNegativeIcon],svg[healthicons-u-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 12a2 2 0 1 0-4 0v16c0 5.523 4.477 10 10 10s10-4.477 10-10V12a2 2 0 1 0-4 0v16a6 6 0 0 1-12 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderIcon],svg[healthicons-ui-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M8 12a1 1 0 0 1 1-1h13.083a1 1 0 0 1 .876.518L24.872 15H8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyIcon],svg[healthicons-ui-folder-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m27.154 15l-2.442-4.445A3 3 0 0 0 22.082 9H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3zM9 11a1 1 0 0 0-1 1v3h16.872l-1.913-3.482a1 1 0 0 0-.876-.518zm3.5 14a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm-17 0a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm13-3.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 34a3 3 0 1 1 6 0v1h-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderFamilyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyNegativeIcon],svg[healthicons-ui-folder-family-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiFolderFamilyNegative0)"><svg:path d="m24.872 15l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3zM12.5 25a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm-17 0a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm13-3.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 34a3 3 0 1 1 6 0v1h-6z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555L27.154 15z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiFolderFamilyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiFolderFamilyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderNegativeIcon],svg[healthicons-ui-folder-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiFolderNegative0)"><svg:path d="m24.872 15l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555L27.154 15z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiFolderNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiFolderNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuIcon],svg[healthicons-ui-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuGridIcon],svg[healthicons-ui-menu-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM19 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM32 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"></svg:path>`,
})
export class HealthiconsUiMenuGridIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuGridNegativeIcon],svg[healthicons-ui-menu-grid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiMenuGridNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6 21a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM19 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm2 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm-2 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM34 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm2 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiMenuGridNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiMenuGridNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuNegativeIcon],svg[healthicons-ui-menu-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiMenuNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7 10a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM6 24a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 12a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiMenuNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiMenuNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiPreferencesIcon],svg[healthicons-ui-preferences-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 22.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0zM28 16a4 4 0 0 0-3-3.874V7a1 1 0 1 0-2 0v5.126A4.002 4.002 0 0 0 24 20a4 4 0 0 0 4-4M12 36a4 4 0 0 0 1-7.874V7a1 1 0 1 0-2 0v21.126A4.002 4.002 0 0 0 12 36m24-3c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922m1-9.874A4.002 4.002 0 0 1 36 31a4 4 0 0 1-1-7.874V7a1 1 0 1 1 2 0zM11 38.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0z"></svg:path>`,
})
export class HealthiconsUiPreferencesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiPreferencesNegativeIcon],svg[healthicons-ui-preferences-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiPreferencesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm16 32a4 4 0 1 1-5-3.874V7a1 1 0 1 1 2 0v21.126c1.725.444 3 2.01 3 3.874m7-9.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0zM28 16a4 4 0 0 0-3-3.874V7a1 1 0 1 0-2 0v5.126A4.002 4.002 0 0 0 24 20a4 4 0 0 0 4-4m8 17c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922m1-9.874A4.002 4.002 0 0 1 36 31a4 4 0 0 1-1-7.874V7a1 1 0 1 1 2 0zM11 38.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiPreferencesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiPreferencesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureIcon],svg[healthicons-ui-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 20a2 2 0 0 1 2-2h3v-2c0-5.523 4.477-10 10-10s10 4.477 10 10v2h3a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2zm15-10a6 6 0 0 1 6 6v2H18v-2a6 6 0 0 1 6-6m9 16H15v-2h18zm-18 5h18v-2H15zm18 5H15v-2h18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiSecureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureNegativeIcon],svg[healthicons-ui-secure-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiSecureNegative0)"><svg:path d="M18 18h12v-2a6 6 0 0 0-12 0zm-3 8h18v-2H15zm18 5H15v-2h18zm-18 5h18v-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm11 18a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2h-3v-2c0-5.523-4.477-10-10-10s-10 4.477-10 10v2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiSecureNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiSecureNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsIcon],svg[healthicons-ui-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 6h8v.734c.618 6.866 2.662 8.109 8.898 5.2l.69-.398l4 6.928l-.39.225c-5.904 4.1-5.965 6.509-.066 10.583l.457.264l-.02.034l-3.98 6.894l-.762-.44c-6.355-2.906-8.292-1.476-8.8 6L28 41.697V42h-8v-1.166c-.67-6.626-2.82-7.64-9.154-4.62l-.434.25l-4-6.928l1.035-.598c5.239-3.782 5.237-6.145-.103-9.935l-.932-.539l4-6.928l.223.129c6.47 3.097 8.7 2.166 9.365-4.463zm9 18a5 5 0 1 1-10 0a5 5 0 0 1 10 0m3 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsNegativeIcon],svg[healthicons-ui-settings-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiSettingsNegative0)"><svg:path d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path fill-rule="evenodd" d="M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM20 6v1.202c-.666 6.63-2.895 7.56-9.365 4.463l-.223-.13l-4 6.93l.932.538c5.34 3.79 5.341 6.153.103 9.935l-1.035.598l4 6.928l.434-.25c6.335-3.02 8.484-2.006 9.154 4.62V42h8v-.304l.027.329c.508-7.477 2.444-8.907 8.8-6l.761.44l3.98-6.894l.02-.035l-.456-.264c-5.899-4.074-5.838-6.483.066-10.583l.39-.225l-4-6.928l-.69.399C30.662 14.843 28.618 13.6 28 6.734V6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiSettingsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiSettingsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileIcon],svg[healthicons-ui-user-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path fill-rule="evenodd" d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiUserProfileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileNegativeIcon],svg[healthicons-ui-user-profile-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiUserProfileNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm11 35.63c0 .34.057.675.166.991A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.181 12.636a2.99 2.99 0 0 0-2.498-4.002c-7.758-.803-12.836-.88-20.632-.018A3.03 3.03 0 0 0 11 35.631M4 24c0 10.772 8.517 19.556 19.184 19.984a10 10 0 0 0 .678.015L24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24m20 4a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiUserProfileNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiUserProfileNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomIcon],svg[healthicons-ui-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172l6.927-6.927l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiZoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomInIcon],svg[healthicons-ui-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28 16v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.17l6.927-6.926l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomInNegativeIcon],svg[healthicons-ui-zoom-in-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUiZoomInNegative0)" clip-rule="evenodd"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13m-18 1h4v4h2v-4h4v-2h-4v-4h-2v4h-4z"></svg:path><svg:path d="M48 0H0v48h48zM12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.17z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomInNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomInNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomNegativeIcon],svg[healthicons-ui-zoom-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiZoomNegative0)"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutIcon],svg[healthicons-ui-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 22h12v-2H21z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172l6.927-6.927l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutNegativeIcon],svg[healthicons-ui-zoom-out-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUiZoomOutNegative0)" clip-rule="evenodd"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13m-7 1H21v-2h12z"></svg:path><svg:path d="M0 0h48v48H0zm12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomOutNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomOutNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUltrasoundScannerIcon],svg[healthicons-ultrasound-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.481 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.215-1.988c.477-.052.638-.187.761-.342c.196-.247.342-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"></svg:path><svg:path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0z"></svg:path><svg:path d="M19 23.064v1.807q.073-.03.149-.057c1.104-.415 2.723-.814 4.85-.814c2.129 0 3.748.4 4.852.814l.149.057v-1.807a8 8 0 0 0-.851-.378c-.896-.335-2.277-.686-4.15-.686c-1.871 0-3.252.35-4.148.686c-.362.136-.645.27-.851.378m11-.564l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 1 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58c1.104-.415 2.723-.814 4.85-.814c2.129 0 3.748.4 4.852.814c.551.206.973.416 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 0 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.002l-.001-.002H29.4s-.001-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372M18.01 16.993a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601"></svg:path><svg:path d="M18.642 12.066A14 14 0 0 1 33.9 15.1a1 1 0 1 1-1.414 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1a14 14 0 0 1 4.542-3.034"></svg:path></svg:g>`,
})
export class HealthiconsUltrasoundScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUltrasoundScannerNegativeIcon],svg[healthicons-ultrasound-scanner-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUltrasoundScannerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-8.977 8.356a49.1 49.1 0 0 0-30.045-.002c-2.483.798-3.58 3.547-2.645 5.874l6.36 15.81l.07.178c.227.569.48 1.203.865 1.689c.503.634 1.183.987 2.11 1.088a1 1 0 0 0 .216-1.989c-.476-.051-.636-.186-.759-.341c-.195-.247-.34-.607-.626-1.319L8.19 13.482c-.543-1.35.123-2.813 1.4-3.224a47.1 47.1 0 0 1 28.822.002c1.278.411 1.943 1.874 1.4 3.224l-6.379 15.853c-.288.717-.434 1.08-.63 1.327c-.124.155-.285.29-.761.342a1 1 0 1 0 .214 1.988c.928-.1 1.609-.452 2.112-1.086c.387-.487.64-1.123.868-1.693q.035-.09.07-.174l6.362-15.81c.936-2.327-.161-5.076-2.644-5.875M25 32a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-6-7.13v-1.806a8 8 0 0 1 .851-.378C20.747 22.351 22.128 22 24 22s3.253.35 4.149.686c.362.136.645.27.851.378v1.807l-.149-.057C27.747 24.399 26.128 24 24 24s-3.747.4-4.851.814zm11.6-3.17l-.6.8zl-.003-.002l-.005-.004l-.01-.007a2 2 0 0 0-.127-.088a6 6 0 0 0-.34-.205a9 9 0 0 0-1.264-.58C27.747 20.399 26.128 20 24 20s-3.747.4-4.851.814a9 9 0 0 0-1.264.58a6 6 0 0 0-.467.293l-.01.007l-.005.004h-.001l-.001.001s-.001.001.599.801l-.6-.8a1 1 0 0 0-.4.8v4.289a5 5 0 0 0 .84 2.773l.656.985A3 3 0 0 1 19 32.211v3.768a5 5 0 0 0 4 4.9V41c0 2.32 2.525 3.757 4.52 2.573l2.118-1.258a2.394 2.394 0 0 1 3.261.805l.25.404a1 1 0 0 0 1.703-1.048l-.25-.405a4.394 4.394 0 0 0-5.985-1.475l-2.118 1.257A.992.992 0 0 1 25 41v-.121a5 5 0 0 0 4-4.9v-3.768a3 3 0 0 1 .504-1.664l.656-.985A5 5 0 0 0 31 26.79V22.5a1 1 0 0 0-.4-.8m-12.59-4.707a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601M24 11a14 14 0 0 0-9.9 4.1a1 1 0 0 0 1.415 1.415a12 12 0 0 1 16.97 0A1 1 0 0 0 33.9 15.1A14 14 0 0 0 24 11" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUltrasoundScannerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUltrasoundScannerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaIcon],svg[healthicons-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4a1 1 0 0 1 1 1v1.016c9.157.501 16.494 7.838 16.995 16.995c.016.293-.34.343-.557.147a7.18 7.18 0 0 0-4.823-1.85a7.2 7.2 0 0 0-5.433 2.47a.66.66 0 0 1-.497.233a.66.66 0 0 1-.453-.187A8.98 8.98 0 0 0 25 21.364V39.5a2.5 2.5 0 0 0 5 0V38a1 1 0 1 1 2 0v1.5a4.5 4.5 0 1 1-9 0V21.36a8.98 8.98 0 0 0-5.272 2.474a.62.62 0 0 1-.429.177a.63.63 0 0 1-.47-.22a7.2 7.2 0 0 0-5.444-2.483c-1.854 0-3.545.7-4.822 1.85c-.218.196-.573.146-.557-.147c.5-9.157 7.837-16.494 16.994-16.995V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUmbrellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaNegativeIcon],svg[healthicons-umbrella-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUmbrellaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.976 5a1 1 0 1 0-2 0v1.029c-9.144.5-16.47 7.826-16.97 16.97c-.017.293.339.343.557.147a7.17 7.17 0 0 1 4.815-1.847c2.17 0 4.116.96 5.436 2.48c.119.137.289.22.47.22c.16 0 .313-.065.428-.177a8.97 8.97 0 0 1 5.264-2.47V39.5a4.5 4.5 0 1 0 9 0V38a1 1 0 1 0-2 0v1.5a2.5 2.5 0 0 1-5 0V21.356a8.97 8.97 0 0 1 5.223 2.456a.66.66 0 0 0 .453.187c.191 0 .37-.088.496-.232a7.18 7.18 0 0 1 5.426-2.468c1.851 0 3.54.699 4.815 1.847c.218.196.573.146.557-.147c-.5-9.144-7.826-16.47-16.97-16.97z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUmbrellaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUmbrellaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnPavedRoadIcon],svg[healthicons-un-paved-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5 4.85a1 1 0 1 0 0-2a1 1 0 0 0 0 2M36.687 7.922a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.256a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m-7.47-14.84a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m1.296 6.544a1.5 1.5 0 1 0-1.23-2.736a1.5 1.5 0 0 0 1.23 2.736m2.803 2.578a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m.431 4.836a1 1 0 1 0-.82-1.824a1 1 0 0 0 .82 1.824"></svg:path><svg:path fill-rule="evenodd" d="M23.025 12.91a1.5 1.5 0 0 1-.35 2.251l1.532 1.749a1.5 1.5 0 1 1 1.863 2.138l1.41 1.624a1.5 1.5 0 1 1 1.87 2.163l1.392 1.616a1.5 1.5 0 1 1 1.872 2.178l.007.008a18 18 0 0 0-8.51 13.367C23.99 41.102 23.105 42 22.001 42H8c-1.105 0-2.007-.896-1.945-1.999a36 36 0 0 1 14.623-27.008q.099-.134.231-.248a1.5 1.5 0 0 1 2.115.166m2.07 8.83l-.723.69a27 27 0 0 0-1.56 1.622l-.663.748l-1.497-1.326l.663-.748a29 29 0 0 1 1.676-1.742l.724-.69zm-4.452 5.069l-.535.845a30 30 0 0 0-2.114 3.986l-.4.916l-1.833-.8l.4-.917a32 32 0 0 1 2.258-4.255l.534-.845zm-3.886 8.128l-.262.965q-.296 1.087-.513 2.203l-.192.981l-1.963-.383l.192-.982q.231-1.186.546-2.343l.262-.965z" clip-rule="evenodd"></svg:path><svg:path d="M27.562 13.691a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0m1.725 5.211a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736m5.292-2.981a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m3.887.079a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736m-4.888-4.64a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0m4.554-.36a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736"></svg:path></svg:g>`,
})
export class HealthiconsUnPavedRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnPavedRoadNegativeIcon],svg[healthicons-un-paved-road-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUnPavedRoadNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.544 16.545a36 36 0 0 1 4.134-3.55q.1-.136.232-.25a1.5 1.5 0 1 1 1.764 2.416c.495.562 1.007 1.148 1.533 1.749a1.5 1.5 0 1 1 1.863 2.138l1.409 1.624q.12-.196.304-.355a1.5 1.5 0 1 1 1.566 2.519l1.393 1.615q.116-.184.29-.334a1.5 1.5 0 1 1 1.582 2.512l.007.008a18 18 0 0 0-8.51 13.368C23.988 41.103 23.105 42 22 42H8c-1.105 0-2.006-.896-1.944-2a36 36 0 0 1 10.488-23.456m6.828 6.886l.724-.69l-1.381-1.447l-.724.69a29 29 0 0 0-1.676 1.742l-.663.748l1.497 1.326l.663-.748a27 27 0 0 1 1.56-1.621m-4.264 5.223l.535-.845l-1.69-1.07l-.534.845a32 32 0 0 0-2.258 4.255l-.4.916l1.832.801l.4-.916a30 30 0 0 1 2.115-3.986m-3.613 8.248l.262-.965l-1.93-.524l-.262.965q-.315 1.157-.546 2.343l-.192.982l1.963.383l.192-.981q.218-1.117.513-2.203M42 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M40.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5 4.85a1 1 0 1 0 0-2a1 1 0 0 0 0 2M36.687 7.922a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.255a1.5 1.5 0 1 1-2.97.421a1.5 1.5 0 0 1 2.97-.42m-.574 6.647a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m-7.47-14.84a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m1.296 6.544a1.5 1.5 0 1 0-1.23-2.736a1.5 1.5 0 0 0 1.23 2.736m2.803 2.578a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m.43 4.836a1 1 0 1 0-.82-1.824a1 1 0 0 0 .82 1.824m-7.012-9.897a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0m1.724 5.21a.868.868 0 1 0 0-1.735a.868.868 0 0 0 0 1.736m5.293-2.98a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m3.887.08a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.736m-4.888-4.64a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0M38.132 11a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUnPavedRoadNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUnPavedRoadNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightIcon],svg[healthicons-underweight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill-rule="evenodd" d="M32.268 27.476a1.5 1.5 0 0 0 1.208-1.744c-.052-.285-.12-.722-.202-1.241c-.16-1.023-.372-2.368-.606-3.516c-.183-.898-.404-1.812-.673-2.545a5.3 5.3 0 0 0-.52-1.079c-.19-.287-.586-.795-1.267-.979c-4.44-1.196-8-1.14-12.413.036c-.68.181-1.076.687-1.267.974a5.2 5.2 0 0 0-.522 1.075c-.27.73-.49 1.64-.674 2.534c-.235 1.15-.447 2.492-.607 3.512c-.081.513-.149.944-.2 1.229a1.5 1.5 0 1 0 2.95.536c.078-.424.157-.93.245-1.49c.149-.958.323-2.07.551-3.185c.175-.853.36-1.585.55-2.097q.066-.178.116-.285q.61-.156 1.196-.277L21 25l-1.5 5.5v12a1.5 1.5 0 0 0 3 0v-12h3v12a1.5 1.5 0 0 0 3 0v-12L27 25l.872-6.101q.582.119 1.188.273q.051.11.119.291c.19.517.375 1.253.55 2.112c.228 1.118.4 2.226.549 3.183c.088.567.168 1.08.246 1.51a1.5 1.5 0 0 0 1.744 1.208m-3.313-8.494l.015.02zm-9.913.039l-.014.02z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUnderweightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightNegativeIcon],svg[healthicons-underweight-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUnderweightNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m9.476 12.732a1.5 1.5 0 1 1-2.952.536c-.078-.43-.158-.943-.246-1.51a69 69 0 0 0-.55-3.183c-.174-.859-.36-1.595-.55-2.112a4 4 0 0 0-.118-.29a25 25 0 0 0-1.188-.274L27 25l1.5 5.5v12a1.5 1.5 0 0 1-3 0v-12h-3v12a1.5 1.5 0 0 1-3 0v-12L21 25l-.867-6.066q-.584.12-1.196.277a4 4 0 0 0-.117.285c-.189.512-.374 1.244-.549 2.097a68 68 0 0 0-.551 3.184c-.088.56-.167 1.067-.244 1.491a1.5 1.5 0 1 1-2.952-.536c.052-.285.12-.716.2-1.23c.161-1.02.373-2.361.608-3.51c.183-.895.404-1.805.674-2.535a5.2 5.2 0 0 1 .522-1.075c.191-.287.587-.793 1.267-.974c4.413-1.177 7.973-1.232 12.413-.036c.681.184 1.077.692 1.266.979c.22.332.388.716.521 1.079c.27.733.49 1.647.673 2.545c.234 1.148.445 2.493.606 3.515c.081.52.15.957.202 1.242m-4.521-6.75l.015.02zm-9.913.039l-.014.02z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUnderweightNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUnderweightNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodIcon],svg[healthicons-unhealthy-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.068 20.147l-2.44-9.103l5.602-5.237L17 12.41V8.79l7-2.14v3.893l6.086-2.913l-.069 1.01L31.227 4h7.117l-2.769 9.23l1.767-.452l-2.147 8.014q.21-.202.42-.41a1.293 1.293 0 0 1 2.203 1.071L35.22 42.248A2 2 0 0 1 33.235 44h-18.47a2 2 0 0 1-1.984-1.752l-2.599-20.79a1.297 1.297 0 0 1 1.886-1.31m19.523-3.38l2.84-.852l-1.96 7.312c-1.114.907-2.177 1.65-3.207 2.227zm-4.794 9.769l1.061-15.623l-2.59 1.239l-1.006 14.81a9.2 9.2 0 0 0 2.535-.426M19 25.544c1.027.554 2.021.947 3 1.177V9.35l-3 .918zm-4.214-2.98A31 31 0 0 0 17 24.294v-4.162L14.161 9.544l-2.29 2.141zm18.528-8.756l-2.762.706L32.772 6h2.884z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUnhealthyFoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodNegativeIcon],svg[healthicons-unhealthy-food-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUnhealthyFoodNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm15.23 5.807L17 12.41V8.79l7-2.14v3.893l6.086-2.913l-.069 1.01L31.227 4h7.117l-2.769 9.23l1.767-.452l-2.148 8.014q.21-.202.421-.41a1.293 1.293 0 0 1 2.203 1.071L35.22 42.248A2 2 0 0 1 33.234 44H14.766a2 2 0 0 1-1.985-1.752l-2.599-20.79a1.297 1.297 0 0 1 1.886-1.31l-2.44-9.104zM17 24.293a31 31 0 0 1-2.214-1.73L11.87 11.686l2.29-2.14L17 20.131zm5 2.428c-.979-.23-1.973-.623-3-1.177V10.269l3-.917zm4.797-.185a9.2 9.2 0 0 1-2.535.426l1.006-14.81l2.59-1.24zm5.675-3.31c-1.116.909-2.178 1.65-3.209 2.228l2.328-8.687l2.84-.852zm.842-9.418L35.656 6h-2.883l-2.221 8.514z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUnhealthyFoodNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUnhealthyFoodNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrineSampleIcon],svg[healthicons-urine-sample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.879 6.879A3 3 0 0 0 6 9v5h2.138q0 .066.004.133l1.734 26A2 2 0 0 0 11.87 42h23.26a2 2 0 0 0 1.995-1.867l1.734-26a2 2 0 0 0 .004-.133H42V9a2.99 2.99 0 0 0-1.832-2.764A3 3 0 0 0 39 6H9a3 3 0 0 0-2.121.879M36.862 14H10.138l.267 4H21a2 2 0 0 1 2 2v2h13.329zm-25.748 6l.778 14H21V20zM11 11.714H9V8.286h2zm4-3.428h-2v3.428h2zm4 3.428h-2V8.286h2zm4-3.428h-2v3.428h2zm4 3.428h-2V8.286h2zm4-3.428h-2v3.428h2zm4 3.428h-2V8.286h2zm4-3.428h-2v3.428h2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUrineSampleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrologyIcon],svg[healthicons-urology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm9.833 15.817A4 4 0 0 0 19.88 18h.117c.554 0 1 .447 1 .998V26.7q-.255.135-.485.299c-.91.642-1.513 1.595-1.513 2.858q0 .067.002.133V30c.064 2.424 1.759 4.429 3.996 4.897V37a1 1 0 1 0 2 0v-2.102c2.24-.467 3.936-2.473 4-4.898l.002-.143c0-1.477-.825-2.53-2-3.158V19A1 1 0 0 1 28 18h.118a4 4 0 0 0 6.705 3.817c1.258-1.259 2.18-2.986 2.175-4.817c.005-1.831-.917-3.571-2.175-4.83A4 4 0 0 0 28.12 16H28c-1.656 0-3 1.34-3 2.998v7.071a7.2 7.2 0 0 0-2.002 0V19a3 3 0 0 0-3-2.999h-.12a4 4 0 0 0-6.702-3.83C11.917 13.43 10.996 15.17 11 17c-.005 1.83.918 3.558 2.176 4.817a4 4 0 0 0 5.657 0M24 33c-1.561 0-2.925-1.282-2.997-3h5.994c-.072 1.718-1.436 3-2.997 3m-6.001-17.016c-.556 0-1.006-.45-1.006-1.005a1 1 0 1 0-2 0c0 .77.29 1.473.767 2.005a3 3 0 0 0-.767 2.005a1 1 0 0 0 2 0c0-.555.45-1.005 1.006-1.005a1 1 0 0 0 0-2m13.006-1.005c0 .555-.45 1.005-1.005 1.005a1 1 0 1 0 0 2c.555 0 1.005.45 1.005 1.005a1 1 0 1 0 2 0c0-.77-.29-1.473-.767-2.005a3 3 0 0 0 .767-2.006a1 1 0 1 0-2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUrologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrologyNegativeIcon],svg[healthicons-urology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUrologyNegative0)" clip-rule="evenodd"><svg:path d="M19.88 18a4 4 0 0 1-6.705 3.817C11.919 20.558 10.996 18.83 11 17c-.005-1.831.917-3.571 2.176-4.83A4 4 0 0 1 19.877 16h.121c1.656 0 3 1.34 3 2.998v7.072a7.2 7.2 0 0 1 2.002 0v-7.072A3 3 0 0 1 28 16h.121a4 4 0 0 1 6.702-3.83c1.258 1.259 2.18 2.999 2.175 4.83c.005 1.83-.917 3.558-2.175 4.817A4 4 0 0 1 28.118 18H28c-.553 0-1 .447-1 .998V26.7c1.175.629 2 1.681 2 3.158q0 .072-.002.143c-.064 2.425-1.76 4.43-4 4.898V37a1 1 0 1 1-2 0v-2.103c-2.237-.468-3.932-2.473-3.996-4.897v-.01L19 29.857c0-1.263.603-2.216 1.513-2.858q.23-.163.485-.3V19a1 1 0 0 0-1-.999zm1.123 12c.072 1.718 1.436 3 2.997 3s2.925-1.282 2.997-3zm-4.01-15.021c0 .555.45 1.005 1.006 1.005a1 1 0 0 1 0 2c-.556 0-1.006.45-1.006 1.005a1 1 0 1 1-2 0c0-.77.29-1.473.767-2.005a3 3 0 0 1-.767-2.006a1 1 0 0 1 2 0M30 15.984c.555 0 1.005-.45 1.005-1.005a1 1 0 1 1 2 0c0 .77-.29 1.473-.767 2.005c.477.532.767 1.235.767 2.005a1 1 0 1 1-2 0c0-.555-.45-1.005-1.005-1.005a1 1 0 1 1 0-2"></svg:path><svg:path d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUrologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUrologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVIcon],svg[healthicons-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 38a2 2 0 0 0 1.846-1.23l10-24a2 2 0 0 0-3.692-1.54L24 30.8l-8.154-19.57a2 2 0 0 0-3.692 1.54l10 24A2 2 0 0 0 24 38" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVNegativeIcon],svg[healthicons-v-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.846 36.77a2 2 0 0 1-3.692 0l-10-24a2 2 0 1 1 3.692-1.54L24 30.8l8.154-19.57a2 2 0 0 1 3.692 1.54z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaIcon],svg[healthicons-vagina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25.9 5.016l5.925 9.15a16.495 16.495 0 0 1 .518 18.707l-.518.8L24.023 44l-8.359-10.901l-.09-.145a16.74 16.74 0 0 1 .648-18.789l5.924-9.15c.877-1.354 2.877-1.354 3.754 0m-8.03 10.282l-.032.045a14.74 14.74 0 0 0-1.757 14.234q.06-.351.166-.698l6.327-20.845zM25.386 7.9l6.368 20.98q.085.28.142.566a14.5 14.5 0 0 0-1.687-14.103l-.032-.045zM24 23.162l-2.52 7.101c-.44 1.243-.557 2.22-.433 3.11c.124.895.503 1.79 1.2 2.85L24 38.893l1.753-2.669c.697-1.06 1.076-1.955 1.2-2.85c.124-.89.008-1.867-.433-3.11zM24 13a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m1 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltIcon],svg[healthicons-vagina-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148M23.143 42V31.546l-7.022-7.373l1.212-1.273L23 28.85V26a1 1 0 1 1 2 0v2.851l5.667-5.95l1.212 1.272l-7.021 7.373V42z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltNegativeIcon],svg[healthicons-vagina-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsVaginaAltNegative0)"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-6 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148" clip-rule="evenodd"></svg:path><svg:path d="M23.143 31.546V42h1.715V31.546l7.022-7.373l-1.213-1.273l-6.667 7l-6.667-7l-1.212 1.273z"></svg:path><svg:path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVaginaAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVaginaAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaricoseVeinIcon],svg[healthicons-varicose-vein-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.86 4h-1.93l-.95 6.541l3.907 24.763s-7.653 3.349-9.088 3.349c-.499 0-.998-.116-1.475-.227c-.896-.207-1.718-.398-2.324.227c-.929.956-1.687 2.13 0 3.826c1.687 1.695 4.763 1.911 8.582.957c4.974-1.244 6.518-.65 7.793-.158c.688.265 1.297.5 2.323.401c2.559-.246 3.454-1.668 4.046-2.61q.128-.206.244-.374c.61-.878.145-4.329-2.047-5.874c-.16-.858 1.04-6.903 2.518-12.158c2.308-8.208-.508-13.716-2.368-17.354c-.197-.385-.383-.965-.552-1.309h-2.172l.976 2.104h.005l.038.076q.335.653.685 1.364l.01.019c1.684 3.46 3.379 8.03 1.536 14.582a117 117 0 0 0-1.906 7.863a58 58 0 0 0-.545 3.012c-.06.406-.106.78-.131 1.097c-.02.249-.047.67.025 1.055l.143.765l.635.448c.615.433 1.089 1.226 1.33 2.12c.116.432.157.815.153 1.087a2 2 0 0 1-.01.165c-.117.175-.21.323-.292.454c-.198.318-.336.537-.627.816c-.318.303-.836.648-1.877.748a2.1 2.1 0 0 1-.964-.103a9 9 0 0 1-.464-.17h-.001l-.073-.028l-.103-.04a11 11 0 0 0-.987-.332c-1.649-.458-3.811-.52-7.805.478c-3.723.93-5.85.466-6.762-.451c-.3-.3-.402-.491-.433-.565l-.003-.008a1 1 0 0 1 .057-.101a2.4 2.4 0 0 1 .24-.303q.06.008.149.024c.172.031.299.061.46.099c.13.03.285.067.506.114a7 7 0 0 0 1.467.177c.45 0 .936-.114 1.291-.208c.408-.107.872-.254 1.352-.418c.965-.33 2.092-.762 3.15-1.185a151 151 0 0 0 3.971-1.658l.09-.04l1.354-.592l-4.092-25.936zM12.075 40.14h-.005z"></svg:path><svg:path d="M30.344 6.104L29.368 4H22.86l-.944 6.53l4.092 25.935l-1.354.592l-.09.04a154 154 0 0 1-3.971 1.658a69 69 0 0 1-3.15 1.185c-.48.164-.944.31-1.352.419c-.355.093-.842.207-1.291.207a7 7 0 0 1-1.467-.177a23 23 0 0 1-.506-.114a9 9 0 0 0-.46-.1l-.15-.023q-.16.18-.239.303a1 1 0 0 0-.057.101l.003.008c.031.074.133.264.433.565c.913.917 3.04 1.381 6.762.45c3.994-.998 6.156-.935 7.805-.477c.389.108.719.23.987.332l.103.04l.073.028h.001c.188.072.32.123.463.17c.282.092.536.144.965.103c1.04-.1 1.559-.445 1.877-.748c.291-.279.429-.498.627-.816c.082-.131.174-.279.292-.454a2 2 0 0 0 .01-.165a4 4 0 0 0-.153-1.086c-.241-.895-.715-1.688-1.33-2.121l-.635-.448l-.143-.765c-.072-.385-.045-.806-.025-1.055c.025-.317.071-.69.131-1.097c.12-.817.309-1.855.545-3.013a117 117 0 0 1 1.906-7.862c1.843-6.552.148-11.123-1.537-14.582l-.01-.019c-.23-.475-.462-.929-.684-1.364l-.038-.076zM24.561 8.92a.957.957 0 0 1 1.353.02c.427.439.733.876.927 1.322a4.4 4.4 0 0 1 2.81-.497a.957.957 0 0 1-.274 1.894a2.59 2.59 0 0 0-2.476 1.033l-.085.28c-.103.328-.179.571-.172.9c.007.352.132.87.83 1.57a.957.957 0 0 1-1.356 1.35c-.989-.994-1.369-1.962-1.387-2.883c-.013-.678.193-1.321.308-1.678l.057-.186c.091-.332.115-.56.067-.783c-.046-.218-.184-.54-.621-.989a.957.957 0 0 1 .02-1.353m4.516 11.697a.957.957 0 0 1 1.836.538c-.432 1.472-1.64 1.856-2.012 1.974l-.05.017q-.098.032-.194.05a1.8 1.8 0 0 0-.701.399c-.235.222-.422.54-.404 1.047a.957.957 0 1 1-1.912.07c-.038-1.03.345-1.82.867-2.374a4.8 4.8 0 0 1-.682-.79a.957.957 0 0 1 1.58-1.08c.194.285.46.545.703.707c.104.069.184.106.234.124c.147-.049.268-.092.392-.178c.123-.086.26-.223.343-.504"></svg:path></svg:g>`,
})
export class HealthiconsVaricoseVeinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaricoseVeinNegativeIcon],svg[healthicons-varicose-vein-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVaricoseVeinNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20.931 4h10.61c.077.159.158.367.242.583c.1.253.203.518.31.726c1.859 3.638 4.675 9.146 2.367 17.354c-1.477 5.255-2.679 11.3-2.518 12.158c2.192 1.545 2.657 4.996 2.047 5.874q-.116.168-.244.375c-.592.941-1.487 2.363-4.046 2.61c-1.026.098-1.636-.137-2.323-.402c-1.275-.491-2.82-1.086-7.793.158c-3.819.954-6.895.738-8.582-.957s-.929-2.87 0-3.826c.606-.625 1.428-.434 2.324-.227c.478.111.976.227 1.475.227c1.435 0 9.088-3.349 9.088-3.349l-3.907-24.763zm4.983 4.94a.957.957 0 0 0-1.372 1.333c.437.45.575.77.621.989c.048.222.024.451-.067.783l-.01.033l-.047.152v.001c-.115.357-.321 1-.308 1.678c.018.92.398 1.89 1.387 2.883a.957.957 0 1 0 1.356-1.35c-.698-.7-.823-1.218-.83-1.57c-.007-.329.07-.572.172-.9l.085-.28a2.59 2.59 0 0 1 2.476-1.033a.956.956 0 1 0 .275-1.894a4.4 4.4 0 0 0-2.811.497c-.194-.446-.5-.883-.927-1.322m4.35 11.028a.957.957 0 0 0-1.187.649c-.083.28-.22.418-.343.504c-.125.086-.245.13-.392.178a1 1 0 0 1-.233-.124a2.7 2.7 0 0 1-.704-.706a.957.957 0 1 0-1.58 1.08c.193.282.427.552.682.79c-.522.553-.905 1.343-.867 2.373a.957.957 0 0 0 1.912-.07c-.018-.507.169-.825.404-1.047a1.8 1.8 0 0 1 .7-.4q.097-.017.195-.05l.027-.008l.023-.008c.372-.118 1.58-.502 2.012-1.974a.957.957 0 0 0-.649-1.187" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVaricoseVeinNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVaricoseVeinNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVascularSurgeryIcon],svg[healthicons-vascular-surgery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8a2 2 0 0 1 2-2h28.074L27.7 14.29l.005.005L12 30h9.552a6 6 0 0 0 4.197-1.713l3.65-3.574A2 2 0 0 0 30 23.284v-.456a2 2 0 0 1 .586-1.414L32.7 19.3l.007.007l5.5-5.5a1 1 0 0 0-1.414-1.415l-4.482 4.482l-2.617-1.744L38.917 6H40a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10.828 20h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69l-2.606-1.736zm9.88-5.293a1 1 0 0 0-1.415-1.414l-3 3a1 1 0 0 0 1.414 1.414zm-4.935 11.85a1 1 0 1 1 1.7 1.055a1 1 0 0 1-1.7-1.056m7 1A1 1 0 1 1 30.024 37H38v2H10v-2h3.222a1 1 0 1 1 .802 0h15.198a1 1 0 0 1-.448-1.444M29.627 32H38v2H10v-2h16.799l7.288-7.288l1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVascularSurgeryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVascularSurgeryNegativeIcon],svg[healthicons-vascular-surgery-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVascularSurgeryNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.083l-9.223 9.13l2.617 1.744l4.482-4.481a1 1 0 0 1 1.414 1.414l-5.5 5.5l-.007-.007l-2.114 2.114A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12l15.705-15.705l-.005-.006L36.074 6zm13.552 22h-4.724l11.427-11.426l2.606 1.737L29.17 20A4 4 0 0 0 28 22.828v.456l-3.65 3.574A4 4 0 0 1 21.552 28m5.155-6.707a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m-3.556 12.941a1 1 0 1 0-1.056 1.7a1 1 0 0 0 1.056-1.7m7 1A1 1 0 1 0 29.22 37H14.025a1 1 0 1 0-.802 0H10v2h28v-2h-7.976a1 1 0 0 0 .127-1.766M38 32h-8.373l5.874-5.874l-1.414-1.414L26.799 32H10v2h28z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVascularSurgeryNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVascularSurgeryNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVegetablesIcon],svg[healthicons-vegetables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.965 9.163c-1.16-1.104-2.826-1.653-4.998-1.12a5.14 5.14 0 0 0-2.077-1.666c-1.336-.574-3.013-.562-4.904.525c-1.978.923-2.931 2.28-3.194 3.704c-.178.968-.023 1.886.232 2.61c-1.678 1.468-2.183 3.144-1.942 4.723c.209 1.366.955 2.533 1.687 3.325a4.1 4.1 0 0 0-.038 1.678c.31-.22.457-.322.794-.459c.55-.224 1-.25 1.5-.25c1.575 0 2.486.183 3.988.6a10 10 0 0 1 2.431 1.008l.284-.122a2 2 0 0 1 1.135-.136l3.513.607a14 14 0 0 1-.233-2.197a9.48 9.48 0 0 1 5.022-8.572a4.1 4.1 0 0 0-1.438-.972c-.23-1.053-.761-2.333-1.762-3.286m-9.826 1.117a1 1 0 0 1 1.34.453l.791 1.6l1.613-1.727a1 1 0 0 1 1.462 1.363l-2.127 2.278l.803 1.621l1.331-1.21a1 1 0 0 1 1.346 1.478l-1.755 1.595l1.056 2.134a1 1 0 0 1-1.793.886l-1.095-2.213l-1.964.397a1 1 0 0 1-.397-1.958l1.444-.292l-.796-1.607l-3.039.457a1 1 0 1 1-.298-1.976l2.406-.362l-.781-1.579a1 1 0 0 1 .453-1.338"></svg:path><svg:path d="m24.136 24.695l-.508-.099a8 8 0 0 1-.394-1.523l-.015-.06c-.102-.417-.17-.784-.176-1.06a7.6 7.6 0 0 1 2.423-5.72q.092-.087.187-.151c2.015-1.8 4.833-2.113 7.015-.327c-.025-2.452.97-4.848 3.38-6.238l.845 1.462c-2.041 1.177-2.8 3.38-2.462 5.735c4.655-1.53 8.278 2.873 6.918 7.942a7.85 7.85 0 0 1-2.547 3.977l-.61-.213c-1.807-.627-4.082-1.386-5.9-1.887c-1.768-.488-4.043-.993-5.863-1.373a196 196 0 0 0-2.293-.465m13.418-4.709a1 1 0 0 1 1.172.79a5.06 5.06 0 0 1-1.803 4.95a.998.998 0 1 1-1.26-1.552a3.07 3.07 0 0 0 1.1-3.017a1 1 0 0 1 .79-1.17M10.236 41.998c3-.167 4.856-1.02 6-2.269c.455.61 1.218.964 2.044.834a119 119 0 0 0 3.098-.531v-4.685h2.23v4.254c2.82-.57 6.25-1.353 10.031-2.406v-2.961h2.23v2.32c1.523-.453 3.092-.948 4.691-1.488a2.034 2.034 0 0 0 0-3.891a137 137 0 0 0-11.38-3.293v6.352h-2.229v-6.877c-3.69-.838-6.71-1.37-8.671-1.68a2.12 2.12 0 0 0-2.044.835c-1.144-1.25-3-2.103-6-2.27a1.063 1.063 0 0 0-1.113 1.085c.026 1.813.137 3.253.515 4.376c-1.225.464-2.38 1.4-3.436 2.809c-.27.36-.27.857 0 1.217c1.047 1.397 2.193 2.33 3.406 2.797c-.322 1.09-.45 2.52-.483 4.384a1.063 1.063 0 0 0 1.11 1.088m2.199-10.972l-2.007.76c-.556.21-1.18.621-1.84 1.334c.653.706 1.271 1.116 1.822 1.328l1.918.739l-.582 1.969c-.171.58-.286 1.374-.347 2.488c2.15-.33 3.058-1.127 3.527-1.852c.675-1.043.878-2.565.878-4.672s-.203-3.628-.878-4.671c-.47-.726-1.38-1.523-3.533-1.854c.057 1.08.17 1.838.358 2.399z"></svg:path></svg:g>`,
})
export class HealthiconsVegetablesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorIcon],svg[healthicons-ventilator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 18v-2h7v2zm0-5v2h7v-2zm0 8h7v-2h-7z"></svg:path><svg:path fill-rule="evenodd" d="M7 6q-.546 0-1.082.044A1 1 0 0 0 5 7.041V43a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.483l.197.084q.036.044.075.084c.516.549 1.292.98 2.048 1.316c.78.348 1.654.644 2.457.883a36 36 0 0 0 2.964.74l.05.01l.014.003l.006.001l.479.093l.368-.321c3.159-2.757 5.138-5.711 5.707-8.895c.597.05.926.224 1.122.4c.243.219.426.571.53 1.139c.103.573.108 1.261.078 2.047c-.01.242-.023.5-.037.763A33 33 0 0 0 26 38.5c0 .997.41 1.804 1.142 2.335c.68.494 1.548.686 2.396.723c1.703.076 3.774-.449 5.519-1.244c.881-.402 1.716-.89 2.404-1.438c.678-.54 1.28-1.189 1.6-1.935c.34-.794.35-1.685-.165-2.515c-.477-.77-1.333-1.37-2.46-1.847c-.747-.316-1.194-.695-1.475-1.081c-.284-.39-.447-.853-.528-1.41c-.082-.567-.073-1.195-.035-1.9l.033-.564c.034-.526.069-1.09.069-1.624H36v-2h5a1 1 0 1 0 0-2h-1V8.5C40 7.12 37.09 6 33.5 6S27 7.12 27 8.5V22h-1a1 1 0 1 0 0 2h5v2h1.5c0 .467-.03.933-.06 1.436l-.04.646c-.038.728-.058 1.52.054 2.292c.113.783.364 1.58.89 2.302c.53.725 1.288 1.311 2.314 1.745c.952.403 1.373.792 1.538 1.058c.127.206.144.4.026.673c-.138.322-.46.725-1.006 1.16c-.534.424-1.22.831-1.99 1.182c-1.556.71-3.306 1.124-4.599 1.066c-.65-.029-1.073-.172-1.31-.343c-.184-.134-.317-.324-.317-.717c0-.471.025-.947.052-1.456q.023-.415.041-.864c.032-.807.037-1.682-.11-2.484c-.146-.807-.463-1.642-1.158-2.267c-.593-.535-1.364-.828-2.29-.907c-.021-3.342-1.57-6.73-4.492-10.17l-.043-.05V19c0-7.18-5.82-13-13-13m10 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M37.378 8.599c.295.113.495.22.622.301V22h-9V8.9a3.5 3.5 0 0 1 .622-.301C30.516 8.255 31.886 8 33.5 8s2.984.255 3.878.599m-18.422 15.37c.174-.424.347-.81.506-1.146c2.294 3.043 3.236 5.831 3.05 8.41c-.2 2.797-1.742 5.568-4.8 8.341l-.37-.083a34 34 0 0 1-1.994-.524a19 19 0 0 1-2.214-.793c-.606-.27-1.043-.532-1.3-.759c.037-.08.108-.204.237-.377c.375-.501.983-1.093 1.73-1.821l.225-.22c.813-.793 1.732-1.709 2.446-2.68c.705-.959 1.309-2.101 1.309-3.348c0-1.666.567-3.515 1.175-5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVentilatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorAltIcon],svg[healthicons-ventilator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18 26c0-1.306.835-2.418 2-2.83V20h-5V6h18v14h-5v3.17c1.165.412 2 1.524 2 2.83v.12c.32.026.667.082 1.011.197a2.92 2.92 0 0 1 1.528 1.126c.408.595.604 1.352.604 2.26c0 .36.165.644.534.881c.397.256.992.416 1.644.416c.653 0 1.248-.16 1.645-.416c.369-.237.534-.521.534-.882V18.855A3.5 3.5 0 0 1 35 15.5v-4a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 0 1-2.5 3.355v10.847c0 1.171-.63 2.036-1.453 2.565c-.794.51-1.79.733-2.726.733s-1.93-.222-2.725-.733c-.824-.53-1.453-1.394-1.453-2.565c0-.625-.134-.955-.254-1.13c-.114-.167-.275-.28-.508-.357a2 2 0 0 0-.384-.085A3 3 0 0 1 27 31h-6a3 3 0 0 1-3-3h-.5c-.958 0-1.703.13-2.195.457c-.407.271-.805.79-.805 2.043c0 .983-.334 1.81-.918 2.395a2.94 2.94 0 0 1-2.082.855c-.747 0-1.507-.28-2.082-.855c-.584-.585-.918-1.412-.918-2.395v-7.645A3.5 3.5 0 0 1 6 19.5v-4a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 0 1-2.5 3.355V30.5c0 .517.166.815.332.98a.94.94 0 0 0 .668.27a.94.94 0 0 0 .668-.27c.166-.165.332-.463.332-.98c0-1.747.602-2.978 1.695-3.707C15.203 26.121 16.458 26 17.5 26zm6.683-16.793l2.252 4.037l1.521-1.815H31v2h-1.61l-2.787 3.326l-2.21-3.962l-1.183 1.493h-6.771v-2h5.804zM26 28a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-4h4v-3h-4zM8 20.333v-2h3v2z" clip-rule="evenodd"></svg:path><svg:path d="M27 32c.35 0 .687-.06 1-.17V36h10v2H10v-2h10v-4.17c.313.11.65.17 1 .17h1v4h4v-4zM14.5 42a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m19 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class HealthiconsVentilatorAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorAltNegativeIcon],svg[healthicons-ventilator-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsVentilatorAltNegative0)"><svg:path d="M22 23h4v-3h-4zm2.684-13.793l2.251 4.037l1.521-1.815H31v2h-1.61l-2.787 3.326l-2.21-3.962l-1.183 1.493h-6.771v-2h5.804zM8 20.333v-2h3v2zM26 28a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm16 40.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M33.5 42a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5-4H10v-2h10v-4.17c.313.11.65.17 1 .17h1v4h4v-4h1c.35 0 .687-.06 1-.17V36h10zM15 6h18v14h-5v3.17c1.165.412 2 1.524 2 2.83v.12c.32.026.667.082 1.011.197a2.92 2.92 0 0 1 1.528 1.126c.408.595.604 1.352.604 2.26c0 .36.165.644.534.881c.397.256.992.416 1.644.416c.653 0 1.248-.16 1.645-.416c.369-.237.534-.521.534-.882V18.855A3.5 3.5 0 0 1 35 15.5v-4a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 0 1-2.5 3.355v10.847c0 1.171-.63 2.036-1.453 2.565c-.794.51-1.79.733-2.726.733s-1.93-.222-2.725-.733c-.824-.53-1.453-1.394-1.453-2.565c0-.625-.134-.955-.254-1.13c-.114-.167-.275-.28-.508-.357a2 2 0 0 0-.384-.085A3 3 0 0 1 27 31h-6a3 3 0 0 1-3-3h-.5c-.958 0-1.703.13-2.195.457c-.407.271-.805.79-.805 2.043c0 .983-.334 1.81-.918 2.395a2.94 2.94 0 0 1-2.082.855c-.747 0-1.507-.28-2.082-.855c-.584-.585-.918-1.412-.918-2.395v-7.645A3.5 3.5 0 0 1 6 19.5v-4a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 0 1-2.5 3.355V30.5c0 .517.166.815.332.98a.94.94 0 0 0 .668.27a.94.94 0 0 0 .668-.27c.166-.165.332-.463.332-.98c0-1.747.602-2.978 1.695-3.707C15.203 26.121 16.458 26 17.5 26h.5c0-1.306.835-2.418 2-2.83V20h-5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVentilatorAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVentilatorAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorNegativeIcon],svg[healthicons-ventilator-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVentilatorNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM5.918 6.044Q6.454 6 7 6c7.18 0 13 5.82 13 13v1.302l.043.05c2.922 3.44 4.47 6.828 4.493 10.17c.925.08 1.696.372 2.29.907c.694.625 1.011 1.46 1.158 2.267c.146.802.14 1.677.109 2.484q-.019.45-.041.863c-.027.51-.052.986-.052 1.457c0 .393.133.583.317.717c.237.171.66.314 1.31.343c1.293.058 3.043-.356 4.6-1.066c.769-.35 1.455-.758 1.989-1.183c.545-.434.868-.837 1.006-1.159c.118-.274.101-.467-.026-.673c-.165-.266-.586-.655-1.538-1.058c-1.026-.434-1.785-1.02-2.314-1.745c-.526-.722-.777-1.519-.89-2.302c-.112-.772-.092-1.564-.053-2.292q.017-.335.038-.646c.032-.503.061-.97.061-1.436H31v-2h-5a1 1 0 1 1 0-2h1V8.5C27 7.12 29.91 6 33.5 6S40 7.12 40 8.5V22h1a1 1 0 1 1 0 2h-5v2h-1.5c0 .534-.035 1.098-.069 1.624q-.019.292-.033.565c-.038.704-.047 1.332.035 1.9c.08.556.244 1.019.528 1.409c.282.386.728.765 1.476 1.081c1.126.476 1.982 1.077 2.459 1.847c.514.83.505 1.72.164 2.515c-.32.746-.922 1.396-1.599 1.935c-.688.548-1.523 1.036-2.404 1.438c-1.745.795-3.816 1.32-5.519 1.244c-.848-.037-1.715-.229-2.396-.723C26.41 40.304 26 39.497 26 38.5c0-.52.03-1.092.058-1.636c.014-.263.027-.52.037-.763c.03-.786.025-1.474-.079-2.047c-.103-.568-.286-.92-.529-1.139c-.196-.176-.525-.35-1.122-.4c-.569 3.184-2.548 6.138-5.707 8.895l-.368.32l-.48-.092l.19-.982l-.19.982l-.005-.001l-.014-.003l-.05-.01l-.185-.038a36 36 0 0 1-2.778-.702a21 21 0 0 1-2.458-.883c-.756-.337-1.532-.767-2.048-1.316l-.075-.084l-.197-.084V43a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.041a1 1 0 0 1 .918-.997M15.5 23a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M38 8.9V22h-9V8.9a3.5 3.5 0 0 1 .622-.301C30.516 8.255 31.886 8 33.5 8s2.984.255 3.878.599c.295.113.495.22.622.301M18.956 23.97c.174-.424.347-.81.506-1.146c2.294 3.043 3.236 5.831 3.05 8.41c-.2 2.797-1.742 5.568-4.8 8.341l-.37-.083a34 34 0 0 1-1.994-.524a19 19 0 0 1-2.214-.793c-.606-.27-1.043-.532-1.3-.759c.037-.08.108-.204.237-.377c.375-.501.983-1.093 1.73-1.821l.225-.22c.813-.793 1.732-1.709 2.446-2.68c.705-.959 1.309-2.101 1.309-3.348c0-1.666.567-3.515 1.175-5M30 18v-2h7v2zm0-5v2h7v-2zm0 8h7v-2h-7z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVentilatorNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVentilatorNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVespaMotorcycleIcon],svg[healthicons-vespa-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M29.004 13.674L25 12.97l.346-1.97l4.136.727A3.5 3.5 0 0 1 32.5 10h3.885c.34 0 .615.275.615.615v5.77c0 .34-.276.615-.615.615H32.5a3.5 3.5 0 0 1-3.496-3.326"></svg:path><svg:path fill-rule="evenodd" d="M30.805 18.563L29.875 26H23v-1.28c0-.398-.378-.72-.844-.72h-8.07C8.516 24 4 27.85 4 32.6c0 .22.21.4.47.4h4.552a5.5 5.5 0 0 0 10.956 0h.91q.057 0 .112-.002V33h10.366c.202.68.783 1.115 1.418 1.25a5.5 5.5 0 0 0 10.703-2.137c.445-.464.669-1.145.395-1.882A6.5 6.5 0 0 0 35 26.628V19h-2.5a3.5 3.5 0 0 1-1.695-.437M16.95 33h-4.9a2.5 2.5 0 0 0 4.9 0m18.944.848a2.501 2.501 0 0 0 4.546-.801z" clip-rule="evenodd"></svg:path><svg:path d="M9.17 20a3 3 0 0 1 .063-.162M9.17 20c-.11.313-.17.65-.17 1v1h15v-1q-.002-.507-.158-.962L23.83 20A3 3 0 0 0 21 18h-9a3 3 0 0 0-2.764 1.832"></svg:path></svg:g>`,
})
export class HealthiconsVespaMotorcycleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVespaMotorcycleNegativeIcon],svg[healthicons-vespa-motorcycle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVespaMotorcycleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.95 33a2.5 2.5 0 0 1-4.9 0zm-7.928 0H4.47c-.26 0-.47-.18-.47-.4C4 27.85 8.516 24 14.086 24h8.07c.466 0 .844.322.844.72V26h6.875l.93-7.437c.502.278 1.08.437 1.695.437H35v8.759A5.5 5.5 0 0 1 37.933 27H38a5.5 5.5 0 1 1-5.475 6.032l-.02-.021l-.01-.011H21v-.002l-.111.002h-.911a5.5 5.5 0 0 1-10.956 0M38 35a2.5 2.5 0 0 0 2.456-2.971l-4.925.868A2.5 2.5 0 0 0 38 35M9 21a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1H9zm23.5-11c-1.286 0-2.41.694-3.018 1.727L25.346 11L25 12.97l4.004.704A3.5 3.5 0 0 0 32.5 17h3.885c.34 0 .615-.276.615-.615v-5.77a.615.615 0 0 0-.615-.615z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVespaMotorcycleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVespaMotorcycleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVihIcon],svg[healthicons-vih-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.832 13.419A13.94 13.94 0 0 1 23 10.035V12a1 1 0 0 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.39 1.39a1 1 0 0 0 1.415 1.414l1.39-1.39A13.94 13.94 0 0 1 37.964 23H36a1 1 0 0 0 0 2h1.965a13.94 13.94 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.389 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.415-1.413l-1.389 1.388A13.94 13.94 0 0 1 10.035 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415zM17.5 21.5a1 1 0 0 0-2 0v5a1 1 0 1 0 2 0V25h1v1.5a1 1 0 1 0 2 0v-5a1 1 0 0 0-2 0V23h-1zm4 0a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H25v3h.5a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2h.5v-3h-.5a1 1 0 0 1-1-1m9.928 5.371a1 1 0 0 1-1.857 0l-2-5a1 1 0 0 1 1.857-.742l1.072 2.678l1.071-2.678a1 1 0 1 1 1.857.742zM21 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1v2a1 1 0 0 1-2 0V6h-1a1 1 0 0 1-1-1m3 34a1 1 0 0 1 1 1v2h1a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2h1v-2a1 1 0 0 1 1-1m-11.314.557a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414l.707.707l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414l.707.707a1 1 0 0 1 0 1.415m21.92-26.163a1 1 0 0 1 0-1.414l1.415-1.415l-.708-.707a1 1 0 1 1 1.415-1.414l2.828 2.828a1 1 0 0 1-1.414 1.415l-.707-.707l-1.414 1.414a1 1 0 0 1-1.415 0M5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1m34-3a1 1 0 0 1 1-1h2v-1a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0v-1h-2a1 1 0 0 1-1-1M8.443 12.687a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 1 1 1.414 1.414l-.707.707l1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415l-.707.708a1 1 0 0 1-1.415 0m26.163 21.92a1 1 0 0 1 1.415 0l1.414 1.414l.707-.707a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 0 1-1.415-1.415l.708-.707l-1.415-1.414a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVihIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVihNegativeIcon],svg[healthicons-vih-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsVihNegative0)"><svg:path d="M17.5 21.5a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V25h1v1.5a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0V23h-1zm4 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H25v3h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-3h-.5a1 1 0 0 1-1-1m9.929 5.371a1 1 0 0 1-1.857 0l-2-5a1 1 0 0 1 1.857-.742l1.071 2.678l1.072-2.678a1 1 0 0 1 1.857.742z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM22 4a1 1 0 1 0 0 2h1v2a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2zm3 36a1 1 0 1 0-2 0v2h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1zm-13.728-.443l-2.828-2.829a1 1 0 1 1 1.414-1.414l.707.707l1.414-1.414a1 1 0 1 1 1.415 1.414l-1.415 1.414l.707.707a1 1 0 0 1-1.414 1.415m23.335-27.578a1 1 0 0 0 1.414 1.415l1.414-1.415l.707.707a1 1 0 0 0 1.414-1.414l-2.828-2.828a1 1 0 1 0-1.414 1.414l.707.707zM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1m35-4a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1zM8.444 12.687a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707l1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415l-.707.708a1 1 0 0 1-1.414 0m27.577 21.92a1 1 0 0 0-1.414 1.414l1.414 1.415l-.707.707a1 1 0 1 0 1.414 1.414l2.828-2.829a1 1 0 0 0-1.414-1.414l-.707.707zM14.833 13.42A13.94 13.94 0 0 1 23 10.035V12a1 1 0 1 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.389 1.39a1 1 0 0 0 1.414 1.414l1.39-1.39A13.94 13.94 0 0 1 37.964 23H36a1 1 0 1 0 0 2h1.965a13.94 13.94 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.39 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.414-1.413l-1.39 1.388A13.94 13.94 0 0 1 10.036 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVihNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVihNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVillageIcon],svg[healthicons-village-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.445 6.168a1 1 0 0 1 1.11 0l6 4A1 1 0 0 1 24 11v8a1 1 0 0 1-1 1h-4v-7h-4v7h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 .445-.832zm17.059 5.964a1 1 0 0 1 .992 0l7 4A1 1 0 0 1 42 17v10a1 1 0 0 1-1 1h-5v-8h-4v8h-5a1 1 0 0 1-1-1V17a1 1 0 0 1 .504-.868zM6.553 28.106l8-4a1 1 0 0 1 .894 0l8 4A1 1 0 0 1 24 29v12a1 1 0 0 1-1 1h-6v-9h-4v9H7a1 1 0 0 1-1-1V29a1 1 0 0 1 .553-.894"></svg:path>`,
})
export class HealthiconsVillageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVillageNegativeIcon],svg[healthicons-village-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVillageNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17.555 6.168a1 1 0 0 0-1.11 0l-6 4A1 1 0 0 0 10 11v8a1 1 0 0 0 1 1h4v-7h4v7h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-.445-.832zm16.941 5.964a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 26 17v10a1 1 0 0 0 1 1h5v-8h4v8h5a1 1 0 0 0 1-1V17a1 1 0 0 0-.504-.868zM14.553 24.106l-8 4A1 1 0 0 0 6 29v12a1 1 0 0 0 1 1h6v-9h4v9h6a1 1 0 0 0 1-1V29a1 1 0 0 0-.553-.894l-8-4a1 1 0 0 0-.894 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVillageNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVillageNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsViralLungInfectionIcon],svg[healthicons-viral-lung-infection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.012 14.503a10 10 0 0 0 0 .977l-.006 7.014c-.002 1.397.562 1.941 1 2.198q.07.04.139.073l.002-.306q0-.32-.005-.7c-.01-1.07-.024-2.467.134-3.868A10 10 0 0 0 34 25a10 10 0 0 0 3.713-.712c2.263 6.996 3.076 15.228 1.401 16.618c-2.998 2.488-8.988.99-11.982-2.002c-2.406-2.403-2.205-8-2.052-12.043a4.3 4.3 0 0 1-1.083-.442a3.8 3.8 0 0 1-.994-.835c-.297.352-.64.625-.996.833a4.3 4.3 0 0 1-1.081.44c.145 4.019.322 9.543-2.064 11.919c-2.983 2.971-8.947 4.453-11.926 1.973S8.945 13.986 15.9 13.99c5.078.005 5.004 6.422 4.966 9.717a68 68 0 0 0-.003 1.054q.069-.034.137-.073c.44-.256 1.003-.8 1.005-2.197V6.001l1-.001h1v2h.011v.005zm12.745 4.669A5 5 0 0 1 35 19.9V21a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a5 5 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 29 21.414L27.586 20A1 1 0 0 1 29 18.586l.828-.829A5 5 0 0 1 29.1 16H28a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L29 11.414A1 1 0 0 1 27.586 10l.698-.698l.009-.01l.01-.008l.697-.698A1 1 0 0 1 30.414 10l.829.828A5 5 0 0 1 33 10.1V9a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 39 8.586L40.414 10A1 1 0 1 1 39 11.414l-.828.829c.347.524.598 1.119.728 1.757H40a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a5 5 0 0 1-.728 1.757l.828.829A1 1 0 1 1 40.414 20L39 21.414A1 1 0 0 1 37.586 20z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsViralLungInfectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsViralLungInfectionNegativeIcon],svg[healthicons-viral-lung-infection-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsViralLungInfectionNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.012 14.503l.005-6.498v-.004h-.011V6l-1-.001h-1v16.492c-.002 1.397-.566 1.94-1.005 2.197q-.069.039-.137.073l-.002-.358q0-.317.006-.696c.037-3.295.111-9.712-4.967-9.717c-6.956-.005-11.945 24.277-8.965 26.758c2.979 2.48 8.943.999 11.926-1.973c2.386-2.376 2.21-7.9 2.064-11.919a4.3 4.3 0 0 0 1.081-.44c.356-.208.699-.481.996-.833c.297.352.639.627.994.835c.386.225.765.36 1.084.442c-.154 4.043-.355 9.64 2.051 12.043c2.993 2.991 8.984 4.49 11.982 2.002c1.675-1.39.862-9.622-1.401-16.618A10 10 0 0 1 34 25a10 10 0 0 1-8.724-5.109c-.159 1.401-.145 2.798-.134 3.868q.004.38.005.7l-.002.306a2 2 0 0 1-.138-.073c-.44-.257-1.003-.801-1.001-2.198l.005-7.014a10 10 0 0 1 .001-.977M35 19.9a5 5 0 0 0 1.757-.728l.829.828A1 1 0 0 0 39 21.414L40.414 20A1 1 0 0 0 39 18.586l-.828-.829A5 5 0 0 0 38.9 16H40a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a5 5 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 40.414 10L39 8.586A1 1 0 1 0 37.586 10l-.829.828A5 5 0 0 0 35 10.1V9a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L30.414 10A1 1 0 0 0 29 8.586l-.698.698l-.01.009l-.009.01l-.697.697A1 1 0 0 0 29 11.414l.828.829A5 5 0 0 0 29.1 14H28a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 27.586 20L29 21.414A1 1 0 0 0 30.414 20l.829-.828A5 5 0 0 0 33 19.9V21a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsViralLungInfectionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsViralLungInfectionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusIcon],svg[healthicons-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.832 13.419A13.94 13.94 0 0 1 23 10.035V12a1 1 0 0 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.39 1.39a1 1 0 0 0 1.415 1.414l1.39-1.39A13.94 13.94 0 0 1 37.964 23H36a1 1 0 0 0 0 2h1.965a13.94 13.94 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.389 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.415-1.413l-1.389 1.388A13.94 13.94 0 0 1 10.035 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415zM20 25a2 2 0 1 1 0 4a2 2 0 0 1 0-4m5-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m4 5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M21 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1v2a1 1 0 0 1-2 0V6h-1a1 1 0 0 1-1-1m3 34a1 1 0 0 1 1 1v2h1a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2h1v-2a1 1 0 0 1 1-1m-11.314.557a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414l.707.707l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414l.707.707a1 1 0 0 1 0 1.415m21.92-26.163a1 1 0 0 1 0-1.414l1.415-1.415l-.708-.707a1 1 0 0 1 1.415-1.414l2.828 2.828a1 1 0 0 1-1.414 1.415l-.707-.707l-1.414 1.414a1 1 0 0 1-1.415 0M5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1m34-3a1 1 0 0 1 1-1h2v-1a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0v-1h-2a1 1 0 0 1-1-1M8.443 12.687a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 1 1 1.414 1.414l-.707.707l1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415l-.707.708a1 1 0 0 1-1.415 0m26.163 21.92a1 1 0 0 1 1.415 0l1.414 1.414l.707-.707a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 0 1-1.415-1.415l.708-.707l-1.415-1.414a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusAltIcon],svg[healthicons-virus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.4 6.9a1 1 0 0 1 1-1h7.2a1 1 0 1 1 0 2H25v2.637c2.976.217 5.684 1.4 7.813 3.236l1.923-1.923l-1.543-1.543a1 1 0 0 1 1.414-1.414l4.5 4.5a1 1 0 0 1-1.414 1.414l-1.543-1.543l-1.923 1.923A13.44 13.44 0 0 1 37.463 23H40.1v-2.6a1 1 0 1 1 2 0v7.2a1 1 0 1 1-2 0V25h-2.637a13.44 13.44 0 0 1-3.236 7.813l1.923 1.923l1.543-1.543a1 1 0 0 1 1.414 1.414l-4.5 4.5a1 1 0 1 1-1.414-1.414l1.543-1.543l-1.923-1.923A13.44 13.44 0 0 1 25 37.464V40.1h2.6a1 1 0 1 1 0 2h-7.2a1 1 0 1 1 0-2H23v-2.636a13.44 13.44 0 0 1-7.813-3.237l-1.923 1.923l1.543 1.543a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 1 1 1.414-1.414l1.543 1.543l1.923-1.923A13.44 13.44 0 0 1 10.536 25H7.9v2.6a1 1 0 1 1-2 0v-7.2a1 1 0 1 1 2 0V23h2.636a13.44 13.44 0 0 1 3.237-7.813l-1.923-1.923l-1.543 1.543a1 1 0 1 1-1.414-1.414l4.5-4.5a1 1 0 1 1 1.414 1.414l-1.543 1.543l1.923 1.923A13.44 13.44 0 0 1 23 10.537V7.9h-2.6a1 1 0 0 1-1-1m11.35 18a1.35 1.35 0 1 0 0-2.7a1.35 1.35 0 0 0 0 2.7m-4.95 5.85a1.35 1.35 0 1 1-2.7 0a1.35 1.35 0 0 1 2.7 0m-5.4-7.65a2.7 2.7 0 1 0 0-5.4a2.7 2.7 0 0 0 0 5.4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusAltNegativeIcon],svg[healthicons-virus-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20.4 5.9a1 1 0 1 0 0 2H23v2.636a13.44 13.44 0 0 0-7.813 3.237l-1.923-1.923l1.543-1.543a1 1 0 1 0-1.414-1.414l-4.5 4.5a1 1 0 1 0 1.414 1.414l1.543-1.543l1.923 1.923A13.44 13.44 0 0 0 10.537 23H7.9v-2.6a1 1 0 1 0-2 0v7.2a1 1 0 1 0 2 0V25h2.637a13.44 13.44 0 0 0 3.236 7.813l-1.923 1.923l-1.543-1.543a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414-1.414l-1.543-1.543l1.923-1.923A13.44 13.44 0 0 0 23 37.463V40.1h-2.6a1 1 0 1 0 0 2h7.2a1 1 0 1 0 0-2H25v-2.637a13.44 13.44 0 0 0 7.813-3.236l1.923 1.923l-1.543 1.543a1 1 0 0 0 1.414 1.414l4.5-4.5a1 1 0 1 0-1.414-1.414l-1.543 1.543l-1.923-1.923A13.44 13.44 0 0 0 37.464 25H40.1v2.6a1 1 0 1 0 2 0v-7.2a1 1 0 1 0-2 0V23h-2.636a13.44 13.44 0 0 0-3.237-7.813l1.923-1.923l1.543 1.543a1 1 0 0 0 1.414-1.414l-4.5-4.5a1 1 0 1 0-1.414 1.414l1.543 1.543l-1.923 1.923A13.44 13.44 0 0 0 25 10.536V7.9h2.6a1 1 0 1 0 0-2zm11.7 17.65a1.35 1.35 0 1 1-2.7 0a1.35 1.35 0 0 1 2.7 0m-7.65 8.55a1.35 1.35 0 1 0 0-2.7a1.35 1.35 0 0 0 0 2.7M23.1 20.4a2.7 2.7 0 1 1-5.4 0a2.7 2.7 0 0 1 5.4 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusLabResearchSyringeIcon],svg[healthicons-virus-lab-research-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.818 14.5a1.157 1.157 0 0 1 0-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 1 1 1.637 1.636l-1.637 1.637l13.91 13.91a5.79 5.79 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296l-.394-.394a10.1 10.1 0 0 0-.055-3.438l5.076-5.076l-11.77-11.77l-5.353 5.354l3.443 3.443a10 10 0 0 0-2.781.047l-2.076-2.076l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 0 1-1.636 0m28.637 20.455q-.112.112-.229.216l.824.824a.314.314 0 0 0 .445-.444l-.824-.824a6 6 0 0 1-.216.228m-1.415-6.768a3.79 3.79 0 0 1 .848 4.062l-2.14 2.14a3.79 3.79 0 0 1-4.061-.848l-.504-.504l5.353-5.354zm-17.18-13.91l-2.081 2.08l-4.09-4.09l2.08-2.08zm2.898 22.895A5 5 0 0 1 18 37.9V39a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a5 5 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 12 39.414L10.586 38A1 1 0 0 1 12 36.586l.828-.829A5 5 0 0 1 12.1 34H11a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L12 29.414A1 1 0 0 1 10.586 28l.697-.698l.01-.01l.01-.009l.697-.697A1 1 0 1 1 13.414 28l.829.828A5 5 0 0 1 16 28.1V27a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 22 26.586L23.414 28A1 1 0 0 1 22 29.414l-.828.829c.347.524.598 1.119.728 1.757H23a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a5 5 0 0 1-.728 1.757l.828.829A1 1 0 1 1 23.414 38L22 39.414A1 1 0 0 1 20.586 38z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusLabResearchSyringeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusLabResearchSyringeNegativeIcon],svg[healthicons-virus-lab-research-syringe-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusLabResearchSyringeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6.818 12.864A1.157 1.157 0 1 0 8.455 14.5l.818-.819l4.09 4.09l-3.272 3.274a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l2.076 2.076a10 10 0 0 1 2.781-.047l-3.443-3.443l5.354-5.354L31.9 26.047l-5.076 5.076a10 10 0 0 1 .055 3.438l.394.394a5.79 5.79 0 0 0 6.205 1.296l1.158 1.159a2.31 2.31 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.295-6.205l-13.91-13.91l1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zM35.226 35.17a6 6 0 0 0 .445-.444l.824.824a.314.314 0 1 1-.445.444zm-.338-2.922a3.79 3.79 0 0 0-.848-4.062l-.504-.504l-5.353 5.354l.504.504a3.79 3.79 0 0 0 4.061.847zm-20.11-15.891l2.08-2.081l-4.09-4.09l-2.08 2.08zM18 37.9a5 5 0 0 0 1.757-.728l.829.828A1 1 0 0 0 22 39.414L23.414 38A1 1 0 0 0 22 36.586l-.828-.829A5 5 0 0 0 21.9 34H23a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a5 5 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 23.414 28L22 26.586A1 1 0 0 0 20.586 28l-.829.828A5 5 0 0 0 18 28.1V27a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L13.414 28A1 1 0 0 0 12 26.586l-.698.698l-.01.009l-.008.01l-.698.697A1 1 0 0 0 12 29.414l.828.829A5 5 0 0 0 12.1 32H11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 10.586 38L12 39.414A1 1 0 0 0 13.414 38l.829-.828A5 5 0 0 0 16 37.9V39a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusLabResearchSyringeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusLabResearchSyringeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusLabResearchTestTubeIcon],svg[healthicons-virus-lab-research-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5 5 0 0 0 9.684 1.753A9.98 9.98 0 0 1 20 33a9.99 9.99 0 0 1 4-8V12.687a1.5 1.5 0 0 0-1-1.415V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm3 7.688V9h4v2.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415m15.757 25.484A5 5 0 0 1 31 37.9V39a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a5 5 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 25 39.414L23.586 38A1 1 0 0 1 25 36.586l.828-.829A5 5 0 0 1 25.1 34H24a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L25 29.414A1 1 0 0 1 23.586 28l.698-.698l.009-.01l.01-.009l.697-.697A1 1 0 1 1 26.414 28l.829.828A5 5 0 0 1 29 28.1V27a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 35 26.586L36.414 28A1 1 0 0 1 35 29.414l-.828.829c.347.524.598 1.119.728 1.757H36a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a5 5 0 0 1-.728 1.757l.828.829A1 1 0 1 1 36.414 38L35 39.414A1 1 0 0 1 33.586 38z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusLabResearchTestTubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusLabResearchTestTubeNegativeIcon],svg[healthicons-virus-lab-research-test-tube-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusLabResearchTestTubeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM13 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415v12.311A9.99 9.99 0 0 0 20 33a9.98 9.98 0 0 0 3.684 7.753A5.002 5.002 0 0 1 14 39V12.688a1.5 1.5 0 0 1 1-1.415V9h-1a1 1 0 0 1-1-1zm4 4v2.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898a1.5 1.5 0 0 1-1-1.415V9zm14 28.9a5 5 0 0 0 1.757-.728l.829.828A1 1 0 0 0 35 39.414L36.414 38A1 1 0 0 0 35 36.586l-.828-.829A5 5 0 0 0 34.9 34H36a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a5 5 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 36.414 28L35 26.586A1 1 0 0 0 33.586 28l-.829.828A5 5 0 0 0 31 28.1V27a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L26.414 28A1 1 0 0 0 25 26.586l-.698.698l-.01.009l-.008.01l-.698.697A1 1 0 0 0 25 29.414l.828.829A5 5 0 0 0 25.1 32H24a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 23.586 38L25 39.414A1 1 0 0 0 26.414 38l.829-.828A5 5 0 0 0 29 37.9V39a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusLabResearchTestTubeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusLabResearchTestTubeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusMutationIcon],svg[healthicons-virus-mutation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.857 8c-.46 0-.923.2-1.28.593A2.3 2.3 0 0 0 11 10.142v5.444l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 15.586v-5.444c0-1.07.385-2.112 1.097-2.894C10.81 6.462 11.802 6 12.857 6H22.5a1 1 0 1 1 0 2zM29.5 40h5.643c.46 0 .923-.2 1.28-.593A2.3 2.3 0 0 0 37 37.858v-5.444l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.998-2.998a.997.997 0 0 1 1.416-.002l3 3a1 1 0 0 1-1.414 1.414L39 32.414v5.444c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2M18 37.93a6.97 6.97 0 0 0 3.556-1.615l1.981 1.734l-.244.244a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0-1.414-1.414l-.339.338l-2.08-1.82A7 7 0 0 0 23.929 32H26a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-2.07a7 7 0 0 0-1.324-3.192L24 25.414l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293l-1.394 1.394A7 7 0 0 0 18 24.07V22a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v2.07a7 7 0 0 0-3.192 1.324L11.414 24l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l.293-.293l1.394 1.394A7 7 0 0 0 10.07 30H8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h2.07a7 7 0 0 0 1.324 3.192L10 36.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L11.414 38l1.394-1.394A7 7 0 0 0 16 37.93V40a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16.993-19.848a4.2 4.2 0 0 0 1.492-.696l1.673 1.544a1 1 0 0 0 1.45 1.377l1.4-1.4a1 1 0 0 0-1.415-1.414l-.02.02l-1.802-1.662a4.2 4.2 0 0 0 .31-.858A1 1 0 0 0 38.2 15h1.846A1 1 0 0 0 42 14.7v-1.4a1 1 0 0 0-1.954-.3H38.2a1 1 0 0 0-.118.007a4.2 4.2 0 0 0-.49-1.185l1.308-1.308a1 1 0 0 0 1.407-1.421l-1.4-1.4A1 1 0 0 0 37.486 9.1l-1.308 1.308A4.2 4.2 0 0 0 35 9.92V7.954A1 1 0 0 0 34.7 6h-1.4a1 1 0 0 0-.3 1.954V9.92a4.2 4.2 0 0 0-1.178.488L30.514 9.1a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l1.308 1.308c-.22.363-.387.761-.49 1.185A1 1 0 0 0 29.8 13h-1.846a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3H29.8a1 1 0 0 0 .118-.007c.103.424.27.822.49 1.185L29.1 17.486a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l1.308-1.308c.363.22.761.387 1.185.49A1 1 0 0 0 33 18.2v1.846A1 1 0 0 0 33.3 22h1.4a1 1 0 0 0 .3-1.954V18.2q0-.06-.007-.118"></svg:path>`,
})
export class HealthiconsVirusMutationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusMutationNegativeIcon],svg[healthicons-virus-mutation-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusMutationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm12.857 8c-.46 0-.923.2-1.28.593A2.3 2.3 0 0 0 11 10.142v5.444l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 15.586v-5.444c0-1.07.385-2.112 1.097-2.894C10.81 6.462 11.802 6 12.857 6H22.5a1 1 0 1 1 0 2zM29.5 40h5.643c.46 0 .923-.2 1.28-.593A2.3 2.3 0 0 0 37 37.858v-5.444l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.998-2.998a.997.997 0 0 1 1.416-.002l3 3a1 1 0 0 1-1.414 1.414L39 32.414v5.444c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2M18 37.93a6.97 6.97 0 0 0 3.556-1.615l1.981 1.734l-.244.244a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0-1.414-1.414l-.339.338l-2.08-1.82A7 7 0 0 0 23.929 32H26a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-2.07a7 7 0 0 0-1.324-3.192L24 25.414l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293l-1.394 1.394A7 7 0 0 0 18 24.07V22a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v2.07a7 7 0 0 0-3.192 1.324L11.414 24l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l.293-.293l1.394 1.394A7 7 0 0 0 10.07 30H8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h2.07a7 7 0 0 0 1.324 3.192L10 36.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L11.414 38l1.394-1.394A7 7 0 0 0 16 37.93V40a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16.993-19.848a4.2 4.2 0 0 0 1.492-.696l1.673 1.544a1 1 0 0 0 1.45 1.377l1.4-1.4a1 1 0 0 0-1.415-1.414l-.02.02l-1.802-1.662a4.2 4.2 0 0 0 .31-.858A1 1 0 0 0 38.2 15h1.846A1 1 0 0 0 42 14.7v-1.4a1 1 0 0 0-1.954-.3H38.2a1 1 0 0 0-.118.007a4.2 4.2 0 0 0-.49-1.185l1.308-1.308a1 1 0 0 0 1.407-1.421l-1.4-1.4A1 1 0 0 0 37.486 9.1l-1.308 1.308A4.2 4.2 0 0 0 35 9.92V7.954A1 1 0 0 0 34.7 6h-1.4a1 1 0 0 0-.3 1.954V9.92a4.2 4.2 0 0 0-1.178.488L30.514 9.1a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l1.308 1.308c-.22.363-.387.761-.49 1.185A1 1 0 0 0 29.8 13h-1.846a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3H29.8a1 1 0 0 0 .118-.007c.103.424.27.822.49 1.185L29.1 17.486a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l1.308-1.308c.363.22.761.387 1.185.49A1 1 0 0 0 33 18.2v1.846A1 1 0 0 0 33.3 22h1.4a1 1 0 0 0 .3-1.954V18.2q0-.06-.007-.118" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusMutationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusMutationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusNegativeIcon],svg[healthicons-virus-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23 10.035a13.94 13.94 0 0 0-8.167 3.384l1.389 1.389a1 1 0 0 1-1.414 1.414l-1.39-1.39A13.94 13.94 0 0 0 10.035 23H12a1 1 0 1 1 0 2h-1.965a13.94 13.94 0 0 0 3.384 8.167l1.389-1.389a1 1 0 0 1 1.414 1.415l-1.39 1.389A13.94 13.94 0 0 0 23 37.965V36a1 1 0 1 1 2 0v1.965a13.94 13.94 0 0 0 8.167-3.384l-1.389-1.389a1 1 0 1 1 1.414-1.414l1.39 1.39A13.94 13.94 0 0 0 37.965 25H36a1 1 0 1 1 0-2h1.965a13.94 13.94 0 0 0-3.384-8.167l-1.389 1.389a1 1 0 0 1-1.414-1.415l1.39-1.389A13.94 13.94 0 0 0 25 10.035V12a1 1 0 1 1-2 0zM22 27a2 2 0 1 0-4 0a2 2 0 0 0 4 0m1-10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8 9a2 2 0 1 0-4 0a2 2 0 0 0 4 0M21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2a1 1 0 1 1-2 0V6h-1a1 1 0 0 1-1-1m4 35a1 1 0 1 0-2 0v2h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1zm-13.728-.443l-2.828-2.829a1 1 0 1 1 1.414-1.414l.707.707l1.414-1.414a1 1 0 1 1 1.415 1.414l-1.415 1.414l.707.707a1 1 0 0 1-1.414 1.415M34.607 11.98a1 1 0 1 0 1.414 1.414l1.414-1.414l.707.707a1 1 0 0 0 1.414-1.415l-2.828-2.828a1 1 0 1 0-1.414 1.414l.707.707zM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1m35-4a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1zM8.444 12.687a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707l1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415l-.707.708a1 1 0 0 1-1.414 0m27.577 21.92a1 1 0 0 0-1.414 1.414l1.414 1.414l-.707.707a1 1 0 0 0 1.414 1.415l2.828-2.829a1 1 0 1 0-1.414-1.414l-.707.707z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusPatientIcon],svg[healthicons-virus-patient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 11c0 3.867-3.133 7-7 7s-7-3.133-7-7s3.133-7 7-7s7 3.133 7 7M4 25.4c0-4.256 8.661-6.4 13-6.4c2.696 0 7.06.828 9.98 2.475A13.01 13.01 0 0 0 20.152 31H4zM30 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2.07a7 7 0 0 1 3.192 1.324L38.586 26l-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-1.414 1.414L40 27.414l-1.394 1.394A7 7 0 0 1 39.93 32H42v-1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-1h-2.07a7 7 0 0 1-.922 2.594L41 38.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293l-1.848-1.847A7 7 0 0 1 34 39.929V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2.07a7 7 0 0 1-3.192-1.324L27.414 40l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l.293.293l1.394-1.394A7 7 0 0 1 26.07 34H24v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h2.07a7 7 0 0 1 1.324-3.192L26 27.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 1.414l-.293.293l1.394 1.394A7 7 0 0 1 32 26.07V24h-1a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusPatientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusPatientNegativeIcon],svg[healthicons-virus-patient-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusPatientNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 18c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m0 1c-4.339 0-13 2.144-13 6.4V31h16.153a13.01 13.01 0 0 1 6.826-9.525C24.06 19.828 19.696 19 17 19m14 3a1 1 0 1 0 0 2h1v2.07a7 7 0 0 0-3.192 1.324L27.414 26l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414l.293-.293l1.394 1.394A7 7 0 0 0 26.07 32H24v-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-1h2.07a7 7 0 0 0 1.324 3.192L26 38.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L27.414 40l1.394-1.394A7 7 0 0 0 32 39.93V42h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-2.07a7 7 0 0 0 3.738-1.777L39.586 40l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0-1.414-1.414l-.293.293l-1.992-1.992c.467-.78.787-1.657.921-2.594H42v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-2.07a7 7 0 0 0-1.324-3.192L40 27.414l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293l-1.394 1.394A7 7 0 0 0 34 26.07V24h1a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusPatientNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusPatientNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusResearchIcon],svg[healthicons-virus-research-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v3.041a11.95 11.95 0 0 1 6.75 2.797l.028-.03l2.122-2.122l-.708-.707a1 1 0 0 1 1.415-1.414l2.828 2.828a1 1 0 1 1-1.414 1.415l-.707-.707l-2.122 2.12l-.03.03a11.95 11.95 0 0 1 2.826 7.203A10 10 0 0 0 32 22c-5.523 0-10 4.477-10 10c0 1.04.159 2.044.454 2.988a11.95 11.95 0 0 1-7.203-2.825l-.006.005l-.023.025l-2.121 2.12l.707.708a1 1 0 0 1-1.415 1.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707.707l2.122-2.122l.03-.028A11.95 11.95 0 0 1 11.04 24H8v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h3.041a11.95 11.95 0 0 1 2.797-6.75l-.006-.005l-.024-.023l-2.122-2.121l-.707.707a1 1 0 0 1-1.414-1.415l2.828-2.828a1 1 0 1 1 1.415 1.414l-.707.707l2.12 2.122l.03.03A11.95 11.95 0 0 1 22 11.04V8h-1a1 1 0 0 1-1-1m2 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M24 32a8 8 0 1 1 14.32 4.906l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387A8 8 0 0 1 24 32m8-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path></svg:g>`,
})
export class HealthiconsVirusResearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusResearchAltIcon],svg[healthicons-virus-research-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35 8a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L30.414 9A1 1 0 0 0 29 7.586l-.698.698l-.01.009l-.008.01l-.698.697A1 1 0 0 0 29 10.414l.828.829A5 5 0 0 0 29.1 13H28a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 27.586 19L29 20.414A1 1 0 0 0 30.414 19l.829-.828A5 5 0 0 0 33 18.9V20a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1a5 5 0 0 0 1.757-.728l.829.828A1 1 0 0 0 39 20.414L40.414 19A1 1 0 0 0 39 17.586l-.828-.829A5 5 0 0 0 38.9 15H40a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a5 5 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 40.414 9L39 7.586A1 1 0 1 0 37.586 9l-.829.828A5 5 0 0 0 35 9.1zm-20.049 3.157l-1.732 1l1.085 1.88a3 3 0 0 0-.317 3.45l.222.385A11.49 11.49 0 0 0 9 27.5c0 1.248.2 2.452.568 3.58A9.48 9.48 0 0 0 6 38.5c0 .97.146 1.91.418 2.794l.217.706H39a1 1 0 0 0 0-2H24.882a9.57 9.57 0 0 0-.68-5.317l13.641-7.876l-1-1.732l-13.634 7.872A9.49 9.49 0 0 0 15.5 29a9.46 9.46 0 0 0-4.177.965A9.5 9.5 0 0 1 11 27.5a9.49 9.49 0 0 1 4.211-7.893l2.776 4.808a3 3 0 0 0 4.098 1.098l.866-.5l1 1.732l1.732-1l-1-1.732l.866-.5a3 3 0 0 0 1.098-4.098l-4-6.928a3 3 0 0 0-3.146-1.45l-1.086-1.88l-1.732 1l-1.5-2.598l-1.732 1zm8.258 21.79l-4.552 2.628l1 1.732l4.545-2.624a9.5 9.5 0 0 0-.993-1.736" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusResearchAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusResearchAltNegativeIcon],svg[healthicons-virus-research-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusResearchAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36 7a1 1 0 0 1-1 1v1.1c.638.13 1.233.38 1.757.728L37.586 9A1 1 0 0 1 39 7.586L40.414 9A1 1 0 1 1 39 10.414l-.828.829c.347.524.598 1.119.728 1.757H40a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a5 5 0 0 1-.728 1.757l.828.829A1 1 0 1 1 40.414 19L39 20.414A1 1 0 0 1 37.586 19l-.829-.828A5 5 0 0 1 35 18.9V20a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a5 5 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 29 20.414L27.586 19A1 1 0 0 1 29 17.586l.828-.829A5 5 0 0 1 29.1 15H28a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L29 10.414A1 1 0 0 1 27.586 9l.698-.698l.009-.01l.01-.008l.697-.698A1 1 0 0 1 30.414 9l.829.828A5 5 0 0 1 33 9.1V8a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1m-21.049 4.157l-1.5-2.598l1.732-1l1.5 2.598l1.732-1l1.085 1.88a3 3 0 0 1 3.147 1.45l4 6.928a3 3 0 0 1-1.098 4.098l-.866.5l1 1.732l-1.732 1l-1-1.732l-.866.5a3 3 0 0 1-4.098-1.098l-2.776-4.808A9.49 9.49 0 0 0 11 27.5c0 .854.112 1.68.323 2.465A9.46 9.46 0 0 1 15.5 29a9.49 9.49 0 0 1 7.709 3.947l-4.552 2.628l1 1.732l4.545-2.624a9.57 9.57 0 0 1 .68 5.317H39a1 1 0 1 1 0 2H6.634l-.216-.706A9.5 9.5 0 0 1 6 38.5a9.48 9.48 0 0 1 3.568-7.42A11.5 11.5 0 0 1 9 27.5a11.49 11.49 0 0 1 5.21-9.628l-.223-.385a3 3 0 0 1 .317-3.45l-1.085-1.88zm9.251 23.526l13.641-7.876l-1-1.732l-13.634 7.872a9.5 9.5 0 0 1 .993 1.736" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusResearchAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusResearchAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusResearchNegativeIcon],svg[healthicons-virus-research-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusResearchNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21 6a1 1 0 1 0 0 2h1v3.041a11.95 11.95 0 0 0-6.75 2.797l-.028-.03l-2.121-2.122l.707-.707a1 1 0 0 0-1.415-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.415l.707-.707l2.122 2.12l.03.03A11.95 11.95 0 0 0 11.04 22H8v-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-1h3.041a11.95 11.95 0 0 0 2.797 6.75l-.03.028l-2.122 2.122l-.707-.707a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.415-1.414l-.707-.707l2.12-2.121l.03-.03a11.95 11.95 0 0 0 7.203 2.825A10 10 0 0 1 22 32c0-5.523 4.477-10 10-10c1.04 0 2.044.159 2.988.454a11.95 11.95 0 0 0-2.825-7.203l.03-.03l2.12-2.12l.708.707a1 1 0 0 0 1.414-1.415l-2.828-2.828a1 1 0 1 0-1.415 1.414l.708.707l-2.122 2.122l-.028.03A11.95 11.95 0 0 0 24 11.04V8h1a1 1 0 1 0 0-2zm1 14a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387A8 8 0 0 1 24 32" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusResearchNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusResearchNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusSanitizerSprayIcon],svg[healthicons-virus-sanitizer-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m24.86 10.832l-1.6 1.6l-4.242-4.243l1.6-1.6a2 2 0 0 1 2.828 0l1.414 1.415a2 2 0 0 1 0 2.828M14.374 9.418h3.044l4.613 4.613v3.044a2 2 0 0 1-.586 1.414l-5.778 5.778a4 4 0 0 1-5.657 0L7.182 21.44a4 4 0 0 1 0-5.657l5.778-5.778a2 2 0 0 1 1.414-.586m17.011 2.331l.118-.12l.458.468z"></svg:path><svg:path d="m31.963 12.1l-.46-.47a4.39 4.39 0 0 1 6.05-.095a4.36 4.36 0 0 1 .804 5.413a5.46 5.46 0 0 1-.995 6.473a5.52 5.52 0 0 1-6.509.905a4.4 4.4 0 0 1-2.792.53a4.4 4.4 0 0 1-3.002-1.865a4.36 4.36 0 0 1 .661-5.674l-2.091-3.504l1.717-1.025l2.56 4.288a1 1 0 0 1-.378 1.389a2.38 2.38 0 0 0-1.163 1.52a2.35 2.35 0 0 0 .345 1.878a2.37 2.37 0 0 0 1.633 1.013a2.4 2.4 0 0 0 1.855-.518a1 1 0 0 1 1.224-.035a3.52 3.52 0 0 0 4.538-.329a3.466 3.466 0 0 0 .388-4.498a1 1 0 0 1 .05-1.231a2.355 2.355 0 0 0-.201-3.259a2.39 2.39 0 0 0-3.294.052v.001q-.232.227-.392.508a1 1 0 0 1-1.388.362l-4.28-2.591l1.036-1.711l4.25 2.642l.03-.05z"></svg:path><svg:path d="M21.062 28a7.97 7.97 0 0 1 2.03-4.394q.145.263.315.513a6.38 6.38 0 0 0 4.373 2.717a6.4 6.4 0 0 0 3.073-.316a7.52 7.52 0 0 0 5.698-.168q.279.791.387 1.648H40v-.2a1 1 0 0 1 2 0v2.4a1 1 0 0 1-2 0V30h-3.062a7.96 7.96 0 0 1-1.618 3.906l1.88 1.88l.493-.493a1 1 0 0 1 1.414 1.414l-2.4 2.4a1 1 0 0 1-1.414-1.414l.493-.493l-1.88-1.88A7.96 7.96 0 0 1 30 36.938V40h.2a1 1 0 0 1 0 2h-2.4a1 1 0 0 1 0-2h.2v-3.062a7.97 7.97 0 0 1-4.127-1.797L21.714 37.3l.393.393a1 1 0 0 1-1.414 1.414l-2.4-2.4a1 1 0 0 1 1.414-1.414l.593.593l2.209-2.209A7.96 7.96 0 0 1 21.062 30H18v.2a1 1 0 0 1-2 0v-2.4a1 1 0 0 1 2 0v.2zM11 32a1 1 0 0 1 1 1v1.17q.15.054.293.122l.828-.828a1 1 0 0 1 1.414 1.415l-.827.828q.068.143.121.293H15a1 1 0 1 1 0 2h-1.17q-.054.15-.122.293l.828.828a1 1 0 0 1-1.415 1.414l-.828-.827a3 3 0 0 1-.293.121V41a1 1 0 1 1-2 0v-1.17a3 3 0 0 1-.293-.121l-.828.828a1 1 0 0 1-1.414-1.415l.827-.828A3 3 0 0 1 8.171 38H7a1 1 0 1 1 0-2h1.17q.054-.15.122-.294l-.827-.827a1 1 0 1 1 1.414-1.415l.828.828q.143-.068.293-.121V33a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsVirusSanitizerSprayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusSanitizerSprayNegativeIcon],svg[healthicons-virus-sanitizer-spray-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusSanitizerSprayNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM12 41v-1.586l1.121 1.121a1 1 0 0 0 1.415-1.414L13.414 38H15a1 1 0 1 0 0-2h-1.586l1.121-1.121a1 1 0 1 0-1.414-1.415L12 34.586V33a1 1 0 1 0-2 0v1.586l-1.121-1.122a1 1 0 0 0-1.414 1.415L8.586 36H7a1 1 0 1 0 0 2h1.586l-1.122 1.121a1 1 0 1 0 1.415 1.414L10 39.416V41a1 1 0 1 0 2 0m30-13.2a1 1 0 0 0-2 0v.2h-3.062a8 8 0 0 0-.387-1.648a7.52 7.52 0 0 1-5.698.168a6.4 6.4 0 0 1-3.073.316a6.4 6.4 0 0 1-4.688-3.23A7.97 7.97 0 0 0 21.062 28H18v-.2a1 1 0 0 0-2 0v2.4a1 1 0 0 0 2 0V30h3.062a7.96 7.96 0 0 0 1.447 3.677L20.3 35.886l-.593-.593a1 1 0 0 0-1.414 1.414l2.4 2.4a1 1 0 0 0 1.414-1.414l-.393-.393l2.159-2.159A7.96 7.96 0 0 0 28 36.938V40h-.2a1 1 0 0 0 0 2h2.4a1 1 0 0 0 0-2H30v-3.062a7.96 7.96 0 0 0 3.906-1.618l1.88 1.88l-.493.493a1 1 0 0 0 1.414 1.414l2.4-2.4a1 1 0 0 0-1.414-1.414l-.493.493l-1.88-1.88A7.96 7.96 0 0 0 36.938 30H40v.2a1 1 0 0 0 2 0zM27.879 9.627l3.506 2.123l.117-.12a4.39 4.39 0 0 1 6.05-.095a4.36 4.36 0 0 1 .805 5.413a5.46 5.46 0 0 1-.995 6.473a5.52 5.52 0 0 1-6.509.905a4.4 4.4 0 0 1-2.792.53a4.4 4.4 0 0 1-3.002-1.865a4.36 4.36 0 0 1 .661-5.674l-2.091-3.504l1.717-1.025l2.56 4.288a1 1 0 0 1-.378 1.389a2.38 2.38 0 0 0-1.163 1.52a2.35 2.35 0 0 0 .345 1.878a2.37 2.37 0 0 0 1.633 1.013a2.4 2.4 0 0 0 1.855-.518a1 1 0 0 1 1.224-.035a3.52 3.52 0 0 0 4.538-.329a3.466 3.466 0 0 0 .388-4.498a1 1 0 0 1 .05-1.231a2.355 2.355 0 0 0-.201-3.259a2.39 2.39 0 0 0-3.294.052v.001q-.232.227-.392.508a1 1 0 0 1-1.388.362l-4.28-2.591zm-3.02 1.205l-1.599 1.6l-4.242-4.243l1.6-1.6a2 2 0 0 1 2.828 0l1.414 1.415a2 2 0 0 1 0 2.828M14.375 9.418h3.044l4.613 4.613v3.044a2 2 0 0 1-.586 1.414l-5.778 5.778a4 4 0 0 1-5.657 0L7.182 21.44a4 4 0 0 1 0-5.657l5.778-5.778a2 2 0 0 1 1.414-.586" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusSanitizerSprayNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusSanitizerSprayNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusShieldIcon],svg[healthicons-virus-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 11.078V23.26c0 5.956 2.673 14.08 14.233 18.42a5.04 5.04 0 0 0 3.534 0C37.322 37.347 40 29.165 40 23.26V11.078a2.33 2.33 0 0 0-.382-1.295a2.4 2.4 0 0 0-1.043-.884A36.4 36.4 0 0 0 24 6.001A36.4 36.4 0 0 0 9.424 8.9c-.427.19-.79.498-1.042.884A2.33 2.33 0 0 0 8 11.078m10.167 13.065H17.09a1.143 1.143 0 0 1-2.233-.343v-1.6a1.143 1.143 0 0 1 2.233-.343h1.077a5.9 5.9 0 0 1 .9-2.173l-.667-.668a1.143 1.143 0 0 1-1.608-1.624l1.6-1.6a1.143 1.143 0 0 1 1.624 1.608l.668.668a5.9 5.9 0 0 1 2.173-.901V16.09a1.143 1.143 0 0 1 .343-2.233h1.6a1.143 1.143 0 0 1 .343 2.233v1.077a5.9 5.9 0 0 1 2.173.9l.668-.667a1.143 1.143 0 0 1 1.624-1.608l1.6 1.6a1.143 1.143 0 0 1-1.608 1.624l-.668.668a5.9 5.9 0 0 1 .901 2.173h1.077a1.143 1.143 0 0 1 2.233.343v1.6a1.143 1.143 0 0 1-2.233.343h-1.077a5.9 5.9 0 0 1-.6 1.674l1.167 1.167a1.143 1.143 0 0 1 1.608 1.624l-1.6 1.6a1.143 1.143 0 0 1-1.624-1.608l-1.01-1.01a5.9 5.9 0 0 1-2.631 1.243v1.077a1.143 1.143 0 0 1-.343 2.233h-1.6a1.143 1.143 0 0 1-.343-2.233v-1.077a5.9 5.9 0 0 1-2.173-.9l-.668.667a1.143 1.143 0 0 1-1.624 1.608l-1.6-1.6a1.143 1.143 0 0 1 1.608-1.624l.668-.668a5.9 5.9 0 0 1-.901-2.173" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVirusShieldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVirusShieldNegativeIcon],svg[healthicons-virus-shield-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVirusShieldNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 23.26V11.078c-.003-.458.13-.908.382-1.295A2.4 2.4 0 0 1 9.424 8.9A36.4 36.4 0 0 1 24 6.001c5.014-.045 9.98.943 14.575 2.898c.428.19.79.498 1.043.884c.253.387.385.837.382 1.295V23.26c0 5.905-2.678 14.087-14.233 18.42a5.04 5.04 0 0 1-3.534 0C10.673 37.34 8 29.217 8 23.26m9.09.883h1.077a5.9 5.9 0 0 0 .9 2.173l-.667.668a1.143 1.143 0 0 0-1.608 1.624l1.6 1.6a1.143 1.143 0 0 0 1.624-1.608l.668-.668a5.9 5.9 0 0 0 2.173.901v1.077a1.143 1.143 0 0 0 .343 2.233h1.6a1.143 1.143 0 0 0 .343-2.233v-1.077a5.9 5.9 0 0 0 2.631-1.242l1.01 1.01a1.143 1.143 0 0 0 1.624 1.607l1.6-1.6a1.143 1.143 0 0 0-1.608-1.624l-1.166-1.167c.279-.516.483-1.08.6-1.674h1.076a1.143 1.143 0 0 0 2.233-.343v-1.6a1.143 1.143 0 0 0-2.233-.343h-1.077a5.9 5.9 0 0 0-.9-2.173l.667-.668a1.143 1.143 0 0 0 1.608-1.624l-1.6-1.6a1.143 1.143 0 0 0-1.624 1.608l-.668.668a5.9 5.9 0 0 0-2.173-.901V16.09a1.143 1.143 0 0 0-.343-2.233h-1.6a1.143 1.143 0 0 0-.343 2.233v1.077a5.9 5.9 0 0 0-2.173.9l-.668-.667a1.143 1.143 0 0 0-1.624-1.608l-1.6 1.6a1.143 1.143 0 0 0 1.608 1.624l.668.668a5.9 5.9 0 0 0-.901 2.173H17.09a1.143 1.143 0 0 0-2.233.343v1.6a1.143 1.143 0 0 0 2.233.343" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVirusShieldNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVirusShieldNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVomitingIcon],svg[healthicons-vomiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25.5 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m4.617 3.053c0 .582-.474 1.054-1.059 1.054A1.056 1.056 0 0 1 28 18.054c0-.582.474-1.054 1.058-1.054s1.06.472 1.06 1.053M42 39.5c0 1.38-3.358 2.5-7.5 2.5S27 40.88 27 39.5s3.358-2.5 7.5-2.5q.282 0 .559.007A1.584 1.584 0 0 1 36.589 35c.876 0 1.587.708 1.587 1.58c0 .255-.061.496-.169.71C40.382 37.71 42 38.542 42 39.5M31.588 25.16c.877 0 1.588-.707 1.588-1.58c0-.872-.711-1.58-1.588-1.58S30 22.707 30 23.58s.71 1.58 1.588 1.58m5.53 3.893c0 .582-.475 1.054-1.06 1.054A1.056 1.056 0 0 1 35 29.054c0-.582.474-1.054 1.059-1.054c.584 0 1.058.472 1.058 1.053m-6.06 4.054c.585 0 1.06-.472 1.06-1.053c0-.582-.475-1.054-1.06-1.054c-.584 0-1.058.472-1.058 1.053c0 .582.474 1.054 1.058 1.054m-18.71-7.726a40 40 0 0 0 2.605 2.67l.206.19l.051.047l.012.01l.002.003a2 2 0 0 1 .658 1.365l.614 10.214a2 2 0 1 1-3.992.24l-.567-9.417q-.233-.222-.53-.513a42 42 0 0 1-2.384-2.536c-.83-.967-1.699-2.097-2.28-3.197c-.29-.549-.557-1.18-.677-1.844c-.12-.666-.118-1.534.357-2.357c2.698-4.672 5.39-6.899 7.828-7.807a7.9 7.9 0 0 1 3.138-.508c.669.03 1.637.215 1.464.193c.99.126 1.486.838 1.668 1.192c.184.358.252.712.284.926c.067.456.061.974.038 1.437c-.048.964-.205 2.178-.38 3.323a98 98 0 0 1-.626 3.597l3.699 4.042a2 2 0 0 1-2.952 2.7l-4.38-4.788a2 2 0 0 1-.483-1.752l.005-.022l.014-.072a84 84 0 0 0 .248-1.277c.057-.306.12-.648.185-1.014c-1.483 1.293-2.444 2.654-3.47 4.362z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVomitingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVomitingNegativeIcon],svg[healthicons-vomiting-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVomitingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.942 8.607c.585 0 1.06-.472 1.06-1.054S29.642 17 29.057 17c-.582 0-1.057.47-1.057 1.053s.474 1.054 1.058 1.054M34.5 42c4.142 0 7.5-1.12 7.5-2.5c0-.959-1.618-1.791-3.993-2.21c.108-.214.169-.455.169-.71c0-.873-.711-1.58-1.588-1.58a1.584 1.584 0 0 0-1.53 2.007Q34.783 37 34.5 37c-4.142 0-7.5 1.12-7.5 2.5s3.358 2.5 7.5 2.5m-1.324-18.42c0 .873-.711 1.58-1.588 1.58A1.584 1.584 0 0 1 30 23.58c0-.873.71-1.58 1.588-1.58c.877 0 1.588.707 1.588 1.58m2.883 6.527c.584 0 1.058-.472 1.058-1.054S36.643 28 36.06 28S35 28.47 35 29.053s.474 1.054 1.059 1.054m-3.942 1.946c0 .582-.474 1.054-1.058 1.054A1.056 1.056 0 0 1 30 32.053c0-.581.474-1.053 1.058-1.053s1.06.471 1.06 1.053M14.213 27.34a40 40 0 0 1-1.865-1.958l.356-.593c1.024-1.708 1.986-3.069 3.47-4.362a109 109 0 0 1-.434 2.29l-.014.073l-.004.017v.004l-.001.001a2 2 0 0 0 .483 1.752l4.38 4.788a2 2 0 1 0 2.952-2.7l-3.699-4.043l.082-.43c.16-.857.367-2.006.544-3.166c.175-1.145.332-2.36.38-3.323c.023-.463.029-.982-.038-1.437a3 3 0 0 0-.284-.927c-.182-.353-.677-1.065-1.668-1.19c.173.021-.795-.164-1.464-.194a7.9 7.9 0 0 0-3.138.507c-2.437.91-5.13 3.136-7.828 7.808c-.475.823-.477 1.69-.357 2.357c.12.663.387 1.295.677 1.844c.581 1.1 1.45 2.23 2.28 3.196a42 42 0 0 0 2.914 3.05l.567 9.417a2 2 0 1 0 3.992-.24l-.614-10.214a2 2 0 0 0-.657-1.365l-.003-.002l-.011-.011l-.052-.047l-.206-.19a42 42 0 0 1-.74-.712" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVomitingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVomitingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVomittingIcon],svg[healthicons-vomitting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.976 32.101l.005-.008zm10.048 0l-.005-.008z"></svg:path><svg:path fill-rule="evenodd" d="M36.093 37.333A17.95 17.95 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 5.286 2.279 10.04 5.907 13.333a3 3 0 0 0-.145.124c-.395.357-.762.875-.762 1.543c0 .986.775 1.64 1.434 2.029c.726.429 1.71.78 2.838 1.063C17.544 42.659 20.63 43 24 43s6.456-.34 8.728-.908c1.128-.283 2.112-.634 2.838-1.063C36.225 40.639 37 39.986 37 39c0-.668-.367-1.186-.763-1.543a3 3 0 0 0-.144-.124M40 24a15.97 15.97 0 0 1-5.818 12.343c-.89-.319-1.971-.586-3.182-.796v-.382c.637-.79 1-1.698 1-2.665c0-3.038-3.582-5.5-8-5.5s-8 2.462-8 5.5c0 .967.363 1.875 1 2.665v.383c-1.21.21-2.292.476-3.182.795A15.97 15.97 0 0 1 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16m-15.991 7.125h-.018q-.502 0-.991.024V37a1 1 0 1 1-2 0v-5.634a9 9 0 0 0-.857.191c-.511.142-.854.299-1.046.436a1 1 0 0 0-.097.08v5.194l-.857.124c-1.752.253-3.157.61-4.098 1.008c-.473.201-.775.39-.941.541l-.062.06c.057.063.174.167.41.307c.488.289 1.262.583 2.305.844C17.83 40.67 20.743 41 24 41s6.171-.331 8.243-.849c1.043-.26 1.817-.555 2.305-.844c.236-.14.353-.244.41-.307l-.062-.06c-.166-.15-.468-.34-.941-.54c-.94-.4-2.346-.756-4.098-1.009L29 37.267v-5.194a1 1 0 0 0-.097-.08c-.192-.137-.535-.294-1.046-.436a9 9 0 0 0-.857-.191V37a1 1 0 1 1-2 0v-5.85a20 20 0 0 0-.991-.025m-5.033.976l.005-.008zm10.048 0l-.005-.008z" clip-rule="evenodd"></svg:path><svg:path d="M15.241 20.349a1 1 0 0 1 1.314-.181l3 2a1 1 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.267-1.534c.724-.734.825-1.08.824-1.26c-.002-.202-.129-.574-.85-1.363a1 1 0 0 1-.02-1.326m16.203-.181a1 1 0 0 1 1.293 1.507c-.721.789-.848 1.161-.85 1.363c-.001.18.1.526.824 1.26a1 1 0 0 1-1.267 1.534l-3-2a1 1 0 0 1 0-1.664z"></svg:path></svg:g>`,
})
export class HealthiconsVomittingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVomittingNegativeIcon],svg[healthicons-vomitting-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsVomittingNegative0)"><svg:path fill-rule="evenodd" d="M34.182 36.343A15.97 15.97 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24a15.97 15.97 0 0 0 5.818 12.343c.89-.319 1.971-.586 3.182-.796v-.382c-.637-.79-1-1.698-1-2.665c0-3.038 3.582-5.5 8-5.5s8 2.462 8 5.5c0 .967-.363 1.875-1 2.665v.383c1.21.21 2.292.476 3.182.795m-18.94-15.994a1 1 0 0 1 1.313-.181l3 2a1 1 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.267-1.534c.724-.734.825-1.08.824-1.26c-.002-.202-.129-.574-.85-1.363a1 1 0 0 1-.02-1.326m16.203-.181a1 1 0 0 1 1.293 1.507c-.721.789-.848 1.161-.85 1.363c-.001.18.1.526.824 1.26a1 1 0 0 1-1.267 1.534l-3-2a1 1 0 0 1 0-1.664z" clip-rule="evenodd"></svg:path><svg:path d="M23.992 31.125h.017q.502 0 .991.024V37a1 1 0 1 0 2 0v-5.634q.464.083.857.191c.511.142.854.299 1.046.436a1 1 0 0 1 .097.08v5.194l.857.124c1.752.253 3.157.61 4.098 1.008c.474.201.775.39.941.541q.038.035.062.06a1.8 1.8 0 0 1-.41.307c-.488.289-1.262.583-2.305.844C30.17 40.67 27.257 41 24 41s-6.171-.331-8.243-.849c-1.043-.26-1.817-.555-2.305-.844a1.8 1.8 0 0 1-.41-.307l.062-.06c.166-.15.468-.34.941-.54c.94-.4 2.346-.756 4.098-1.009l.857-.124v-5.194a1 1 0 0 1 .097-.08c.192-.137.535-.294 1.046-.436q.393-.108.857-.191V37a1 1 0 1 0 2 0v-5.85q.489-.025.991-.025m-5.015.976l.005-.008zm10.048 0l-.005-.008z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM36.093 37.333A17.95 17.95 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 5.286 2.279 10.04 5.907 13.333a3 3 0 0 0-.145.124c-.395.357-.762.875-.762 1.543c0 .986.775 1.64 1.434 2.029c.726.429 1.71.78 2.838 1.063C17.544 42.659 20.63 43 24 43s6.456-.34 8.728-.908c1.128-.283 2.112-.634 2.838-1.063C36.225 40.639 37 39.986 37 39c0-.668-.367-1.186-.763-1.543a3 3 0 0 0-.144-.124" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVomittingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVomittingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWIcon],svg[healthicons-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.671 10.027a2 2 0 0 0-1.644 2.302l4 24a2 2 0 0 0 3.71.663L24 26.031l6.263 10.961a2 2 0 0 0 3.71-.663l4-24a2 2 0 1 0-3.946-.658l-3.077 18.46l-5.214-9.123a2 2 0 0 0-3.473 0l-5.214 9.124l-3.076-18.461a2 2 0 0 0-2.302-1.644" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWNegativeIcon],svg[healthicons-w-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10.027 12.329a2 2 0 0 1 3.946-.658l3.076 18.46l5.214-9.123a2 2 0 0 1 3.473 0l5.214 9.124l3.077-18.461a2 2 0 0 1 3.946.658l-4 24a2 2 0 0 1-3.71.663L24 26.031l-6.264 10.961a2 2 0 0 1-3.709-.663z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaistCircumferenceIcon],svg[healthicons-waist-circumference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.834 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m7.124 15.133a2 2 0 0 1-.148.636c2.348-.171 4.316-.427 5.683-.739q.19-.043.365-.088c1.094-.28 1.714-.601 1.714-.942s-.62-.661-1.714-.942q-.175-.045-.365-.088q-.66-.15-1.493-.282V26.7l-3-3l3-3v1.965c1.187.176 2.235.392 3.044.654c.438.143.927.336 1.346.617c.329.221 1.182.878 1.182 2.064s-.853 1.843-1.182 2.064c-.42.281-.908.475-1.346.617c-.904.293-2.107.528-3.468.715c-2.752.377-6.49.604-10.576.604c-4.085 0-7.823-.227-10.575-.604c-1.362-.187-2.565-.422-3.469-.715c-.438-.142-.926-.336-1.345-.617c-.33-.22-1.182-.878-1.182-2.064s.852-1.843 1.182-2.064c.419-.281.907-.474 1.345-.617c.905-.293 2.107-.528 3.469-.715q.448-.06.93-.117l.283 1.98c-1.234.143-2.295.313-3.13.503q-.191.043-.365.088c-1.094.28-1.714.602-1.714.942s.62.661 1.713.942q.176.045.366.088c1.3.296 3.142.543 5.34.713a2 2 0 0 1-.139-.61l-.704-10.573c-.087-1.3 1.072-2.338 2.359-2.14c1.78.273 4.085.58 5.47.58s3.69-.307 5.47-.58c1.287-.198 2.446.84 2.36 2.14zm-13.124 4.593V42a2 2 0 0 0 3.994.153l.782-10.166a63 63 0 0 1-4.776-.261m7.224.266l.782 10.161A2 2 0 0 0 29.834 42V31.756a65 65 0 0 1-4.776.236"></svg:path>`,
})
export class HealthiconsWaistCircumferenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkSupportedIcon],svg[healthicons-walk-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28.425 9.6a3.6 3.6 0 1 1-7.2 0a3.6 3.6 0 0 1 7.2 0M38 28H23.752l4.486 4.426a2 2 0 0 1 .43.628l2.667 6.15a2 2 0 0 1-3.67 1.592L25.152 35l-7.095-7H10a2 2 0 0 0-2 2v12H6V30a4 4 0 0 1 4-4h5.964c-.749-2.522-.474-5.128.117-7.144c.317-1.081.745-2.066 1.224-2.852a6.6 6.6 0 0 1 .818-1.092c.283-.299.71-.675 1.28-.887c1.242-.461 2.544-.426 3.705.174c1.113.576 1.897 1.565 2.405 2.656q.314.674.584 1.263v.001c.44.95.807 1.748 1.16 2.45c.496.986.888 1.624 1.268 2.066c.347.405.686.647 1.118.816c.47.184 1.146.317 2.217.349a2 2 0 0 1 1.93 2.2H38a4 4 0 0 1 4 4v12h-2V30a2 2 0 0 0-2-2m-13.637-4.373L23.848 26h2.392a7.4 7.4 0 0 1-.75-.76a11 11 0 0 1-1.127-1.613m-7.877 6.147l3.3 3.165l-1.247 4.21q-.076.258-.218.486l-2.122 3.42a2 2 0 0 1-3.399-2.11l1.98-3.19l1.342-4.528z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWalkSupportedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkSupportedNegativeIcon],svg[healthicons-walk-supported-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWalkSupportedNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.825 13.2a3.6 3.6 0 1 0 0-7.2a3.6 3.6 0 0 0 0 7.2M23.752 28H38a2 2 0 0 1 2 2v12h2V30a4 4 0 0 0-4-4h-4.21q.007-.07.01-.141a2 2 0 0 0-1.94-2.06c-1.07-.031-1.746-.164-2.217-.348c-.432-.169-.77-.41-1.118-.816c-.38-.442-.772-1.08-1.268-2.066a82 82 0 0 1-1.16-2.45l-.584-1.264c-.508-1.091-1.292-2.08-2.405-2.656c-1.162-.6-2.463-.635-3.705-.174c-.57.212-.997.588-1.28.887a6.6 6.6 0 0 0-.818 1.092c-.48.786-.907 1.771-1.224 2.852c-.591 2.016-.866 4.622-.117 7.144H10a4 4 0 0 0-4 4v12h2V30a2 2 0 0 1 2-2h8.057l7.095 7.001l2.513 5.795a2 2 0 0 0 3.67-1.592l-2.667-6.15a2 2 0 0 0-.43-.628zm.096-2l.515-2.373c.343.585.71 1.13 1.127 1.614q.352.411.75.759zm-4.061 6.939l-3.3-3.166l-.365 1.454l-1.342 4.528l-1.98 3.19a2 2 0 0 0 3.4 2.11l2.12-3.42q.142-.228.219-.486z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWalkSupportedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWalkSupportedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkingIcon],svg[healthicons-walking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M31.25 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-5.557 20.397l5.193 5.124a2 2 0 0 1 .457.693l2.769 7.055a2 2 0 0 1-3.724 1.462l-2.614-6.661l-8.928-8.81a2 2 0 0 1-.583-1.649l.715-6.32c-1.724 1.714-3.054 4.123-4.073 7.316a2 2 0 1 1-3.81-1.216c1.87-5.86 4.975-10.246 10.185-12.257l.023-.009c1.327-.493 2.707-.453 3.937.182c1.181.611 2.022 1.666 2.573 2.848l.648 1.4c.488 1.058.898 1.95 1.293 2.732c.553 1.1.998 1.83 1.438 2.342c.408.474.813.766 1.33.968c.556.217 1.335.367 2.538.403a2 2 0 1 1-.12 3.998c-1.445-.043-2.728-.228-3.873-.675c-1.183-.462-2.116-1.165-2.91-2.09c-.5-.582-.94-1.247-1.35-1.97z"></svg:path><svg:path d="m18.263 30.22l3.315 3.18l-1.526 5.147a2 2 0 0 1-.684 1.006l-5.134 4.023a2 2 0 0 1-2.467-3.15l4.632-3.628l1.395-4.71z"></svg:path></svg:g>`,
})
export class HealthiconsWalkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkingNegativeIcon],svg[healthicons-walking-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWalkingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.693 28.397l5.193 5.124a2 2 0 0 1 .457.693l2.769 7.055a2 2 0 1 1-3.724 1.462l-2.614-6.661l-8.928-8.81a2 2 0 0 1-.583-1.649l.715-6.32c-1.724 1.714-3.054 4.123-4.073 7.316a2 2 0 0 1-3.81-1.216c1.87-5.86 4.975-10.246 10.185-12.257l.023-.009c1.327-.493 2.707-.453 3.937.182c1.181.611 2.022 1.666 2.573 2.848l.648 1.4c.488 1.058.898 1.95 1.293 2.732c.553 1.1.998 1.83 1.438 2.342c.408.474.813.766 1.33.968c.556.217 1.335.367 2.538.403a2 2 0 0 1-.12 3.998c-1.445-.043-2.728-.228-3.873-.675c-1.183-.462-2.116-1.165-2.91-2.09c-.5-.582-.94-1.247-1.35-1.97zm-7.43 1.823l3.315 3.18l-1.526 5.147a2 2 0 0 1-.684 1.006l-5.135 4.023a2 2 0 0 1-2.466-3.15l4.632-3.628l1.395-4.71zM31.25 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWalkingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWalkingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWarIcon],svg[healthicons-war-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.007 24c-1.104 0-2.022-.9-1.871-1.995C8.07 15.218 13.697 10 20.5 10c4.997 0 9.36 2.815 11.694 7H43a1 1 0 1 1 0 2h-9.886c.352.956.607 1.962.75 3.005c.15 1.095-.767 1.995-1.872 1.995z"></svg:path><svg:path fill-rule="evenodd" d="M4.166 29.949C3.478 28.006 5.013 26 7.187 26h33.626c2.174 0 3.709 2.006 3.021 3.949l-1.397 3.948C41.57 36.347 39.136 38 36.394 38H11.606c-2.742 0-5.176-1.653-6.043-4.103zM16 32a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m8 2.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M37 32a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWarNegativeIcon],svg[healthicons-war-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWarNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7.136 22.005C6.986 23.1 7.903 24 9.007 24h22.984c1.105 0 2.023-.9 1.873-1.995a14.3 14.3 0 0 0-.75-3.005H43a1 1 0 1 0 0-2H32.194c-2.334-4.185-6.697-7-11.694-7c-6.803 0-12.43 5.218-13.364 12.005M7.187 26c-2.174 0-3.709 2.006-3.021 3.949l1.397 3.948C6.43 36.347 8.864 38 11.606 38h24.788c2.742 0 5.176-1.653 6.043-4.103l1.397-3.948c.688-1.943-.847-3.949-3.021-3.949zm6.313 8.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m8 2.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWarningIcon],svg[healthicons-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 10a2 2 0 0 1 2 2v18a2 2 0 1 1-4 0V12a2 2 0 0 1 2-2m0 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWarningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWarningNegativeIcon],svg[healthicons-warning-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWarningNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 10a2 2 0 0 1 2 2v18a2 2 0 1 1-4 0V12a2 2 0 0 1 2-2m0 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWarningNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWarningNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWashHandsIcon],svg[healthicons-wash-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm14.915-.811s-2.278-.425-3.21 0c-.694.316-3.38 1.28-4.705 1.752v8.86c.767-.044 2.293-.125 2.945-.099c3.756.151 5.673 1.734 9.422 2.018c2.097.159 3.934.53 5.384 0c1.45-.531 9.732-4.566 10.767-5.628s.518-3.93-2.692-3.399s-7.454 3.08-9.214 2.974s-6.42-.956-6.42-.956l5.35.065s.756.04 1.794-.702c1.04-.742 1.968-2.867.415-2.867s-3.21-.532-3.21-.532zM26 20.429c0 2-1.54 3.571-3.5 3.571S19 22.429 19 20.429S22.5 14 22.5 14s3.5 4.571 3.5 6.429m15-4.297C41 18.836 38.778 21 36 21s-5-2.163-5-4.868C31 13.428 36 6 36 6s5 7.428 5 10.132"></svg:path>`,
})
export class HealthiconsWashHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWashHandsNegativeIcon],svg[healthicons-wash-hands-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWashHandsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm6 31a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm11.705-.811c.932-.425 3.21 0 3.21 0l6.626 1.486s1.657.531 3.21.531s.624 2.126-.415 2.868s-1.794.702-1.794.702l-5.35-.065s4.66.85 6.42.956c.891.054 2.42-.574 4.13-1.275c1.665-.684 3.5-1.437 5.084-1.699c3.21-.53 3.728 2.337 2.692 3.399c-1.035 1.062-9.318 5.097-10.767 5.628c-1.136.416-2.509.278-4.058.122c-.429-.043-.872-.088-1.326-.122c-1.81-.137-3.192-.577-4.56-1.012c-1.468-.466-2.919-.927-4.862-1.006c-.652-.026-2.178.055-2.945.1V31.94c1.326-.472 4.011-1.436 4.705-1.752M26 20.429c0 2-1.54 3.571-3.5 3.571S19 22.429 19 20.429S22.5 14 22.5 14s3.5 4.571 3.5 6.429M36 21c2.778 0 5-2.163 5-4.868C41 13.428 36 6 36 6s-5 7.428-5 10.132S33.222 21 36 21" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWashHandsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWashHandsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaterSanitationIcon],svg[healthicons-water-sanitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 6H24a2 2 0 0 0-2 2v4h20zM17.705 29.189c.932-.425 3.21 0 3.21 0l6.626 1.486s1.657.531 3.21.531s.624 2.126-.415 2.868s-1.794.702-1.794.702l-5.35-.065s4.66.85 6.42.956c.891.054 2.42-.574 4.13-1.275c1.665-.684 3.5-1.437 5.084-1.699c3.21-.53 3.728 2.337 2.692 3.399c-1.035 1.062-9.318 5.097-10.767 5.628c-1.136.416-2.509.278-4.058.122c-.429-.043-.872-.088-1.326-.122c-1.81-.137-3.192-.577-4.56-1.012c-1.468-.466-2.919-.927-4.862-1.006c-.652-.026-2.178.055-2.945.1V30.94c1.326-.472 4.011-1.436 4.705-1.752M7 29a1 1 0 0 0-1 1v10.996a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V30.001a1 1 0 0 0-1-1zm16-15a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm3 4.172a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m4.121.121a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 1 0 1.415-1.414zm-9.828 3a1 1 0 0 1 0-1.414l1.414-1.415a1 1 0 0 1 1.414 1.415l-1.414 1.414a1 1 0 0 1-1.414 0M27 24.172a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm5.207-2.379a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414m-15.414 1.336a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 1 0-1.414-1.415z"></svg:path>`,
})
export class HealthiconsWaterSanitationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaterSanitationNegativeIcon],svg[healthicons-water-sanitation-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWaterSanitationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm11.705-.811c.932-.425 3.21 0 3.21 0l6.626 1.486s1.657.531 3.21.531s.624 2.126-.415 2.868s-1.794.702-1.794.702l-5.35-.065s4.66.85 6.42.956c.891.054 2.42-.574 4.13-1.275c1.665-.684 3.5-1.437 5.084-1.699c3.21-.53 3.728 2.337 2.692 3.399c-1.035 1.062-9.318 5.097-10.767 5.628c-1.136.416-2.509.278-4.058.122c-.429-.043-.872-.088-1.326-.122c-1.81-.137-3.192-.577-4.56-1.012c-1.468-.466-2.919-.927-4.862-1.006c-.652-.026-2.178.055-2.945.1V30.94c1.326-.472 4.011-1.436 4.705-1.752M42 6H24a2 2 0 0 0-2 2v4h20zm-19 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm3 4.172a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m4.121.12a1 1 0 0 0-1.414 1.415l1.414 1.414a1 1 0 0 0 1.415-1.414zm-9.828 3a1 1 0 0 1 0-1.413l1.414-1.415a1 1 0 1 1 1.414 1.415l-1.414 1.414a1 1 0 0 1-1.414 0M27 24.173a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm5.207-2.38a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M16.793 23.13a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.415z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWaterSanitationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWaterSanitationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaterTreatmentIcon],svg[healthicons-water-treatment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 26.818C30 30.232 27.314 33 24 33s-6-2.768-6-6.182C18 21.41 24 15 24 15s6 6.41 6 11.818"></svg:path><svg:path fill-rule="evenodd" d="M24 31c2.153 0 4-1.816 4-4.182c0-2.08-1.206-4.613-2.67-6.838A31 31 0 0 0 24 18.12a31 31 0 0 0-1.33 1.86C21.207 22.206 20 24.737 20 26.819C20 29.184 21.847 31 24 31m-1.303-14.46C20.932 18.767 18 23.037 18 26.818C18 30.232 20.686 33 24 33s6-2.768 6-6.182c0-3.78-2.932-8.05-4.696-10.278C24.543 15.58 24 15 24 15s-.544.58-1.303 1.54" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.86 10.867A16 16 0 0 0 28.784 39.27l.598 1.908A18 18 0 0 1 13.718 9.225zm18.28 26.266A16 16 0 0 0 19.216 8.732l-.598-1.909a18 18 0 0 1 15.663 31.952z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 10H7V8h9v9h-2zm20 28h7v2h-9v-9h2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWaterTreatmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWaterTreatmentNegativeIcon],svg[healthicons-water-treatment-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWaterTreatmentNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 33c3.314 0 6-2.768 6-6.182C30 21.41 24 15 24 15s-6 6.41-6 11.818C18 30.232 20.686 33 24 33M7 10h5.686a18 18 0 0 0 16.695 31.177l-.598-1.909A16 16 0 0 1 14 11.51V17h2V8H7zm28.314 28H41v2h-9v-9h2v5.49A16 16 0 0 0 19.217 8.732l-.598-1.909A18 18 0 0 1 35.314 38" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWaterTreatmentNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWaterTreatmentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightIcon],svg[healthicons-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M40.21 38.222A4 4 0 0 1 36.216 42H11.784a4 4 0 0 1-3.994-3.778l-1.555-28A4 4 0 0 1 10.228 6h27.544a4 4 0 0 1 3.994 4.222zm-5.966-20.443c.82-.54 1.026-1.611.353-2.308a14.4 14.4 0 0 0-3.945-2.882a15.25 15.25 0 0 0-6.558-1.587a15.3 15.3 0 0 0-6.611 1.382a14.5 14.5 0 0 0-4.045 2.756c-.697.676-.53 1.752.271 2.318l4.312 3.046c.8.566 1.928.383 2.757-.145a6 6 0 0 1 .667-.362a5.8 5.8 0 0 1 2.344-.523l3.393-3.901a1 1 0 0 1 1.51 1.312L26.06 19.91a5.7 5.7 0 0 1 1.016.548c.81.553 1.93.77 2.75.23z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightNegativeIcon],svg[healthicons-weight-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWeightNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36.216 42a4 4 0 0 0 3.994-3.778l1.556-28A4 4 0 0 0 37.772 6H10.228a4 4 0 0 0-3.993 4.222l1.555 28A4 4 0 0 0 11.784 42zm-1.619-26.529c.673.697.467 1.767-.353 2.308l-4.417 2.91c-.82.54-1.94.322-2.75-.231a5.6 5.6 0 0 0-1.016-.548l2.63-3.025a1 1 0 0 0-1.509-1.312l-3.393 3.901a5.8 5.8 0 0 0-2.344.523a6 6 0 0 0-.667.362c-.83.528-1.957.71-2.757.145l-4.312-3.046c-.8-.566-.968-1.642-.271-2.318a14.5 14.5 0 0 1 4.045-2.756a15.3 15.3 0 0 1 6.61-1.382c2.29.036 4.537.58 6.56 1.587a14.4 14.4 0 0 1 3.944 2.882" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWeightNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWeightNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightsIcon],svg[healthicons-weights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.085 6.973a1 1 0 0 0-1.081-.912l-1.993.17a1 1 0 0 0-.912 1.08l.329 3.869a1 1 0 0 0 .146 1.725l.35 4.122a1 1 0 0 0 1.082.912l1.993-.17a1 1 0 0 0 .911-1.08l-.369-4.346q.764-.137 1.503-.26c.106 1.65.41 4.449.973 7.085c.359 1.68.851 3.434 1.535 4.814c.34.688.782 1.392 1.367 1.948c.518.492 1.217.927 2.081 1.041v4.332l-.325-.117l-.223-.08c-1.005-.36-2.027-.726-2.806-.923c-.379-.096-.952-.221-1.514-.171a2.4 2.4 0 0 0-1.314.516A2.22 2.22 0 0 0 11 32.263c0 .823.281 2.94.52 4.631a276 276 0 0 0 .46 3.129l.032.209l.009.055l.002.014v.005L14 40l-1.976.307a2 2 0 0 0 3.971-.165l.37-5.176c1.11.398 2.408.857 3.688 1.217c1.273.358 2.67.66 3.947.66s2.674-.302 3.948-.66c1.27-.357 2.555-.812 3.66-1.207l.398 5.177a2 2 0 0 0 3.97.154L34 40l1.977.306V40.3l.003-.014l.008-.055l.032-.21a283 283 0 0 0 .46-3.128c.24-1.691.52-3.808.52-4.63c0-.59-.23-1.258-.817-1.736a2.4 2.4 0 0 0-1.315-.516c-.562-.05-1.135.075-1.513.17c-.78.198-1.801.564-2.806.924l-.223.08l-.326.117v-4.327c1.89-.211 3.035-1.743 3.667-2.962c.731-1.412 1.209-3.197 1.533-4.886c.508-2.639.709-5.41.774-7.032q.73.12 1.485.254l-.369 4.339a1 1 0 0 0 .912 1.08l1.993.17a1 1 0 0 0 1.08-.912l.351-4.122a.998.998 0 0 0 .146-1.725l.33-3.869a1 1 0 0 0-.913-1.08l-1.992-.17a1 1 0 0 0-1.081.912l-.287 3.376a121 121 0 0 0-1.877-.315a2 2 0 0 0-3.161-.453c-6.077-.767-11.222-.766-17.192-.01a2 2 0 0 0-3.144.453q-.925.147-1.884.318zm6.843 11.36a48.5 48.5 0 0 1-.912-6.825c5.531-.673 10.346-.673 15.975.014c-.037 1.332-.208 4.194-.719 6.85c-.3 1.561-.69 2.901-1.157 3.802c-.318.613-.535.785-.608.826H18.644c-.116-.121-.296-.366-.508-.794c-.462-.933-.872-2.304-1.208-3.874M28.5 16.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWeightsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightsNegativeIcon],svg[healthicons-weights-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWeightsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9.004 6.06a1 1 0 0 1 1.08.913l.287 3.369q.96-.17 1.883-.319a2 2 0 0 1 3.144-.453c5.971-.755 11.116-.756 17.193.01a2 2 0 0 1 3.161.453q.92.149 1.877.316l.286-3.376a1 1 0 0 1 1.081-.912l1.993.17a1 1 0 0 1 .912 1.08l-.329 3.869a1 1 0 0 1-.146 1.725l-.35 4.122a1 1 0 0 1-1.082.912l-1.992-.17a1 1 0 0 1-.912-1.08l.368-4.34q-.753-.133-1.484-.253c-.066 1.621-.266 4.393-.774 7.032c-.325 1.689-.802 3.474-1.534 4.886c-.631 1.22-1.777 2.751-3.666 2.962v4.327l.326-.117l.223-.08c1.005-.36 2.026-.726 2.806-.923c.378-.096.951-.221 1.513-.171a2.4 2.4 0 0 1 1.314.516A2.22 2.22 0 0 1 37 32.263c0 .823-.281 2.94-.52 4.631a275 275 0 0 1-.46 3.129l-.032.209l-.009.055l-.002.014v.005L34 40l1.976.307a2 2 0 0 1-3.97-.154l-.398-5.177c-1.105.395-2.391.85-3.66 1.207c-1.274.358-2.671.66-3.948.66s-2.674-.302-3.947-.66c-1.28-.36-2.578-.82-3.688-1.217l-.37 5.176a2 2 0 0 1-3.971.165L14 40l-1.976.306l-.001-.005l-.002-.014l-.009-.055l-.032-.21a247 247 0 0 1-.46-3.128c-.239-1.691-.52-3.808-.52-4.63c0-.59.23-1.258.818-1.736a2.4 2.4 0 0 1 1.314-.516c.562-.05 1.135.075 1.514.17c.78.198 1.8.564 2.805.924l.223.08l.326.117V26.97c-.864-.114-1.564-.549-2.081-1.04c-.585-.557-1.026-1.261-1.367-1.95c-.684-1.379-1.177-3.133-1.536-4.813c-.563-2.636-.867-5.436-.972-7.084q-.74.123-1.503.259l.369 4.346a1 1 0 0 1-.912 1.08l-1.993.17a1 1 0 0 1-1.08-.912l-.35-4.122a.998.998 0 0 1-.147-1.725L6.099 7.31a1 1 0 0 1 .912-1.08zm7.012 5.448c.067 1.293.34 4.144.912 6.824c.335 1.57.745 2.94 1.208 3.874c.212.428.391.673.507.794h10.864c.072-.041.29-.213.608-.826c.466-.9.857-2.24 1.157-3.802c.511-2.656.681-5.518.72-6.85c-5.63-.687-10.445-.687-15.976-.014M24 21a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWeightsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWeightsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairIcon],svg[healthicons-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.5 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-5.87 22.873l1.364-.098Q26 32.138 26 32a6 6 0 0 0-8.482-5.464c.043 1.15.162 2.076.34 2.57c1.364 3.791 6.772 3.267 6.772 3.267"></svg:path><svg:path fill-rule="evenodd" d="M38.339 37.403c.9 2.074-2.202 3.624-3.433 1.764c-1.232-1.86-4.286-7.224-4.286-7.224l-.62.045V32c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-4.291 2.703-7.952 6.5-9.37v-5.88l-2.6-1.95l1.2-1.6l3.4 2.55v2.198c.252-.785.557-1.465.92-1.978c2.06-2.909 2.463-3.123 4.736-2.909s6.109 7.796 6.109 7.796s4.83 1.145 6.677 1.788c1.847.644.686 3.171-.498 3.124c-1.183-.048-7.671-.692-8.547-1.192c-.876-.501-2.344-2.91-2.344-2.91l-.144 1.92a10.1 10.1 0 0 1 2.844 2.765c1.803.157 3.851.322 4.45.322c1.137 0 1.397.787 1.397.787s3.339 7.868 4.239 9.942M25.397 26.095q-.081-.076-.166-.148A7.97 7.97 0 0 0 20 24a8 8 0 0 0-2.478.391a8 8 0 1 0 7.876 1.704" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWheelchairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairAltIcon],svg[healthicons-wheelchair-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 33a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M8 6h4.78l2.75 11H26a3 3 0 0 1 3 3v3h1a3 3 0 0 1 3 3v1.414l6.071 6.071l2.122-2.121l1.414 1.414l-3.536 3.536L33 30.243v5.928a3.001 3.001 0 1 1-2 0V29h-5.458A10 10 0 0 1 26 32c0 5.523-4.477 10-10 10S6 37.523 6 32c0-5.096 3.811-9.301 8.739-9.921L11.219 8H8zm19 17v-3a1 1 0 0 0-1-1h-9.97l.758 3.03a9.9 9.9 0 0 1 3.576.97zm-15 9a4 4 0 1 1 8 0a4 4 0 0 1-8 0m20 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWheelchairAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairAltNegativeIcon],svg[healthicons-wheelchair-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWheelchairAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm16 42c5.523 0 10-4.477 10-10a10 10 0 0 0-.832-4h5.59l.242.242v7.929a3.001 3.001 0 1 0 2 0v-5.929l5.364 5.365l.707.707l.707-.707l2.829-2.829l-1.414-1.414l-2.122 2.121L32 26.414V26a2 2 0 0 0-2-2h-1v-4a3 3 0 0 0-3-3H15.53L12.97 6.757L12.78 6H8v2h3.22l3.519 14.079C9.81 22.699 6 26.904 6 32c0 5.523 4.477 10 10 10m.03-23H26a1 1 0 0 1 1 1v4h-4.999a9.95 9.95 0 0 0-5.213-1.97zM16 37.556a5.556 5.556 0 1 0 0-11.112a5.556 5.556 0 0 0 0 11.112M31 39a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-14-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWheelchairAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWheelchairAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairNegativeIcon],svg[healthicons-wheelchair-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWheelchairNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm25.397 26.095a7.98 7.98 0 0 1 2.602 6.036A8 8 0 0 1 12 32a8 8 0 0 1 13.397-5.905M30 31.988l.62-.045s3.054 5.365 4.285 7.224c1.231 1.86 4.333.31 3.434-1.764c-.9-2.074-4.239-9.942-4.239-9.942s-.26-.787-1.397-.787c-.6 0-2.647-.165-4.45-.322a10.1 10.1 0 0 0-2.845-2.765l.145-1.92s1.468 2.409 2.344 2.91c.876.5 7.363 1.144 8.547 1.191s2.344-2.479.497-3.123c-1.846-.643-6.677-1.788-6.677-1.788s-3.835-7.581-6.108-7.796s-2.676 0-4.736 2.909c-.363.512-.668 1.193-.92 1.977V15.75l-3.4-2.55l-1.2 1.6l2.6 1.95v5.88A10 10 0 0 0 10 32c0 5.523 4.477 10 10 10s10-4.477 10-10zm-5.37.385l1.364-.098Q26 32.138 26 32a6 6 0 0 0-8.482-5.464c.043 1.15.162 2.076.34 2.57c1.363 3.791 6.771 3.267 6.771 3.267M30.5 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWheelchairNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWheelchairNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWoldCareNegativeIcon],svg[healthicons-wold-care-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm37.894 32.621c-.568.602-1.131 1.2-1.66 1.96V36H28.8v-1.419c.133-1.104.367-3.093.388-3.646c.028-.778 1.073-2.196 1.073-2.196l3.204-4.04s.907-.958 1.426-2.02c.52-1.063 1.624.274 1.771 1.23c.147.956-.133 1.46-.133 1.46l-1.83 3.638s2.122-2.907 2.781-4.075c.334-.592.428-1.846.532-3.247c.102-1.365.214-2.87.569-4.04c.719-2.37 2.8-1.777 3.162-.717c.36 1.059.279 8.058.148 9.225c-.103.914-.653 1.808-1.275 2.816c-.172.28-.35.568-.524.867c-.697 1.192-1.451 1.993-2.198 2.785M26 41a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1zm-15.891-8.379c.567.602 1.13 1.2 1.66 1.96V36h7.433v-1.419c-.133-1.104-.367-3.093-.388-3.646c-.028-.778-1.072-2.196-1.072-2.196l-3.205-4.04s-.907-.958-1.426-2.02c-.52-1.063-1.624.274-1.77 1.23c-.148.956.132 1.46.132 1.46l1.83 3.638s-2.122-2.907-2.781-4.075c-.334-.592-.427-1.846-.532-3.247c-.101-1.365-.213-2.87-.568-4.04c-.72-2.37-2.802-1.777-3.163-.717c-.36 1.059-.279 8.058-.148 9.225c.103.914.654 1.808 1.275 2.816c.172.28.35.568.525.867c.696 1.192 1.45 1.993 2.198 2.785M22.002 41a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm9.968-24h-2a15.664 15.664 0 0 1-.374 2.615h1.574a7.946 7.946 0 0 0 .8-2.615m-2.24 4.615h-.765c-.147.363-.31.708-.484 1.035c.451-.303.87-.65 1.249-1.035m-2.964 0c-.077.149-.157.29-.238.427c-.5.831-1.017 1.345-1.496 1.636v-2.063zm.767-2h-2.501V17h2.934a13.364 13.364 0 0 1-.433 2.615m-4.501 0V17h-2.998c.063.939.215 1.818.433 2.615zm0 2h-1.798c.077.149.157.29.238.427c.521.869 1.064 1.39 1.56 1.674zm-4.628-2A15.664 15.664 0 0 1 18.03 17h-1.936c.116.93.392 1.812.8 2.615zm-.07 2h.7c.138.338.288.66.449.966a8.042 8.042 0 0 1-1.149-.966M27.966 15h-2.934v-2.615h2.501c.218.797.37 1.676.433 2.615m-4.934 0v-2.615h-2.565c-.218.797-.37 1.676-.433 2.615zm-1.798-4.615h1.798v-2.1c-.496.283-1.038.804-1.56 1.673a7.927 7.927 0 0 0-.238.427m3.798-2.063v2.063h1.734a7.927 7.927 0 0 0-.238-.427c-.5-.832-1.017-1.345-1.496-1.636m6.138 4.063h-1.574c.192.824.32 1.701.374 2.615h2a7.946 7.946 0 0 0-.8-2.615M28.481 9.35c.175.327.337.672.484 1.035h.765a8.044 8.044 0 0 0-1.249-1.035m-8.998.069c-.161.306-.31.628-.448.966h-.701c.351-.357.736-.68 1.149-.966M16.093 15c.117-.93.393-1.812.8-2.615h1.511c-.192.824-.32 1.701-.374 2.615zm7.939 11c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10h.06z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWoldCareNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWomanIcon],svg[healthicons-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M18.5 21c0 2.53-2.336 11.045-3.191 14.078a.997.997 0 0 0 .81 1.258c5.986.9 9.78.871 15.767-.005a.996.996 0 0 0 .816-1.25c-.845-3.091-3.2-11.893-3.202-14.078v-1.508c.398.5.769 1.245.997 2.05l.022.077c.139.492.191.676.24.862c.03.111.058.223.104.403c.129.505.393 1.546 1.203 4.622a2 2 0 1 0 3.868-1.018c-.77-2.926-1.044-4-1.184-4.551a41 41 0 0 0-.405-1.485c-.344-1.217-.931-2.469-1.724-3.462C31.873 16.056 30.648 15 29 15H19c-1.648 0-2.873 1.056-3.621 1.993c-.793.993-1.38 2.245-1.724 3.462c-.256.903-.26.92-.405 1.485c-.14.551-.414 1.625-1.184 4.551a2 2 0 1 0 3.868 1.018c.81-3.076 1.074-4.117 1.203-4.622c.046-.18.074-.292.104-.403c.049-.186.101-.37.24-.861l.022-.078c.228-.805.6-1.55.997-2.05zm0 21.388V38.57c1.41.21 2.714.341 3.988.398l-1.04 3.814a1.5 1.5 0 0 1-2.948-.394m8.053.394l-1.042-3.82a41 41 0 0 0 3.989-.405v3.83a1.5 1.5 0 0 1-2.947.395" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWomanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWomanNegativeIcon],svg[healthicons-woman-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWomanNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-8.691 22.078C16.164 32.045 18.5 23.53 18.5 21v-1.663q-.1.103-.191.233c-.282.399-.532 1.01-.806 1.975l-.022.077c-.139.492-.191.676-.24.862c-.03.111-.058.223-.104.403c-.129.505-.393 1.546-1.203 4.622a2 2 0 0 1-3.868-1.018c.77-2.926 1.044-4 1.184-4.55v-.001c.145-.566.149-.582.405-1.485c.588-2.078 1.573-4.63 4.591-5.394c.2-.05.391-.065.448-.07h.006a9 9 0 0 1 .293-.016c.196-.007.44-.011.702-.014c.528-.004 1.188 0 1.827.005a282 282 0 0 1 2.301.03l.158.003h.039l.157-.003a366 366 0 0 1 2.301-.03c.639-.006 1.3-.009 1.827-.005c.262.003.506.007.702.014c.098.004.199.009.293.016h.006c.057.005.248.02.448.07c3.018.764 4.003 3.316 4.591 5.394c.256.903.26.92.405 1.485c.14.552.414 1.625 1.184 4.551a2 2 0 0 1-3.868 1.018c-.81-3.076-1.074-4.117-1.203-4.622c-.046-.18-.074-.292-.104-.403c-.049-.186-.101-.37-.24-.861l-.022-.078c-.274-.966-.524-1.576-.806-1.976a2 2 0 0 0-.191-.232v1.666c.003 2.185 2.357 10.987 3.202 14.078a.996.996 0 0 1-.816 1.25c-5.987.876-9.78.906-15.768.005a.997.997 0 0 1-.809-1.258M18.5 38.57v3.818a1.5 1.5 0 0 0 2.947.394l1.04-3.814a39 39 0 0 1-3.987-.398m7.01.392l1.043 3.82a1.5 1.5 0 0 0 2.947-.394v-3.831c-1.41.207-2.715.343-3.99.405" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWomanNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWomanNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWoozyIcon],svg[healthicons-woozy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.5 26c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4m-15.757-3.65c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.666c.504-.763.712-1.692.48-2.381a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39"></svg:path><svg:path fill-rule="evenodd" d="m16.592 31.381l.002-.001l.028-.017q.039-.024.123-.07a7 7 0 0 1 2.209-.76c1.327-.21 2.92-.015 4.28 1.609c1.924 2.3 4.302 2.588 6.125 2.3a9 9 0 0 0 3.04-1.085l.026-.016l.027-.016l.016-.01l.006-.004l.002-.001l.002-.001a1 1 0 0 0-.416-1.837l-7.564-.919c-1.874-2.02-4.118-2.27-5.857-1.995a9 9 0 0 0-3.04 1.085l-.008.005l-.045.027l-.016.01l-.006.004l-.002.001l-.002.001a1 1 0 0 0 1.07 1.69m15.35 1.084l.536.844z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWoozyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWoozyNegativeIcon],svg[healthicons-woozy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsWoozyNegative0)" clip-rule="evenodd"><svg:path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16m-7-2c0 2.21-1.12 4-2.5 4S28 24.21 28 22s1.12-4 2.5-4s2.5 1.79 2.5 4m-16.406 9.38l-.002.001a1 1 0 0 1-1.07-1.69l.536.844l-.536-.844l.004-.002l.006-.004l.016-.01a4 4 0 0 1 .236-.136a9 9 0 0 1 2.857-.98c1.74-.276 3.983-.027 5.857 1.994l7.564.919a1 1 0 0 1 .416 1.837l-.536-.844l.536.844h-.002l-.002.002l-.006.004l-.016.01a4 4 0 0 1-.236.136a9 9 0 0 1-2.857.98c-1.823.29-4.2.002-6.126-2.3c-1.359-1.623-2.952-1.817-4.279-1.607a7 7 0 0 0-2.358.845zm-1.851-9.03c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.666c.504-.763.712-1.693.48-2.381a.5.5 0 0 0-.818-.204c-1.796 1.705-3.824 2.124-5.642 1.449a.5.5 0 0 0-.668.389"></svg:path><svg:path d="M0 0h48v48H0zm42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWoozyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWoozyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWorldCareIcon],svg[healthicons-world-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M23.992 26h.04c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10zm7.978-9h-2q-.062 1.037-.245 2h1.726c.255-.63.432-1.301.52-2m-1.693 4h-1.08c-.205.59-.445 1.143-.716 1.65A8 8 0 0 0 30.277 21m-2.592-2c.137-.627.234-1.297.281-2h-2.934v2zm-2.653 2h2.023a8.5 8.5 0 0 1-.527 1.042c-.5.831-1.017 1.345-1.496 1.636zm-2-2v-2h-2.998c.047.703.144 1.373.281 2zm-2.087 2h2.087v2.716c-.496-.284-1.038-.805-1.56-1.674A8.5 8.5 0 0 1 20.945 21m-2.67-2q-.183-.963-.245-2h-1.936c.087.699.264 1.37.52 2zm-.488 2h1.016c.195.564.424 1.094.68 1.581A8 8 0 0 1 17.787 21m12.183-6a16 16 0 0 0-.245-2h1.726c.255.63.432 1.301.52 2zm.307-4h-1.08a11.5 11.5 0 0 0-.716-1.65A8 8 0 0 1 30.277 11m-5.245 0h2.023a8.5 8.5 0 0 0-.527-1.042c-.5-.832-1.017-1.345-1.496-1.636zm2.653 2h-2.653v2h2.934a14 14 0 0 0-.281-2m-4.653-4.716V11h-2.087q.242-.567.527-1.042c.521-.869 1.064-1.39 1.56-1.674m0 4.716h-2.717a14 14 0 0 0-.281 2h2.998zm-3.55-3.581a11.6 11.6 0 0 0-.68 1.581h-1.015a8 8 0 0 1 1.696-1.581M18.276 13h-1.662a8 8 0 0 0-.52 2h1.937q.062-1.037.245-2" clip-rule="evenodd"></svg:path><svg:path d="M10.109 32.621c.567.602 1.13 1.2 1.66 1.96V36h7.433v-1.419c-.133-1.104-.367-3.093-.388-3.646c-.028-.778-1.072-2.196-1.072-2.196l-3.205-4.04s-.907-.958-1.426-2.02c-.52-1.063-1.624.274-1.77 1.23c-.148.956.132 1.46.132 1.46l1.83 3.638s-2.122-2.907-2.781-4.075c-.334-.592-.427-1.846-.532-3.247c-.101-1.365-.213-2.87-.568-4.04c-.72-2.37-2.802-1.777-3.163-.717c-.36 1.059-.279 8.058-.148 9.225c.103.914.654 1.808 1.275 2.816c.172.28.35.568.525.867c.696 1.192 1.45 1.993 2.198 2.785m26.124 1.96c.53-.76 1.093-1.358 1.66-1.96c.748-.792 1.502-1.593 2.199-2.785c.174-.3.352-.587.524-.866c.621-1.008 1.172-1.903 1.275-2.817c.131-1.167.213-8.166-.148-9.225c-.361-1.06-2.443-1.653-3.163.718c-.354 1.17-.466 2.674-.568 4.039c-.105 1.401-.198 2.655-.532 3.247c-.659 1.169-2.782 4.075-2.782 4.075l1.831-3.638s.28-.504.133-1.46s-1.251-2.293-1.77-1.23c-.52 1.062-1.427 2.02-1.427 2.02l-3.205 4.04s-1.044 1.418-1.072 2.196c-.02.553-.255 2.542-.388 3.646V36h7.433zM26 41a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1zm-3.998 0a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></svg:path></svg:g>`,
})
export class HealthiconsWorldCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsWorldCareNegativeIcon],svg[healthicons-world-care-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWorldCareNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm37.894 32.621c-.568.602-1.131 1.2-1.66 1.96V36H28.8v-1.419c.133-1.104.367-3.093.388-3.646c.028-.778 1.073-2.196 1.073-2.196l3.204-4.04s.907-.958 1.426-2.02c.52-1.063 1.624.274 1.771 1.23s-.133 1.46-.133 1.46l-1.83 3.638s2.122-2.907 2.781-4.075c.334-.592.428-1.846.532-3.247c.102-1.365.214-2.87.569-4.04c.719-2.37 2.8-1.777 3.162-.717c.36 1.059.279 8.058.148 9.225c-.103.914-.653 1.808-1.275 2.816c-.172.28-.35.568-.524.867c-.697 1.192-1.451 1.993-2.198 2.785M26 41a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1zm-15.891-8.379c.567.602 1.13 1.2 1.66 1.96V36h7.433v-1.419c-.133-1.104-.367-3.093-.388-3.646c-.028-.778-1.072-2.196-1.072-2.196l-3.205-4.04s-.907-.958-1.426-2.02c-.52-1.063-1.624.274-1.77 1.23c-.148.956.132 1.46.132 1.46l1.83 3.638s-2.122-2.907-2.781-4.075c-.334-.592-.427-1.846-.532-3.247c-.101-1.365-.213-2.87-.568-4.04c-.72-2.37-2.802-1.777-3.163-.717c-.36 1.059-.279 8.058-.148 9.225c.103.914.654 1.808 1.275 2.816c.172.28.35.568.525.867c.696 1.192 1.45 1.993 2.198 2.785M22.002 41a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm9.968-24h-2a15.7 15.7 0 0 1-.374 2.615h1.574a8 8 0 0 0 .8-2.615m-2.24 4.615h-.765q-.222.544-.484 1.035c.451-.303.87-.65 1.249-1.035m-2.964 0q-.116.223-.238.427c-.5.831-1.017 1.345-1.496 1.636v-2.063zm.767-2h-2.501V17h2.934a13.4 13.4 0 0 1-.433 2.615m-4.501 0V17h-2.998c.063.939.215 1.818.433 2.615zm0 2h-1.798q.116.223.238.427c.521.869 1.064 1.39 1.56 1.674zm-4.628-2A15.7 15.7 0 0 1 18.03 17h-1.936c.116.93.392 1.812.8 2.615zm-.07 2h.7q.207.507.449.966a8 8 0 0 1-1.149-.966M27.966 15h-2.934v-2.615h2.501c.218.797.37 1.676.433 2.615m-4.934 0v-2.615h-2.565c-.218.797-.37 1.676-.433 2.615zm-1.798-4.615h1.798v-2.1c-.496.283-1.038.804-1.56 1.673a8 8 0 0 0-.238.427m3.798-2.063v2.063h1.734a8 8 0 0 0-.238-.427c-.5-.832-1.017-1.345-1.496-1.636m6.138 4.063h-1.574c.192.824.32 1.701.374 2.615h2a8 8 0 0 0-.8-2.615M28.481 9.35q.263.49.484 1.035h.765a8 8 0 0 0-1.249-1.035m-8.998.069q-.241.459-.448.966h-.701q.528-.536 1.149-.966M16.093 15c.117-.93.393-1.812.8-2.615h1.511c-.192.824-.32 1.701-.374 2.615zm7.939 11c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWorldCareNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWorldCareNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsXIcon],svg[healthicons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35.28 10.464a2 2 0 0 1 .256 2.816L26.603 24l8.933 10.72a2 2 0 1 1-3.072 2.56L24 27.124L15.537 37.28a2 2 0 1 1-3.073-2.56L21.397 24l-8.933-10.72a2 2 0 1 1 3.073-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsXNegativeIcon],svg[healthicons-x-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsXNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876L15.537 10.72a2 2 0 1 0-3.073 2.56L21.397 24l-8.933 10.72a2 2 0 1 0 3.073 2.56L24 27.124l8.464 10.156a2 2 0 1 0 3.072-2.56L26.603 24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsXNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsXNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsXrayIcon],svg[healthicons-xray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M30 34h-4.735l.743 8.181A2 2 0 0 0 30 42zm-7.265 0H18v8a2 2 0 0 0 3.992.181zm13.22-20h.091zm-24.001 0h.09zM11 15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1zm12 2v1.5h-.5c-.93 0-1.94.3-2.654.56a14 14 0 0 0-1.262.53l-.021.01l-.007.004h-.002v.001L19 20.5l.447.895l.002-.001l.012-.006l.057-.028q.077-.038.224-.102c.195-.087.47-.203.787-.318c.662-.24 1.402-.44 1.971-.44h.5v2h-.8c-1.197 0-2.453.636-3.293 1.145a15 15 0 0 0-1.51 1.057l-.026.02l-.007.006l-.003.002v.001L18 25.5l.64.768l.003-.002l.015-.012l.069-.056a13 13 0 0 1 1.216-.843c.81-.49 1.654-.855 2.257-.855h.8v2.168a6.3 6.3 0 0 0-1.92.934c-.4.286-.771.626-1.052.999c-.269.356-.528.841-.528 1.399h2v.02v-.003a.8.8 0 0 1 .125-.213c.13-.173.34-.377.62-.577c.56-.402 1.243-.68 1.787-.727c.462.012 1.116.265 1.692.684c.283.205.502.42.64.604a.9.9 0 0 1 .135.23v.002l.002.002L26.5 30h2c0-.562-.268-1.055-.536-1.413a5 5 0 0 0-1.063-1.02A5.9 5.9 0 0 0 25 26.638V24.5h1.1c.749 0 1.519.366 2.163.819a7 7 0 0 1 .986.841l.008.01l.743-.67l.743-.67l-.002-.001l-.002-.003l-.007-.008l-.022-.023l-.075-.079a9 9 0 0 0-1.223-1.035c-.78-.547-1.96-1.181-3.312-1.181H25v-2h.75c.694 0 1.37.201 1.893.422a6 6 0 0 1 .8.408l.003.002L29 20.5l.554-.832l-.001-.001l-.003-.002l-.007-.005l-.02-.013l-.067-.042a8 8 0 0 0-1.037-.527c-.663-.28-1.613-.578-2.669-.578H25V17z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsXrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsXrayNegativeIcon],svg[healthicons-xray-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsXrayNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M30 34h-4.735l.743 8.181A2 2 0 0 0 30 42zm-7.264 0H18v8a2 2 0 0 0 3.992.181zm13.22-20h.09zm-24.002 0h.09zM10 16a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm13 2.5V17h2v1.5h.75c1.056 0 2.006.299 2.67.578a8 8 0 0 1 1.036.527l.067.042l.02.013l.007.005l.003.002h.001L29 20.5l-.554.832l-.003-.002l-.035-.021l-.157-.092a6 6 0 0 0-.608-.295c-.524-.22-1.199-.422-1.893-.422H25v2h1.1c1.351 0 2.531.634 3.312 1.181a9 9 0 0 1 1.298 1.114l.022.023l.007.008l.002.003l.002.001l-.743.67l-.743.67l-.008-.01l-.046-.048a7 7 0 0 0-.94-.794c-.644-.452-1.414-.818-2.163-.818H25v2.14a5.9 5.9 0 0 1 1.9.926c.405.295.78.643 1.064 1.021c.268.358.536.85.536 1.413h-2v.022v-.002l-.001-.003c-.007-.018-.034-.095-.135-.23a3 3 0 0 0-.64-.603c-.576-.42-1.23-.672-1.692-.684c-.544.046-1.227.325-1.787.727c-.28.2-.49.404-.62.577a.8.8 0 0 0-.124.213l-.002.003v-.009L21.5 30h-2c0-.558.26-1.043.528-1.4a4.9 4.9 0 0 1 1.051-.998A6.3 6.3 0 0 1 23 26.668V24.5h-.8c-.603 0-1.447.364-2.257.855a13 13 0 0 0-1.285.898l-.015.013l-.003.002L18 25.5l-.64-.768l.001-.002l.003-.002l.007-.006l.026-.02q.03-.027.09-.072a15 15 0 0 1 1.42-.985c.84-.51 2.096-1.145 3.293-1.145h.8v-2h-.5c-.57 0-1.31.2-1.97.44a12 12 0 0 0-1.069.447l-.012.007h-.002a466 466 0 0 0-.894-1.789h.001l.002-.001l.007-.003l.021-.011a9 9 0 0 1 .346-.16c.227-.1.546-.235.916-.37c.713-.26 1.723-.56 2.654-.56z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsXrayNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsXrayNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYIcon],svg[healthicons-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35.28 10.464a2 2 0 0 1 .256 2.816L26 24.724V36a2 2 0 0 1-4 0V24.724L12.464 13.28a2 2 0 1 1 3.073-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsYIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYNegativeIcon],svg[healthicons-y-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsYNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876L15.537 10.72a2 2 0 1 0-3.073 2.56L22 24.724V36a2 2 0 0 0 4 0V24.724z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsYNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsYNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYenIcon],svg[healthicons-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35.28 10.464a2 2 0 0 1 .256 2.816L28.27 22H30a2 2 0 1 1 0 4h-4v2h4a2 2 0 1 1 0 4h-4v4a2 2 0 0 1-4 0v-4h-4a2 2 0 0 1 0-4h4v-2h-4a2 2 0 0 1 0-4h1.73l-7.266-8.72a2 2 0 1 1 3.073-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsYenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYenNegativeIcon],svg[healthicons-yen-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsYenNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876L15.537 10.72a2 2 0 1 0-3.073 2.56L19.73 22H18a2 2 0 0 0 0 4h4v2h-4a2 2 0 0 0 0 4h4v4a2 2 0 0 0 4 0v-4h4a2 2 0 0 0 0-4h-4v-2h4a2 2 0 0 0 0-4h-1.73z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsYenNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsYenNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYesIcon],svg[healthicons-yes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m10.742-26.33a1 1 0 1 0-1.483-1.34L21.28 29.567l-6.59-6.291a1 1 0 0 0-1.382 1.446l7.334 7l.743.71l.689-.762z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsYesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYesNegativeIcon],svg[healthicons-yes-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsYesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-4 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9.33-7.741a1 1 0 0 1 .072 1.412l-12.667 14l-.69.761l-.742-.709l-7.334-7a1 1 0 0 1 1.382-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.412-.07" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsYesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsYesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYoungPeopleIcon],svg[healthicons-young-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M33 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5.307 13.27c.58 1.89 1.308 3.873 1.762 5.07a1 1 0 0 1-.745 1.34c-4.538.835-7.663.813-12.594-.013a1.01 1.01 0 0 1-.761-1.37c.471-1.19 1.208-3.133 1.78-5.02c-1.816-.18-3.249-2.294-3.249-4.876c0-2.7 1.567-4.89 3.5-4.89h.013A1.328 1.328 0 0 1 29.329 18h7.343a1.328 1.328 0 0 1 1.315 1.513H38c1.933 0 3.5 2.189 3.5 4.889c0 2.555-1.404 4.653-3.193 4.87m-8.345-5.761c.405-.902.538-2.26.538-4.009h2c0 1.75-.117 3.498-.712 4.827c-.31.689-.763 1.304-1.425 1.74c-.664.438-1.459.643-2.363.643v-2c.596 0 .988-.132 1.262-.313c.276-.181.51-.462.7-.888M35.5 19.5c0 1.75.133 3.107.538 4.009c.19.426.424.707.7.888c.274.18.666.314 1.262.314v2c-.904 0-1.7-.207-2.363-.644c-.662-.436-1.115-1.051-1.425-1.74c-.595-1.33-.712-3.076-.712-4.827zm-7 17.652V38.5a1.5 1.5 0 0 0 2.948.39l.395-1.464a36 36 0 0 1-3.343-.275m6.641.218l.41 1.52a1.5 1.5 0 0 0 2.949-.39V37a42 42 0 0 1-3.359.37M14.445 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m3.68 23.996A2 2 0 0 0 20 38v-8.701c1.974-.3 3.501-2.358 3.501-4.852c0-2.57-1.62-4.676-3.681-4.874A1 1 0 0 0 19 18h-8a1 1 0 0 0-.82 1.573c-2.06.2-3.68 2.305-3.68 4.874c0 2.493 1.527 4.55 3.5 4.851V38a2 2 0 0 0 3.983.256L14.792 32h.444l.78 6.248a2 2 0 0 0 2.11 1.748M11.527 23.67c.413-.852.578-2.201.578-4.112h2c0 1.92-.147 3.682-.777 4.984c-.329.678-.8 1.259-1.466 1.661c-.661.4-1.438.578-2.307.578v-2c.595 0 .993-.12 1.272-.29c.275-.165.508-.422.7-.821m6.146-4.112c0 1.91.165 3.26.578 4.112c.193.399.426.656.7.822c.28.168.677.29 1.272.29v2c-.868 0-1.646-.18-2.307-.579c-.665-.402-1.137-.983-1.465-1.661c-.63-1.302-.778-3.065-.778-4.984z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsYoungPeopleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsYoungPeopleNegativeIcon],svg[healthicons-young-people-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsYoungPeopleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM37 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3.07 22.34c-.455-1.197-1.184-3.18-1.763-5.07c1.79-.216 3.193-2.314 3.193-4.87c0-2.7-1.567-4.888-3.5-4.888h-.013q.013-.09.013-.184c0-.733-.595-1.328-1.328-1.328h-7.344a1.328 1.328 0 0 0-1.315 1.512H28c-1.933 0-3.5 2.189-3.5 4.889c0 2.582 1.433 4.697 3.249 4.876c-.572 1.887-1.309 3.83-1.78 5.02a1.01 1.01 0 0 0 .761 1.37c4.93.826 8.056.848 12.594.013a1 1 0 0 0 .745-1.34M30.5 19.5c0 1.75-.133 3.107-.538 4.009c-.19.426-.424.707-.7.888c-.274.18-.666.314-1.262.314v2c.904 0 1.7-.206 2.363-.644c.662-.436 1.116-1.051 1.425-1.74c.595-1.33.712-3.076.712-4.827zm5.538 4.009c-.405-.902-.538-2.26-.538-4.009h-2c0 1.75.117 3.498.712 4.827c.31.689.763 1.304 1.425 1.74c.664.437 1.459.643 2.363.643v-2c-.596 0-.988-.132-1.262-.313c-.276-.181-.51-.462-.7-.888M28.5 37.15v1.35a1.5 1.5 0 0 0 2.948.39l.395-1.464a36 36 0 0 1-3.343-.275m6.641.218l.41 1.522A1.5 1.5 0 0 0 38.5 38.5V37a42 42 0 0 1-3.359.37M18.445 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0M20 38a2 2 0 0 1-3.985.248L15.235 32h-.444l-.808 6.256A2 2 0 0 1 10 38v-8.702c-1.973-.3-3.5-2.358-3.5-4.851c0-2.569 1.62-4.675 3.68-4.874A1 1 0 0 1 11 18h8a1 1 0 0 1 .82 1.573c2.06.198 3.681 2.305 3.681 4.874c0 2.494-1.527 4.551-3.501 4.852zm-7.894-18.443c0 1.91-.165 3.26-.578 4.112c-.193.399-.425.656-.7.822c-.279.168-.677.29-1.272.29v2c.869 0 1.646-.18 2.307-.579c.665-.402 1.137-.983 1.466-1.661c.63-1.302.777-3.065.777-4.984zm6.146 4.112c-.413-.852-.578-2.201-.578-4.112h-2c0 1.92.147 3.682.778 4.984c.328.678.8 1.259 1.465 1.661c.661.4 1.439.578 2.307.578v-2c-.595 0-.993-.12-1.272-.29c-.274-.165-.507-.422-.7-.821" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsYoungPeopleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsYoungPeopleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsZIcon],svg[healthicons-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M29.73 14H14a2 2 0 0 1 0-4h20a2 2 0 0 1 1.536 3.28L18.27 34H34a2 2 0 1 1 0 4H14a2 2 0 0 1-1.536-3.28z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsZIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsZNegativeIcon],svg[healthicons-z-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsZNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM14 14h15.73L12.464 34.72A2 2 0 0 0 14 38h20a2 2 0 1 0 0-4H18.27l17.266-20.72A2 2 0 0 0 34 10H14a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsZNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsZNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthicons2gNegativeIcon],svg[healthicons-2g-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthicons2gNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0v48h48V0zm35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077m-6.844.35a6 6 0 0 1 0 8.485l1.414 1.414a8 8 0 0 0 0-11.314zm-8.486 0a6 6 0 0 0 0 8.485l-1.414 1.414a8 8 0 0 1 0-11.314zm-6.844-.35a12 12 0 0 1 2.602-3.893L14.1 4.1a14 14 0 0 0 0 19.799l1.415-1.415a12 12 0 0 1-2.602-13.077M26 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0M13 26a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V29a3 3 0 0 0-3-3zm7 6.25c0-.69-.56-1.25-1.25-1.25h-1.5a1.25 1.25 0 0 0-1.18.833a1 1 0 1 1-1.885-.666A3.25 3.25 0 0 1 17.25 29h1.5a3.25 3.25 0 0 1 2.182 5.658L17.474 38H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.695-1.72l5.25-5.072l.028-.026c.257-.23.417-.562.417-.932m12.674-1.888a1 1 0 1 1-1.333 1.49a3.503 3.503 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 1 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745a5.503 5.503 0 1 1 0-8.204" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons2gNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons2gNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
